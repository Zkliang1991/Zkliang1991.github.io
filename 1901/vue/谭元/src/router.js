import Vue from "vue";
import VueRouter from "vue-router";


//0 模块化编程 全面声明
Vue.use(VueRouter)
//1 定义路由组件
import Guide from "./views/guide.vue"; //页面加载登陆显示的界面
import Index from "./views/index.vue"; //首页路由管控子路由界面
import Home from "./views/home.vue"; //首页页面
import Stock from "./views/stock.vue"; //财务/库存页面
import Statis from "./views/statis.vue";
import Basics from "./views/basics.vue";
import Register from "./views/register.vue";

import SalesDetail from "./views/salesDetail.vue";   //进入销售详情页面
import SalesDetail1 from "./views/salesDetail1.vue"; //进入挂单页面
import SalesReturn  from "./views/salesReturn.vue";  //进入退货单

import  Purchasemx  from "./views/purchasemx.vue"   //进入采购明细界面
import  Purchased  from "./views/purchased.vue"   //进入采购单界面
import  Purchaseth  from "./views/purchaseth.vue"   //进入采购退货页面

import Goods from "./views/goods.vue"   //点击进入商品页面
import Client from "./views/client.vue" //点击进入客户页面
import Supplier from "./views/supplier.vue" // 点击进入供应商页面

import Inventory from "./views/inventory.vue" //点击进入库存界面
//2 配置routes
const routes = [{ //页面打开就进入guide页面路由
        path: "",
        redirect: {
            name: 'guide'
        }
    },
    {   //页面一加载就进入登陆界面
        path: "/guide",
        name: 'guide',
        component: Guide,

    },
    { //点击注册界面进入注册界面
        path:"/register",
        component:Register,
        name:'register'
    },
    {
        path: "/index",
        name: 'index',
        component: Index,
        children: [
            {   //index后面什么都不输入的话 就直接定在home界面
                path:"",
                redirect:{
                    name:'home'
                }
            },
            {    //定义主页的路由
                path: "home",
                component: Home,
                name: 'home',
            },
            {   //财务/ 库存路由
                path:"stock",
                component:Stock,
                name:'stock',
 
            },
            {   //统计页面路由 
                path:"statis",
                component:Statis,
                name:'statis',

            },
            {  //我是基础控制页面
                path:"basics",
                component:Basics,
                name:'basics',

            },
            {  //我是销售明细页面
                path:"/salesDetail",
                component:SalesDetail,
                name:'salesDetail',
            },
            {  //我是销售挂单页面
                path:'salesDetail1',
                component:SalesDetail1,
                name:'salesDetail1',
            },
            {  //我是退货单页面
                path:'salesReturn',
                component:SalesReturn,
                name:"salesReturn"
            },
            { //我是采购详情页面
                path:'purchasemx',
                component:Purchasemx,
                name:'purchasemx'
            },
            { //我是采购单页面
                path:'purchased',
                component:Purchased,
                name:'purchased'
            },
            { //我是采购退货页面
                path:'purchaseth',
                component:Purchaseth,
                name:'purchaseth'
            },
            { //我是进入商品页面
                path:"goods",
                component:Goods,
                name:'goods'
            },
            {//我是客户页面路由
               path:"client",
               component:Client,
               name:'client'   
            },
            {//点击进入供应商页面
                path:"supplier",
                component:Supplier,
                name:'supplier'
            },
              {//点击进入库存界面
                path:"inventory",
                component:Inventory,
                name:'inventory'
            }
        ]
    },
    {
        path: "*",
        redirect: {
            name: 'guide'
        }
    }

]

// 3创建router

const router = new VueRouter({
    routes,
    mode: "hash"

})

// 4.挂载到根实例是main  根组件是APP
export default router