import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

import Yindao from './views/yindao.vue'
import App from "./views/index.vue";
import Classify from "./views/classify.vue"
import Mine from "./views/mine.vue"
import Car from "./views/car.vue"
import Search from "./views/search.vue"
import Login from "./views/login.vue"
import Good from "@/views/good.vue"
import Test from "@/views/test.vue"
import Jiesuan from "@/views/jiesuan.vue"




const
  routes = [
    {
      path: '/',
      redirect: {name:'yindao'}
    },
    {
      path: '/yindao',
      name: 'yindao',
      component: Yindao
    },
    //{path:"*",redirect:'home'},

    {
      path: '/app',
      name: 'app',
      component: App,
      children: [
        { path: "", redirect: "home" },
        {
          path: "home",
          name: "home",
          component: Home
        },
        {
          path: "classify",
          name: "classify",
          component: Classify

        },
        {
          path: "mine",
          name: "mine",
          component: Mine
        },
        {
          path: "car",
          name: "car",
          component: Car
        }

      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: "/good/:good",
      component: Good,
      name: 'good'
    },
    {
      path:"/test",
      component:Test,
      name:'test'
    },
    {
      path:"/jiesuan/:checkgood",
      component:Jiesuan,
      name:'jiesuan'
    }

  ]


const router = new VueRouter({
  routes,
  mode: "hash"
})

export default router;