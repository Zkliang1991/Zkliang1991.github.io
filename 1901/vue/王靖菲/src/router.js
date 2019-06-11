import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Index from './views/index.vue';
import Mine from './views/mine.vue';
import Loginindex from './views/login_index.vue';
import Cart from './views/cart.vue';
import Find from './views/find.vue';
import Home from './views/home.vue';
import Register from './views/register.vue';
import Lives from './views/lives.vue';
import Login from './views/login.vue';
import Goodslist from './views/goodslist.vue';
import Assurance from './views/assurance.vue';
import Orderconfirm from './views/orderconfirm.vue';
import Chooseadress from './views/chooseadress.vue';
import Changeadress from './views/changeadress.vue'


import GoodsDetail from './views/goodsDetail.vue';




export default new Router({
  routes:[
    {
      path:"",
      redirect:{name:"home"}
    },
    {
      path:"/index",
      name:"index",
      component:Index,
      children:[
        {
            path:"/mine",
            name:"mine",
            component:Mine
        },
        {
          path:"/cart",
          name:"cart",
          component:Cart
        },
        {
          path:"/find",
          name:"find",
          component:Find
        },
        {
          path:"/home",
          name:"home",
          component:Home
        },
        {
          path:"/lives",
          name:"lives",
          component:Lives
        },
        {
          path:"/login",
          name:"login",
          component:Login
        }
      ]
    },
    {
      path:"/loginindex",
      name:"loginindex",
      component:Loginindex
    },
    {
      path:"/register",
      name:"register",
      component:Register
    },
    {
      path:"/goodsDetail",
      name:"goodsDetail",
      component:GoodsDetail
    },
    {
      path:"/goodslist",
      name:"goodslist",
      component:Goodslist
    },
    {
      path:"/assurance",
      name:"assurance",
      component:Assurance
    },
    {
      path:"/orderconfirm",
      name:"orderconfirm",
      component:Orderconfirm
    },
    {
      path:"/chooseadress",
      name:"chooseadress",
      component:Chooseadress
    },
    {
      path:"/changeadress",
      name:"changeadress",
      component:Changeadress
    },
    {
      path:"*",
      redirect:{name:'home'}
    },
    
    
  ]
})
