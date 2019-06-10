<template>
  <div>
    <Swipe id="movie" :options="{loop:true,autoplay:true}" style="width:100%">
      <div class="swiper-slide slide" v-for="(b,i) in homeBanner" :key="i">
        <img :src="b.song.album.blurPicUrl" alt class="swiper-img" @click="gomusic(b.id)">
      </div>
    </Swipe>
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item title="热门歌手" name="1" style="text-indent: 0.2rem">
        <div style="text-indent: 0">
          <el-row
            style="width:100%;flex-wrap:wrap"
            type="flex"
            justify="space-between"
           
          >
            <el-col :span="7" v-for="(s,i) in homeSinger" :key="i" style="margin:0.2rem 0.1rem">
              <el-row  class="move-img">
                <div @click="gosinger(s.id)">
                  <el-image :src="s.img1v1Url"></el-image>
                </div>
                <p style="font-size:0.20rem;text-align:center" @click="gomenu(s.id)">{{s.name}}</p>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
      <el-collapse-item title="推荐歌单" name="2" style="text-indent: 0.2rem">
        <div style="text-indent: 0">
          <el-row
            style="width:100%;flex-wrap:wrap"
            type="flex"
            justify="space-between"
           
          >
            <el-col :span="7" v-for="(m,i) in homeSongList" :key="i" style="margin:0.2rem 0.1rem">
              <el-row  class="move-img">
                <div @click="gomenu(m.id)">
                  <el-image :src="m.coverImgUrl"></el-image>
                </div>
                <p style="font-size:0.12rem;text-align:center" @click="gomenu(m.id)">{{m.name}}</p>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
// @ is an alias to /src
import { Indicator, Toast } from "mint-ui";
import Swipe from "@/components/swipe.vue";
import { mapState } from "vuex";
export default {
  name: "home",
  components: {
    Swipe,
  },
  data() {
    return {
      banner: [],
      musicmenu: [],
      singer: [],
      activeNames: ["1"],
    };
  },
  computed: {
    ...mapState(["homeSinger", "homeSongList","homeBanner"])
  },
  mounted() {
    if(this.homeBanner.length == 0 ){
      this.$axios.get("https://v1.itooi.cn/netease/song/newest").then(res => {
      //console.log(res.data.data)
      this.$nextTick(() => {
        this.$store.state.homeBanner = res.data.data.splice(6);
        this.loading = false;
      });
    });
    }
    
    if (this.homeSongList.length == 0) {
      this.$axios.get("https://v1.itooi.cn/netease/songList/highQuality").then(res => {
        // console.log(res.data.data);
        res.data.data.splice(16);
        res.data.data.shift(0);
        this.$store.state.homeSongList = res.data.data;
      });
    }
    if (this.homeSinger.length == 0) {
      this.$axios.get("https://v1.itooi.cn/netease/artist/top?page=0&pageSize=30").then(res => {
        //console.log(res.data.data);
        res.data.data.splice(16);
        res.data.data.shift();
        this.$store.state.homeSinger = res.data.data;
      });
    }
  },
  methods: {
    gomusic(id) {
      this.$router.push({ name: "song", params: { id } });
      this.$store.state.songId = id;
    },
    gomenu(id) {
      this.$router.push({ name: "songlist", params: { id } });
      this.$store.state.songListId = id;
    },
    gosinger(id) {
      this.$router.push({ name: "singer", params: { id } });
      this.$store.state.singerId = id;
    },
    handleChange(val) {
      //console.log(val);
    }
  }
};
</script>
<style scoped>
.slide,
.swiper-img {
  width: 100%;
  height: 4rem;
}
.move-img {
  animation: zoomIn 1s;
}

</style>