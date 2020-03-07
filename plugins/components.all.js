import Vue from 'vue'
import VueMixinStore from 'vue-mixin-store'
import lazyload from '~/directives/lazyload'

Vue.use(lazyload)
Vue.component(VueMixinStore.FlowLoader.name, VueMixinStore.FlowLoader)
