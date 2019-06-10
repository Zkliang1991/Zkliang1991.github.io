import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./styles/index.scss"; //导入样式文件

Vue.config.productionTip = false

// import xx from xx  模块化开发 ES6
// vue项目启动 主文件

import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax;  //this.$axios 指向 axios

import MintUI from "mint-ui";
Vue.use(MintUI); //全局使用

import Vant from 'vant';
Vue.use(Vant);

import '../node_modules/_iview@3.4.2@iview/dist/styles/iview.css' // 使用 CSS
import iView from 'iview';
Vue.use(iView);

import Header from "@/components/header.vue";
Vue.component("Header", Header); //全局注册组件


new Vue({
  router,
  store,
  watch:{  //全局注册路由守卫
    '$route':function(to,from){  //监听路由切换
      console.log(to);
      store.commit("getSelected",to.name);
    }
  },
  render: h => h(App)
}).$mount('#app')