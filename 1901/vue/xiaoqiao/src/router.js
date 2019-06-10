import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Index from './views/index.vue'
import Classify from './views/classify.vue'
import Details from './views/details.vue'
import Shopping from './views/shopping.vue'
import My from './views/my.vue'
import Search from './views/search.vue'
import Login from './views/login.vue'
import Site from './views/site.vue'
import SiteAdd from './views/siteAdd.vue'
import One from './views/one.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path:"",
        redirect:{name:'home'}
    },
    {
        path: '/',
        name: 'index',
        component: Index,
        children:[
            {
                path:"",
                redirect:{name:'home'}
            },
            {
                path: '/home',
                name: 'home',
                component: Home,
            },
            {
                path: '/classify',
                name: 'classify',
                component: Classify,
            },
            {
                path: '/shopping',
                name: 'shopping',
                component: Shopping,
            },
            {
                path: '/my',
                name: 'my',
                component: My,
            }
        ]
    },
    {
        path: '/search',
        name: 'search',
        component: Search,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/details',
        name: 'details',
        component: Details,
    },
    {
        path:'/site',
        name:'site',
        component:Site
    },
    {
        path:'/siteAdd',
        name:'siteAdd',
        component:SiteAdd
    },
    {
        path:'/one',
        name:'one',
        component:One
    },
    {
        path:"*",
        redirect:{name:'home'}
    }
  ]
})