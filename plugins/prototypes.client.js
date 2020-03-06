import Vue from 'vue'
import Cookies from 'js-cookie'
import channel from '~/assets/js/channel'
import Manager from '~/assets/js/manager'

Vue.use({
  install(Vue) {
    Vue.prototype.$cookie = Cookies

    Vue.prototype.$channel = new Vue(channel)

    Vue.prototype.$manager = new Manager()
  }
})
