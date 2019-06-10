import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1901,
    msg: "vuex so easy",
    city: "武汉",
    tab:'classfiy',
    goodInfo:{
    banner:[],
    list:[],
    num:0,
    checked:[],
    addr:[]
  }
  },

  actions: {
    countCart(){
      context.context("shuliang");
    },
    countAdd(context) {
      context.context("countAdd_M");
    },
    countDesc(context, playLod) {
      context.commit("countDesc_M", playLod);
    },
    carNumAdd(context, num) {
      context.commit("carNumAdd_M", num);
    },
    carNumDesc(context, num) {
      context.commit("carNumDesc_M", num);
    },
    change(context, msg) {
      context.commit("changemsg", msg);
    },
    getBanner({commit},{url,cb}){
      axios.get(url,{
          params:{
              limit:10
          }
      }).then(res=>{
          cb();  // 执行成功 后的 回调  this.$router.push 逻辑 
          commit("getBanner",res.data.result);
      })
  }
  },
  mutations: {
    adderss(state,value){
      state.addr=value;
    },
    checkedList(state,value){
      state.checked=value;
    },
    shuliang(state,value){
      state.num =value;
    },
    test(state,value){
      state.list=value;
    },
    countAdd_M(state) {
      state.count++;
    },
    countDesc_M(state, playLod) {
      state.count -= playLod;
    },
    carNumAdd_M(state, playLod) {
      state.num += playLod;
    },
    carNumDesc_M(state, playLod) {
      var number = this.state.num * 1;
      if (number == 0) {
      } else {
        state.num -= playLod;
      }
    },
    carNumReduce(state, num) {
      state.num += num * 2;
    },

    changemsg(state, msg) {
      state.msg = msg;
    },
    getBanner(state,banner){
      // 返回新对象 
      state.goodInfo  = {...state.goodInfo,banner:banner }; 
    },
    getTab(state,tab){
      state.tab = tab;
   }
  }
});
