(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{316:function(t,e,l){"use strict";e.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}}},475:function(t,e,l){},476:function(t,e,l){},611:function(t,e,l){"use strict";var n=l(475);l.n(n).a},612:function(t,e,l){"use strict";var n=l(476);l.n(n).a},635:function(t,e,l){"use strict";l.r(e);var n=l(316),r=(l(188),l(333)),o=l.n(r),h=l(324),c=l.n(h),m=l(322),f=l.n(m),d=l(123),v={name:"CreateTagATFieldForm",components:{ElAlert:f.a,ElRadio:c.a,ElRadioGroup:o.a},props:{slug:{type:String,required:!0}},data:()=>({tag:null,submitting:!1,title:"",answers:[{value:"",key:0},{value:"",key:1},{value:"",key:2},{value:"",key:3}],rightOpt:-1,rule:null,info:null}),mounted(){this.getTag(),this.getRule(),this.getInfo()},methods:{getTag(){Object(d.d)(this,{slug:this.slug}).then(t=>{this.tag=t}).catch()},getRule(){this.$axios.$get("v1/atfield/rule/show",{params:{slug:this.slug}}).then(data=>{this.rule=data}).catch()},getInfo(){this.$axios.$get("v1/tag/atfield",{params:{slug:this.slug}}).then(data=>{this.info=data}).catch()},submit(){this.title.trim()?this.answers.map(t=>t.value).filter(t=>t).length<2?this.$toast.info("至少要有2个选项"):-1!==this.rightOpt?this.answers.filter(t=>t.key===this.rightOpt)[0].value.trim()?(this.submitting=!0,((t,e)=>{var{tag_slug:l,title:title,answers:n,right_index:r}=e;return t.$axios.$post("v1/atfield/create",{tag_slug:l,title:title,answers:n,right_index:r})})(this,{title:this.title,answers:this.answers.map(t=>t.value).filter(t=>t),right_index:this.rightOpt,tag_slug:this.slug}).then(()=>{this.$toast.success("提交成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message),this.submitting=!1})):this.$toast.info("正确选项不能为空"):this.$toast.info("请选择正确选项"):this.$toast.info("题目不能为空")}}},_=(l(611),l(11)),w={name:"TagQA",layout:"web",components:{CreateTagATFieldForm:Object(_.a)(v,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.tag?l("ElForm",{ref:"form",staticClass:"create-tag-atfield-form",attrs:{disabled:t.submitting,"label-position":"right","label-width":"80px"}},[l("ElFormItem",[l("h1",[t._v("为《"+t._s(t.tag.name)+"》出题")]),t._v(" "),l("br"),t._v(" "),t.rule?l("ElAlert",{attrs:{description:"当前分区需要有「"+t.rule.question_count+"道」题入库之后才能开放加入",title:"当前分区答题规则",type:"success"}}):t._e()],1),t._v(" "),l("ElFormItem",[t.info?l("ElAlert",{attrs:{description:"当前分区有「"+t.info.trial+"道」题正在审核中，「"+t.info.pass+"道」题已入库",title:"当前分区题库信息",type:"success"}}):t._e()],1),t._v(" "),l("ElFormItem",{attrs:{label:"题目"}},[l("ElInput",{attrs:{rows:2,type:"textarea",placeholder:"请输入题目",resize:"none",maxlength:"50","show-word-limit":""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),l("ElFormItem",[l("p",{staticClass:"form-tip"},[t._v("\n      提示：选项至少提供两个，至多四个\n    ")])]),t._v(" "),t._l(t.answers,(function(e,n){return l("ElFormItem",{key:e.key,attrs:{label:"选项"+(n+1)}},[l("ElInput",{attrs:{placeholder:"请输入答案（20字以内）",maxlength:"20"},model:{value:e.value,callback:function(l){t.$set(e,"value",l)},expression:"item.value"}})],1)})),t._v(" "),l("ElFormItem",[l("p",{staticClass:"form-tip"},[t._v("\n      提示：题目为单选题，正确选项不能为空\n    ")])]),t._v(" "),l("ElFormItem",{attrs:{label:"答案"}},[l("ElRadioGroup",{model:{value:t.rightOpt,callback:function(e){t.rightOpt=e},expression:"rightOpt"}},t._l(t.answers,(function(e,n){return l("ElRadio",{key:e.key,attrs:{label:e.key}},[t._v(" 答案"+t._s(n+1)+" ")])})),1)],1),t._v(" "),l("ElFormItem",[l("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n      提交\n    ")])],1)],2):t._e()}),[],!1,null,null,null).exports},mixins:[n.a],props:{slug:{type:String,required:!0}}},E=(l(612),Object(_.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"tag-qa"}},[e("ElRow",[e("ElCol",{attrs:{span:12,offset:6}},[e("CreateTagATFieldForm",{attrs:{slug:this.slug}})],1)],1)],1)}),[],!1,null,null,null));e.default=E.exports}}]);