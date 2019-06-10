import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import MinitUI from "mint-ui";
Vue.use(MinitUI);
import { Button } from 'vant';
Vue.use(Button)
import { AddressEdit } from 'vant';
Vue.use(AddressEdit);
import { Checkbox, CheckboxGroup } from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);
import { Stepper } from 'vant';
Vue.use(Stepper);
import { Tag } from 'vant';
Vue.use(Tag);
import { Search } from 'vant';
Vue.use(Search);
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
import { Area } from 'vant';
Vue.use(Area);
import { Toast } from 'vant';
Vue.use(Toast);
import { AddressList } from 'vant';
Vue.use(AddressList);
import "./styles/index.scss";
import ajax from "./utils/ajax";
Vue.prototype.$axios = ajax ;  // this.$axios 指向 axios 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
