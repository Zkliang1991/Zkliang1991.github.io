import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import "./styles/index.scss"

import ElementUI from 'element-ui';
Vue.use(ElementUI)

import MintUI from "mint-ui";
Vue.use(MintUI) 

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import Footer from "@/components/footer.vue";
Vue.component("Footer",Footer);

import Head from "@/components/head.vue";
Vue.component("Head",Head);

import Swipe from "@/components/swipe.vue";
Vue.component("Swipe",Swipe);

import VueResource from "vue-resource";
Vue.use(VueResource);

import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax; 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
