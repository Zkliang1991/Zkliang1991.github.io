import Vue from 'vue'
import Vuex from 'vuex'
import axios from "@/utils/ajax"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tab:"home",
    goodsInfo:{
      goods:[]
    }
  },
  actions:{
    myshoppingcar({commit},{url,cb}){
      axios.get(url).then(res=>{
        cb()
        commit("myshoppingcar",res.data.result)
      })
    },
    shanchu({commit},{goodId,index}){
      axios.get("/vue/deleteById",{
        params:{
          goodId:goodId
        }
      }).then(res=>{
        commit("shanchu",index)
        console.log(res.data)
      })
    }
  },
  mutations: {
    getTab(state,tab){
      state.tab = tab
    },
    myshoppingcar(state,goods){
      state.goodsInfo = {...state.goodsInfo,goods }; 
    },
    shanchu(state,index){
      // state.goodsInfo = {...state.goodsInfo,goods:state.goodsInfo.goods.splice(index,1) }
      state.goodsInfo.goods.splice(index,1)
      
    },
    qingchu(state){
      state.goodsInfo = {...state.goodsInfo,goods:[]}
    }
  }
})
