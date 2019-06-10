import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "@/utils/ajax"
const store = new Vuex.Store({
  state: {
    goods: [],
    mycar: [],
    mydz: [],
    buygoods: [],
    buytotal: ""
  },

  actions: {
    getAllGoods({
      commit
    }, {
      url
    }) {
      axios.get(url, )
        .then(res => {
          commit("getAllGoods", res.data.result);
        })
    },
    getMyCar({
      commit
    }, {
      url,
      username
    }) {
      axios.get(url, {
          params: {
            username
          }
        })
        .then(res => {
          console.log("vuex")
          console.log(res);
          commit("getMyCar", res.data.result);
        })
    },
    getDZ({
      commit
    }, {
      username
    }) {
      axios.post(url, {
        username
      }).then(res => {
        console.log(VUEX);
        console.log(res);
        commit("getDZ", res.data.result)
      })
    },
    
  },
  mutations: {
    getAllGoods(state, allgoods) {
      state.goods = allgoods;
    },
    getMyCar(state, mycar) {
      state.mycar = mycar;
    },
    getDZ(state, result) {
      state.mydz = result
    },
    changeBuyGoods(state,obj){
      state.buygoods = obj.goods;
      state.buytotal = obj.total;
    }
  },
})
export default store;