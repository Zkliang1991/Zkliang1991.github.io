<template>
  <div class="mt">
    <mt-header fixed title="歌曲列表">
      <mt-button icon="back" slot="left" @click="goback">返回</mt-button>
    </mt-header>
    <div >
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">歌曲列表</mt-tab-item>
        <mt-tab-item id="2">个人资料</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="2">
          <div>
            <p style="text-indent:0.2rem">{{singerInfo.list.introduction[0].txt}}</p>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="1">
          <mt-loadmore
            :bottom-method="loadBottom"
            :top-method="loadTop"
            :bottom-all-loaded="allLoaded"
            ref="loadmore"
          >
            <ul>
              <li v-for="(item,i) in singerList.list" :key="i" class="animation-div">
                <el-row type="flex" justify="space-around">
                  <el-col :span="23">
                    <div class="boreder-img">
                      <el-row type="flex" align="middle">
                        <el-col :span="5">
                          <el-image :src="item.al.picUrl"></el-image>
                        </el-col>
                        <el-col :span="15" class="font-style">
                          <el-row>
                            <div @click="gomusic(item.id)">
                              <el-row>{{item.name}}</el-row>
                              <el-row>{{item.ar[0].name}}</el-row>
                            </div>
                          </el-row>
                        </el-col>
                        <el-col :span="4" >
                          <i @click="addList(item.id,item.al.picUrl,item.name,item.ar[0].name)"
                            class="iconfont"
                            v-html="icon"
                            style="font-size:0.4rem;margin-left:0.2rem"
                          ></i>
                        </el-col>
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
              </li>
            </ul>
          </mt-loadmore>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { InfiniteScroll ,Toast} from "mint-ui";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      icon: "&#xe60a;",
      selected: "1",
      allLoaded: false,
    };
  },
  computed: {
    id() {
      return this.$store.state.singerId;
    },
    ...mapState(["singerInfo","loading"]),
    singerList: {
      get() {
        return this.$store.state.singerList;
      },
      set(val) {
        this.$store.state.singerList = val;
      }
    }
  },
  methods: {
    ...mapActions(["getSingerList", "getSingerInfo", "getnewSingerlist","getuserMusicList"]),
    goback() {
      this.$router.go(-1);
    },
    gomusic(id) {
      this.$router.push({ name: "song", params: { id } });
      this.$store.state.songId = id;
    },
    loadTop() {
      setTimeout(() => {
        var list = this.singerList.list.reverse();
        this.singerList = { list };
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    },
    loadBottom() {},
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
  },
  created() {
    if (!this.id) {
      this.$router.push({ name: "home" });
    } else {
      if(!this.singerInfo.list){
         this.$store.state.singerInfo.list = {introduction:[{txt:'无'}]}
      }else{
        this.getSingerInfo({ url: "https://v1.itooi.cn/netease/artist/info", id: this.id });
      }
      if (!this.singerList.list) {
        this.getSingerList({ url: "https://v1.itooi.cn/netease/song/artist", id: this.id });
        //console.log(this.singerInfo)
        
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
  animation: zoomIn;
  margin: 0.1rem 0;
  overflow: hidden;
  border-radius: 5%;
  box-shadow: 0.1rem 0.1rem 0.1rem #cdcdcd;
}
.mt {
  margin: 0.8rem 0;
  
}
.animation-div{
  animation: zoomIn 1s
}
</style>
