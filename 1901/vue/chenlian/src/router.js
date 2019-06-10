import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/index.vue'
import Home from './views/home.vue'
import Classify from './views/classify.vue'
import Good from './views/good.vue'
import Cart from './views/cart.vue'
import My from './views/my.vue'
import Login from './views/login.vue'
import Register from './views/register.vue'
import Search from './components/search.vue'
import Xuan from './views/xuan.vue'


// ------------------ -----------------


//模块化 全局路由
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'home',
      // component: Home,
      redirect: '/home'
    },
    {
      path: '/xuan',
      name: 'xuan',
      component: Xuan
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/good/:goodId',
      name: 'good',
      component: Good,
      // meta: {
      //   keepAlive: true // 需要被缓存
      // }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      // meta: {
      //   keepAlive: true // 需要被缓存
      // }
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
