import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Carousel from './views/Carousel.vue'
import My from "./views/my.vue"
import Classify from "./views/classify.vue"
import Cart from "./views/cart.vue"
import Details from "./views/details.vue"
import Login from "./views/login.vue"
import Col from "./views/col.vue"
import Xinzeng from "./views/xinzeng.vue"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/home',
      name:'home',
      component:Home,
    },
    {
        path:'/classify',
        component:Classify,
        name:'classify'
    },
    {
        path:'/cart',
        component:Cart,
        name:'cart'
    },
    {
        path:'/my',
        component:My,
        name:'my'
    },
    {
      path: "",
      redirect: { name: 'carousel' }
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    },
    {
      path: "*",
      redirect: { name: 'home' }
    },
    {
      path:'/details',
      component:Details,
      name:'details'
  },
  {
    path:'/login',
    component:Login,
    name:'login'
},
{
  path:'/col',
  component:Col,
  name:'col'
},
{
  path:'/xinzeng',
  component:Xinzeng,
  name:'xinzeng'
},
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
