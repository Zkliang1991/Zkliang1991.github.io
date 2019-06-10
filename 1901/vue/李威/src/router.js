// 路由模块
import Vue from 'vue'
import VueRouter from 'vue-router';

// 0.模块化编程
Vue.use(VueRouter)

// 1.定义路由组件

import Index from "./views/index.vue";
import Home from "./views/home.vue";
import Classify from "./views/classify.vue";
import Shoppingcar from "./views/shoppingcar.vue";
import Mine from "./views/mine.vue";
import Detail from "./views/detail.vue";
import Login from "./views/login.vue";
import Register from "./views/register.vue";
import Search from "./views/search.vue";
import Address from "./views/address.vue";
import Pay from "./views/pay.vue";





// 2.配置 routes
const routes = [{
    path: "/",
    redirect: {
      name: "home"
    }
  },
  {
    path: "/index",
    name: "index",
    component: Index,
    children: [

      {
        path: "home",
        name: "home",
        component: Home,
      },
      {
        path: "classify",
        name: "classify",
        component: Classify,
      },
      {
        path: "shoppingcar",
        name: "shoppingcar",
        component: Shoppingcar,
      },
      {
        path: "mine",
        name: "mine",
        component: Mine,
      },
    ]
  },
  {
    path: "/detail/:goodsId",
    name: "detail",
    component: Detail
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
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/address",
    name: "address",
    component: Address
  },
  {
    path: "/pay",
    name: "pay",
    component: Pay
  },
  {
    path: "*",
    redirect: {
      name: "home"
    }
  },
]

// 3.创建router
const router = new VueRouter({
  routes,
  mode: 'hash'
});

// 4.挂载根实例
export default router;

// 5.路由出口