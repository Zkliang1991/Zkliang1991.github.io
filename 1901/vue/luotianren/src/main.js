import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import "./styles/index.scss"; 
Vue.config.productionTip = false
import iView from 'iview'    //引入ivew库
import '../node_modules/_iview@3.4.2@iview/dist/styles/iview.css'    // 使用 CSS
Vue.use(iView)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import MintUI from "mint-ui";
Vue.use(MintUI)

import { Area } from 'vant';

Vue.use(Area);
import Vant  from "vant";
import 'vant/lib/index.css';
Vue.use(Vant)

import { NavBar } from 'vant';
Vue.use(NavBar);

import { List } from 'vant';

Vue.use(List);

import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);

import Head from "@/components/head.vue";
Vue.component("Head",Head);


import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax ;

import { Field } from 'vant';

Vue.use(Field);

// import { Search } from 'vant';
// Vue.use(Search);
import Search from "@/components/search.vue";
Vue.component("Search",Search);
import { CouponCell, CouponList } from "vant";

Vue.use(CouponCell).use(CouponList);

import { Card } from 'vant';

Vue.use(Card);

import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
