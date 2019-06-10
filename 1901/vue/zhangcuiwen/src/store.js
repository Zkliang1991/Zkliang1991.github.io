

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "@/utils/ajax";
// import axios from "@/utils/ajax";
export default new Vuex.Store({
  state: {
    count: 1901,
    msg: "重新修炼",
    good: {}, //此处是列表的值

    goodInfo: {
      gifts: []
    }
  },
  actions: {
    getGift({ commit }, { url, cb }) {
      axios
        .get(url, {
          // params: {
          //   limit: 10
          // }
        })
        .then(res => {
          cb(); // 执行成功 后的 回调  this.$router.push 逻辑
          commit("getGift", res.data.result);
        });
    }
    //怎么用辅助函数classify
    // getBanner({commit},{"/vue/getGoodOne",cb}){
    //     axios.get("/vue/getGoodOne",{
    //         params:{
    //             limit:10
    //         }
    //     }).then(res=>{
    //         cb();  // 执行成功 后的 回调  this.$router.push 逻辑
    //         commit("getBanner",res.data.result);
    //     })
    // }
  },
  mutations: {
    getGift(state, gifts) {
      // 返回新对象
      state.goodInfo = { ...state.goodInfo, gifts: gifts };
    }
  }
});


