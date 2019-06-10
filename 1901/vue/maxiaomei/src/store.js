import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// import {GOODS_NUM} from "@/utils/mutation_types"
export default new Vuex.Store({
  state: {    
        goodsnum:"",
  },
  actions: {
    // goodsnum(context,payload){
    //   context.commit("goodsNum",payload);  
    // }
    goodsnum({commit},payload){
      commit("goodsNum",payload);
    }
  },
  mutations: {
    goodsNum(state,payload){
      state.goodsnum=payload;
    }
  },
  
})
