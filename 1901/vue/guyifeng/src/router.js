import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Daohang from "./views/daohang.vue";
import Index from "./views/index.vue";
import Home from "./views/home.vue";
import Mine from "./views/mine.vue";
import List from "./views/list.vue";
import Cart from "./views/cart.vue";
import Search from "./views/search.vue";
import Login from "./views/login.vue";
import Good from "./views/good.vue";
import About from "./views/about.vue";
import Dizhi from "./views/dizhi.vue";
import Xgdz from "./views/xgdz.vue";

export default new Router({
  routes: [
    {
      path: "",
      redirect: { name: 'guide' }
    },
    
    {
      path: "/daohang",
      name: 'daohang',
      component: Daohang
    },
    {
      path: "/index",
      name: 'index',
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
          path: "about",
          component: About,
          name: 'about'
        },
        {
          path: "list",
          component: List,
          name: 'list'
        },
        {
          path: "cart",
          component: Cart,
          name: 'cart'
        },
        {
          path: "mine",
          component: Mine,
          name: 'mine'
        },
      ]
    },
    {
      path: "/search",
      component: Search,
      name: 'search'
    },
    {
      path: "/login",
      component: Login,
      name: "login"
    },
    {
      path: "/good",
      component: Good,
      name: 'good'
    },
    {
      path: "/dizhi",
      component: Dizhi,
      name: "dizhi"
    },
    {
      path: "/xgdz",
      component: Xgdz,
      name: "xgdz"
    },
    {
      path: "*",
      redirect: { name: 'home' }
    }
  ]
})
