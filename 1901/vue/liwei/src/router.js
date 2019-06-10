import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

//引入index组件
import Index from '@/views/index.vue'
import Home from '@/views/home.vue'
import Class from '@/views/class.vue'
import Car from '@/views/car.vue'
import Mine from '@/views/mine.vue'
import Search from '@/views/search.vue'
import Good from '@/views/good.vue'
import Login from '@/views/login.vue'
import Register from '@/views/register.vue'
import Address from '@/views/address.vue'
import AddressEdit from '@/views/addressedit.vue'
import Order from '@/views/order.vue'
import OrderMent from '@/views/orderment.vue'


const routes = [
    {path:"/index",component:Index,name:'index',
        children:[
            {path:'home',component:Home,name:'home'},
            {path:'class',component:Class,name:'class'},
            {path:'car',component:Car,name:'car'},
            {path:'mine',component:Mine,name:'mine'},
        ]
    },
    {path:"/search",component:Search, name:'search' },
    {path:"/good",component:Good,name:'good'},
    {path:"/login",component:Login,name:'login'},
    {path:"/register",component:Register,name:'register'},
    {path:"/address",component:Address,name:'address'},
    {path:"/addressedit",component:AddressEdit,name:'addressedit'},
    {path:"/order",component:Order,name:'order'},
    {path:"/orderment",component:OrderMent,name:'orderment'},
    {path:'*',redirect:{name:'home'}},
    {path:'',redirect:{name:'home'}},
    {path:'/',redirect:{name:'home'}}
]

let router = new VueRouter({
    routes
})

//引入store 等下要修改vuex的store中的state
import store from './store.js'
import {CHANGE_FOOTE_SELECT} from './mutationType/index.js'

import { Dialog } from 'vant';
Vue.use(Dialog)

//此处是为了将每一个当前路由的路由name提交到state状态树中,共全应用各组件共享
router.beforeEach((to,from,next)=>{
    if(sessionStorage.userinfo||to.name!="car"){
        store.commit(CHANGE_FOOTE_SELECT,to.name);
    }
    if(to.name=="search"){
        //store.commit(CHANGE_SEARCHED_FLAG);
    }
    if(to.name=="login"&&from.name!="register"){
        localStorage.routename=from.name
    }
    //此mutation用来清空搜索状态
    if(to.name=="search"){
        store.commit('qingkong');
    }
    if(!sessionStorage.userinfo){
    if(to.name=="car"){
        
            Dialog.confirm({
                title: '登录验证',
                message: '您还没有登录,无法查看购物车,是否立即去登录'
              }).then(() => {
                next({name:'login'})
              }).catch(() => {
                 
            });
        
        }
    }

    //以下路由需要更新购物车数量
    if(sessionStorage.userinfo){
        if(to.name=="home"||to.name=="class"||to.name=="car"||to.name=="mine"||to.name=="good"){
            store.dispatch('getUserCar') //请求购物车,底部footer显示购物车数量,避免刷新导致数据丢失
        }
    }
    

    if(sessionStorage.userinfo||to.name!="car"){
        next()
    }
})

export default router