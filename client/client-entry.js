import createApp from './create-app'
import bus from './util/bus'

const { app, router, store } = createApp()

if (window.__INITIAL_STATE_) {
  store.replaceState(window.__INITIAL_STATE_)
}

bus.$on('auth', () => {
  router.push('/login')
})

router.onReady(() => {
  app.$mount('#root')
})
