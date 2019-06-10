import Vue from 'vue'
import Vuex from 'vuex'
import axios from "@/utils/ajax"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodInfo: {
      banner: [],
      types: [],
      all_goods: []
    },
    tab:"home"
  },
  actions: {
    getGoodTypes({ commit }, { url }) {
      axios.get(url)
        .then(res => {
          commit("getGoodTypes", res.data.result);
        })
    },
    getAllGoods({ commit }, { url, cb, params }) {
      axios.get(url, {
        params
      })
        .then(res => {
          commit("getAllGoods", res.data.result);
        })
    },
  },
  mutations: {
    getAllGoods(state, all_goods) {
      state.goodInfo = { ...state.goodInfo, all_goods };
    },
    getGoodTypes(state, types) {
      state.goodInfo = { ...state.goodInfo, types };
    },
    getBanner(state, banner) {
      state.goodInfo = { ...state.goodInfo, banner: banner };
    },
    getTab(state, tab) {
      state.tab = tab;
    }
  },
  getters: {
    newBanner(state) {
      return state.goodInfo.banner.filter((item, index) => index % 2 == 0);
    },
    newTypes(state) {
      return state.goodInfo.types.map((item, index) => {
        item.text = item.text + "_" + index;
        return item;
      })
    }
  }
})
