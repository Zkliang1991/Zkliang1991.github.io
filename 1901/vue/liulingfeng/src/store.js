import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {CHANGE_MSG,CHANGE_CITY} from "@/utils/mutation_types"

import axios from "@/utils/ajax"

export default new Vuex.Store({
  state: {
    count:0,
    account:''
  },
  actions: {
    countAdd(context){
      context.commit("increment")
    },
    setAccount ({commit}, payload) {
      // console.log("payload" + payload )
      
      commit("SET_ACCOUNT", payload);
    },
  },


  mutations: {
    increment(state){
      state.count++
    },
    SET_ACCOUNT(state , payload){
      state.account = payload
      // console.log("mutations 里的payload" + state.account )
      
    }
  },


  getters:{
    getNum(state){
      console.log("getters 里的payload" + state.account )
      return state.account 
    

      
    }
  }

})
