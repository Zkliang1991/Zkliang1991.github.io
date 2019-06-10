import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {http } from "./utils"

export default new Vuex.Store({
  state: {
    carnum:0,
    banner:[],
    goodLists:[],
    goodtypes:[],
    username:"",
    password:"",
    pwd:"",
    email:"",
    ins:0,
    zuijinshousuoshow:true,
    pinglunlist:[],
    goodtail:{},
  },
  actions: {
    getgoodtail({commit},val){
      commit("getgoodtail",val);
    },
    //获取自己评论
    getmypinglun({commit},{url,cb}){
      http.get(url,{params:{
        username:this.state.username
      }})
      .then(res=>{
        commit("getallpinglun",res.data.result);
        cb();
      })
    },



    //获取所有评论
    getallpinglun({commit},{url,cb}){
      http.get(url,{})
      .then(res=>{
        commit("getallpinglun",res.data.result);
        cb();
      })
    },
    getGoodTypesAJAX({commit},{url,cb}){
      http.get(url,{})
      .then(res=>{
        commit("getGoodTypesAJAX",res.data.result);
        cb();
      })
    },
    changeins({commit},count){
      commit("changeins",count)
    },
    changezuijinshousuoshow({commit}){
      commit("changezuijinshousuoshow")
    },
    getGoodlistsAJAX({commit},{url,cb}){
      http.get(url,{})
      .then(res=>{
          commit("getGoodlistsAJAX",res.data.result);
          cb();
      })
    },
    gozhuce({ commit }, { cb }) {
      http.post("/vue/register", {
        params: {
          username: this.state.username,
          password: this.state.password,
        }
      }).then(res => {
        cb(res.data);
      })
    },
    denglu({commit},{url,username,password,cb}){
      http.get(url,{
        params:{
          username,
          password
        }
      }).then(res=>{
          cb(res)
      })
    }, 
  },

  mutations: {
    getgoodtail(state,result){
      state.goodtail=result;
    },
    Username(state,result){
      state.username=result;
    },
    Password(state,result){
      state.password=result;
    },
    Pwd(state,result){
      state.pwd=result;
    },
    Email(state,result){
      state.email=result;
    },
    getGoodTypesAJAX(state,goodtypes){
        state.goodtypes = goodtypes;
    },
    changeins(state,count){
      state.ins=count;
    },
    getGoodlistsAJAX(state,value){
      state.goodLists=value;
    },
    changezuijinshousuoshow(state){
      state.zuijinshousuoshow=false;
    },
    changecaunum(state){
      state.carnum++;
    },
    getallpinglun(state,result){
      state.pinglunlist=result;
    }
  }
})
