import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
import router from './router'


import "./styles/index.scss";  // 处理 vue.config.js 
import MintUI from "mint-ui";
Vue.use(MintUI); // 全局使用
// Vue.use(ElementUI)

import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

// var VueTouch = require("vue-touch");
// Vue.use(VueTouch, { name: "v-touch" });

import Head from "@/components/head.vue";
Vue.component("Head", Head);//在这里全局引入注册之后，在其他界面就可以直接用

// import axios from "axios";
import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax ;  // this.$axios 指向 axios 
// new Vue({
//   el: "#app",
//   components: { App }
// });
import store from "./store";

var VueResource = require("vue-resource");

Vue.use(VueResource);

new Vue({
  router,
  store,
  // watch: {
  //   $route: function(to, from) {
  //     //监听路由切换
  //     console.log(to);
  //     store.commit("getTab", to.name);
  //   }
  // },
  render: h => h(App)
}).$mount("#app");
