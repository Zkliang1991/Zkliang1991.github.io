import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Welcome from './views/welcome.vue'
import App from './views/index.vue'
import Fenlei from './views/fenlei.vue'
import My from './views/my.vue'
// import { login } from '../../server/utils';
import Login from './views/login.vue'
import Myinfo from './views/setmyinfo.vue'
import Info from './views/myinfo.vue'
import Xq from './views/xqbiaoqian.vue'
import GoodsInfo from './views/goodsinfo.vue'
import Myzan from './views/myzan.vue'
import Flinfo from './views/fenleiinfo.vue'
import Dingdan from './views/dingdan.vue'
import Mydinddan from './views/mydinddan.vue'
import Search from './views/search.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
   {
     path:"/app",
     name:"app",
     component:App,
     children:[
       {
        path:"",
        redirect:{name:"home"}
       },{
       path:"home",
       name:"home",
       component:Home
     },{
       path:"fenlei",
       name:"fenlei",
       component:Fenlei    
     },{
       path:"my",
       name:"my",
       component:My
     }]
   },{
     path:"/login",
     name:"login",
     component:Login
   },
   {
     path:"/myinfo",
     name:"myinfo",
     component:Myinfo,
   
     children:[
       {
         path:"",
        redirect:{name:"info"},
       },
       {
         path:"info",
         name:"info",
         component:Info
       },
       {
         path:"xq",
         name:"xq",
         component:Xq
       },{
         path:"myzan",
         name:"myzan",
         component:Myzan
       },{
        path:"/mydinddan",
        name:"mydinddan",
        component:Mydinddan
      }
     ]
   },
   {
     path:"/goodsinfo",
     name:"goodsinfo",
     component:GoodsInfo
   },{
    path:"fenleiinfo",
    name:"fengleiinfo",
    component:Flinfo
 },
 {
   path:"/dingdan",
   name:"dingdan",
   component:Dingdan
 },
 {
   path:"/search",
   name:"search",
   component:Search
 }
  ]
})
