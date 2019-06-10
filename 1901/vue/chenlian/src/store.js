
// vuex流程：  actions ->  mutastions -> 修改state 
//-> 页面发出action -> dipation派发  ->  store收到派发进入actions 或 mutastions 

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from "@/utils/ajax"

// ----------------- 分割线------------------

// export default new Vuex.Store({
const store = new Vuex.Store({
  state: {
    loginInfo:{
      username:'',
      passwrod:'',
      _id:'',
    },  
    agoodId: '',
    goodInfo: {      
      cases: [],
      allgoods: [],
    },
    cartinfo: {      
      // count,
      cartgood: [],      
    },
    keyword:'123',
  },
  
  actions: {
  
  // 登陆
  /*
  userlogin ({ commit} ,{userlogin}){
    axios({
      method: 'post',
      url: '/vue/login',
      data: userlogin
    }).then(res => {
      // cb();
      commit("userlogin", res.data.result);    
      console.log("--------ressult ----- userlogin-------------");  
      console.log(res.data.result);
      console.log("---分割-----ressult ----- userlogin-------------");  
    })
  },
  */


  // 分类
  getGoodTypes({ commit }, { url }){
    axios.get(url).then(res => {
      commit("getGoodTypes", res.data.result);
    })
  },

  // 搜索
  // getAllGoods({ commit },{ url, cb, params }){
  //   axios.get(url,{
  //     params
  //   }).then(res => {
  //     cb();
  //     commit("getAllGoods", res.data.result);
  //   })
  // },

  // 全部商品
  getAllGoods({ commit }, { url, cb, params }){
    axios.get(url, {
      params
    }).then(res => {
      cb();
      commit("getAllGoods", res.data.result)
    })
  },
  // 用户购物车
  cartgoods({ commit }, { url,cb }){
    // ,cb,params   ,{params}
    axios.get(url).then(res => {
      cb();
      commit("cartgoods", res.data.result);
    })
  },

  // 删除
  deletecart({ commit }, { url }){
    axios.get(url).then(res => {
      commit("deletecart", res.data.result);
    })
  },
  

  //购物车商品数量加减
  updatecart({ commit }, { url,params, cb }){
    axios.get(url, {
      params: {
        agoodId: goodId,
        acount: count
      }
    }).then(res => {
      cb();
      commit("updatecart", res.data.result);
    })
  }
},

// ----------------- 分割线------------------

mutations: {
  getKeyword(state,keyword){
    state.keyword = keyword;
  },
  // loginname(state,username){     
  //   state.loginInfo = {...state.loginInfo,username }; 
  //   // console.log(this.state.loginInfo.username +"------------this.state.loginInfo.username----------");  
  // },
  // loginpwd(state,passwrod){
  //   state.loginInfo = {...state.loginInfo,passwrod }; 
  // },

  userlogin(state,loginInfo){
    state.loginInfo = loginInfo 
  },

  deletecart(state, cartde){
    state.goodInfo = { ...state.goodInfo, cartde }
    console.log("---------- cartde ----------");
    console.log(cartde);
  },
  getGoodTypes(state, cases){
    state.goodInfo = { ...state.goodInfo, cases }
  },
  getAllGoods(state, allgoods){
    state.goodInfo = { ...state.goodInfo, allgoods };
  },
  cartgoods(state, cartgood){
    state.cartinfo = { ...state.cartinfo, cartgood };
  },
},
getters: {
}
})

export default store;
