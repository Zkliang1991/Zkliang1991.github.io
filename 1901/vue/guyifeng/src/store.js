const numModule={
  state:{
    num:1
  },
  actions: {
  },
  mutations: {
    addNum(state,num){
      state.num=num;
    }
  }
}

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    spNum:numModule
  },
  state: {
    goodId:"",
    userName:"",
    
  },
  actions: {
  },
  mutations: {
 
  }
  
})
