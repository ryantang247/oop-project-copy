import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c1d7c982 = () => interopDefault(import('..\\pages\\CampusMap.vue' /* webpackChunkName: "pages/CampusMap" */))
const _73ff8234 = () => interopDefault(import('..\\pages\\Dorm.vue' /* webpackChunkName: "pages/Dorm" */))
const _0edfcf0e = () => interopDefault(import('..\\pages\\DormView.vue' /* webpackChunkName: "pages/DormView" */))
const _72d705c1 = () => interopDefault(import('..\\pages\\Group.vue' /* webpackChunkName: "pages/Group" */))
const _25614c6a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _d3a3fec4 = () => interopDefault(import('..\\pages\\Map.vue' /* webpackChunkName: "pages/Map" */))
const _4fda9063 = () => interopDefault(import('..\\pages\\person.vue' /* webpackChunkName: "pages/person" */))
const _6dd570f9 = () => interopDefault(import('..\\pages\\ViewDorm.vue' /* webpackChunkName: "pages/ViewDorm" */))
const _23a7b6b4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _c1d7c982,
    name: "CampusMap"
  }, {
    path: "/Dorm",
    component: _73ff8234,
    name: "Dorm"
  }, {
    path: "/DormView",
    component: _0edfcf0e,
    name: "DormView"
  }, {
    path: "/Group",
    component: _72d705c1,
    name: "Group"
  }, {
    path: "/login",
    component: _25614c6a,
    name: "login"
  }, {
    path: "/Map",
    component: _d3a3fec4,
    name: "Map"
  }, {
    path: "/person",
    component: _4fda9063,
    name: "person"
  }, {
    path: "/ViewDorm",
    component: _6dd570f9,
    name: "ViewDorm"
  }, {
    path: "/",
    component: _23a7b6b4,
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
