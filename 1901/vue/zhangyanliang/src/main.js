import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import "./styles/index.scss";

import Vant from "vant";
Vue.use(Vant);



import Head from "@/components/head.vue";
Vue.component("Head", Head);

import List from "@/components/list.vue";
Vue.component("List", List);

import vueFilter from '@/utils/filters';
for (let key in vueFilter) {
    Vue.filter(key, vueFilter[key]);
}


import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax; // this.$axios 指向 axios 

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')