//路由模块
import Vue from 'vue'
import Router from 'vue-router'

//0. 模块化编程  全面声明
Vue.use(Router)


//1.定义路由组件
import Guide from "./views/guide.vue";
import Index from "./views/index.vue";
import Home from "./views/home.vue";
import Classify from "./views/classify.vue"
import Cart from "./views/cart.vue"
import My from "./views/my.vue"
import Login from "./views/login.vue"
import Search from "./views/search.vue"
import Good from "./views/good.vue"
import Payfor from "./views/payfor.vue"
import Addresslist from "./views/addresslist.vue"
import Editaddress from "./views/editaddress.vue"
import UpdateAddress from './views/updateAddress.vue'
import PayEditaddress from './views/PayEditaddress.vue'
import PayUpdateAddress from './views/PayupdateAddress.vue'



//2.配置routes
const routes = [
  {
    path: "",
    redirect: {
      name: 'guide'
    }
  },
  {
    path: "/guide",
    name: 'guide',
    component: Guide
  },
  {
    path: "/app",
    name: 'app',
    component: Index,
    children: [
      {
        path: "",
        redirect: { name: 'home' }
      },
      {
        path: "home",
        component: Home,
        name: 'home'
      },
      {
        path: "classify",
        component: Classify,
        name: 'classify'
      },
      {
        path: "cart",
        component: Cart,
        name: 'cart'
      },
      {
        path: "my",
        component: My,
        name: 'my'
      },
    ]
  },
  {
    path: "/search",
    component: Search,
    name: 'search'
  },
  {
    path:"/good/:goodId",
    component:Good,
    name:'good'
},
  {
    path: "/login",
    component: Login,
    name: "login"
  },
  {
    path: "/payfor",
    component: Payfor,
    name: "payfor"
  },
  {
    path: "*",
    redirect: { name: 'home' }
  },
  {
    path:"/addresslist",
    name:"addresslist",
    component:Addresslist
  },
  {
    path:"/editaddress",
    name:"editaddress",
    component:Editaddress
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
]

// 3. 创建 router
const router = new Router({
  routes,
  mode: "hash"
})


// 4. 挂载  根实例

export  default router;