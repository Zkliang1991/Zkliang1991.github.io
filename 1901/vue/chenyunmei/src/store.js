import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import axios from "@/utils/ajax"

export default new Vuex.Store({
  state: {
    goods: [],
    flag: false,
    goodInfo: {
      getGoodOne: [],
      types: [],
      jiehun: [],
      drzuqiuhun: []
    },
  },
  actions: {
    getAllGoods({ commit }, { url, params }) {
      axios.get(url, {
        params
      })
        .then(res => {
          commit("getAllGoods", res.data.result);
        })
    },
    getGoodOne({ commit }, { url, params }) {
      axios.get(url, {
        params
      })
        .then(res => {
          commit("getGoodOne", res.data.result);
        })
    },
    getgoods({ commit }, { url, params }) {
      axios.get(url, {
        params
      })
        .then(res => {
          commit("getgoods", res.data.result);
        })
    },
  },
  mutations: {
    getAllGoods(state, jiehun) {
      state.goodInfo = { ...state.goodInfo, jiehun };
    },
    getgoods(state, drzuqiuhun) {
      state.goodInfo = { ...state.goodInfo, drzuqiuhun };
    },
    getGoodOne(state, getGoodOne) {
      state.goodInfo = { ...state.goodInfo, getGoodOne };
    },

    getFlag(state, flag) {
      state.flag = !flag;
    }
  }

})
