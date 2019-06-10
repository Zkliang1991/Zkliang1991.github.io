import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Guide from './views/Guide.vue'
import Index from './views/Index.vue'
import Classify from './views/Classify.vue'
import Cart from './views/Cart.vue'
import Mine from './views/Mine.vue'
import Search from './views/Search.vue'
import Login from './views/Login.vue'
import Good from './views/Good.vue'
import Register from './views/Register.vue'
import jiesuan from './views/jiesuan.vue'
import addplace from './views/addplace.vue'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '',
      redirect:{name: 'home'}
    },
    {
      path:'/guide',
      name:'guide',
      component:Guide
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children:[
        {
          path:"",
          redirect:{name:'home'}
        },
        {
          path:"home",
          name:"home",
          component:Home
        },
        {
          path:"classify",
          name:"classify",
          component:Classify
        },
        {
          path:"cart",
          name:"cart",
          component:Cart
        },
        {
          path:"mine",
          name:"mine",
          component:Mine
        }
      ]
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/good/:goodId',
      name:'good',
      component:Good
    },
    {
      path:'/jiesuan',
      name:'jiesuan',
      component:jiesuan
    },
    {
      path:'/addplace',
      name:'addplace',
      component:addplace
    },
    {
      path:"*",
      redirect:{name:'home'}
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
