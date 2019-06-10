<template>
  <div>
    <!-- <mt-swipe :auto="4000" class="swiper" :show-indicators="false">
      <mt-swipe-item v-for="(img,i) in imgs" :key="i">
        <img :src="img" alt class="img" @click="gotoApp(i)">
      </mt-swipe-item>
    </mt-swipe> -->

    <van-swipe :autoplay="3000" indicator-color="white" class="swiper">
      <van-swipe-item v-for="(img,i) in imgs" :key="i">
          <img :src="img" alt class="img" @click="gotoApp(i)">
      </van-swipe-item>
    </van-swipe>

  </div>
</template>

<script>
export default {
  name: "guide",
  data() {
    return {
      imgs: [
        require("@/assets/images/slide1.png"),
        require("@/assets/images/slide2.png"),
        require("@/assets/images/slide3.png"),
        require("@/assets/images/slide4.png")
      ]
    };
  },
  methods: {
    gotoApp(id) {
      if (id == this.imgs.length - 1) {
        this.$router.push({ name: "home" });
      }
    }
  },
  mounted() {
    if (localStorage.pcount) {
      localStorage.pcount++;
      if (localStorage.pcount > 1) {
        this.$router.push({ name: "home" });
      }
    } else {
      localStorage.pcount = 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper,
van-swipe-item,
.img {
  width: 100%;
  height: 100%;
}
</style>
