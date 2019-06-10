import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
Vue.use(Vant);


import Foot from "@/components/foot.vue";
Vue.component("Foot", Foot);
import Head from "@/components/head.vue";
Vue.component("Head", Head);

import List from "@/components/list.vue";
Vue.component("List", List);

import Buy from "@/components/buy.vue";
Vue.component("Buy", Buy);

//import axios from "axios";
import ajax from "./utils/ajax.js";
Vue.prototype.$axios = ajax;

Vue.config.productionTip = false
import "./styles/index.scss"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
