import Vue from 'vue'
import Vuex from 'vuex'
import axios from "@/utils/ajax"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10,
    movie: {
      movielist: []
    },
    goodsinfo: {
      goodslist: [],
      types: [],
      allgoods: []
    },
    keyword: "咖啡",
    carNum: 0
  }
  ,
  actions: {
    countadd({ commit }, num) {
      commit("countadd", num)
    },
    getMovieName({ commit }) {
      axios.get("/vue/movie").then(res => {
        commit("getMovieName", res.data.result);
      })
    },
    goodsListSearch({ commit }, { params }) {
      axios.get("/vue/searchList", {
        params
      }).then(res => {
        commit("goodsListSearch", res.data.result);
      })
    },
    getGoodTypes({ commit }) {
      axios.get("/vue/getGoodTypes")
        .then(res => {
          commit("getGoodTypes", res.data.result);
        })
    },
    getAllGoods({ commit }) {
      axios.get("/vue/searchList")
        .then(res => {
          commit("getAllGoods", res.data.result);
        })
    },
    showCarNum({ commit },num) {    
        commit("showCarNum", num)
    }
  }
  ,
  mutations: {
    countadd(state, num) {
      state.count += num
    },
    getMovieName(state, result) {
      state.movie = { ...state.movie, movielist: result }
    },
    goodsListSearch(state, goodslist) {
      state.goodsinfo = { ...state.goodsinfo, goodslist }
    },
    getKeyword(state, keyword) {
      state.keyword = keyword;
    },
    getGoodTypes(state, types) {
      state.goodsinfo = { ...state.goodsinfo, types }
    },
    getAllGoods(state, allgoods) {
      state.goodsinfo = { ...state.goodsinfo, allgoods };
    },
    showCarNum(state, num) {
      state.carNum = num
    }
  }
})
