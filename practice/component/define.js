import Vue from 'vue'

const component = {
  props: {
    active: {
      // type: Boolean,
      // required: true // 必须传值
      // default () {
      //   return {

      //   }
      // }, // required 和 default 不会同时存在
      validator (val) {
        return typeof val === 'boolean'
      }
    },
    propOne: Number
  },
  template: `
    <div>
      <input type="text" v-model="text"/>
      <span @click="handleChange">{{ propOne }}</span>
      <span v-show="active">see mi fi active</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

Vue.component('CompOne', component)

new Vue({
  comments: {
    CompOne: component
  },
  data: {
    prop1: 0,
    prop2: 1
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  mounted () {
    console.log(this.$refs.comp1)
  },
  el: '#root',
  template: `
    <div>
      <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
      <comp-one :active="false" :propOne="prop2"></comp-one>
    </div>
  `
})
