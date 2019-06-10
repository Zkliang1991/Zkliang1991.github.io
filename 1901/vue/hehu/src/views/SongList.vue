<template>
  <div>
    <mt-header fixed :title="songList.name">
      <mt-button icon="back" slot="left" @click="goback">返回</mt-button>
    </mt-header>
    <el-row>
      <el-image :src="songList.coverImgUrl"></el-image>
    </el-row>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">歌单列表</mt-tab-item>
      <mt-tab-item id="2">歌单简介</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div v-for="(t,i) in songList.tracks" :key="i" @click="gomusic(t.id)" class="boder-div animation-div">
          <el-row  type="flex" justify="space-between" >
            
              <el-col :span="18" :offset="2">
                <el-row>
                  <p class="sty-p1">{{i+1}}.{{t.name}}</p>
                  <p class="sty-p2">{{t.artists[0].name}}</p>
                </el-row>
              </el-col>
              <el-col :span="4">
                <i class="iconfont ic-sty" v-html="icon"></i>
              </el-col>
          </el-row>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <el-row>
          <p style="text-indent:0.2rem">{{songList.description}}.</p>
        </el-row>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      icon: "&#xe680;",
      selected: "1"
    };
  },
  computed: {
    ...mapState(["songList"]),
    id() {
      return this.$store.state.songListId;
    },
    
  },
  created() {
    if (!this.id) {
      this.$router.push({ name: "home" });
    }
    if(this.songList.length == 0){
      this.$axios
      .get("https://v1.itooi.cn/netease/songList", {
        params: {
          id: this.id
        }
      })
      .then(res => {
        //console.log(res.data.data);
        this.$store.state.songList = res.data.data;
      });
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    gomusic(id) {
      this.$router.push({ name: "song", params: { id } });
      this.$store.state.songId = id;
    }
  }
};
</script>
<style scoped>
.boder-div{
  width: 90%;
  margin: 0.2rem auto;
  border-radius: 0.2rem;
  overflow: hidden;
  box-shadow: 0.1rem 0.1rem 0.2rem #333333
}
.sty-p1{
  margin: 0.2rem 0;
}
.sty-p2{
  margin: 0.2rem 0;
  font-size: 0.24rem;
  font-style: italic
}
.ic-sty{
  display: block;
  margin: 0.35rem auto;
  font-size: 0.35rem;
}
.animation-div{
  animation: zoomIn 1s
}
</style>
