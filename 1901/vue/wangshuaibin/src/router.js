//路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'
//全面声明
Vue.use(VueRouter)
//1.定义路由组件
import Guide from './views/guide.vue';
import Index from './views/index.vue';
import Home from './views/home.vue';
import My from './views/my.vue';
import Car from './views/car.vue';
import Classify from './views/classify.vue';
import Search from './views/search.vue'
import Login from './views/login.vue';
import Detail from './views/detail.vue';
import Options from './views/options.vue'
import Addedit from './views/addedit.vue'
import Mydz from './views/mydz.vue'
import Buy from './views/buy.vue'
const routes = [{
    path: "/index",
    name: "index",
    component: Index,
    children: [{
        path: "",
        redirect: {
          name: "home"
        }
      },
      {
        path: "home",
        component: Home,
        name: 'home'
      },
      {
        path: "classify",
        component: Classify,
        name: "classify"
      },
      {
        path: "car",
        component: Car,
        name: "car"
      },
      {
        path: "my",
        component: My,
        name: "my"
      }
    ]
  },
  {
    path: '/guide',
    name: 'guide',
    component: Guide
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
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/options',
    name: 'options',
    component: Options
  },
  {
    path: '/addedit',
    name: 'addedit',
    component: Addedit
  },
  {
    path: '/mydz',
    name: 'mydz',
    component: Mydz
  },
  {
    path: '/buy',
    name: 'buy',
    component: Buy
  },
  {
    path: "*",
    redirect: {
      name: "home"
    }
  }
]


const router = new VueRouter({
  routes,
  mode: "hash"
})

router.afterEach((to, from, next) => {
  console.log(to) // 到哪个页面去？
  console.log(from) // 从哪个页面来？
  // next() // 一个回调函数
})
export default router;