import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carNum: 0,
    list:[]
  },
  actions: {
    carNumAdd({ commit }, num) {   // context  =  { commit:fnuc } =  {commit:commit }
      commit("carNumAdd", num)
    },
  },
  mutations: {
    carNumAdd(state, payload) {
      state.carNum += payload;
    },
    test(state,value){
      state.list=value
    }
  }
})
