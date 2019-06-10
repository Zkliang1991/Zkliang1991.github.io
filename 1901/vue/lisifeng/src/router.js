import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home.vue'
import Guide from './views/guide.vue'
import APP from "./views/index.vue"
import My from "./views/my.vue"
import Classify from "./views/classify.vue"
import Cart from "./views/cart.vue"
import Search from "./views/search.vue"
import Good from "./views/good.vue"
import Login from "./views/login.vue"
import Register from "./views/register.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"",
      redirect:{name:'guide'}
    },
    {
      path:"/app",
      name:"app",
      component:APP,
      children:[
        {
          path:"",
          redirect:{name:'home'}
        },
        {
          path:"home",
          component:Home,
          name:'home'
        },
        {
          path:"my",
          component:My,
          name:"my"
        },
        {
          path:"classify",
          component:Classify,
          name:"classify"
        },
        {
          path:"cart",
          component:Cart,
          name:"cart"
        }
      ]
    },
    {
      path:"/guide",
      name:'guide',
      component:Guide

    },
    {
      path:"/search",
      component:Search,
      name:"search"
    },
    {
      path:"/login/:username?",
      component:Login,
      name:"login"
    },
    {
      path:"/register",
      component:Register,
      name:"register"
    },
    {
      path:"/good/:goodId",
      component:Good,
      name:'good'
    },
    {
      path:"*",
      redirect:{name:'home'}
    }
  ]
})
