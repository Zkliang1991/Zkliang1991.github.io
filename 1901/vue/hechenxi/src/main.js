import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles/index.scss"

import Vant from 'vant';
Vue.use(Vant);

import Head from './components/head.vue';
Vue.component('Head',Head);

import Foot from './components/foot.vue';
Vue.component('Foot',Foot);

import VueResource from "vue-resource";
Vue.use(VueResource); 

import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax ;  


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
