import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';

import 'vant/lib/index.css';
Vue.use(Vant);
import "./style/index.scss";


import axios from "../src/utils/axios";
Vue.prototype.$axios = axios;

import Head from "../src/components/header.vue";
Vue.component("Head", Head)

import Foot from "../src/components/foot.vue";
Vue.component("Foot", Foot)

import List from "../src/components/List.vue";
Vue.component("List", List)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
