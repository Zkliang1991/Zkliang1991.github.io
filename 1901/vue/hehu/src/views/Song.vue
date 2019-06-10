<template>
  <div class="container-song" :style="{backgroundImage:bgci}">
    <mt-header :title="musiclist.title" fixed>
      <mt-button  icon="back" slot="left" @click="goback">返回</mt-button>
      <mt-button  icon="el-icon-sort-up" slot="right" @click="listmusic">播放列表</mt-button>
    </mt-header>
    <div class="content-song ">
        <div >
          <el-image :src="bgcimg" :fit="fill" class="song-ai"></el-image>
        </div>
    </div>
    <footer>
      <Aplayer autoplay :music="musiclist"  :show-lrc="lrcword"></Aplayer>
    </footer>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
import {mapState} from 'vuex'
export default {
  data() {
    return {
    bgci:'',
    fill:'fill', 
    bgcimg:'',
    color:'#b7daff',
    lrcword:true,
      musiclist: {
        title: "",
        artist: "",
        src: "",
        pic: "",
        lrc:'',
      }
    };
  },
  methods: {
      goback(){
          this.$router.go(-1)
      },
      listmusic(){
        this.$store.state.ismusicPlay = true;
      }
  },
  computed: {
    ...mapState(["ismusicPlay"]),
    id(){
      return this.$store.state.songId
    }
  },
  created() {
    if(!this.id){
      this.$router.push({name:'home'})
    }
    this.$axios
      .get("https://v1.itooi.cn/netease/song", {
        params: {
          id:this.id
        }
      })
      .then(res => {
        this.musiclist.title = res.data.data.songs[0].name;
        this.musiclist.artist = res.data.data.songs[0].ar[0].name;
        this.musiclist.pic = res.data.data.songs[0].al.picUrl;
        this.bgcimg = res.data.data.songs[0].al.picUrl;
        this.bgci = 'url(' + res.data.data.songs[0].al.picUrl + ')';
       
      });

    this.musiclist.src = `https://v1.itooi.cn/netease/url?id=${this.id}&quality=flac`;
    this.musiclist.lrc = `https://v1.itooi.cn/netease/lrc?id=${this.id}`

    var flag = this.$store.state.playList.some((item)=>{
         return item.src ==  this.musiclist.src
     })
    if(!flag){
         this.$store.state.playList.push(this.musiclist)
    }
    
    
    if(sessionStorage.userInfo){
      var obj = {username:localStorage.username,list:this.$store.state.playList}
      this.$axios.post('vue/playList',obj).then(res=>{
      })
      
    }

  },
  components: {
    Aplayer
  }
};
</script>

<style  scoped>
    .container-song{
        width:100%;
        height: 100%;
        position: relative;
        background-repeat: no-repeat;
        background-size: 200%;
    }
    .container-song .content-song .el-image{
        width: 4rem;
        height: 4rem;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        border-radius: 50%;
        overflow: hidden;
    }
    .container-song footer{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
    .song-ai{
      animation: heartBeat 3s infinite
    }
</style>


