import Vue from 'vue'
import App from './App.vue'
// import store from './store'

Vue.config.productionTip = false

// import xx from "xx" 模块化开发 ES6 
// vue 项目启动 主文件  
//console.log("main,vue 项目启动的主文件")  // eslint 代码风格美化 
import router from "./router"

import "./style/index.scss";

import MintUI from "mint-ui";
Vue.use(MintUI);

import Vant from 'vant';
Vue.use(Vant);


import Head from "@/components/head.vue"
Vue.component("Head",Head);


import List from "@/components/list.vue"
Vue.component("List",List);

import VueBarcode from '@xkeshi/vue-barcode'; //导入条形码插件
Vue.component('barcode', VueBarcode);  //声明条形码组件


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





import VueResource from "vue-resource";
Vue.use(VueResource); // this.$http 指向 vue-resource

// import axios from "axios";
import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax ;  // this.$axios 指向 axios 

new Vue({ 
  router,
  render: h => h(App)  // App 当做 根组件渲染 到 app 内
}).$mount('#app')




// function render(h){
//   return h(App)
// }