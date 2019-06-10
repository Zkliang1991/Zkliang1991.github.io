import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginInfo: {username:"",password:""},
    regInfo:{username1:"",password1:"",password2:""},
    keyword:"111"
  },
  mutations: {
    Username(state, val) {
      state.loginInfo.username = val;
    },
    Password(state, val) {
      state.loginInfo.password = val;
    },
    Username1(state, val) {
      state.loginInfo.username1 = val;
    },
    Password1(state, val) {
      state.loginInfo.password1 = val;
    },
    Password2(state, val) {
      state.loginInfo.password2 = val;
    },
    getKeyword(state,keyword){
      state.keyword = keyword;
  },
  },
  actions: {

  }
})
