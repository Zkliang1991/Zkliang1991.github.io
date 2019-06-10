import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

import "./styles/index.scss"; //处理 vue.config.js
// import MinUI from "mint-ui";
// Vue.use(MinUI) //全局使用

import Head from "@/components/head.vue";
Vue.component("Head", Head);

import Foot from "@/components/foot.vue";
Vue.component("Foot", Foot);

import List from "@/components/list.vue";
Vue.component("List", List);

import Vant from 'vant';
Vue.use(Vant);

import VueResource from "vue-resource";
Vue.use(VueResource); // this.$http 指向 vue-resource

// import axios from "axios";
import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax; // this.$axios 指向 axios 
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')