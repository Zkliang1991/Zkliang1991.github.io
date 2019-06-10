import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "@/styles/index.scss"

//引入vant的button组件
import {button} from 'vant'
Vue.use(button)

//引入icon组件
import { Icon } from 'vant';
Vue.use(Icon);

//引入axios组件
import Axios from './utils/ajax'
Vue.prototype.$axios = Axios;

//引入商品列表组件
import GoodsList from '@/components/good/goodslist.vue'
Vue.component('GoodsList',GoodsList)

//引入tag组件
import { Tag } from 'vant';
Vue.use(Tag);





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
