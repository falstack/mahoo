import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_fcebaa16 from 'nuxt_plugin_plugin_fcebaa16' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_axios_b7f544ea from 'nuxt_plugin_axios_b7f544ea' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_axiosall_6aea33a4 from 'nuxt_plugin_axiosall_6aea33a4' // Source: ../plugins/axios.all.js (mode: 'all')
import nuxt_plugin_componentsall_f6b62450 from 'nuxt_plugin_componentsall_f6b62450' // Source: ../plugins/components.all.js (mode: 'all')
import nuxt_plugin_prototypesall_f47dfe06 from 'nuxt_plugin_prototypesall_f47dfe06' // Source: ../plugins/prototypes.all.js (mode: 'all')
import nuxt_plugin_prototypesclient_020776b6 from 'nuxt_plugin_prototypesclient_020776b6' // Source: ../plugins/prototypes.client.js (mode: 'client')
import nuxt_plugin_socketclient_03aac5f2 from 'nuxt_plugin_socketclient_03aac5f2' // Source: ../plugins/socket.client.js (mode: 'client')
import nuxt_plugin_routerclient_3702c15d from 'nuxt_plugin_routerclient_3702c15d' // Source: ../plugins/router.client.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":function anonymous(val
) {
return (val ? `${val} - ${process.env.INJECT.title}` : `${process.env.INJECT.title}`)
},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"},{"name":"renderer","content":"webkit|ie-comp|ie-stand"},{"name":"force-rendering","content":"webkit"},{"http-equiv":"X-UA-Compatible","content":"IE=edge,chrome=1"},{"hid":"description","name":"description","content":"","template":val => (val ? `${val},${process.env.INJECT.description}` : `${process.env.INJECT.description}`)},{"hid":"keywords","name":"keywords","content":"","template":val => (val ? `${val},${process.env.INJECT.keywords}` : `${process.env.INJECT.keywords}`)}],"link":[{"rel":"dns-prefetch","href":"https:\u002F\u002Ffile.calibur.tv"},{"rel":"dns-prefetch","href":"https:\u002F\u002Fm1.calibur.tv"},{"rel":"preconnect","href":"https:\u002F\u002Fwww.calibur.tv"},{"rel":"preconnect","href":"https:\u002F\u002Fapi.calibur.tv"},{"rel":"icon","type":"image\u002Fx-icon","href":"https:\u002F\u002Ffile.calibur.tv\u002Ffavicon.ico"}],"bodyAttrs":{"id":"calibur"},"script":[{"src":"https:\u002F\u002Fpolyfill.alicdn.com\u002Fpolyfill.min.js","type":"text\u002Fjavascript"},{"innerHTML":"var _hmt=_hmt||[];(function (){var hm=document.createElement(\"script\");hm.src=\"https:\u002F\u002Fhm.baidu.com\u002Fhm.js?c10304a2f70ee2ddf8d2818551d37a4b\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(hm,s)})();","type":"text\u002Fjavascript","async":true},{"innerHTML":"(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https:\u002F\u002Fzz.bdstatic.com\u002Flinksubmit\u002Fpush.js'}else{bp.src='http:\u002F\u002Fpush.zhanzhang.baidu.com\u002Fpush.js'}var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp,s)})();","type":"text\u002Fjavascript","async":true}],"__dangerouslyDisableSanitizers":["script"],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_fcebaa16 === 'function') {
    await nuxt_plugin_plugin_fcebaa16(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_b7f544ea === 'function') {
    await nuxt_plugin_axios_b7f544ea(app.context, inject)
  }

  if (typeof nuxt_plugin_axiosall_6aea33a4 === 'function') {
    await nuxt_plugin_axiosall_6aea33a4(app.context, inject)
  }

  if (typeof nuxt_plugin_componentsall_f6b62450 === 'function') {
    await nuxt_plugin_componentsall_f6b62450(app.context, inject)
  }

  if (typeof nuxt_plugin_prototypesall_f47dfe06 === 'function') {
    await nuxt_plugin_prototypesall_f47dfe06(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_prototypesclient_020776b6 === 'function') {
    await nuxt_plugin_prototypesclient_020776b6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_socketclient_03aac5f2 === 'function') {
    await nuxt_plugin_socketclient_03aac5f2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_routerclient_3702c15d === 'function') {
    await nuxt_plugin_routerclient_3702c15d(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
