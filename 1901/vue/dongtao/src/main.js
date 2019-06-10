import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import "./styles/index.scss"; // 后期处理到 vue.config.js

import MintUI from "mint-ui";
Vue.use(MintUI) // 全局使用
    // Vue.use(ElementUI)


import Vant from "vant";
Vue.use(Vant);

import Head from "@/components/head.vue"
Vue.component("Head", Head);

import List from "@/components/list.vue";
Vue.component("List", List);

import VueResource from "vue-resource";
Vue.use(VueResource); // this.$http 指向 vue-resource

// import axios from "axios";
import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax; // this.$axios 指向 axios


Vue.config.productionTip = false

// import xx from "xx"  模块化开发 ES6
// vue 项目启动  主文件

new Vue({
    router,
    store,
    render: h => h(App) // App 当做根组件  渲染到app
}).$mount('#app')



// function reader(h)=>{
//   return h(App)
// }