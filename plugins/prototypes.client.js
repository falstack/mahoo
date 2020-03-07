import Vue from 'vue'
import Cookies from 'js-cookie'
import Toast from '~/assets/js/toast'
import channel from '~/assets/js/channel'
import * as Cache from '~/assets/js/cache'
import Manager from '~/assets/js/manager'
import { MessageBox } from 'element-ui'

Vue.use({
  install(Vue) {
    Vue.prototype.$cookie = Cookies

    Vue.prototype.$channel = new Vue(channel)

    Vue.prototype.$toast = new Toast()

    Vue.prototype.$manager = new Manager()

    Vue.prototype.$cache = Cache

    Vue.prototype.$alert = MessageBox.alert

    Vue.prototype.$confirm = MessageBox.confirm

    Vue.prototype.$prompt = MessageBox.prompt
  }
})
