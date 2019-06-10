import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "./styles/index.scss"
import MintUI from 'mint-ui'
Vue.use(MintUI) //全局使用

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant); //全局使用

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
Vue.use(NutUI)//全局使用


import ajax from "./utlis/ajax";
Vue.prototype.$axios = ajax ; 

import  Head  from '@/components/head.vue';
Vue.component('Head', Head);

import  Foot  from '@/components/foot.vue';
Vue.component('Foot', Foot);

import  Banner  from '@/components/Banner.vue';
Vue.component('Banner', Banner);

import  NoticeBar  from '@/components/NoticeBar.vue';
Vue.component('NoticeBar', NoticeBar);

new Vue({
  router,
  store,
  watch:{
    '$route':function(to,from){
      console.log(to)
    }
  },
  render: h => h(App)
}).$mount('#app')
