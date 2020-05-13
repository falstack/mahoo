<style lang="scss">
#user-spider-setting {
  .rule-item {
    border: 1px solid $color-gray-line;
    padding: 15px;
    border-radius: 5px;

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
}
</style>

<template>
  <div v-if="isAuth" id="user-spider-setting">
    <template v-if="user_bilibili_mid">
      <div class="rule-item" v-for="item in rule" :key="item.key">
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
                :value="opt.id">
              </ElOption>
            </ElSelect>
          </span>
        </p>
        <p class="opt-item source">
          <span class="label">资源：</span>
          <ElTag
            v-for="(channel, index) in item.channel_id"
            :key="channel"
            type="success"
            closable
            @close="handleClose(item, index)"
          ><a target="_blank" :href="convertSourceUrl(channel)" v-text="channel" /></ElTag>
          <ElInput
            v-model="item.new"
            placeholder="输入频道id后回车"
            size="small"
            @keyup.enter.native="handleInputConfirm(item)"
          />
        </p>
      </div>
    </template>
    <ElAlert v-else-if="user_bilibili_mid === null" title="请先在「认证设置」页面绑定你的B站账号" type="success" />
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
    channel() {
      return config.filter(_ => _.main).map((_) => {
        return {
          id: _.left.slug,
          name: _.left.name
        }
      }).filter(_ => ~[1, 2].indexOf(_.id))
    }
  },
  mounted() {
    this.getUserRule()
  },
  methods: {
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
            this.user_bilibili_mid = null
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
