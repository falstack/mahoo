import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2602b61e = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _15a8c974 = () => interopDefault(import('../pages/about/index/managers.vue' /* webpackChunkName: "pages/about/index/managers" */))
const _580b4e9e = () => interopDefault(import('../pages/pwa/index.vue' /* webpackChunkName: "pages/pwa/index" */))
const _a4d327d2 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _f3584928 = () => interopDefault(import('../pages/sign.vue' /* webpackChunkName: "pages/sign" */))
const _6b8c1ac3 = () => interopDefault(import('../pages/write/index.vue' /* webpackChunkName: "pages/write/index" */))
const _1fa6a1c5 = () => interopDefault(import('../pages/app/admin/index.vue' /* webpackChunkName: "pages/app/admin/index" */))
const _e768e964 = () => interopDefault(import('../pages/callback/auth-error.vue' /* webpackChunkName: "pages/callback/auth-error" */))
const _f25229f4 = () => interopDefault(import('../pages/callback/auth-redirect.vue' /* webpackChunkName: "pages/callback/auth-redirect" */))
const _3fb2df6e = () => interopDefault(import('../pages/callback/auth-success.vue' /* webpackChunkName: "pages/callback/auth-success" */))
const _54bc8c73 = () => interopDefault(import('../pages/zone/atfield.vue' /* webpackChunkName: "pages/zone/atfield" */))
const _2a240b36 = () => interopDefault(import('../pages/zone/bangumi.vue' /* webpackChunkName: "pages/zone/bangumi" */))
const _fc136d54 = () => interopDefault(import('../pages/zone/game.vue' /* webpackChunkName: "pages/zone/game" */))
const _ca25940a = () => interopDefault(import('../pages/zone/topic.vue' /* webpackChunkName: "pages/zone/topic" */))
const _7e236165 = () => interopDefault(import('../pages/app/admin/create-bangumi.vue' /* webpackChunkName: "pages/app/admin/create-bangumi" */))
const _cf58b8c8 = () => interopDefault(import('../pages/app/admin/create-idol.vue' /* webpackChunkName: "pages/app/admin/create-idol" */))
const _1f1ec609 = () => interopDefault(import('../pages/app/admin/trial.vue' /* webpackChunkName: "pages/app/admin/trial" */))
const _d8ef2ac6 = () => interopDefault(import('../pages/app/bangumi/edit.vue' /* webpackChunkName: "pages/app/bangumi/edit" */))
const _3f036c86 = () => interopDefault(import('../pages/app/bangumi/join.vue' /* webpackChunkName: "pages/app/bangumi/join" */))
const _3c173ae6 = () => interopDefault(import('../pages/app/bangumi/profile.vue' /* webpackChunkName: "pages/app/bangumi/profile" */))
const _1e588fe2 = () => interopDefault(import('../pages/app/bangumi/relation.vue' /* webpackChunkName: "pages/app/bangumi/relation" */))
const _618cca8f = () => interopDefault(import('../pages/app/bangumi/rule.vue' /* webpackChunkName: "pages/app/bangumi/rule" */))
const _209e85b6 = () => interopDefault(import('../pages/app/bangumi/test.vue' /* webpackChunkName: "pages/app/bangumi/test" */))
const _1eb4c713 = () => interopDefault(import('../pages/app/bangumi/trial.vue' /* webpackChunkName: "pages/app/bangumi/trial" */))
const _12530474 = () => interopDefault(import('../pages/app/idol/edit.vue' /* webpackChunkName: "pages/app/idol/edit" */))
const _a60d8228 = () => interopDefault(import('../pages/app/public/news.vue' /* webpackChunkName: "pages/app/public/news" */))
const _6918abc5 = () => interopDefault(import('../pages/app/public/rank.vue' /* webpackChunkName: "pages/app/public/rank" */))
const _f151e2d6 = () => interopDefault(import('../pages/app/public/rule.vue' /* webpackChunkName: "pages/app/public/rule" */))
const _c6aca37e = () => interopDefault(import('../pages/app/user/edit.vue' /* webpackChunkName: "pages/app/user/edit" */))
const _e53cf256 = () => interopDefault(import('../pages/app/user/list.vue' /* webpackChunkName: "pages/app/user/list" */))
const _7a3ab5f1 = () => interopDefault(import('../pages/pin/_slug.vue' /* webpackChunkName: "pages/pin/_slug" */))
const _26c2b08e = () => interopDefault(import('../pages/tag/_slug/index.vue' /* webpackChunkName: "pages/tag/_slug/index" */))
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
const _d4669d64 = () => interopDefault(import('../pages/tag/_slug/atfield.vue' /* webpackChunkName: "pages/tag/_slug/atfield" */))
const _2685bf1a = () => interopDefault(import('../pages/tag/_slug/edit.vue' /* webpackChunkName: "pages/tag/_slug/edit" */))
const _a879648e = () => interopDefault(import('../pages/tag/_slug/qa.vue' /* webpackChunkName: "pages/tag/_slug/qa" */))
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
    path: "/about",
    component: _2602b61e,
    props: false,
    name: "about",
    children: [{
      path: "managers",
      component: _15a8c974,
      props: false,
      name: "about-index-managers"
    }]
  }, {
    path: "/pwa",
    component: _580b4e9e,
    props: false,
    name: "pwa"
  }, {
    path: "/search",
    component: _a4d327d2,
    props: false,
    name: "search"
  }, {
    path: "/sign",
    component: _f3584928,
    props: false,
    name: "sign"
  }, {
    path: "/write",
    component: _6b8c1ac3,
    props: false,
    name: "write"
  }, {
    path: "/app/admin",
    component: _1fa6a1c5,
    props: false,
    name: "app-admin"
  }, {
    path: "/callback/auth-error",
    component: _e768e964,
    props: false,
    name: "callback-auth-error"
  }, {
    path: "/callback/auth-redirect",
    component: _f25229f4,
    props: false,
    name: "callback-auth-redirect"
  }, {
    path: "/callback/auth-success",
    component: _3fb2df6e,
    props: false,
    name: "callback-auth-success"
  }, {
    path: "/zone/atfield",
    component: _54bc8c73,
    props: false,
    name: "zone-atfield"
  }, {
    path: "/zone/bangumi",
    component: _2a240b36,
    props: false,
    name: "zone-bangumi"
  }, {
    path: "/zone/game",
    component: _fc136d54,
    props: false,
    name: "zone-game"
  }, {
    path: "/zone/topic",
    component: _ca25940a,
    props: false,
    name: "zone-topic"
  }, {
    path: "/app/admin/create-bangumi",
    component: _7e236165,
    props: false,
    name: "app-admin-create-bangumi"
  }, {
    path: "/app/admin/create-idol",
    component: _cf58b8c8,
    props: false,
    name: "app-admin-create-idol"
  }, {
    path: "/app/admin/trial",
    component: _1f1ec609,
    props: false,
    name: "app-admin-trial"
  }, {
    path: "/app/bangumi/edit",
    component: _d8ef2ac6,
    props: false,
    name: "app-bangumi-edit"
  }, {
    path: "/app/bangumi/join",
    component: _3f036c86,
    props: false,
    name: "app-bangumi-join"
  }, {
    path: "/app/bangumi/profile",
    component: _3c173ae6,
    props: false,
    name: "app-bangumi-profile"
  }, {
    path: "/app/bangumi/relation",
    component: _1e588fe2,
    props: false,
    name: "app-bangumi-relation"
  }, {
    path: "/app/bangumi/rule",
    component: _618cca8f,
    props: false,
    name: "app-bangumi-rule"
  }, {
    path: "/app/bangumi/test",
    component: _209e85b6,
    props: false,
    name: "app-bangumi-test"
  }, {
    path: "/app/bangumi/trial",
    component: _1eb4c713,
    props: false,
    name: "app-bangumi-trial"
  }, {
    path: "/app/idol/edit",
    component: _12530474,
    props: false,
    name: "app-idol-edit"
  }, {
    path: "/app/public/news",
    component: _a60d8228,
    props: false,
    name: "app-public-news"
  }, {
    path: "/app/public/rank",
    component: _6918abc5,
    props: false,
    name: "app-public-rank"
  }, {
    path: "/app/public/rule",
    component: _f151e2d6,
    props: false,
    name: "app-public-rule"
  }, {
    path: "/app/user/edit",
    component: _c6aca37e,
    props: false,
    name: "app-user-edit"
  }, {
    path: "/app/user/list",
    component: _e53cf256,
    props: false,
    name: "app-user-list"
  }, {
    path: "/pin/:slug?",
    component: _7a3ab5f1,
    props: true,
    name: "pin-slug"
  }, {
    path: "/tag/:slug?",
    component: _26c2b08e,
    props: true,
    name: "tag-slug"
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
    path: "/tag/:slug?/atfield",
    component: _d4669d64,
    props: true,
    name: "tag-slug-atfield"
  }, {
    path: "/tag/:slug?/edit",
    component: _2685bf1a,
    props: true,
    name: "tag-slug-edit"
  }, {
    path: "/tag/:slug?/qa",
    component: _a879648e,
    props: true,
    name: "tag-slug-qa"
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
