import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

Vue.config.productionTip = false


import "./styles/index.scss";  // 处理 vue.config.js 

import MintUI from "mint-ui";
Vue.use(MintUI)   
import Head from "@/components/head.vue";


import seet from "@/components/seet.vue";
Vue.component("seet",seet);
import item from "@/components/item.vue";
Vue.component("item",item);

import Swipe from "@/components/swipe.vue";
Vue.component("Swipe",Swipe);

import VueResource from "vue-resource"
Vue.use(VueResource);


import ajax from "./utils/ajax";
Vue.prototype.$axios=ajax
//引入vant
// import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


import store from "./store"
// 首页商品列表
// import { Card } from 'vant';
// Vue.use(Card);

// import { Swipe, SwipeItem } from 'vant';

// Vue.use(Swipe).use(SwipeItem);


Vue.component("Head",Head);
new Vue({
  router,
   store,
  render: h => h(App),
  watch:{
    "$route":(to)=>{
      console.log(to)
    }
  }
}).$mount('#app')
