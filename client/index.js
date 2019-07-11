import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

store.registerModule('c', {
  state: {
    text: 3
  }
})

// store.unregisterModule('c')

// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('newCount watched', newCount)
// })

// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

router.beforeEach((to, from, next) => {
  console.log('before Each')
  next()
  // if (to.fullPath === '/app') {
  //   next({name: 'login'})
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('before Resolve')
  next()
})

router.afterEach((to, from) => {
  console.log('after Resolve')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
