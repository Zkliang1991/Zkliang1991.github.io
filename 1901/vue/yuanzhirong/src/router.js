import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router);

import Guide from "./views/guide.vue";
import Index from "./views/index.vue";
import Car from "./views/car.vue";
import Classify from "./views/classify.vue";
import Mine from "./views/mine.vue";
import Login from "./views/login.vue";
import Register from "./views/register.vue";
import Search from "./views/search.vue";
import Gooddetail from "./views/gooddetail.vue";
import Address from "./views/address.vue";
import Addresslist from "./views/addresslist.vue";
import Exit from "./views/exit.vue";
import Payment from "./views/payment.vue";
import Shophistory from "./views/shophistory.vue";

const routes = [{
        path: "",
        redirect: {
          name: 'guide'
        }
      },
      {
        path: '/guide',
        name: 'guide',
        component: Guide
      },
      {
        path: "/index",
        name: 'index',
        component: Index,
        children: [{
            path: "",
            redirect: {
              name: 'home'
            },
          },
          {
            path: 'home',
            component: Home,
            name: 'home'
          }, {
            path: 'mine',
            component: Mine,
            name: 'mine'
          }, {
            path: 'car',
            component: Car,
            name: 'car'
          }, {
            path: 'classify',
            component: Classify,
            name: 'classify'
          },{
            path:'/search',
            component:Search,
            name:'search'
          }
        ]
      },{
        path:'/login',
        component:Login,
        name:'login'
      },{
        path:'/register',
        component:Register,
        name:'register'
      },{
        path:'/gooddetail',
        component:Gooddetail,
        name:'gooddetail'
      },{
        path:'/addresslist',
        component:Addresslist,
        name:'addresslist'
      },{
        path:'/address',
        component:Address,
        name:'address'
      },{
        path:'/exit',
        component:Exit,
        name:'exit'
      },{
        path:'/payment',
        component:Payment,
        name:'payment'
      },{
        path:'/shophistory',
        component:Shophistory,
        name:'shophistory'
      }

]

//3. 创建 路由实例
const router = new Router({
  routes,
  mode: "hash",
});

//4. 导入到 根实例
export default router;