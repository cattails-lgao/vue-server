<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{ fullName }} {{ counter }}</p>
    <!-- <p>{{ textA }} {{ textPlus }} {{ textC }}</p> -->
    <router-link to="/app">app</router-link>
    <!-- <router-link to="/app/123">app123</router-link> -->
    <!-- <router-link to="/app/456">app456</router-link> -->
    <router-link to="/login">login</router-link>
    <!-- <todo></todo>-->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
    <!-- <router-view name="a"></router-view> -->
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './view/todo/todo.vue'

export default {
  metaInfo: {
    title: '滑稽'
  },
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    // console.log(this.$store)
    // let i = 1
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
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
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  },
  computed: {
    // textA () {
    //   return this.$store.state.b.text
    // },
    ...mapState({
      counter: (state) => state.count
    }),
    ...mapGetters({
      'fullName': 'fullName'
    })
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
</style>


