import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
import axios from "@/utils/ajax";
export default new Vuex.Store({
  state: {
    salesDetail:[]
  },
  actions: {
    getSales({commit},{url,cb,params}){  //获取销售详情的actions请求 {url,cb}要放在一个对象里面 此请求可以请求所有的查询json的数据
        axios.get(url,{params}).then((res)=>{
            cb()
            commit("getSales",res.data.result)    
        })
    },
  },
  mutations: {
    getSales(state,salesDetail){
        state.salesDetail = salesDetail
    },
 
  },
  getters:{
    

  }
})
