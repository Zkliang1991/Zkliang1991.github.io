import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

//0.模块化编程   全面声明
Vue.use(Router)

//1.定义路由组件
import Index from "./views/index.vue";
import Home1 from "./views/home1.vue";
import Login from "./views/login.vue";
import Register from "./views/register.vue";
import Classify from "./views/classify.vue";
import My from "./views/my.vue";
import Cart from "./views/cart.vue"
import { Search } from 'vant';
import Ss from "./views/ss.vue"
import Details from "./views/details.vue"

//2.配置路由
const routes = [{
    path: "",
    redirect: { name: "index" }
}, {
    path: "/login",
    name: "login",
    component: Login
}, {
    path: "/register",
    name: "register",
    component: Register
}, {
    path: "/index",
    name: "index",
    component: Index,
    children: [{
        path: "",
        redirect: { name: "home1" }
    }, {
        path: "home1",
        component: Home1,
        name: "home1"
    }, {
        path: "classify",
        component: Classify,
        name: "classify"
    }, {
        path: "my",
        component: My,
        name: "my"
    }, {
        path: "cart",
        component: Cart,
        name: "cart"
    }, {
        path: "ss",
        component: Ss,
        name: "ss"
    }, {
        path: "details/:goodId",
        component: Details,
        name: "details"
    }]
}]

//3 创建路由
const router = new Router({
    routes,
    mode: "hash"
})

//4 挂载 根组件
export default router;

// export default new Router({[

//         {
//               path: '/',
//               name: 'home',
//               component: Home
//           },
//           {
//               path: '/about',
//               name: 'about',
//               // route level code-splitting
//               // this generates a separate chunk (about.[hash].js) for this route
//               // which is lazy-loaded when the route is visited.
//               component: () =>
//                   import ( /* webpackChunkName: "about" */ './views/About.vue')
//           }
//     ]
// })