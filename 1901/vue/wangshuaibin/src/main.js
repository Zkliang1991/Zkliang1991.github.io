import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import MintUI from "mint-ui";
Vue.use(MintUI)   // 全局使用 
// Vue.use(ElementUI)


import "./styles/index.scss" //处理 Vue.config.js
import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax ;  // this.$axios 指向 axios 

import Header from './components/header.vue'
Vue.component("Header",Header)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
