import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles/index.scss"
import MintUI from "mint-ui";
import ajax from "./utils/ajax";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$axios = ajax ;
Vue.use(MintUI) 
Vue.config.productionTip = false

import Aplayer from 'vue-aplayer'
Aplayer.disableVersionBadge = true
Vue.component('Aplayer',Aplayer)
new Vue({
  router,
  store,
  watch: {
    '$route':function(to){
      if(to.name == 'home'){
        this.$store.state.songList = []
        this.$store.state.singerList = []
      }
      if(to.name == 'home'){
        this.$store.state.title = '发现'
      }else if(to.name == 'vedio'){
        this.$store.state.title = '最新专辑'
      }else if(to.name == 'music'){
        this.$store.state.title = '音乐'
      }else if(to.name == 'firend'){
        this.$store.state.title = '我的歌单'
      }
    }
  },
  render: h => h(App)
}).$mount('#app')
