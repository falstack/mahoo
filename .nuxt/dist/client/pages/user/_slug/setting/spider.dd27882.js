(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{471:function(t,e,n){"use strict";e.a=[{type:"douga",main:!0,left:{slug:1,name:"动画",type:"MainFlowTab"},right:{slug:1,name:"特别推荐",type:"RecommendedSwipe"}},{type:"bangumi",main:!0,left:{slug:5,name:"番剧",type:"BangumiSwitcher"},right:{slug:5,type:"RankSwitcher"}},{type:"bangumi-about",main:!1,left:{slug:8,name:"番剧动态",type:"MainFlowTab"},right:{slug:8,type:"RankDaily"}},{type:"manga",main:!0,left:{slug:4,name:"漫画",type:"MainFlowTab"},right:{slug:4,type:"RankSwitcher"}},{type:"game",main:!0,left:{slug:2,name:"游戏",type:"MainFlowTab"},right:{slug:2,type:"RankSwitcher"}},{type:"novel",main:!0,left:{slug:6,name:"帖子",type:"MainFlowTab"},right:{slug:6,type:"RankDaily"}},{type:"music",main:!0,left:{slug:7,name:"音乐",type:"MainFlowTab"},right:{slug:7,type:"RankSwitcher"}},{type:"life",main:!0,left:{slug:3,name:"生活",type:"MainFlowTab"},right:{slug:3,type:"RankSwitcher"}}]},472:function(t,e,n){},571:function(t,e,n){"use strict";var l=n(472);n.n(l).a},618:function(t,e,n){"use strict";n.r(e);n(32),n(47),n(13),n(97),n(56),n(184),n(22),n(11),n(39),n(14);var l=n(132),r=n.n(l),c=n(439),o=n.n(c),d=n(437),m=n.n(d),h=n(381),f=n.n(h),_=n(471),v={name:"UserSpiderSetting",components:{ElAlert:f.a,ElSelect:m.a,ElOption:o.a,ElTag:r.a},data:function(){return{submitting:!1,rule:[],user_bilibili_mid:0}},computed:{isAuth:function(){return this.$store.state.isAuth},user:function(){return this.$store.state.user},channel:function(){return _.a.filter((function(t){return t.main})).map((function(t){return{id:t.left.slug,name:t.left.name}})).filter((function(t){return~[1,2,3].indexOf(t.id)}))}},mounted:function(){this.getUserRule()},methods:{appendRule:function(){this.rule.push({key:Math.random().toString(36).substring(3,6),channel_id:[],type:"video",source_type:1,new:""})},deleteRuleItem:function(t){this.rule.splice(t,1)},saveRule:function(){var t=this;this.submitting||(this.submitting=!0,this.$axios.$post("v1/console/spider/save_user_rule",{channel:"bilibili",rule:this.rule}).then((function(){t.$toast.success("设置成功！").then((function(){window.location.reload()}))})).catch((function(e){t.submitting=!1,t.$toast.error(e.message)})))},handleClose:function(t,e){t.channel_id.splice(e,1)},convertSourceType:function(t){return{video:"视频"}[t]},convertSourceUrl:function(t){return"https://space.bilibili.com/".concat(this.user_bilibili_mid,"/channel/detail?cid=").concat(t)},handleInputConfirm:function(t){t.new&&/^\d+$/.test(t.new)&&(t.channel_id.push(t.new),t.new="")},getUserRule:function(){var t=this;this.$axios.$get("v1/console/spider/get_user_rule",{params:{channel:"bilibili"}}).then((function(e){if(e&&e.rule){var n;t.user_bilibili_mid=e.user_id;try{n=JSON.parse(e.rule)}catch(t){n=[]}n||(n=[]),n.forEach((function(t,e){n[e].key=Math.random().toString(36).substring(3,6),n[e].new=""})),t.$set(t,"rule",n)}})).catch((function(e){t.$toast.error(e.message)}))}}},y=(n(571),n(9)),component=Object(y.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isAuth?n("div",{attrs:{id:"user-spider-setting"}},[t.user.providers.bind_bilibili?[n("ElAlert",{attrs:{title:"什么是频道id？",type:"success"}},[n("span",[t._v("比如：")]),t._v(" "),n("a",{attrs:{target:"_blank",href:"https://space.bilibili.com/279662469/channel/detail?cid=118679"}},[t._v("https://space.bilibili.com/279662469/channel/detail?cid=118679")]),t._v(" "),n("span",[t._v("这个链接中，频道部分就是cid=118679，那么频道的 id 就是")]),t._v(" "),n("span",[n("b",[t._v("118679")])])]),t._v(" "),n("br"),t._v(" "),n("ElAlert",{attrs:{title:"请勿频繁的修改规则",type:"warning"}},[t._v("\n      如果你删除规则，calibur 也会删除对应的内容，但这个过程需要几分钟至几小时的同步时间\n    ")]),t._v(" "),n("br"),t._v(" "),n("ElAlert",{attrs:{title:"你只能填写自己的频道id，填写他人的是无效的",type:"error"}}),t._v(" "),n("br"),t._v(" "),t._l(t.rule,(function(e,l){return n("div",{key:e.key,staticClass:"rule-item"},[n("ElButton",{staticClass:"close-btn",attrs:{type:"text",icon:"el-icon-close"},on:{click:function(e){return t.deleteRuleItem(l)}}}),t._v(" "),n("p",{staticClass:"opt-item type"},[n("span",{staticClass:"label"},[t._v("类型：")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.convertSourceType(e.type))}})]),t._v(" "),n("p",{staticClass:"opt-item channel"},[n("span",{staticClass:"label"},[t._v("分区：")]),t._v(" "),n("span",{staticClass:"value"},[n("ElSelect",{attrs:{placeholder:"请选择分区"},model:{value:e.source_type,callback:function(n){t.$set(e,"source_type",n)},expression:"item.source_type"}},t._l(t.channel,(function(t){return n("ElOption",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)]),t._v(" "),n("p",{staticClass:"opt-item source"},[n("span",{staticClass:"label"},[t._v("资源：")]),t._v(" "),t._l(e.channel_id,(function(l,r){return n("ElTag",{key:l,attrs:{type:"success",closable:""},on:{close:function(n){return t.handleClose(e,r)}}},[n("a",{attrs:{target:"_blank",href:t.convertSourceUrl(l)},domProps:{textContent:t._s(l)}})])})),t._v(" "),n("ElInput",{attrs:{placeholder:"输入频道id后回车",size:"small"},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.handleInputConfirm(e)}},model:{value:e.new,callback:function(n){t.$set(e,"new",n)},expression:"item.new"}})],2)],1)})),t._v(" "),n("div",{staticClass:"submit-row"},[n("ElButton",{attrs:{icon:"el-icon-plus",circle:""},on:{click:t.appendRule}}),t._v(" "),n("ElButton",{attrs:{loading:t.submitting,plain:"",type:"success"},on:{click:t.saveRule}},[t._v("\n        确认保存\n      ")])],1)]:n("ElAlert",{attrs:{title:"请先在「认证设置」页面绑定你的B站账号",type:"success"}})],2):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);