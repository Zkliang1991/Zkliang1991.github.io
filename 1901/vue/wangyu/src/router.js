//路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'


//全局声明
Vue.use(VueRouter)
//定义路由组件
import Guide from "./views/guide.vue";
import Search from "./views/search.vue";
import App from "./views/index.vue";
import Home from "./views/home.vue";
import Focus from "./views/fcous.vue";
import Zuan from "./views/zuan.vue";
import Msg from "./views/msg.vue";
import Mine from "./views/mine.vue";
import Login from "./views/login.vue";
import Register from "./views/register.vue";
import Xiangqing from "./views/xiangqing.vue";
import Cart from "./views/cart.vue";
import UploadImg from "./components/uploadImg.vue";

//配置 routes
const routes = [{
    path: "",
    redirect: {
      name: "guide"
    }
  },
  {
    path: "/guide",
    name: "guide",
    component: Guide
  },
  {
    path: "/uploadImg",
    name: "uploadImg",
    component: UploadImg
  },
  {
    path: "/xiangq",
    name: "xiangq",
    component: Xiangqing
  },
  {
    path: "cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/index",
    name: "index",
    component: App,
    children: [{
        path: "home",
        name: "home",
        component: Home
      },
      {
        path: "fcous",
        name: "fcous",
        component: Focus
      },
      {
        path: "zuan",
        name: "zuan",
        component: Zuan
      },
      {
        path: "msg",
        name: "msg",
        component: Msg
      },
      {
        path: "mine",
        name: "mine",
        component: Mine
      }
    ]
  },
  {
    path: "*",
    redirect: {
      name: "home"
    }
  }
]

//创建 router 
const router = new VueRouter({
  routes,
  mode: "hash"
})

export default router;