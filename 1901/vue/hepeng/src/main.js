import Vue from 'vue'
import App from './App.vue'
import "./styles/index.scss"
import router from './router'
import store from './store'

// 开发版本
Vue.config.productionTip = false
    // 导入
import MintUI from "mint-ui";
// 全局声明  使用
Vue.use(MintUI);

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
import { Card } from 'vant';
Vue.use(Card);

import { Rate } from 'vant';
Vue.use(Rate);

// 头部任何时候都存在  所以要在主入口文件中引入
import Head from "./components/head.vue"
Vue.component("Head", Head);

import Swipe from '@/components/swipe.vue';
Vue.component('Swipe', Swipe);

import List from "@/components/list.vue";
Vue.component("List", List);


import VueResource from 'vue-resource';
Vue.use(VueResource);

// import ajax from 'axios';
import ajax from './utils/ajax';
Vue.prototype.$axios = ajax; //this.$axios指向axios

// 主入口文件
new Vue({
    router,
    // watch: {
    //     '$route': function(to, from) {
    //         localStorage.routeName = to.name;
    //     }
    // },
    store,
    render: h => h(App) //把app当做根组件渲染到app内部
}).$mount('#app');

// 可以声明全局的指令  过滤器等