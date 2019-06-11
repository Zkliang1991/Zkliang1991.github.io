import Vue from 'vue'
import App from './App.vue'
import router from './router' //引入路由组件库
import store from './store'  //引入vue-X进行根实例挂载


Vue.config.productionTip = false

import  "./styles/index.scss";

//定义mintui全局使用
import Mintui from "mint-ui";
Vue.use(Mintui);
//定义vux全局使用
// import Vux from "vux";
// Vue.use(Vux);



//将定义的ajax进行全局注册
import ajax from "./utils/ajax"
Vue.prototype.$axios =ajax;

//全局注册的组件全部放到根实例里面来头部组件
import Head from  "@/components/head.vue";
Vue.component("Head",Head); 
import Foot from "@/components/foot.vue";
Vue.component("Foot",Foot);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
