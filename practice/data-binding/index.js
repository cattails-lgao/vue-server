import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `
  //   <div :id="aaa" @click="handleClick">
  //     <p v-html="html"></p>
  //   </div>
  // `,
  template: `
    <div
      :class="[{active: isActive}]"
      :style="[style,style2]"
    >
      <p>{{ getJoinedArr(arr) }}</p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: `<span>123</span>`,
    aaa: 'main',
    style: {
      color: 'red',
      appearance: 'none'
    },
    style2: {
      color: 'black'
    }
  },
  computed () {},
  methods: {
    handleClick () {
      console.log('click')
    },

    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
