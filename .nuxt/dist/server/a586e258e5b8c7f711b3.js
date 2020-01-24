exports.ids=[31],exports.modules={235:function(t,e){t.exports={undefined:void 0}},236:function(t,e){t.exports={undefined:void 0}},237:function(t,e){t.exports={undefined:void 0}},329:function(t,e,o){"use strict";o.r(e);var n=o(235),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,(function(){return n[t]}))}(l);e.default=r.a},330:function(t,e,o){"use strict";o.r(e);var n=o(236),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,(function(){return n[t]}))}(l);e.default=r.a},331:function(t,e,o){"use strict";o.r(e);var n=o(237),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,(function(){return n[t]}))}(l);e.default=r.a},345:function(t,e,o){"use strict";o.r(e);var n=o(25),r=o(90),l=o(55),d=o.n(l),c=o(56),m=o.n(c),h=o(93),f={name:"EditTagInfoForm",components:{ElUpload:m.a,ElSelect:d.a},mixins:[h.a],props:{tag:{type:Object,required:!0}},data(){return{rules:{alias:[{validator:(t,e,o)=>{e&&e.length||o(new Error("别名不能为空")),~e.indexOf(this.tag.name)||o(new Error("别名中必须包含名称")),e.some(t=>/,/.test(t))&&o(new Error("别名不能包含英文逗号")),e.join("").length>100&&o(new Error("别名最多100个字符")),o()},trigger:"submit"}]},submitting:!1}},methods:{avatarUploadSuccess(t,e){this.handleImageUploadSuccess(t,e),this.tag.avatar=t.data.url},submit(){this.$refs.form.validate(t=>{t&&(this.submitting=!0,Object(n.f)(this,{slug:this.tag.slug,name:this.tag.name,avatar:this.tag.avatar,alias:this.tag.alias.join(","),intro:this.tag.intro}).then(()=>{this.$toast.success("修改成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message),this.submitting=!1}))})}}},_=o(1);var v=Object(_.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ElForm",{ref:"form",staticClass:"edit-tag-info-form",attrs:{model:t.tag,rules:t.rules,disabled:t.submitting,"label-position":"top"}},[o("ElFormItem",{attrs:{label:"头像"}},[o("div",{staticClass:"avatar-field"},[o("img",{staticClass:"avatar",attrs:{src:t.$resize(t.tag.avatar,{width:100})}}),t._v(" "),o("ElUpload",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[o("ElButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n          "+t._s(t.uploadPending?"图片上传中...":"点击上传封面")+"\n        ")])],1)],1)]),t._v(" "),o("ElFormItem",{attrs:{label:"名称"}},[o("ElInput",{model:{value:t.tag.name,callback:function(e){t.$set(t.tag,"name",e)},expression:"tag.name"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"别名",prop:"alias"}},[o("p",{staticClass:"form-tip"},[t._v("\n      提示：按回车键生效\n    ")]),t._v(" "),o("ElSelect",{staticClass:"hidden-select-input",attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请输入标签别名","popper-class":"hidden-select-options"},model:{value:t.tag.alias,callback:function(e){t.$set(t.tag,"alias",e)},expression:"tag.alias"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"简介"}},[o("ElInput",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"233",resize:"none",placeholder:"请输入板块介绍"},model:{value:t.tag.intro,callback:function(e){t.$set(t.tag,"intro",e)},expression:"tag.intro"}})],1),t._v(" "),o("ElFormItem",[o("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n      保存更改\n    ")])],1)],1)}),[],!1,(function(t){var e=o(329);e.__inject__&&e.__inject__(t)}),null,"439f7872").exports,$=o(60),E=o.n($),I=o(59),x=o.n(I),U=o(64),T={name:"EditTagRuleForm",components:{ElSlider:o.n(U).a,ElRadio:x.a,ElRadioGroup:E.a},props:{tag:{type:Object,required:!0}},data:()=>({rule:{question_count:30,right_rate:100,qa_minutes:30,rule_type:0,result_type:0},submitting:!1}),mounted(){this.getRule()},methods:{formatQuestionCount:t=>`${t}个`,formatRightRate:t=>`${t}%`,formatQAMinutes:t=>`${t}分钟`,updateRule(){this.submitting||(this.submitting=!0,this.$axios.$post("v1/atfield/rule/update",this.rule).then(()=>{this.$toast.success("更新成功")}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.submitting=!1}))},getRule(){this.$axios.$get("v1/atfield/rule/show",{params:{slug:this.tag.slug}}).then(data=>{this.$set(this,"rule",data)}).catch(t=>{this.$toast.error(t.message)})}}};var k={name:"TagEdit",layout:"web",components:{EditTagInfoForm:v,EditTagRuleForm:Object(_.a)(T,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ElForm",{ref:"form",staticClass:"edit-tag-rule-form",attrs:{"label-position":"top"}},[o("ElFormItem",{attrs:{label:"出题数"}},[o("p",{staticClass:"form-tip"},[t._v("\n      如果题库数量不足，则能出几题出几题，如果题库数量超过设定值，则随机出指定题目数\n    ")]),t._v(" "),o("ElSlider",{attrs:{min:5,max:100,"format-tooltip":t.formatQuestionCount},model:{value:t.rule.question_count,callback:function(e){t.$set(t.rule,"question_count",e)},expression:"rule.question_count"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"正确率"}},[o("p",{staticClass:"form-tip"},[t._v("\n      答题的正确率不低于该值才能通过\n    ")]),t._v(" "),o("ElSlider",{attrs:{min:50,max:100,"format-tooltip":t.formatRightRate},model:{value:t.rule.right_rate,callback:function(e){t.$set(t.rule,"right_rate",e)},expression:"rule.right_rate"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"加入方式"}},[o("ElRadioGroup",{model:{value:t.rule.rule_type,callback:function(e){t.$set(t.rule,"rule_type",e)},expression:"rule.rule_type"}},[o("ElRadio",{attrs:{label:0}},[t._v("\n        需要答题或管理邀请\n      ")]),t._v(" "),o("ElRadio",{attrs:{label:1}},[t._v("\n        只能管理邀请\n      ")]),t._v(" "),o("ElRadio",{attrs:{label:2}},[t._v("\n        只能答题加入\n      ")])],1),t._v(" "),o("p",{staticClass:"form-tip"},[t._v("\n      加入方式更改之后不会影响「正在答题」和「已经加入」的人\n    ")])],1),t._v(" "),o("ElFormItem",[o("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.updateRule}},[t._v("\n      保存更改\n    ")])],1)],1)}),[],!1,(function(t){var e=o(330);e.__inject__&&e.__inject__(t)}),null,"24bc4815").exports},mixins:[r.a],props:{slug:{type:String,required:!0}},asyncData:({app:t,error:e,params:o})=>Object(n.d)(t,o).then(t=>(t.alias=t.alias.split(","),{tag:t})).catch(e),data:()=>({tag:null}),computed:{headers(){if(!this.tag)return[];const t=["基本信息"],area={newbie:"ugf6",notebook:"uh4f",bangumi:"2he",topic:"3p6",game:"285"};return~[area.bangumi,area.game,area.topic].indexOf(this.tag.slug)||this.tag.parent_slug===area.notebook||t.push("加入规则"),t}}};var w=Object(_.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"tag-edit"}},[this.tag?e("ElRow",[e("ElCol",{attrs:{span:12,offset:6}},[e("VSwitcher",{attrs:{headers:this.headers,swipe:!0,"anchor-padding":10}},[e("template",{slot:"0"},[e("EditTagInfoForm",{attrs:{tag:this.tag}})],1),this._v(" "),e("template",{slot:"1"},[e("EditTagRuleForm",{attrs:{tag:this.tag}})],1)],2)],1)],1):this._e()],1)}),[],!1,(function(t){var e=o(331);e.__inject__&&e.__inject__(t)}),null,"3e70d9c8");e.default=w.exports},90:function(t,e,o){"use strict";e.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}}},93:function(t,e,o){"use strict";var n=o(94);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.isAuth?this.initUpToken():this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){let t=this.$cookie.get("UPLOAD-TOKEN");t?this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"):(t=await Object(n.a)(this),this.uploadHeaders.token=t,this.$cookie.set("UPLOAD-TOKEN",t,{expires:new Date((new Date).getTime()+3e6)}))},handleImageUploadError(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(n,1),console.log(t))}),this.$toast.error(`图片：${e.name} 上传失败`)},handleImageUploadRemove(t){this.uploadImageList.forEach((e,o)=>{e.uid===t.uid&&(this.uploadImageList.splice(o,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadImageList[n]=Object.assign(o,{data:t.data,status:"success",url:this.$resize(`${this.imagePrefix}${t.data.url}`,{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info(`最多还能上传${this.uploadImageLimit-this.uploadImageTotal}张图片`)},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(t.type))return this.$toast.error(`仅支持上传${this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、")}格式的图片`),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`),!1;return this.uploadHeaders.key=(({slug:t,file:e})=>`${t}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${e.type.split("/").pop()}`)({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},94:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return r}));const n=t=>t.$axios.$get("v1/image/uptoken"),r=(t,e)=>t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})}};