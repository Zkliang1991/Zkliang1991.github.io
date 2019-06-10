import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1901,
    carNum:0,
    num:1
  },
  actions: {
    countAdd(context){
      context.commit("countAdd_M");
    },
    countDesc(context,payload){
      context.commit("countDesc",payload);
    },
    carNumAdd(context,payload){
      context.commit("carNumAdd",payload);
    },
    goodsnameadd(context){
      context.commit("goodsnameadd")
    },
    goodsnamebutt(context){
      context.commit("goodsnamebutt")
    }
  },
  mutations: {
    countAdd_M(state){   // store.state   更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
      console.log("进入 mutation")
      state.count++;
    },
    countDesc(state,payload){
      state.count-=payload;
    },
    carNumAdd(state,payload){
      state.carNum+=payload;
    },
    goodsnameadd(state){
      state.num++
    },
    goodsnamebutt(state){
      state.num--
    }
  }
})
