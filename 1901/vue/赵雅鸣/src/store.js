import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '_axios@0.19.0@axios';
import axios from "@/utlis/ajax"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodInfo: {
      types: [],
      all_goods: [],
      cart: ""
    },
    shoppinginfo:{},
    changecounts:{},
    dizhi:{},
    gtdizhi:{},
    alterdizhi:{},
    delgood:{},
    buygoods:{},
    buytotal:0
    
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
      params
    }) {
      axios.get(url, {
          params
        })
        .then(res => {
          commit("getAllGoods", res.data.result);
        })
    },
    gocart({
      commit
    }, {
      url,
      params
    }) {
      axios.post(url, {
        params
      }).then(res => {
        commit("gocart", res.data.result)
      })
    },
    getshoppingcar({commit},{url}){
      axios.post(url).then(res=>{
      
        commit("getshoppingcar",res.data.result)
      })
    },
    changecount({commit},{url,params,num}){
      axios.post(url,{params,num}).then(res=>{
        commit("changecount",res.data.result)
      })
    },
    adddizhi({commit},{url,data}){
      axios.post(url,{data}).then(res=>{
        
        commit("adddizhi",res.data.result)
      })
    },
    getdizhi({commit},{url}){
      axios.post(url).then(res=>{
        commit("getdizhi",res.data.result)
      })
    },
    alterdizhi({commit},{url,data}){
      axios.post(url,{data}).then(res=>{
        commit("alterdizhi",res.data.result)
      })
    },
    delgoods({commit},{url,params}){
      axios.post(url,{params}).then(res=>{
        commit("delgoods",res.data.result)
      })
    },
  },
  mutations: {
    getGoodTypes(state, types) {
      state.goodInfo = {
        ...state.goodInfo,
        types
      };
    },
    getAllGoods(state, all_goods) {
      state.goodInfo = {
        ...state.goodInfo,
        all_goods
      };
    },
    gocart(state, cart) {
      state.goodInfo =  {
        ...state.goodInfo,
        cart
      };
    },
    getshoppingcar(state,shoppinginfo){
      state.shoppinginfo=shoppinginfo
    },
    changecount(state,count){
      state.changecounts=count
    },
    adddizhi(state,dz){
      state.dizhi=dz
    },
    getdizhi(state,gtdz){
      gtdz.forEach((item,index)=>{
        item.id=index
      })
      state.gtdizhi=gtdz 
    },
    alterdizhi(state,alterdz){
      state.alterdizhi=alterdz
    },
    delgoods(state,delg){
      state.delgood=delg
    },
    buygoods(state,obj){
      state.buygoods=obj.goods;
      state.buytotal=obj.total;
    },
  }

})