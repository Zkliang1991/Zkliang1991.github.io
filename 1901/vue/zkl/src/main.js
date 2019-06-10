import Vue from 'vue'
import App from './App.vue'
// import store from './store'

Vue.config.productionTip = false


console.log("main,vue 项目启动的主文件")  // eslint 代码风格美化 
import router from "./router";

import "./styles/index.scss";  // 处理 vue.config.js 

import MintUI from "mint-ui";
Vue.use(MintUI)   // 全局使用 
// Vue.use(ElementUI)


import Head from "@/components/head.vue";
Vue.component("Head",Head);

import Swipe from "@/components/swipe.vue";
Vue.component("Swipe",Swipe);

import List from "@/components/list.vue";
Vue.component("List",List);

import VueResource from "vue-resource";
Vue.use(VueResource); // this.$http 指向 vue-resource

// import axios from "axios";
import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax ;  // this.$axios 指向 axios 


import store from "./store"

new Vue({ 
  router,   // this.$router 
  store,
  watch:{
    '$route':function(to,from){  //监听路由切换  
      console.log(to);
      store.commit("getTab",to.name);
    }
  },
  render: h => h(App)  // App 当做 根组件渲染 到 app 内
}).$mount('#app')




// function render(h){
//   return h(App)
// }