import Vue from 'vue'
new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{ name }}</p>
      <p>Name: {{ getName() }}</p>
      <p>Name: {{ number }}</p>
      <p>Name: {{ fullName }}</p>
      <p><input type="text" v-model="number"/></p>
      <p>FirstName:<input type="text" v-model="firstName"/></p>
      <p>LastName:<input type="text" v-model="lastName"/></p>
      <p>name:<input type="text" v-model="name"/></p>
      <p>obj.a:<input type="text" v-model="obj.a"/></p>
    </div>
  `,
  data: {
    firstName: 'Gao',
    lastName: 'Lin',
    number: 0,
    fullName: '',
    obj: {
      a: 0
    }
  },
  computed: {
    name: {
      get () {
        console.log('new Name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  mounted () {
    this.obj = {
      a: 0
    }
  },
  methods: {
    getName () {
      console.log('gitName invated')
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    'obj.a': {
      handler (newName, oldName) {
        console.log('obj.a changed')
        // this.obj.a += 1
      },
      immediate: true // 立马执行handler
      // deep: true
    }
  }
})
