import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'

Vue.config.productionTip = false

//vant  ui库
import Vant from 'vant';
Vue.use(Vant)

//axios 数据获取引入全局
import ajax from './utils/ajax';
Vue.prototype.$axios = ajax;



new Vue({
  router,
  store,
  watch:{
    '$router':function(to,from){//监听路由切换
      store.commit("getTab",to.name)
    }
  },
  render: h => h(App)
}).$mount('#app')

