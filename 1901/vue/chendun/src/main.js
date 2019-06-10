import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.devtools = true;
Vue.config.productionTip = false;
import "./styles/index.scss";
import MintUI from "mint-ui";
Vue.use(MintUI);

// import Swipe from "@/components/swiper.vue";
// Vue.component("Swipe",Swipe);

import List from "@/components/list.vue";
Vue.component("List", List);

// import Login from "@/components/login.vue";
// Vue.component("Login", List);

import Liebiao from "@/components/liebiao.vue";
Vue.component("Liebiao", Liebiao);

import Head from "@/components/header.vue";
Vue.component("Head", Head);

import swiper from "@/components/swiper.vue";
Vue.component("swiper", swiper);

import swiperheng from "@/components/swiperheng.vue";
Vue.component("swiperheng", swiperheng);


import Item from "@/components/item.vue";
Vue.component("Item", Item);

import VueResource from "vue-resource";
Vue.use(VueResource); // this.$http 指向 vue-resource

// import axios from "axios";
import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax; // this.$axios 指向 axios

import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

import iView from "iview";
import "iview/dist/styles/iview.css";
Vue.use(iView);

// import { Area } from 'vant';

// Vue.use(Area);

// import { Search } from 'vant';
// Vue.use(Search);

// import { NoticeBar } from 'vant';
// Vue.use(NoticeBar);

// import { Swipe, SwipeItem } from 'vant';
// Vue.use(Swipe).use(SwipeItem);

// import { Button } from 'vant';
// Vue.use(Button);

// import { Sidebar, SidebarItem } from 'vant';
// Vue.use(Sidebar);
// Vue.use(SidebarItem);

const vm = new Vue({
  router,
  store,
  watch: {
    $route: function(to, from) {
      //监听路由切换
      console.log(to);
      store.commit("getTab", to.name);
    }
  },
  render: h => h(App)
}).$mount("#app");
