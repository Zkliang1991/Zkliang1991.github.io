import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import "./styles/index.scss";  // 处理 vue.config.js 

import MintUI from "mint-ui";
Vue.use(MintUI)   // 全局使用 

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant);



import Head from "@/views/Head.vue";
Vue.component("Head", Head);


import detailsHead from "@/components/detailsHead.vue";
Vue.component("detailsHead", detailsHead);

import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
