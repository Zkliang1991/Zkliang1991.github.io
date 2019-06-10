const cityModule = {
  state:{
      city:"大武汉-wuhan"
  },
  actions:{
      changeNcity({commit},city){
          commit("changeNcity",city)
      }
  },
  mutations:{
      changeNcity(state,city){
          state.city = city;
      }
  }
} 


// Vuex 代码配置  
// Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式

// 它采用集中式 (Object) 存储管理应用的所有组件的状态  相应的规则保证状态以一种可预测的方式发生变化

// 每一个 Vuex 应用的核心就是 store（仓库）

// store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)

// Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新

// 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import {CHANGE_MSG,CHANGE_CITY} from "@/utils/mutation_types"


import axios from "@/utils/ajax"

const store = new Vuex.Store({
  modules:{
      nCity:cityModule
  },
  state:{   // Vuex 使用单一状态树 所有组件的状态 存储 state  
      carNum:2,
      goodInfo:{
          banner:[],
          types:[],
          all_goods:[]
      },
      keyword:'',
      tab:"home"
  },
  actions:{   // Action 提交的是 mutation， 而不是直接变更状态 Action 可以包含任意异步操作。
      carNumAdd({commit},num){   // context  =  { commit:fnuc } =  {commit:commit }
          commit("carNumAdd",num)
      },
      changeMsg({commit},msg){
          commit(CHANGE_MSG,msg)
      },
      getBanner({commit},{url,cb}){
          axios.get(url,{
              params:{
                  limit:10
              }
          }).then(res=>{
              cb();  // 执行成功 后的 回调  this.$router.push 逻辑 
              commit("getBanner",res.data.result);
          })
      },
      getGoodTypes({commit},{url}){
          axios.get(url)
          .then(res=>{
              commit("getGoodTypes",res.data.result);
          })
      },
      getAllGoods({commit},{url,cb,params}){
          axios.get(url,{
              params
          })
          .then(res=>{
              cb()
              commit("getAllGoods",res.data.result);
          })
      }
  },
  mutations:{
      
      carNumAdd(state,payload){
          state.carNum += payload;
      },
    //   carNumReduce(state,num){
    //       state.carNum += num * 2; 
    //   },
      getBanner(state,banner){
          // 返回新对象 
          // state.goodInfo = {banner}
          state.goodInfo  = {...state.goodInfo,banner:banner }; 
      },
      getGoodTypes(state,types){
          state.goodInfo  = {...state.goodInfo,types }; 
      },
      getAllGoods(state,all_goods){
          state.goodInfo = {...state.goodInfo,all_goods }; 
      },
      getReverseGoods(state){
        //   console.log("翻转....");
          state.goodInfo = {...state.goodInfo,all_goods:state.goodInfo.all_goods.reverse() }; 
      },
      getKeyword(state,keyword){
          state.keyword = keyword;
      },
      getTab(state,tab){
          state.tab = tab;
      }
  },
  getters:{       //store 中的 state 中派生出一些状态  对 store 中的 state 进行 改造 
      newBanner(state){
        //   console.log("newBanner")
          return state.goodInfo.banner.filter((item,index)=>index%2==0);
      },
      newTypes(state){
          return state.goodInfo.types.map((item,index)=>{
              item.text = item.text
              return item; 
          })
      }
  }
})

export default store;
