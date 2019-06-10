import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "./styles/index.scss";

import NutUI from '@nutui/nutui';
Vue.use(NutUI);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import goodList from "@/components/goodlist.vue";
Vue.component("goodList",goodList);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import VueResource from "vue-resource";
Vue.use(VueResource); // this.$http 指向 vue-resource

// import axios from "axios";
import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax ;  // this.$axios 指向 axios 



import Head from "@/components/head.vue";
Vue.component("Head",Head);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
