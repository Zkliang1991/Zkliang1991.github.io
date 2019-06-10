<template>
  <div>
    <el-row v-for="(item,i) in musicList.list" :key="i" type="flex" justify="space-around">
      <el-col :span="23">
        <div class="boreder-img">
          <el-row type="flex" align="middle">
            <el-col :span="5">
              <el-image :src="item.song.album.blurPicUrl"></el-image>
            </el-col>
            <el-col :span="15" class="font-style">
              <el-row>
                <div @click="gomusic(item.id)">
                  <el-row>{{item.name}}</el-row>
                  <el-row>{{item.song.artists[0].name}}</el-row>
                </div>
              </el-row>
            </el-col>
            <el-col :span="4">
              <i
                class="iconfont"
                v-html="icon"
                style="font-size:0.4rem;margin-left:0.2rem"
                @click="addList(item.id,item.song.album.blurPicUrl,item.name,item.song.artists[0].name)"
              ></i>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      icon: "&#xe60a;"
    };
  },
  computed: {
    ...mapState(["musicList"])
  },
  mounted() {
    if(this.musicList.length == 0){
      this.getMusicList({
      url: "https://v1.itooi.cn/netease/song/newest",
      cb() {
        //console.log("success");
      }
    });
    }
    
  },
  methods: {
    ...mapActions(["getMusicList", "getuserMusicList"]),
    gomusic(id) {
      this.$router.push({ name: "song", params: { id } });
      this.$store.state.songId = id;
    },
    addList(id,img,name,songname) {
      if (sessionStorage.userInfo) {
        var obj = {
          id,
          img,
          name,
          songname
        }
        obj.username = localStorage.username;
        obj = JSON.stringify(obj);
        //console.log(obj)
        this.getuserMusicList({ url: "/vue/addList", obj: obj });
      } else {
        Toast({
          message: "您还没登录",
          position: "bottom",
          duration: 3000
        });
      }
    }
  }
};
</script>
<style scoped>
.font-style {
  text-align: center;
  font-size: 0.24rem;
}
.boreder-img {
  animation: lightSpeedIn 1s;
  margin: 0.1rem 0;
  overflow: hidden;
  border-radius: 5%;
  box-shadow: 0.1rem 0.1rem 0.1rem #cdcdcd;
}
</style>
