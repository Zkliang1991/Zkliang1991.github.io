import Vue from 'vue';
import Router from 'vue-router'


//0 全局声明路由模块
Vue.use(Router)

// 1.声明组件
import Home from './views/home.vue'
import Mine from './views/mine.vue'
import Guide from './views/guide.vue'
import Index from './views/index.vue'
import Classify from "./views/classify.vue"
import Cart from "./views/cart.vue"
// import Comment from "./views/comment.vue"
import Search from "./views/search.vue"
import Login from "./views/login.vue"
import Register from "./views/register.vue"
import Goods from "./views/goods.vue"
import Account from "./views/account.vue"
import Location from "./views/location.vue"

// 2.配置路由参数
const routes = [
    { path: "", redirect: { name: 'guide' } },
    { path: "/guide", component: Guide, name: "guide" }, {
        path: "/index",
        component: Index,
        name: 'index',
        children: [
            { path: "", redirect: { name: "home" } },
            { path: "home", component: Home, name: "home" },
            { path: "classify", component: Classify, name: "classify" },
            { path: "cart", component: Cart, name: "cart" },
            { path: "mine", component: Mine, name: "mine" },
            // { path: "cart", component: Cart, name: "cart" },
            // { path: "/mine", component: Mine, name: "mine" },
        ]
    },
    {
        path: "/search",
        component: Search,
        name: "search"
    },
    {
        path: "/goods/:goodId",
        component: Goods,
        name: "goods"
    },
    {
        path: "/login",
        component: Login,
        name: "login"
    },
    {
        path: "/register",
        component: Register,
        name: "register"
    },
    {
        path: "/account",
        component: Account,
        name: "account"
    },
    {
        path: "/location",
        component: Location,
        name: "location"
    },
    {
        path: "*",
        redirect: { name: "home" }
    }
]

// 3.创建路由对象
const router = new Router({
    routes,
    mode: 'hash'
})


// 4.挂载 根实例   默认导出
export default router;