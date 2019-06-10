import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

//定义路由组件
import Home from "./views/home.vue";
import App from "./views/index.vue";
import Guide from "./views/guide.vue";
import Classify from "./views/classify.vue";
import Cart from "./views/cart.vue";
import My from "./views/my.vue";
import Search from "./views/search.vue";
import Login from "./views/login.vue";
import Good from "./views/good.vue";
import Register from "./views/register.vue";
import AddressList from "./views/addressList.vue";
import InsertAdd from "./views/insertAdd.vue";
import AddressEditer from "./views/addressEditer.vue";
import JieSuan from "./views/jiesuan.vue";
import UserInfo from "./views/userinfo.vue"
import Now from "./views/now.vue"
import Order from "./views/order.vue"

//配置routes

const routes = [
  { path: "", redirect: { name: "home" } },
  {path:"/search",component:Search,name:"search"},
  { path: "/guide", component: Guide, name: "guide" },
  {path:"/login",component:Login,name:"login"},
  {path:"/register",component:Register,name:"register"},
  {path:"/addressList",component:AddressList,name:"addressList"},
  {path:"/insertAdd",component:InsertAdd,name:"insertAdd"},
  {path:"/jiesuan",component:JieSuan,name:"jiesuan"},
  {path:"/userinfo",component:UserInfo,name:"userinfo"},
  {path:"/now",component:Now,name:"now"},
  {path:"/order",component:Order,name:"order"},
  
  // addressEditer.vue
  {path:"/addressEditer",component:AddressEditer,name:"addressEditer"},
  {
    path:"good/:goodId",
    component:Good,
    name:"good"
  },
  { path: "*", redirect: { name: "home" } },
  {
    path: "/app",
    name: "app",
    component: App,
    children: [
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
        path: "classify",
        component: Classify,
        name: "classify"
      },
      {
        path: "cart",
        component: Cart,
        name: "cart"
      },
      {
        path: "my",
        component: My,
        name: "my"
       
      },
     
    ]
  }
];

//创建router

const router = new Router({
  routes,
  mode: "hash"
});

export default router;
