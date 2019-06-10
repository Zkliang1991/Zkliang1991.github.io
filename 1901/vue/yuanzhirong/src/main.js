import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import "./styles/index.scss";

//导入 mint-UI
import MintUI from "mint-ui";
Vue.use(MintUI);


//导入 vant-ui
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant); 

import Head from "@/components/head.vue";
Vue.component("Head",Head);

import List from "@/components/list.vue";
Vue.component("List",List);


import ajax from "./utils/ajax"
Vue.prototype.$axios = ajax;

//导入vee-validate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
