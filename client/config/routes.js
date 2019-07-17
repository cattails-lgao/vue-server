// import Todo from '../view/todo/todo.vue'
// import Login from '../view/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id', // /app/xxx
    path: '/app',
    props: true,
    // props: (route) => ({ id: route.query.a }),
    component: () => import(/* webpackChunkName: "todo-view" */'../view/todo/todo.vue'),
    // component: Todo,
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'system call'
    },
    beforeEnter (to, from, next) {
      // console.log('app route before Enter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login-view" */ '../view/login/login.vue')
    // component: Login
  }
]
