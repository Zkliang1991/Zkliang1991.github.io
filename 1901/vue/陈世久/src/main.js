import Vue from 'vue'
import App from './App.vue'
// import store from './store'

Vue.config.productionTip = false


console.log("main,vue 项目启动的主文件")  // eslint 代码风格美化 
import router from "./router";

import "./styles/index.scss";  // 处理 vue.config.js 

import MintUI from "mint-ui";
Vue.use(MintUI)   // 全局使用 
// Vue.use(ElementUI)
import Vant from "vant";
Vue.use(Vant);
import Head from "@/components/head.vue";
Vue.component("Head",Head);
import Dz from "@/components/dz.vue";
Vue.component("Dz",Dz);

import Swipe from "@/components/swipe.vue";
Vue.component("Swipe",Swipe);
import VueResource from "vue-resource";
Vue.use(VueResource); // this.$http 指向 vue-resource
import List from "@/components/list.vue";
Vue.component("List",List);
import Seet from "@/components/seet.vue";
Vue.component("Seet",Seet);
// import axios from "axios";
import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax ;  // this.$axios 指向 axios 
import Addadress from "@/components/addadress.vue";
Vue.component("Addadress",Addadress);
import Adress from "@/components/adress.vue";
Vue.component("Adress",Adress);
import store from "@/store.js";
new Vue({ 
	store,
  router,
  render: h => h(App)  // App 当做 根组件渲染 到 app 内
}).$mount('#app')




// function render(h){
//   return h(App)
// }