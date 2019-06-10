import Vue from 'vue'
import App from './App.vue'
// import store from './store'

Vue.config.productionTip = false


console.log("main,vue 项目启动的主文件")  // eslint 代码风格美化 
import router from "./router";

import "./styles/index.scss";  // 处理 vue.config.js 

import MintUI from "mint-ui";
Vue.use(MintUI)   // 全局使用 
import Vant from "vant";
Vue.use(Vant)

// Vue.use(ElementUI)
import Header from "@/components/header.vue";
Vue.component("Header",Header);
import VueResource from "vue-resource";
Vue.use(VueResource); // this.$http 指向 vue-resource

import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax ;  // this.$axios 指向 axios 

import store from "@/store.js";


new Vue({ 
  router,
  store,
  render: h => h(App)  // App 当做 根组件渲染 到 app 内
}).$mount('#app')




// function render(h){
//   return h(App)
// }