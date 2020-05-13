exports.ids=[16],exports.modules={177:function(e,t,n){"use strict";t.a=[{type:"douga",main:!0,left:{slug:1,name:"动画",type:"MainFlowTab"},right:{slug:1,name:"特别推荐",type:"RecommendedSwipe"}},{type:"bangumi",main:!0,left:{slug:5,name:"番剧",type:"BangumiSwitcher"},right:{slug:5,type:"RankSwitcher"}},{type:"bangumi-about",main:!1,left:{slug:8,name:"番剧动态",type:"MainFlowTab"},right:{slug:8,type:"RankDaily"}},{type:"manga",main:!0,left:{slug:4,name:"漫画",type:"MainFlowTab"},right:{slug:4,type:"RankSwitcher"}},{type:"game",main:!0,left:{slug:2,name:"游戏",type:"MainFlowTab"},right:{slug:2,type:"RankSwitcher"}},{type:"novel",main:!0,left:{slug:6,name:"帖子",type:"MainFlowTab"},right:{slug:6,type:"RankDaily"}},{type:"music",main:!0,left:{slug:7,name:"音乐",type:"MainFlowTab"},right:{slug:7,type:"RankSwitcher"}},{type:"life",main:!0,left:{slug:3,name:"生活",type:"MainFlowTab"},right:{slug:3,type:"RankSwitcher"}}]},178:function(e,t){e.exports={}},245:function(e,t,n){"use strict";n.r(t);var l=n(178),r=n.n(l);for(var o in l)"default"!==o&&function(e){n.d(t,e,(function(){return l[e]}))}(o);t.default=r.a},285:function(e,t,n){"use strict";n.r(t);var l=n(24),r=n.n(l),o=n(68),c=n.n(o),d=n(69),h=n.n(d),m=n(65),_=n.n(m),y=n(177),f={name:"UserSpiderSetting",components:{ElAlert:_.a,ElSelect:h.a,ElOption:c.a,ElTag:r.a},data:()=>({submitting:!1,rule:[],user_bilibili_mid:0}),computed:{isAuth(){return this.$store.state.isAuth},user(){return this.$store.state.user},channel:()=>y.a.filter(e=>e.main).map(e=>({id:e.left.slug,name:e.left.name})).filter(e=>~[1,2,3].indexOf(e.id))},mounted(){this.getUserRule()},methods:{appendRule(){this.rule.push({key:Math.random().toString(36).substring(3,6),channel_id:[],type:"video",source_type:1,new:""})},deleteRuleItem(e){this.rule.splice(e,1)},saveRule(){this.submitting||(this.submitting=!0,this.$axios.$post("v1/console/spider/save_user_rule",{channel:"bilibili",rule:this.rule}).then(()=>{this.$toast.success("设置成功！").then(()=>{window.location.reload()})}).catch(e=>{this.submitting=!1,this.$toast.error(e.message)}))},handleClose(e,t){e.channel_id.splice(t,1)},convertSourceType:e=>({video:"视频"})[e],convertSourceUrl(e){return`https://space.bilibili.com/${this.user_bilibili_mid}/channel/detail?cid=${e}`},handleInputConfirm(e){e.new&&/^\d+$/.test(e.new)&&(e.channel_id.push(e.new),e.new="")},getUserRule(){this.$axios.$get("v1/console/spider/get_user_rule",{params:{channel:"bilibili"}}).then(e=>{if(!e||!e.rule)return;let t;this.user_bilibili_mid=e.user_id;try{t=JSON.parse(e.rule)}catch(e){t=[]}t||(t=[]),t.forEach((e,n)=>{t[n].key=Math.random().toString(36).substring(3,6),t[n].new=""}),this.$set(this,"rule",t)}).catch(e=>{this.$toast.error(e.message)})}}},v=n(1);var component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isAuth?n("div",{attrs:{id:"user-spider-setting"}},[e.user.providers.bind_bilibili?[n("ElAlert",{attrs:{title:"什么是频道id？",type:"success"}},[n("span",[e._v("比如：")]),e._v(" "),n("a",{attrs:{target:"_blank",href:"https://space.bilibili.com/279662469/channel/detail?cid=118679"}},[e._v("https://space.bilibili.com/279662469/channel/detail?cid=118679")]),e._v(" "),n("span",[e._v("这个链接中，频道部分就是cid=118679，那么频道的 id 就是")]),e._v(" "),n("span",[n("b",[e._v("118679")])])]),e._ssrNode(" <br> "),n("ElAlert",{attrs:{title:"请勿频繁的修改规则",type:"warning"}},[e._v("\n      如果你删除规则，calibur 也会删除对应的内容，但这个过程需要几分钟至几小时的同步时间\n    ")]),e._ssrNode(" <br> "),n("ElAlert",{attrs:{title:"你只能填写自己的频道id，填写他人的是无效的",type:"error"}}),e._ssrNode(" <br> "),e._l(e.rule,(function(t,l){return e._ssrNode('<div class="rule-item">',"</div>",[n("ElButton",{staticClass:"close-btn",attrs:{type:"text",icon:"el-icon-close"},on:{click:function(t){return e.deleteRuleItem(l)}}}),e._ssrNode(' <p class="opt-item type"><span class="label">类型：</span> <span class="value">'+e._ssrEscape(e._s(e.convertSourceType(t.type)))+"</span></p> "),e._ssrNode('<p class="opt-item channel">',"</p>",[e._ssrNode('<span class="label">分区：</span> '),e._ssrNode('<span class="value">',"</span>",[n("ElSelect",{attrs:{placeholder:"请选择分区"},model:{value:t.source_type,callback:function(n){e.$set(t,"source_type",n)},expression:"item.source_type"}},e._l(e.channel,(function(e){return n("ElOption",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],2),e._ssrNode(" "),e._ssrNode('<p class="opt-item source">',"</p>",[e._ssrNode('<span class="label">资源：</span> '),e._l(t.channel_id,(function(l,r){return n("ElTag",{key:l,attrs:{type:"success",closable:""},on:{close:function(n){return e.handleClose(t,r)}}},[n("a",{attrs:{target:"_blank",href:e.convertSourceUrl(l)},domProps:{textContent:e._s(l)}})])})),e._ssrNode(" "),n("ElInput",{attrs:{placeholder:"输入频道id后回车",size:"small"},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handleInputConfirm(t)}},model:{value:t.new,callback:function(n){e.$set(t,"new",n)},expression:"item.new"}})],2)],2)})),e._ssrNode(" "),e._ssrNode('<div class="submit-row">',"</div>",[n("ElButton",{attrs:{icon:"el-icon-plus",circle:""},on:{click:e.appendRule}}),e._ssrNode(" "),n("ElButton",{attrs:{loading:e.submitting,plain:"",type:"success"},on:{click:e.saveRule}},[e._v("\n        确认保存\n      ")])],2)]:n("ElAlert",{attrs:{title:"请先在「认证设置」页面绑定你的B站账号",type:"success"}})],2):e._e()}),[],!1,(function(e){var t=n(245);t.__inject__&&t.__inject__(e)}),null,"ac3cdd8e");t.default=component.exports}};