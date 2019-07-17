<template>
  <div id="app">
    <div id="cover"></div>
    <div id="loading" v-show="loading">
      <loading></loading>
    </div>
    <Header></Header>
    <!-- <p>{{ fullName }} {{ counter }}</p> -->
    <!-- <p>{{ textA }} {{ textPlus }} {{ textC }}</p> -->
    <!-- <router-link to="/app">app</router-link> -->
    <!-- <router-link to="/app/123">app123</router-link> -->
    <!-- <router-link to="/app/456">app456</router-link> -->
    <!-- <router-link to="/login">login</router-link> -->
    <!-- <todo></todo>-->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <button @click="notify">click me</button> -->
    <!-- <notification content="test notify"></notification> -->
    <Footer></Footer>
    <!-- <router-view name="a"></router-view> -->
  </div>
</template>

<script>
import {
  mapState
  // mapGetters,
  // mapActions,
  // mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Loading from './components/loading/loading.vue'
// import Todo from './view/todo/todo.vue'

export default {
  metaInfo: {
    title: '滑稽'
  },
  components: {
    Header,
    Footer,
    Loading
    // Todo
  },
  mounted () {
    // console.log(this.$store)
    // let i = 1
    // this.updateCountAsync({
    //   num: 5,
    //   time: 2000
    // })
    // this['a/updateText']('123')
    // this['a/add']()
    // this['b/testAction']()
    // this.$store.state.count = 3
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++,
    //     num2: 2
    //   })
    // }, 1000)
  },
  methods: {
    // ...mapActions(['updateCountAsync']),
    // ...mapMutations(['updateCount']),
    // notify () {
    //   this.$notify({
    //     content: 'test notify',
    //     btn: 'close'
    //   })
    // }
  },
  computed: {
    ...mapState(['loading'])
    // textA () {
    //   return this.$store.state.b.text
    // },
    // ...mapState({
    //   counter: (state) => state.count
    // }),
    // ...mapGetters({
    //   'fullName': 'fullName'
    // })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
#loading{
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(255,255,255,.3)
  z-index 99
  display flex
  align-items center
  justify-content center
}
</style>


