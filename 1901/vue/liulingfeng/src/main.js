import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import { NavBar } from 'vant';
Vue.use(NavBar);

import Head from "@/components/head.vue";
Vue.component("Head",Head);

import Foot from "@/components/foot.vue";
Vue.component("Foot",Foot);

import Swipe from "@/components/foot.vue";
Vue.component("Swipe",Swipe);
//购物车滑动删除
import { SwipeCell } from 'vant';
Vue.use(SwipeCell);

//步进器
import { Stepper } from 'vant';
Vue.use(Stepper);

//登录注册
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);



// import {Swipe, SwipeItem } from 'vant';
// Vue.use(Swipe).use(SwipeItem);


// import axios from "axios";
import Ajax from "./utils/ajax.js";
Vue.prototype.$axios = Ajax ;  // this.$axios 指向 axios 



import { Search } from 'vant';
Vue.use(Search);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
