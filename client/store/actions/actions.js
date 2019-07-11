export default {
  updateCountAsync (store, data) {
    console.log('system call')
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  }
}
