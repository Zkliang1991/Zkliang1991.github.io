import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/index.scss';
import MintUI from 'mint-ui';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(MintUI);
import Head from "@/components/head.vue";
Vue.component("Head", Head);
// import axios from "axios";

import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax; 
// this.$axios 指向 axios 

import VueResource from "vue-resource";
Vue.use(VueResource); // this.$http 指向 vue-resource




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')