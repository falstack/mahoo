import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b8c1ac3 = () => interopDefault(import('../pages/write/index.vue' /* webpackChunkName: "pages/write/index" */))
const _7a3ab5f1 = () => interopDefault(import('../pages/pin/_slug.vue' /* webpackChunkName: "pages/pin/_slug" */))
const _25f85796 = () => interopDefault(import('../pages/user/_slug.vue' /* webpackChunkName: "pages/user/_slug" */))
const _a7781f72 = () => interopDefault(import('../pages/user/_slug/draft.vue' /* webpackChunkName: "pages/user/_slug/draft" */))
const _8166bf78 = () => interopDefault(import('../pages/user/_slug/emotion/index.vue' /* webpackChunkName: "pages/user/_slug/emotion/index" */))
const _b4942fa6 = () => interopDefault(import('../pages/user/_slug/message.vue' /* webpackChunkName: "pages/user/_slug/message" */))
const _5b10ac14 = () => interopDefault(import('../pages/user/_slug/setting.vue' /* webpackChunkName: "pages/user/_slug/setting" */))
const _7943400e = () => interopDefault(import('../pages/user/_slug/setting/index.vue' /* webpackChunkName: "pages/user/_slug/setting/index" */))
const _e38e0556 = () => interopDefault(import('../pages/user/_slug/setting/basic.vue' /* webpackChunkName: "pages/user/_slug/setting/basic" */))
const _822f9438 = () => interopDefault(import('../pages/user/_slug/setting/oauth2.vue' /* webpackChunkName: "pages/user/_slug/setting/oauth2" */))
const _7de73e92 = () => interopDefault(import('../pages/user/_slug/social.vue' /* webpackChunkName: "pages/user/_slug/social" */))
const _02a541fa = () => interopDefault(import('../pages/user/_slug/social/index.vue' /* webpackChunkName: "pages/user/_slug/social/index" */))
const _3c715bbd = () => interopDefault(import('../pages/user/_slug/social/followers.vue' /* webpackChunkName: "pages/user/_slug/social/followers" */))
const _088dcc39 = () => interopDefault(import('../pages/user/_slug/social/following.vue' /* webpackChunkName: "pages/user/_slug/social/following" */))
const _3107a53d = () => interopDefault(import('../pages/user/_slug/social/friends.vue' /* webpackChunkName: "pages/user/_slug/social/friends" */))
const _908be1ea = () => interopDefault(import('../pages/user/_slug/timeline.vue' /* webpackChunkName: "pages/user/_slug/timeline" */))
const _82a58708 = () => interopDefault(import('../pages/user/_slug/emotion/category.vue' /* webpackChunkName: "pages/user/_slug/emotion/category" */))
const _47f317f4 = () => interopDefault(import('../pages/user/_slug/emotion/category/bangumi.vue' /* webpackChunkName: "pages/user/_slug/emotion/category/bangumi" */))
const _0b341b55 = () => interopDefault(import('../pages/user/_slug/emotion/category/game.vue' /* webpackChunkName: "pages/user/_slug/emotion/category/game" */))
const _785b773e = () => interopDefault(import('../pages/user/_slug/emotion/category/notebook.vue' /* webpackChunkName: "pages/user/_slug/emotion/category/notebook" */))
const _3969a3dc = () => interopDefault(import('../pages/user/_slug/emotion/category/topic.vue' /* webpackChunkName: "pages/user/_slug/emotion/category/topic" */))
const _5276389a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/write",
    component: _6b8c1ac3,
    props: false,
    name: "write"
  }, {
    path: "/pin/:slug?",
    component: _7a3ab5f1,
    props: true,
    name: "pin-slug"
  }, {
    path: "/user/:slug?",
    component: _25f85796,
    props: true,
    name: "user-slug",
    children: [{
      path: "draft",
      component: _a7781f72,
      props: true,
      name: "user-slug-draft"
    }, {
      path: "emotion",
      component: _8166bf78,
      props: true,
      name: "user-slug-emotion"
    }, {
      path: "message",
      component: _b4942fa6,
      props: true,
      name: "user-slug-message"
    }, {
      path: "setting",
      component: _5b10ac14,
      props: true,
      children: [{
        path: "",
        component: _7943400e,
        name: "user-slug-setting"
      }, {
        path: "basic",
        component: _e38e0556,
        name: "user-slug-setting-basic"
      }, {
        path: "oauth2",
        component: _822f9438,
        name: "user-slug-setting-oauth2"
      }]
    }, {
      path: "social",
      component: _7de73e92,
      props: true,
      children: [{
        path: "",
        component: _02a541fa,
        name: "user-slug-social"
      }, {
        path: "followers",
        component: _3c715bbd,
        name: "user-slug-social-followers"
      }, {
        path: "following",
        component: _088dcc39,
        name: "user-slug-social-following"
      }, {
        path: "friends",
        component: _3107a53d,
        name: "user-slug-social-friends"
      }]
    }, {
      path: "timeline",
      component: _908be1ea,
      props: true,
      name: "user-slug-timeline"
    }, {
      path: "emotion/category",
      component: _82a58708,
      props: true,
      name: "user-slug-emotion-category",
      children: [{
        path: "bangumi",
        component: _47f317f4,
        name: "user-slug-emotion-category-bangumi"
      }, {
        path: "game",
        component: _0b341b55,
        name: "user-slug-emotion-category-game"
      }, {
        path: "notebook",
        component: _785b773e,
        name: "user-slug-emotion-category-notebook"
      }, {
        path: "topic",
        component: _3969a3dc,
        name: "user-slug-emotion-category-topic"
      }]
    }]
  }, {
    path: "/",
    component: _5276389a,
    props: false,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
