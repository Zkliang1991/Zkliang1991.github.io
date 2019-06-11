import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import Index from "./views/index.vue";

import Home from "./views/home.vue";
import Goods from "./views/goods.vue";
import Classify from "./views/classify.vue";
import Shoppingcar from "./views/shoppingcar.vue";
import Mine from "./views/mine.vue";
import Guide from "./views/guide.vue";

import Login from "./views/login.vue";
import Zhuce from "./views/zhuce.vue";
import Search from "./views/search.vue";
import Detail from "./views/detail.vue";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"",
      redirect:{name:"guide"}
    },
    {
      path:"/detail",
      name:"detail",
      component:Detail
    },
    {
      path:"/search",
      name:"search",
      component:Search
    },
    {
      path:"/login",
      name:"login",
      component:Login,
    },
    {
      path:"/zhuce",
      name:"zhuce",
      component:Zhuce
    },
    {
      path:"/guide",
      name:"guide",
      component:Guide
    },
    {
      path:"/index",
      name:"index",
      component:Index,
      children:[
        {
          path:"/home",
          name:"home",
          component:Home,
        },
        {
          path:"/goods",
          name:"goods",
          component:Goods
        },
        {
          path:"/classify",
          name:"classify",
          component:Classify
        },
        {
          path:"/shoppingcar",
          name:"shoppingcar",
          component:Shoppingcar
        },
        {
          path:"/mine",
          name:"mine",
          component:Mine
        }
      ]
    }
  ]
})
