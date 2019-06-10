import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "./styles/vant.css"
import "./styles/mint-ui.css"
import "./styles/animate.css"

import Vant from 'vant';
Vue.use(Vant)

import MintUI from "mint-ui";
Vue.use(MintUI)   // 全局使用 

import Head from "@/components/head.vue"
Vue.component('Head',Head);

import List from "@/components/list.vue"
Vue.component('List',List);

import VueResource from "vue-resource";
Vue.use(VueResource); // this.$http 指向 vue-resource

// import axios from "axios";
import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax ;  // this.$axios 指向 axios 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
