import Vue from 'vue'
import VSwitcher from 'v-switcher/dist/v-switcher.vue'
// import 'v-switcher/dist/v-switcher.css'
import VueMixinStore from 'vue-mixin-store'
import { Button, Row, Col, Form, FormItem, Input, Tag } from 'element-ui'
import { VLazyload, VImg } from '@calibur/sakura'

Vue.use(VLazyload)
Vue.component(VImg.name, VImg)
Vue.component(VSwitcher.name, VSwitcher)
Vue.component(VueMixinStore.FlowLoader.name, VueMixinStore.FlowLoader)
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Tag.name, Tag)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
