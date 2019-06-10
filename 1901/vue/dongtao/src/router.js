// 路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'


// 0. 模块化编程 全局声明
Vue.use(VueRouter)

// 1. 定义路由组件
import Guide from "./views/guide.vue";
import App from "./views/index.vue"
import Home from "./views/home.vue"
import My from "./views/my.vue"
import Classify from "./views/classify.vue"
import Cart from "./views/cart.vue"
import Search from "./views/search.vue"
import Login from "./views/login.vue"
import Good from "./views/good.vue"



// 2. 配置 routes
const routes = [{
        path: "",
        redirect: { name: 'guide' }
    },
    {
        path: '/guide',
        name: 'guide',
        component: Guide
    },
    {
        path: "/app",
        name: 'app',
        component: App,
        children: [{
                path: "",
                redirect: { name: 'home' }
            },
            {
                path: "home",
                component: Home,
                name: 'home'
            },
            {
                path: "classfiy",
                component: Classify,
                name: 'classify'
            },
            {
                path: "cart",
                component: Cart,
                name: 'cart'
            },
            {
                path: "my",
                component: My,
                name: 'my'
            },
        ]
    },
    {
        path: "/search",
        component: Search,
        name: 'search'
    },
    {
        path: "/login",
        component: Login,
        name: 'login'
    },
    {
        path: "/good/:goodId,",
        component: Good,
        name: 'good'
    },
    {
        path: "*",
        redirect: { name: 'home' }
    }
]

// 3. 创建 router
const router = new VueRouter({
    routes,
    mode: "hash"
})

// 4. 挂载到  根目录
export default router;