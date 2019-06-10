import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant);


Vue.config.productionTip = false

import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

import "./styles/index.scss"; //处理vue.config.js

import MintUI from "mint-ui";
Vue.use(MintUI)   //全局使用mintui库，先cnpm i 安装

import Swipe from "@/components/swipe.vue";
Vue.component("Swipe",Swipe);

import List from "@/components/list.vue";
Vue.component("List",List);

import { Card } from 'vant';
Vue.use(Card);

import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';

Vue.use(GoodsAction)
Vue.use(GoodsActionBigBtn)
Vue.use(GoodsActionMiniBtn);


import VueResource from "vue-resource";
Vue.use(VueResource); // this.$http 指向 vue-resource

import { Field } from 'vant';
Vue.use(Field);
//头部全局使用
import Head from "@/components/head.vue";
Vue.component("Head",Head);

//底部导航全局使用
import Foot from "@/components/foot.vue";
Vue.component("Foot",Foot);

import { AddressEdit } from 'vant';
Vue.use(AddressEdit);
import { Area } from 'vant';
Vue.use(Area);

import { Toast } from 'vant';
Vue.use(Toast);


import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);

// import axios from "axios";
import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax ;  // this.$axios 指向 axios 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')