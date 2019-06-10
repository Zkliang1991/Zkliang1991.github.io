import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import {  Toast } from "mint-ui";

import Home from "./views/home.vue";
import Mine from "./views/mine.vue";
import Login from "./views/login.vue";
import Register from "./views/register.vue";
import Shangcheng from "./views/shangcheng.vue";
import Shopcar from "./views/shopcar.vue";
import Index from "./views/index.vue";
import Good_detail from "./views/goods_detail.vue";
import Search from "./views/search.vue";
import Address from "./views/address.vue";
import Address2 from "./views/address2.vue";
import PersonData from "./views/persondata.vue";
import Mycol from "./views/myCol.vue";
import Order from "./views/order.vue";
const routes = [
{path:"/index",component:Index,name:"index",
children:[
{path:"home",component:Home,name:"home"},
{path:"shangcheng",component:Shangcheng,name:"sc"},
{path:"shopcar",component:Shopcar,name:"shopcar"},
{path:"mine",component:Mine,name:"mine"},
{path:"*",redirect:{name:"home"}}
]
},
{path:"/good_detail/:_id?",component:Good_detail,name:'good_detail'},
{path:"/register",component:Register,name:"register"},
{path:"/login",component:Login,name:"login"},
{path:"/search",component:Search,name:"search"},
{path:"/address",component:Address,name:"address"},
{path:"/address2",component:Address2,name:"address2"},
{path:"/persondata",component:PersonData,name:"persondata"},
{path:"/mycol",component:Mycol,name:"mycol"},
{
  path:"/order",
  component:Order,
  name:"order"
},
{path:"*",redirect:{name:"index"}}
]

const router = new VueRouter({
  routes
})

export default router;