import Vue from 'vue'
import Vuex from 'vuex'
import axios from "@/utils/ajax"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodInfo:{
      all_goods:[]
    }
  },
  actions: {
    getAllGoods({commit},{url,params}){
      axios.get(url,{
          params
      })
      .then(res=>{
          commit("getAllGoods",res.data.result);
      })
  }
  },
  mutations: {
    getAllGoods(state,all_goods){
      state.goodInfo={...state.goodInfo,all_goods}
    }
  },
})
