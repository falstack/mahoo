(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{353:function(t,e,n){"use strict";e.a={beforeMount:function(){var t=this;this.$channel.$when("user-not-sign",(function(){t.$toast.error("继续操作前请先登录").then((function(){window.location.href=t.$alias.sign()}))}))}}},520:function(t,e,n){},521:function(t,e,n){},656:function(t,e,n){"use strict";var l=n(520);n.n(l).a},657:function(t,e,n){"use strict";var l=n(521);n.n(l).a},677:function(t,e,n){"use strict";n.r(e);var l=n(353),r=(n(35),n(34),n(235),n(374)),o=n.n(r),c=n(361),h=n.n(c),f=n(358),m=n.n(f),d=n(163),v={name:"CreateTagATFieldForm",components:{ElAlert:m.a,ElRadio:h.a,ElRadioGroup:o.a},props:{slug:{type:String,required:!0}},data:function(){return{tag:null,submitting:!1,title:"",answers:[{value:"",key:0},{value:"",key:1},{value:"",key:2},{value:"",key:3}],rightOpt:-1,rule:null,info:null}},mounted:function(){this.getTag(),this.getRule(),this.getInfo()},methods:{getTag:function(){var t=this;Object(d.d)(this,{slug:this.slug}).then((function(e){t.tag=e})).catch()},getRule:function(){var t=this;this.$axios.$get("v1/atfield/rule/show",{params:{slug:this.slug}}).then((function(data){t.rule=data})).catch()},getInfo:function(){var t=this;this.$axios.$get("v1/tag/atfield",{params:{slug:this.slug}}).then((function(data){t.info=data})).catch()},submit:function(){var t,e,n,title,l,r,o=this;this.title.trim()?this.answers.map((function(t){return t.value})).filter((function(t){return t})).length<2?this.$toast.info("至少要有2个选项"):-1!==this.rightOpt?this.answers.filter((function(t){return t.key===o.rightOpt}))[0].value.trim()?(this.submitting=!0,(t=this,e={title:this.title,answers:this.answers.map((function(t){return t.value})).filter((function(t){return t})),right_index:this.rightOpt,tag_slug:this.slug},n=e.tag_slug,title=e.title,l=e.answers,r=e.right_index,t.$axios.$post("v1/atfield/create",{tag_slug:n,title:title,answers:l,right_index:r})).then((function(){o.$toast.success("提交成功").then((function(){window.location.reload()}))})).catch((function(t){o.$toast.error(t.message),o.submitting=!1}))):this.$toast.info("正确选项不能为空"):this.$toast.info("请选择正确选项"):this.$toast.info("题目不能为空")}}},_=(n(656),n(19)),w={name:"TagQA",layout:"web",components:{CreateTagATFieldForm:Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tag?n("ElForm",{ref:"form",staticClass:"create-tag-atfield-form",attrs:{disabled:t.submitting,"label-position":"right","label-width":"80px"}},[n("ElFormItem",[n("h1",[t._v("为《"+t._s(t.tag.name)+"》出题")]),t._v(" "),n("br"),t._v(" "),t.rule?n("ElAlert",{attrs:{description:"当前分区需要有「"+t.rule.question_count+"道」题入库之后才能开放加入",title:"当前分区答题规则",type:"success"}}):t._e()],1),t._v(" "),n("ElFormItem",[t.info?n("ElAlert",{attrs:{description:"当前分区有「"+t.info.trial+"道」题正在审核中，「"+t.info.pass+"道」题已入库",title:"当前分区题库信息",type:"success"}}):t._e()],1),t._v(" "),n("ElFormItem",{attrs:{label:"题目"}},[n("ElInput",{attrs:{rows:2,type:"textarea",placeholder:"请输入题目",resize:"none",maxlength:"50","show-word-limit":""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),n("ElFormItem",[n("p",{staticClass:"form-tip"},[t._v("\n      提示：选项至少提供两个，至多四个\n    ")])]),t._v(" "),t._l(t.answers,(function(e,l){return n("ElFormItem",{key:e.key,attrs:{label:"选项"+(l+1)}},[n("ElInput",{attrs:{placeholder:"请输入答案（20字以内）",maxlength:"20"},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"item.value"}})],1)})),t._v(" "),n("ElFormItem",[n("p",{staticClass:"form-tip"},[t._v("\n      提示：题目为单选题，正确选项不能为空\n    ")])]),t._v(" "),n("ElFormItem",{attrs:{label:"答案"}},[n("ElRadioGroup",{model:{value:t.rightOpt,callback:function(e){t.rightOpt=e},expression:"rightOpt"}},t._l(t.answers,(function(e,l){return n("ElRadio",{key:e.key,attrs:{label:e.key}},[t._v(" 答案"+t._s(l+1)+" ")])})),1)],1),t._v(" "),n("ElFormItem",[n("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n      提交\n    ")])],1)],2):t._e()}),[],!1,null,null,null).exports},mixins:[l.a],props:{slug:{type:String,required:!0}}},E=(n(657),Object(_.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"tag-qa"}},[e("ElRow",[e("ElCol",{attrs:{span:12,offset:6}},[e("CreateTagATFieldForm",{attrs:{slug:this.slug}})],1)],1)],1)}),[],!1,null,null,null));e.default=E.exports}}]);