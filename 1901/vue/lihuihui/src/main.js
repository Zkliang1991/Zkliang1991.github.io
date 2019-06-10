import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import "./styles/index.scss"
import MintUI from "mint-ui"
Vue.use(MintUI);




import axios from './utils/axios.js'
Vue.prototype.$axios=axios;

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import Header from '@/components/Header.vue'
Vue.component('Header',Header)




import List from '@/components/List'
Vue.component('List',List)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  // watch:{
  //   '$route'(to,from){
  //     localStorage.setItem('oldPath',from.name)
  //     console.log(from)
  //   }

  // },
  render: h => h(App)
}).$mount('#app')
