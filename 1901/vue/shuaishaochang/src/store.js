//根据id查询商品详情
const goodsIdModule = {
  state: {
      goodsID: ""
  },
  actions: {
  },
  mutations: {
      getKeygoodsID(state, goodsID) {
          state.goodsID = goodsID;
      }
  }
}

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import axios from "@/utils/ajax"

export default new Vuex.Store({
  modules:{
    nGoodsId:goodsIdModule
  },
  state: {
    // curr:true,
    keyword:"",
    goods:{
      count:1
    }
  
  },
  mutations: {
      getKeyword(state,keyword){
        state.keyword = keyword;
    },
    //   countAdd_M(state){   // store.state   更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
    //     state.count++;
    // },
      countAdd(state,count){
        state.goods = {...state.goods,count};
      },
      countReduce_M(state){
        state.count--;
        if(state.count<=1){
          state.count=1;
        }
      }
  },
  actions: {
    // countAdd(context){   // context vuex 自动注入   store  store.commit 
    //   context.commit("countAdd_M");  //  commit 提交mutation  mutation
    // },
    countReduce(context){
      context.commit("countReduce_M");
    },
    countAdd({commit},{url,cb}){
      axios.get(url,{
        params:{
          count:this.count,
        }
      })
      .then(res=>{
        cb();
        commit("countAdd",res.data.result);
      })
    }
  }
})
