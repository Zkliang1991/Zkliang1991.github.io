import Vue from 'vue'
import App from './App.vue'
import router from './router'   // 引入router
import store from './store'

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// console.log("main,vue 项目启动的主文件")  // eslint 代码风格美化

import MintUI from "mint-ui";
Vue.use(MintUI)  //全局使用

import Head from "@/components/head.vue";
Vue.component("Head",Head);

import List from "@/components/list.vue";
Vue.component("List",List);


import Swipe from "@/components/swipe.vue";
Vue.component("Swipe",Swipe);

import VueResource from "vue-resource";
Vue.use(VueResource); // this.$http 指向 vue-resource

// import axios from "axios";
import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax ;  // this.$axios 指向 axios 

import "./styles/index.scss";



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
