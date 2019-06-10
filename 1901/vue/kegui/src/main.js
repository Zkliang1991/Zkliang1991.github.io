import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import MintUI from "mint-ui";
import 'vant/lib/index.css';
import Head from "@/components/head.vue";
Vue.config.productionTip = false;
Vue.component("Head",Head);
Vue.use(Vant);
Vue.use(MintUI)

import List from "@/components/list.vue";
Vue.component("List",List);

import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax ;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
