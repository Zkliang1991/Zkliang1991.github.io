import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {} from './utils/mutation_types'
import axios from './utils/ajax'
export default new Vuex.Store({
  state: {
    logoUrl:'https://p1.music.126.net/t06ZZ0uze6GUAKn2a_erIQ==/2907108746238787.jpg',
    title:'发现',
    ismusicPlay:false,
    loading:true,
    playList:[],
    username:'',
    musicList:[],
    singerList:[],
    singerInfo:[],
    listBanner:[],
    userMusicList:[],
    songList:[],
    homeSinger:[],
    homeSongList:[],
    homeBanner:[],
    albumList:[],
    songId:'',
    singerId:'',
    songListId:'',
    user:{
      username:'',
      pwd:''
   },
    register:{
      username:'',
      pwd:'',
      dbpwd:''
  }
  },
  mutations: {
    getMusicList(state,list){
      state.musicList = {...state.musicList,list:list}
    },
    getSingerList(state,list){
      state.singerList = {...state.singerList,list:list}
    },
    getSingerInfo(state,list){
      state.singerInfo = {...state.singerInfo,list:list}
    }
    ,getListBanner(state,list){
      state.listBanner = {...state.listBanner,list:list}
    },
    getuserMusicList(state,obj){
      state.userMusicList.push(obj)
    },
    getAlbumList(state,list){
      state.albumList = {...state.albumList,list:list}
    }

  },
  actions: {
    getMusicList({commit},{url,cb}){
      axios.get(url).then(res=>{
          cb();
          commit("getMusicList",res.data.data)
      })
    },
    getSingerList({commit},{url,id}){
      axios.get(url,{params:{id:id}}).then(res=>{
        commit("getSingerList",res.data.data)
      })
    },
    getSingerInfo({commit},{url,id}){
      axios.get(url,{params:{id:id}}).then(res=>{
        if(res.data.data.introduction.length == 0){
          res.data.data.introduction.push({txt:'暂无介绍'})
        }
        commit("getSingerInfo",res.data.data)
      })
    },
    getListBanner({commit},{url}){
      axios.get(url).then(res=>{
        res.data.data.splice(6)
        commit("getListBanner",res.data.data)
      })
  },
  getuserMusicList({commit},{url,obj}){
    axios.post(url,{list:obj}).then(res=>{
      if(res.data.type == 1){
        obj = JSON.parse(obj);
        commit("getuserMusicList",obj)
      }
    })
  },
  getAlbumList({commit},{url}){
    axios.get(url).then(res=>{
      commit('getAlbumList',res.data.data)
    })

  }
},
getters:{
  defaultMusic(state){
    if(state.playList.length != 0){
      return state.playList[0]
    }else{
      return {
        title: "",
        artist: "",
        src: "none",
        pic: ""
      }
    }
  }
}
})
