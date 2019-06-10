import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from "vue-router";


Vue.use(Router)

import Index from "./views/index.vue";
import Home from "./views/home.vue";
import My from "./views/my.vue";
import Classify from "./views/classify.vue";
import Cart from "./views/cart.vue";
import Search from "./views/search.vue";
import Guide from "./views/guide.vue";
import Login from "./views/login.vue";
import Details from "./views/details.vue";
import Address from "./views/address.vue";
import Register from "./views/register.vue";
import Account from "./views/account.vue";
 


const routes = [
  {
    path:"",
    redirect:{name:'guide'}
  },
  {
    path:"/guide",
    name:'guide',
    component:Guide,
  },
  {
    path: "/index",
    name: "index",
    component: Index,
    children: [{
        path: "",
        redirect: {
          name: 'home'
        }
      },
      {
        path: "home",
        component: Home,
        name: "home"
      },
      {
        path: "classify",
        component: Classify,
        name: 'classify'
      },
      {
        path: "cart",
        component: Cart,
        name: "cart"
      },
      {
        path: "my",
        component: My,
        name: 'my'
      }
    ]
  },
  {
    path:"search",
    component:Search,
    name:'search'
  },
  {
    path:"login",
    component:Login,
    name:'login'
  },
  {
    path:"register",
    component:Register,
    name:'register'
  },
  
  {
    path:"/details/:movieId",
    component:Details,
    name:"details"
  },
  {
    path:"/address",
    component:Address,
    name:"address"
  },
  {
    path:"account",
    component:Account,
    name:"account"
  },
  
  {
    path: "*",
    redirect: {
      name: 'home'
    }
  }

]

const router = new VueRouter({
  routes,
  mode: "hash"
})

export default router;