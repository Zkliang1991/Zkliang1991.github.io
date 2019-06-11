import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Banner from './views/banner.vue'
import My from './views/my.vue'
import Login from './views/login.vue'
import Search from './views/search.vue'
import Cart from './views/cart.vue'
import Classify from './views/classify.vue'
import Details from './views/details.vue'
import Addresslist from './views/Addresslist.vue'
import Editaddress from './views/Editaddress.vue'
import Payfor from './views/payfor.vue'
import UpdateAddress from './views/updateAddress.vue'
import PayEditaddress from './views/PayEditaddress.vue'
import PayUpdateAddress from './views/PayupdateAddress.vue'
import Collection from './views/collection.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:"banner",
      component:Banner
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/banner',
      name:'banner',
      component:Banner
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/classify',
      name:'classify',
      component:Classify
    },
    {
      path:'/details/:good',
      name:'details',
      component:Details
    },
    {
      path:'/addresslist',
      name:'addresslist',
      component:Addresslist
    },
    {
      path:'/editaddress',
      name:'editaddress',
      component:Editaddress
    },
    {
      path:'/payfor',
      name:'payfor',
      component:Payfor
    },
    {
      path:'/updateAddress',
      name:'updateAddress',
      component:UpdateAddress
    },
    {
      path:'/payeditaddress',
      name:'payeditaddress',
      component:PayEditaddress
    },
    {
      path:'/payupdateAddress',
      name:'payupdateAddress',
      component:PayUpdateAddress
    },
    {
      path:'/collection',
      name:'collection',
      component:Collection
    }
  ]
})
