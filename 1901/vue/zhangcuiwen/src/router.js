import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Car from "./views/Car.vue";
import Mine from "./views/Mine.vue";
import Login from "./views/Login.vue";
import App from "./views/Index.vue";
import Register from "./views/register.vue";
import About from "./views/About.vue";
import Classify from "./views/Classify.vue";
import Search from "./views/search.vue";
import Vuexde from "./views/vuexde.vue";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "app",
      component: App
    },
    {
      path: "/app",
      name: "app",
      component: App,
      children: /**-- */ [
        {
          path: "",
          redirect: { name: "home" }
        },
        {
          path: "home",
          component: Home,
          name: "home"
        },
        {
          path: "about",
          component: About,
          name: "about"
        },
        {
          path: "car",
          component: Car,
          name: "car"
        },
        {
          path: "mine",
          component: Mine,
          name: "mine"
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/classify",
      name: "classify",
      component: Classify
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
      path: "/vuexde",
      name: "vuexde",
      component: Vuexde
    }
  ]
});
