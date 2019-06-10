import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false


import router from "./router";

import "./styles/index.scss";  // 处理 vue.config.js 

import MintUI from "mint-ui";
Vue.use(MintUI)   // 全局使用 

import Head from "./components/head.vue";
Vue.component("Head", Head)
import Vant from 'vant';

import Xiang from "./components/xiangxi.vue"
Vue.component("Xiang", Xiang);


import Shangping from "./components/shangping.vue"
Vue.component("Shangping", Shangping);

import 'vant/lib/index.css';

Vue.use(Vant);
import List from "@/components/list.vue";
Vue.component("List", List);

import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax;  // this.$axios 指向 axios 


// import store from "./store"

new Vue({
  router,   // this.$router 
  store,
  render: h => h(App)  // App 当做 根组件渲染 到 app 内
}).$mount('#app')
