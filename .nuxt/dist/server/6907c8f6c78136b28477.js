exports.ids=[14],exports.modules={176:function(t,e){t.exports={undefined:void 0}},290:function(t,e,r){"use strict";r.r(e);var o=r(176),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,(function(){return o[t]}))}(l);e.default=n.a},378:function(t,e,r){"use strict";r.r(e);var o=r(64),n={name:"EditTagRuleForm",layout:"app",components:{ElSlider:r.n(o).a},data:()=>({rule:{question_count:30,right_rate:80,qa_minutes:30,rule_type:0,result_type:0},submitting:!1}),computed:{slug(){return this.$route.query.slug}},mounted(){this.getRule()},methods:{formatQuestionCount:t=>`${t}个`,formatRightRate:t=>`${t}%`,formatQAMinutes:t=>`${t}分钟`,updateRule(){this.submitting||(this.submitting=!0,this.$axios.$post("v1/join/rule/update",this.rule).then(()=>{this.$toast.success("更新成功")}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.submitting=!1}))},getRule(){this.$axios.$get("v1/join/rule/show",{params:{slug:this.tag.slug}}).then(data=>{this.$set(this,"rule",data)}).catch(t=>{this.$toast.error(t.message)})}},head:{title:"入圈规则"}},l=r(1);var component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ElForm",{ref:"form",attrs:{id:"bangumi-rule","label-position":"top"}},[r("ElFormItem",{attrs:{label:"出题数"}},[r("p",{staticClass:"form-tip"},[t._v("\n      如果题库数量不足，则能出几题出几题，如果题库数量超过设定值，则随机出指定题目数\n    ")]),t._v(" "),r("ElSlider",{attrs:{min:5,max:100,"format-tooltip":t.formatQuestionCount},model:{value:t.rule.question_count,callback:function(e){t.$set(t.rule,"question_count",e)},expression:"rule.question_count"}})],1),t._v(" "),r("ElFormItem",{attrs:{label:"正确率"}},[r("p",{staticClass:"form-tip"},[t._v("\n      答题的正确率不低于该值才能通过\n    ")]),t._v(" "),r("ElSlider",{attrs:{min:50,max:100,"format-tooltip":t.formatRightRate},model:{value:t.rule.right_rate,callback:function(e){t.$set(t.rule,"right_rate",e)},expression:"rule.right_rate"}})],1),t._v(" "),r("ElFormItem",[r("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.updateRule}},[t._v("\n      保存更改\n    ")])],1)],1)}),[],!1,(function(t){var e=r(290);e.__inject__&&e.__inject__(t)}),null,"15dcd844");e.default=component.exports}};