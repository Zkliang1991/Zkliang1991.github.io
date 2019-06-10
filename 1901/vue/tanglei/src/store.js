import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo:{
      dlstate:false,
      username:"请登录"

    },
    fengl:{
      list:[],
      title:"",
      search:""
    }
  },
  mutations: {
    changeusername(state,username){
      state.userinfo.username=username;
      state.userinfo.dlstate=true;
      console.log(username)
    },
    changefenl(state,fenl){
      state.fengl.list=fenl.list;
      state.fengl.title=fenl.title
      state.fengl.search=fenl.search
    }
  },
  actions: {
    changeusername(context,username){
      context.commit("changeusername",username);
    },
    changefenl(context,fenl){
      context.commit("changefenl",fenl)
    }
  }
})
