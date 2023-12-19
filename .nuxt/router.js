import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8b0738b0 = () => interopDefault(import('..\\pages\\CampusMap.vue' /* webpackChunkName: "pages/CampusMap" */))
const _2be3dc2b = () => interopDefault(import('..\\pages\\Dorm.vue' /* webpackChunkName: "pages/Dorm" */))
const _12389ef0 = () => interopDefault(import('..\\pages\\DormView.vue' /* webpackChunkName: "pages/DormView" */))
const _91042aac = () => interopDefault(import('..\\pages\\Group.vue' /* webpackChunkName: "pages/Group" */))
const _31f63eb4 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _5429e872 = () => interopDefault(import('..\\pages\\Map.vue' /* webpackChunkName: "pages/Map" */))
const _bfdf6ecc = () => interopDefault(import('..\\pages\\person.vue' /* webpackChunkName: "pages/person" */))
const _684e9b9d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CampusMap",
    component: _8b0738b0,
    name: "CampusMap"
  }, {
    path: "/Dorm",
    component: _2be3dc2b,
    name: "Dorm"
  }, {
    path: "/DormView",
    component: _12389ef0,
    name: "DormView"
  }, {
    path: "/Group",
    component: _91042aac,
    name: "Group"
  }, {
    path: "/login",
    component: _31f63eb4,
    name: "login"
  }, {
    path: "/Map",
    component: _5429e872,
    name: "Map"
  }, {
    path: "/person",
    component: _bfdf6ecc,
    name: "person"
  }, {
    path: "/",
    component: _684e9b9d,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
