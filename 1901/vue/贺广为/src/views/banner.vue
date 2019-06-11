<template>
  <div>
    <mt-swipe :auto="4000" class="swiper" :show-indicators="false">
      <mt-swipe-item v-for="(img,i) in imgs" :key="i">
        <img :src="img" class="img" @click="gotoapp(i)">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  //   name: "banner",
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
    gotoapp(num) {
      if (num == this.imgs.length - 1) {
        this.$router.push({ name: "home" });
      }
    }
  },
  mounted() {
    if (localStorage.count) {
      localStorage.count++;
      if (localStorage.count > 3) {
        this.$router.push({ name: "home" });
      }
    } else {
      localStorage.count = 1;
    }
  }
};
</script>
<style scoped>
.swiper,
.img {
  width: 100%;
  height: 100%;
}
</style>