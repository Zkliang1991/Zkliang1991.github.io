

// 路由模块  
import Vue from "vue";
import VueRouter from "vue-router";

// 0.  模块化编程 全面声明
Vue.use(VueRouter)     

// 1. 定义路由组件  

import App from "./views/index.vue";
import Home from "./views/home.vue";
import My from "./views/my.vue";
import Classify from "./views/classify.vue";
import Cart from "./views/cart.vue";
import Search from "./views/search.vue";
import Goodsdetail from "./views/goodsdetail.vue";
import Login from "./views/login.vue";


// 2. 配置 routes
const routes = [
  
    {
        path:"",
        redirect:{name:'app'}
    },
  
    {
        path:"/app",
        name:'app',
        component:App,
        children:[
            {
                path:"",
                redirect:{name:'home'}
            },
            {
                path:"home",
                component:Home,
                name:'home',
               
            },
            {
                path:"classify",
                component:Classify,
                name:'classify'
            },
            {
                path:"cart",
                component:Cart,
                name:'cart'
            },
            {
                path:"my",
                component:My,
                name:'my'
            },
        ],
    },
    {
        path:"/search",
        component:Search,
        name:'search'
    },
    {
        path:"/goodsdetail/:goodId",
        name:"goodsdetail",
        component:Goodsdetail,
      },
      {
        path:"/login",
        component:Login,
        name:"login",
      },
]

// 3. 创建 router
const  router = new VueRouter({
    routes,
    mode:"hash"
})

// 4. 挂载 根实例  

export default router;