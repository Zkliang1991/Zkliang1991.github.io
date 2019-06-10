<template>
  <div>
    <div v-for="(item,i) in albumList.list" :key="i" class="sty-div">
      <el-card :body-style="{ padding: '3px' }" shadow="always">
        <div slot="header" class="clearfix">
          <span style="word-wrap: nowrap;">专辑名称:{{item.name}}</span>
        </div>
        <el-image :src="item.artist.picUrl" ></el-image>
        <div style="padding: 14px;" class="clearfix">
          <span style="float:left">歌手:{{ item.artist.name}}</span>
          <span style="float:right">公司:{{item.company}}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["albumList"])
  },
  methods: {
    ...mapActions(["getAlbumList"])
  },
  mounted() {
    if(this.albumList.length == 0){
        this.getAlbumList({ url: "https://v1.itooi.cn/netease/album/newest" });
    }
  }
};
</script>

<style scoped>
.sty-div{
    margin: 0.2rem 0;
    animation:flipInX 1s

}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
</style>


