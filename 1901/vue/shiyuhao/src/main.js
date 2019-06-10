import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Head from "@/components/head.vue";
Vue.component("Head",Head);

 
import "./style/index.scss"
import MintUI from "mint-ui"
Vue.use(MintUI)

import Vant from 'vant';
import 'vant/lib/index.css';

import List from "@/components/list.vue";
Vue.component("List",List);

import VueResource from "vue-resource";
Vue.use(VueResource);

import VeeValidate from 'vee-validate';
import  {Validator} from 'vee-validate';
import cn from '../node_modules/vee-validate/dist/locale/zh_CN';
Vue.use(VeeValidate);
Validator.localize('cn', cn);

Validator.extend("mobile", {
  getMessage: () => `请输入正确的手机号码`,
  validate: value =>
    value.length === 11 &&
    /^(((13[0-9]{1})|(14[57]{1})|(15[012356789]{1})|(17[03678]{1})|(18[0-9]{1})|(19[89]{1})|(16[6]{1}))+\d{8})$/.test(
      value
    )
});

Validator.extend("pwd", {
  getMessage: () => `长度在5-11之间，只能包含字母和数字`,
  validate: value =>
   
    /^[a-zA-Z0-9]\w{4,10}$/.test(
      value
    )
});

Validator.extend("name", {
  getMessage: () => `以字母开头，长度在2-10之间，只能包含字母和数字`,
  validate: value =>
   
    /^[a-zA-Z]\w{1,10}$/.test(
      value
    )
});




import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax;

Vue.use(Vant);


import store from "./store"

new Vue({
  router,
  store, 
  render: h => h(App)
}).$mount('#app')
