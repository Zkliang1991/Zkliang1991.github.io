import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 

import axios from "@/utils/ajax"

const store = new Vuex.Store({
  state: {
      
    movieInfo:{
          types:[],
          all_goods:[]
      },
 
  },
  actions: {
    getGoodTypes({
      commit
    }, {
      url
    }) {
      axios.get(url)
        .then(res => {
          commit("getGoodTypes", res.data.result);
        })
    },
    getAllGoods({
      commit
    }, {
      url,
      cb,
      params
    }) {
      axios.get(url, {
          params
        })
        .then(res => {
          cb()
          commit("getAllGoods", res.data.result);
        })
    }
  },
  mutations: {
    getGoodTypes(state, types) {
      state.movieInfo = {
        ...state.movieInfo,
        types
      };
    },
    getAllGoods(state, all_goods) {
      state.movieInfo = {
        ...state.movieInfo,
        all_goods
      };
    },
  },
  getReverseGoods(state){
    state.movieInfo = {...state.movieInfo,all_goods:state.movieInfo.all_goods.reverse() }; 
},
  
  getters:{        
    
    newTypes(state){
        return state.movieInfo.types.map((item,index)=>{
            item.text = item.text;
            return item; 
        })
    }
}
})



export default store;