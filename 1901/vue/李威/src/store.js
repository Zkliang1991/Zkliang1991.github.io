import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from "@/utils/ajax";
export default new Vuex.Store({
  state: { ////Vuex 使用单一状态树 所有组件的状态 存储 state
    carNum: 0,
    selected:"home"
  },
  actions: { // Action 提交的是 mutation， 而不是直接变更状态 Action 可以包含任意异步操作。
    // 必须在actions里面进行ajax请求
    carNumAdd({commit},num){   // context  =  { commit:fnuc } =  {commit:commit }
        commit("carNumAdd",num)
    },
  },
  mutations: {
    carNumAdd(state,num){
      state.carNum += num;
    },
    getSelected(state,selected){
      state.selected = selected;
    }
  },
  getters: {

  }

})