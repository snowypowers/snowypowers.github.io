import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from './routes.js'

Vue.use(VueRouter)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    } else {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
