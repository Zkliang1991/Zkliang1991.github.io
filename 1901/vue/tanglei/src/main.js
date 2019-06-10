import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "./styles/index.scss"


import vant from "vant";
Vue.use(vant)

import { PullRefresh,List  } from 'vant';
Vue.use(PullRefresh).use(List);


import ajax from "./untils/ajax";
Vue.prototype.$axios = ajax ;  // this.$axios 指向 axios 

import Myheader from  "@/components/myheader.vue"
Vue.component("Myheader",Myheader)

import goodsList from "@/components/goodlist.vue"
Vue.component("goodsList",goodsList);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
