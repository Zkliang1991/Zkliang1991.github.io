import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false  //开发环境


//主入口文件

import router from "./router";
import "./styles/index.scss";

import MintUI from "mint-ui";
Vue.use(MintUI) 

import Head from "./components/head.vue";
Vue.component("Head",Head);


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);



new Vue({
  router,
  render: h => h(App) //render函数渲染组件app
}).$mount('#app')
