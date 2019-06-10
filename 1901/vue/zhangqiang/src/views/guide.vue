<template>
  <div>
    <van-swipe :autoplay="2000" class="swiper" ndicator-color="white">
      <van-swipe-item v-for="(img,i) in imgs" :key="i">
        <img :src="img" alt class="img" @click="gotoApp(i)">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script >
export default {
  name: "guide",
  data() {
    return {
      imgs: [
        require("@/assets/images/5.jpg"),
        require("@/assets/images/6.jpg"),
        require("@/assets/images/7.jpg"),
        require("@/assets/images/8.jpg")
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
      if (localStorage.pcount > 2) {
        this.$router.push({ name: "home" });
      }
    } else {
      localStorage.pcount = 1;
    }
  }
};
</script>

<style scoped>
.swiper,
mt-swipe-item,
.img {
  width: 100%;
  height: 100%;
}
</style>