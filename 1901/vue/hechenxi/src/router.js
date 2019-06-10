import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index.vue';
import Home from './views/home.vue';
import My from './views/my.vue';
import Cart from './views/cart.vue';
import Classify from './views/classify.vue';
import Search from "./views/search.vue";
import Good from './views/good.vue';
import Login from './views/login.vue';
import Addresslist from './views/addresslist.vue';
import Addressedit from './views/addressedit.vue';
Vue.use(Router)

export default new Router({
  routes: [{
      path: "",
      redirect: {
        name: 'home'
      }
    }, {
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
          name: "home",
          component: Home,
        },
        {
          path: "cart",
          name: "cart",
          component: Cart,
        },
        {
          path: "classify",
          name: "classify",
          component: Classify,
        },
        {
          path: "my",
          name: "my",
          component: My,
        }
      ]
    },
    {
      path: "/search",
      component: Search,
      name: 'search'
    },
    {
      path: "/good/:goodId",
      name: "good",
      component: Good
    },
    {
      path: "/login",
      component: Login,
      name: 'login'
    },
    {
      path: "/addresslist",
      component: Addresslist,
      name: 'addresslist'
    }, {
      path: "/addressedit",
      component: Addressedit,
      name: 'addressedit'
    },
  ]
})