<style lang="scss">
#user-spider-setting {
  .rule-item {
    position: relative;
    border: 1px solid $color-gray-line;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 15px;

    .opt-item {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 10px;
      flex-wrap: wrap;

      &.type {
        margin-bottom: 10px;
      }
    }

    .close-btn {
      position: absolute;
      right: 15px;
      top: 5px;
    }

    .el-input,
    .el-select {
      width: auto;
    }

    .label {
      font-weight: bold;
      flex-shrink: 0;
    }

    .el-tag {
      margin-right: 10px;
      margin-bottom: 5px;
      margin-top: 5px;
    }
  }

  .submit-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

<template>
  <div v-if="isAuth" id="user-spider-setting">
    <template v-if="user.providers.bind_bilibili">
      <ElAlert title="什么是频道id？" type="success">
        <span>比如：</span>
        <a target="_blank" href="https://space.bilibili.com/279662469/channel/detail?cid=118679">https://space.bilibili.com/279662469/channel/detail?cid=118679</a>
        <span>这个链接中，频道部分就是cid=118679，那么频道的 id 就是</span>
        <span><b>118679</b></span>
      </ElAlert>
      <br>
      <ElAlert title="请勿频繁的修改规则" type="warning">
        如果你删除规则，calibur 也会删除对应的内容，但这个过程需要几分钟至几小时的同步时间
      </ElAlert>
      <br>
      <ElAlert title="你只能填写自己的频道id，填写他人的是无效的" type="error" />
      <br>
      <div v-for="(item, index) in rule" :key="item.key" class="rule-item">
        <ElButton class="close-btn" type="text" icon="el-icon-close" @click="deleteRuleItem(index)" />
        <p class="opt-item type">
          <span class="label">类型：</span>
          <span class="value" v-text="convertSourceType(item.type)" />
        </p>
        <p class="opt-item channel">
          <span class="label">分区：</span>
          <span class="value">
            <ElSelect v-model="item.source_type" placeholder="请选择分区">
              <ElOption
                v-for="opt in channel"
                :key="opt.id"
                :label="opt.name"
                :value="opt.id"
              />
            </ElSelect>
          </span>
        </p>
        <p class="opt-item source">
          <span class="label">资源：</span>
          <ElTag
            v-for="(cnn, idx) in item.channel_id"
            :key="cnn"
            type="success"
            closable
            @close="handleClose(item, idx)"
          >
            <a target="_blank" :href="convertSourceUrl(cnn)" v-text="cnn" />
          </ElTag>
          <ElInput
            v-model="item.new"
            placeholder="输入频道id后回车"
            size="small"
            @keyup.enter.native="handleInputConfirm(item)"
          />
        </p>
      </div>
      <div class="submit-row">
        <ElButton icon="el-icon-plus" circle @click="appendRule" />
        <ElButton :loading="submitting" plain type="success" @click="saveRule">
          确认保存
        </ElButton>
      </div>
    </template>
    <ElAlert v-else title="请先在「认证设置」页面绑定你的B站账号" type="success" />
  </div>
</template>

<script>
import { Alert, Select, Option, Tag } from 'element-ui'
import config from '~/config/channel'

export default {
  name: 'UserSpiderSetting',
  components: {
    ElAlert: Alert,
    ElSelect: Select,
    ElOption: Option,
    ElTag: Tag
  },
  data() {
    return {
      submitting: false,
      rule: [],
      user_bilibili_mid: 0
    }
  },
  computed: {
    isAuth() {
      return this.$store.state.isAuth
    },
    user() {
      return this.$store.state.user
    },
    channel() {
      return config.filter(_ => _.main).map((_) => {
        return {
          id: _.left.slug,
          name: _.left.name
        }
      }).filter(_ => ~[1, 2, 3].indexOf(_.id))
    }
  },
  mounted() {
    this.getUserRule()
  },
  methods: {
    appendRule() {
      this.rule.push({
        key: Math.random().toString(36).substring(3, 6),
        channel_id: [],
        type: 'video',
        source_type: 1,
        new: ''
      })
    },
    deleteRuleItem(index) {
      this.rule.splice(index, 1)
    },
    saveRule() {
      if (this.submitting) {
        return
      }
      this.submitting = true
      this.$axios.$post('v1/console/spider/save_user_rule', {
        channel: 'bilibili',
        rule: this.rule
      })
        .then(() => {
          this.$toast.success('设置成功！')
            .then(() => {
              window.location.reload()
            })
        })
        .catch((err) => {
          this.submitting = false
          this.$toast.error(err.message)
        })
    },
    handleClose(item, index) {
      item.channel_id.splice(index, 1)
    },
    convertSourceType(type) {
      return {
        video: '视频'
      }[type]
    },
    convertSourceUrl(cid) {
      return `https://space.bilibili.com/${this.user_bilibili_mid}/channel/detail?cid=${cid}`
    },
    handleInputConfirm(item) {
      if (!item.new || !/^\d+$/.test(item.new)) {
        return
      }
      item.channel_id.push(item.new)
      item.new = ''
    },
    getUserRule() {
      this.$axios.$get('v1/console/spider/get_user_rule', {
        params: {
          channel: 'bilibili'
        }
      })
        .then((res) => {
          if (!res || !res.rule) {
            return
          }
          this.user_bilibili_mid = res.user_id
          let rule
          try {
            rule = JSON.parse(res.rule)
          } catch (e) {
            rule = []
          }
          if (!rule) {
            rule = []
          }
          rule.forEach((item, index) => {
            rule[index].key = Math.random().toString(36).substring(3, 6)
            rule[index].new = ''
          })
          this.$set(this, 'rule', rule)
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
    }
  }
}
</script>
