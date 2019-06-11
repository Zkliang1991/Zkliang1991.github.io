import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {CHANGE_MSG,CHANGE_CITY} from "@/utils/mutation_types"
import axios from "@/utils/ajax"

export default new Vuex.Store({

  state: {
    name:"unshow",
    color:"rgb(162, 138, 125)",
    goodslist:{},
    cartprice:0,
    check_all:false
  },


  actions: {
    appear({commit},payload){
      commit("appear",payload)
    },
    changeColor({commit},payload){
      commit("changeColor",payload)
    },
    goodslist({commit},payload){
      commit("goodslist",payload)
    },
    checkchange({commit},payload){
      commit("checkchange",payload)
    }
  
  },


  mutations: {
      appear(state,payload){
        state.name=payload
      },
      changeColor(state,payload){
        state.color=payload
      },
      goodslist(state,payload){
        state.goodslist=payload
      },
      checkchange(state,payload){
        state.cartprice=payload*100
      }
  }
})

