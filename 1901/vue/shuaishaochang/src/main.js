import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "./styles/index.scss"; 

import NutUI from '@nutui/nutui'; //全局使用
Vue.use(NutUI);

import ajax from "./utils/ajax";
// this.$axios 指向 axios
Vue.prototype.$axios = ajax;


import Head from "@/components/head.vue";
Vue.component("Head",Head);

import Goodlist from "@/components/goodlist.vue";
Vue.component("Goodlist",Goodlist);


new Vue({
  router,
  store,
  watch:{
    
  },
  render: h => h(App)
}).$mount('#app')
