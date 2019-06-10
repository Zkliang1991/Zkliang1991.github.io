import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import axios from "@/utils/ajax"

export default new Vuex.Store({
  state: {
    paycount:0,
    carNum:0,
    id: localStorage.gid,
    username:localStorage.username,
    goodInfo: {
      all_goods: []
    },
    myshopping:{
    },
    selectAddress:{},
  },
  actions: {
    getAllGoods({commit}, {url,cb,params}) {axios.get(url, {params}).then(res => {
          cb()
          commit("getAllGoods", res.data.result);
        })
    },
    getMyshopping({commit},{url,cb,query}){
      axios.post(url,{query}).then(res=>{
        cb();
        commit("getMyshopping",res.data.result)
      })
    },
    
  },
  mutations: {
    getAllGoods(state, all_goods) {
      state.goodInfo = {...state.goodInfo,all_goods}
    },
    
    
  }
})