import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import router from './router'
import axios from "../src/utils/axios"

const guideModule = {
  state: {
    imgs: [
      require("./assets/images/imgs1.jpeg"),
      require("./assets/images/imgs1.png"),
      require("./assets/images/imgs2.jpeg"),
      require("./assets/images/imgs2.jpg")
    ]
  },
  actions: {
    goToHome({ commit }, i) {
      commit("goToHome", i);
    }
  },
  mutations: {
    goToHome(state, i) {
      if (i == state.imgs.length - 1) {
        router.push({ name: "home" });
      }
    }
  }
}

const homeModule = {
  state: {
    imgs: [
      require("./assets/images/show1.jpg"),
      require("./assets/images/show2.jpg"),
      require("./assets/images/show3.jpg"),
      require("./assets/images/show4.jpg"),
      require("./assets/images/show5.jpg")
    ],
    logos: [
      { title: "商城超市", img: require("./assets/images/list1.png") },
      { title: "数码电器", img: require("./assets/images/list2.png") },
      { title: "潮牌服饰", img: require("./assets/images/list3.png") },
      { title: "生鲜超市", img: require("./assets/images/list4.png") },
      { title: "9.9元拼", img: require("./assets/images/list5.png") },
      { title: "唯品会", img: require("./assets/images/list6.png") },
      { title: "全球购", img: require("./assets/images/list7.png") },
      { title: "美妆馆", img: require("./assets/images/list8.png") },
      { title: "拍卖馆", img: require("./assets/images/list9.png") },
      { title: "PLUS会员", img: require("./assets/images/list1.png") },
    ],
    imgsmall: [
      require("./assets/images/img1.jpg"),
      require("./assets/images/img2.jpg"),
      require("./assets/images/img3.jpg"),
      require("./assets/images/img4.jpg"),

    ],
  }
}

const searchModule = {
  state: {
    searchValue: "",
    goods: []
  },
  mutations: {
    getSearchValue(state, searchValue) {
      state.searchValue = searchValue
      console.log("新来的" + state.searchValue)
    },
    onCancel() {
      router.go(-1);
    }
  }
}

const listModule = {
  state: {
    goodtype: [],
  },
  actions: {
    getGoodType({ commit }, { url, cb }) {
      axios.get(url).then(res => {
        cb();
        commit("getGoodType", res.data.result);
      })
    }
  },
  mutations: {
    getGoodType(state, result) {
      state.goodtype = result
      console.log(state.goodtype )
    }
  }
}


export default new Vuex.Store({
  modules: {
    guide: guideModule,
    homeModule,
    searchModule,
    listModule,
    
  },
  state: {
      userpwd:"",
      usertel:"",
      usereml:"",
      username:"",
  },
  mutations: {
    gotoback(state, i) {
      router.go(i);
    },
    goSearch(state) {
      router.push({ name: "search" });
    },
    Username(state,val){
      state.username=val;
    },
    Usereml(state,val){
      state.usereml=val;
    },
    Userpwd(state,val){
      state.userpwd=val;
    },
    Usertel(state,val){
      state.usertel=val;
    }
  },
  actions: {

  }
})
