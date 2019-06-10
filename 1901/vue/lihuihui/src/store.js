import Vue from 'vue'
import Vuex from 'vuex'
import axios from "@/utils/axios";

Vue.use(Vuex)


import {goodModule,myCarModule} from './utils/mutation_modules'

export default new Vuex.Store({
  modules:{
    nType:goodModule,
    nCar:myCarModule,


 },
 state:{
   id:0,
   myCarCount:0,
   type:1,
 },

  actions: {
  //   chanGeMyCarCount({commit},{url,params}){
      
  //     axios.get('/vue/getCarList',{
  //       'userid': sessionStorage.getItem("userid") 
  //     }).then(res=>{
  //       var num=0;
  //       res.data.result.map((item, index) => {
  //         num += item.count * 1;
  //       });
  //       console.log(num)
  //         commit(chanGeMyCarCount,num)
          
  //     })
  // },
   
    // countAdd(context){
    //   context.commit("countAdd")
    // },
    // changeNum(context){
    //   context.commit('changeNum')
    // }
  },
  mutations: {
    onSave(state){
      state.id+=1
    },
    changeNum(state,num){
      state.myCarCount=num;
    },
    changeType(state,num){
      state.type=num
    },
    // chanGeMyCarCount(state,num){
    //   state.codeNum=num;
    // }
    countReduce(state){
      state.myCarCount-=1;
    },
    
    countAdd(state){
      state.myCarCount+=1;
    }

  },

})
