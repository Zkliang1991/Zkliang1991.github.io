
// 路由模块 
import Vue from 'vue'
import VueRouter from 'vue-router'

// 0.  模块化编程 全局声明
Vue.use(VueRouter)

// 1. 定义路由组件  

import Index from "./views/index.vue";
import Goods from "./views/goods.vue";
import Home from "./views/home.vue";
import Shoppingcar from "./views/shoppingcar.vue";
import My from "./views/my.vue";
import Guide from "./views/guide.vue";
import Search from "./views/search.vue";
import Goodsinfo from "./views/goodsinfo.vue";
import Login from "./views/login.vue";
import Register from "./views/register.vue"
import AddressEdit from "./views/AddressEdit.vue"
import AddressList from "./views/AddressList.vue"


  

// 2. 配置 routes
const routes = [
      {
        path:"",
        redirect:{name:'guide'}
      },   
      {
        path:"/guide",
        component:Guide,
        name:'guide'
      },
      {
        path:"/index",
        name:'index',
        component:Index,
        children:[
            {
              path:"",
              redirect:{name:'home'}
            }, 
           
            {
              path:"home",
              component:Home,   
              name:'home'
            },
            {
              path:"goods",
              component:Goods,
              name:'goods'
            },
            {
              path:"shoppingcar",
              component:Shoppingcar,
              name:'shoppingcar'
            },
            {
              path:"my",
              component:My,
              name:'my'
            },
            {
              path:"*",
              redirect:{name:'home'}
            },  

        ]
      },
      {
        path:"/goodsinfo/:goodId",
        component:Goodsinfo,
        name:'goodsinfo'
      },
      {
        path:"/search",
        component:Search,
        name:'search'
      },
      {
        path:"/login",
        component:Login,
        name:'login'
      },
      {
        path:"/register",
        component:Register,
        name:'register'
      },
      {
        path:"/AddressEdit",
        component:AddressEdit,
        name:'AddressEdit'
      },
      {
        path:"/AddressList",
        component:AddressList,
        name:'AddressList'
      },
      {
        path:"*",
        redirect:{name:'guide'}
      },
    
];

// 3. 创建 router
const  router = new VueRouter({
  routes,
  mode:"hash"
})

// 4. 挂载 根实例  

export default router;
