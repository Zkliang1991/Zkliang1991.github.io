import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);//全局声明路由模块

//1 声明组件
import Home from "./views/home.vue";
import Mine from "./views/mine.vue";
import Car from "./views/car.vue";
import Classify from "./views/classify.vue";
import Login from "./views/login.vue";
import GoodDetail from "./views/good-detail.vue";
import Search from "./views/search.vue";
//2 配置路由路径
const routes = [
  {path:"/home",name:"home",component:Home},
  {path:"/mine",name:"mine",component:Mine},
  {path:"/car",name:"car",component:Car},
  {path:"/classify",name:"classify",component:Classify},
  {path:"/login",name:"login",component:Login},
  {path:"/good-detail/:goodId?",name:"goodDetail",component:GoodDetail},
  {path:"/search",component:Search,name:'search'},
  {path:"*",redirect:{name:"home"}},
]
// 3 创建路由对象
const router = new VueRouter({
  routes,
})
// 4 挂载到main.js根实例
export default router; //默认导出 全局唯一