import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store"

// 0
Vue.use(VueRouter);  // 全局声明 路由模块

// 1 声明组件
import Login from "./views/login.vue"
import Zhuce from "./views/zhuce.vue"
import Home from "./views/home.vue"
import Mine from "./views/mine.vue"
import Guide from "./views/guide.vue"
import Index from "./views/index.vue"
import Classify from "./views/classify.vue"
import Fenlei from "./views/fenlei.vue"
import Car from "./views/car.vue"
import Search from "./views/search.vue"
import Shopdetail from "./views/shopdetail.vue"
import Address from "./views/address.vue"
import fukuan from "./views/fukuan.vue"
import wuliu from "./views/wuliu.vue"
import pinglun from "./views/pinglun.vue"
import xiaofei from "./views/xiaofei.vue"
import xiaofeizhanbi from "./views/xiaofeizhanbi.vue"
import liaotian from "./views/liaotian.vue"

// 2. 配置路由参数
const routes = [
  {path:"/",redirect:{name:"guide"}},
  {path:"/guide",component:Guide,name:"guide"},
  {path:"/index",component:Index,name:"index",
    children:[
      { path:"",redirect:{name:'home'}},
      { path:"home",component:resolve => require(['./views/home.vue'], resolve) ,name:"home"},
      { path:"classify",component:Classify,name:"classify"},
      { path:"fenlei",component:Fenlei,name:"fenlei"},
      { path:"car",component:Car,name:"car",
        beforeEnter(to,from,next){  // 进入路由之前的守卫
          if(store.state.username){
            
          }else{
            router.push({name:"login"})
          };
          next();
        }
      },
      { path:"mine",component:Mine,name:"mine",
        beforeEnter(to,from,next){  // 进入路由之前的守卫
          if(store.state.username){

          }else{
            router.push({name:"login"})
          };
          next();
        }
      },
    ]
  },
  {path:"/login",name:"login",component:Login},
  {path:"/zhuce",name:"zhuce",component:Zhuce},
  {path:"/search",component:Search,name:'search'},
  {path:"/shopdetail",component:Shopdetail,name:'shopdetail'},
  {path:"/address",component:Address,name:'address'},
  {path:"/fukuan",component:fukuan,name:'fukuan'},
  {path:"/wuliu",component:wuliu,name:'wuliu'},
  {path:"/pinglun",component:pinglun,name:'pinglun'},
  {path:"/xiaofei",component:xiaofei,name:'xiaofei'},
  {path:"/xiaofeizhanbi",component:xiaofeizhanbi,name:'xiaofeizhanbi'},
  {path:"/liaotian",component:liaotian,name:'liaotian'},
  {path:"*",redirect:{name:"home"}},
]

// 3. 创建路由对象
const router = new VueRouter({
  routes,
})

// 4. 挂载 根实例
export default router;   // 默认导出  全局唯一 
