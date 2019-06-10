import Vue from 'vue' ;
import Vuex from 'vuex';

import IndexHCCM from './storeModule/indexHCCM'
import GoodStore from './storeModule/goodStore'; //商品列表  操作整个商品列表,不针对商品的
import ClassStore from './storeModule/classStore'
import GoodIdStore from './storeModule/goodIdStore' //商品具体信息  操作某个商品的
import UserStore from './storeModule/userStore' //共享用户的信息(包含用户购物车,用户地址管理等)

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        idnexhccm:IndexHCCM,
        GoodStore,
        ClassStore,
        GoodIdStore,
        UserStore
    },
    state:{
        
    },
    actions:{},
    mutations:{},
    getters:{},
})


export default store;