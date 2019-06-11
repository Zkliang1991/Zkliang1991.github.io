import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from "@/utils/ajax"

export default new Vuex.Store({
  state: {
    title1: "1F进口葡萄酒",
    title2: "2F白酒馆",
    title3: "3F洋酒啤酒清酒",
    list: [
      { img: "https://img18.yesmyimg.com/n/83/222/6222083/9383226_110x180.png", title: "桃乐丝格兰公牛血金标干红葡萄酒（原特选公牛血金标）", price: '￥89' },
      { img: "https://img18.yesmyimg.com/n/710/203/6203710/7260981_110x180.png", title: '【名庄】马利哥城堡副牌干红葡萄酒2013', price: '￥79' },
      { img: 'https://img08.yesmyimg.com/n/844/236/6236844/1061432_110x180.jpg', title: '【名庄】碧尚拉朗副牌干红2009(女爵副牌)', price: '￥59' }
    ],
    goodInfo: {
      allGoods: [],
      types: [],
      oneGoods: {},
      goodslist:[]
    },
    carnum: 0,
    keyword:""
  },
  actions: {
    getGoodTypes({ commit }, { url }) {
      axios.get(url)
        .then(res => {
          console.log(res.data.result)
          commit("getGoodTypes", res.data.result);
        })
    },
    getAllGoods({ commit }, { url, cb, params }) {
      axios.get(url, {
        params
      })
        .then(res => {
          cb()
          commit("getAllGoods", res.data.result);
        })
    },
    getIdGoods({ commit }, { url }) {
      axios.get(url).then(res => {
        commit("getIdGoods", res.data.result)
      })
    },
    showcarNum({ commit }, num) {
        commit("showcarNum",num)
    },
    goodsListSearch({ commit }, { params }) {
      axios.get("/vue/searchList", {
        params
      }).then(res => {
        commit("goodsListSearch", res.data.result);
      })
    }

  },
  mutations: {
    getGoodTypes(state, types) {
      state.goodInfo = { ...state.goodInfo, types };
    },
    getAllGoods(state, allGoods) {
      state.goodInfo = { ...state.goodInfo, allGoods };
    },
    getIdGoods(state, oneGoods) {
      state.goodInfo = { ...state.goodInfo, oneGoods }
    },
    showcarNum(state, num) {
      state.carnum = num
    },
    goodsListSearch(state, goodslist) {
      state.goodsinfo = { ...state.goodsinfo, goodslist }
    },
    getKeyword(state, keyword) {
      state.keyword = keyword;
    }
  }
})
