import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import '@/styles/index.css';
// import 

// ------------------ ----------------- 



Vue.config.productionTip = false

import axios from "@/utils/ajax";  // 因为axios不是vue系列的方法，所以导入需要配置
Vue.prototype.$axios = axios;

import { NavBar } from 'vant';  //顶部导航栏
Vue.use(NavBar);

import { Tabbar, TabbarItem } from 'vant';  //底部标签栏
Vue.use(Tabbar).use(TabbarItem);

import { Tab, Tabs } from 'vant'; // 标签页 - 可用在分类精选
Vue.use(Tab).use(Tabs);

import { Icon } from 'vant';   // 字体图标
Vue.use(Icon);

import { NoticeBar } from 'vant';  // 通知栏
Vue.use(NoticeBar);

import { Field } from 'vant';  //输入框
Vue.use(Field);

import { Button } from 'vant';  //按钮
Vue.use(Button);

import { Popup } from 'vant'; //弹出层
Vue.use(Popup);

import { Swipe, SwipeItem } from 'vant';  //轮播
Vue.use(Swipe).use(SwipeItem);

import { Search } from 'vant';  //搜索
Vue.use(Search);

import { Row, Col } from 'vant';  //布局
Vue.use(Row).use(Col);

import { Toast } from 'vant'; //轻提示
Vue.use(Toast);

import { List } from 'vant';  //列表
Vue.use(List);

// import { Row, Col } from 'vant'; //布局
Vue.use(Row).use(Col);

import { CouponCell, CouponList } from 'vant';  //优惠券选择器
Vue.use(CouponCell).use(CouponList);

import { ImagePreview } from 'vant';  //图片预览
Vue.use(ImagePreview);

import { Dialog } from 'vant';    //弹出框
Vue.use(Dialog);

import { Card } from 'vant';  //卡片
Vue.use(Card);

import { Cell, CellGroup } from 'vant'; //单元格
Vue.use(Cell).use(CellGroup);

// 有问题
// import {GoodsAction} from 'vant';
// import {GoodsActionIcon} from 'vant';
// import {GoodsActionButton} from 'vant';
// import {GoodsActionBigBtn} from 'vant';
// import {GoodsActionMiniBtn} from 'vant';
// Vue.use(GoodsAction);
// Vue.use(GoodsActionBigBtn);
// Vue.use(GoodsActionMiniBtn);
// Vue.use(GoodsActionIcon);
// Vue.use(GoodsActionButton);

import { Sku } from 'vant';
Vue.use(Sku);
Vue.use(Vant);
// ------------------ -----------------

import Head from "@/components/header.vue";
Vue.component("Head", Head);

import Foot from "@/components/footer.vue";
Vue.component("Foot", Foot);

// ------------------ ----------------- 


new Vue({
  router,
  store,
  watch: {  // 使用路由守卫监听跳转
    '$route': function (to, from) { //通过vuex将路由存入foot的tab-name
      console.log(to);
      // store.commit("getTab", to.name);
    }
  },
  render: h => h(App)
}).$mount('#app')

// ------------------ ----------------- --------------


