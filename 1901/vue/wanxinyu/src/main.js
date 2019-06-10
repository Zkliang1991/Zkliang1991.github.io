import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false  // 开发版本   production 生产环境 

import MintUI from "mint-ui";
Vue.use(MintUI)


import VueResource from "vue-resource";
Vue.use(VueResource);

import Head from "./components/head.vue";
Vue.component("Head",Head);


//自定义动画指令
Vue.directive("animation",{
  inserted(el,binding){
    el.class=binding.value;
  }
})

//自定义过滤器
Vue.filter("money",(value)=>{
  if(!value){
      return value;
  }
  return value.toFixed(2);
})
// 主入口文件 
// 声明全局的指令 过滤器 组件 

import "./styles/index.less";  // 把样式当做模块 
import router from "./router"
import store from "./store"

new Vue({
  router,
  store,
  watch:{
    '$route':function(to){
      localStorage.routeName = to.name; 
    }
  },  
  render: h => h(App)   // render 函数渲染 组件 App 
}).$mount('#app')


