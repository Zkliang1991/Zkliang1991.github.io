<template>
  <div class="index-swipe">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(img,i) in bannerlist" :key="i">
        <img :src="img" alt class="index-banner-img">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "indexbanner",
  data() {
    return {
      bannerlist: [
        require("@/assets/images/banner1.jpeg"),
        require("@/assets/images/banner2.jpg"),
        require("@/assets/images/banner3.jpg"),
        require("@/assets/images/banner4.jpg")
      ]
    };
  }
};
</script>
<style scoped>
.index-swipe {
  margin-top: 55px;
  width: 100%;
  height: 190px;
}
.index-banner-img {
  width: 100%;
  height: 100%;
}
</style>

