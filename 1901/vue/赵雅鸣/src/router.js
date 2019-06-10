import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Demo from './views/Demo.vue'
import Mine from './views/Mine.vue'
import Shoppingcar from './views/Shoppingcar.vue'
import Classify from './views/Classify.vue'
import Search from './views/Search.vue'
import Login from './views/Login.vue'
import Details from './views/Details.vue'
import My from './views/my.vue'
import UploadImg from "@/components/uploadImg.vue"
import Dizhi from './views/dizhi.vue'
import Dizhilist from './views/dizhilist.vue'
import Dizhialter from './views/dizhialter.vue'
import Jiesuan from './views/jiesuan.vue'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: "*",
      redirect: {
        name: 'home'
      }
    },
    {
      path: "/login",
      component: Login,
      name: 'login'
    },
    {
      path: "/jiesuan",
      component: Jiesuan,
      name: 'jiesuan'
    },
    {
      path: "/search",
      component: Search,
      name: 'search'
    },
    {
      path: "/dizhialter",
      component: Dizhialter,
      name: 'dizhialter'
    },
    {
      path: "/dizhilist",
      component: Dizhilist,
      name: 'dizhilist'
    },
    {
      path: "/dizhi",
      component: Dizhi,
      name: 'dizhi'
    },
    {
      path:"/uploadImg",
      component:UploadImg,
      name:'uploadImg'
  },
    {
      path: "/details/:goodId",
      component: Details,
      name: 'details'
    },
    {
      path: "/my",
      component: My,
      name: 'my'
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/',
      name: 'demo',
      component: Demo,
      children: [{
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/shoppingcar',
          name: 'shoppingcar',
          component: Shoppingcar
        },
        {
          path: '/mine',
          name: 'mine',
          component: Mine
        },
        {
          path: '/classify',
          name: 'classify',
          component: Classify
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})