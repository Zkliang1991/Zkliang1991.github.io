<template>
  <div>
    <mt-swipe :auto="4000" class="swiper" :show-indicators="true">
      <mt-swipe-item v-for="(img,i) in imgs" :key="i">
        <img :src="img" alt class="img" @click="gotoApp(i)">
      </mt-swipe-item>
    </mt-swipe>
    <mt-button plain class="tg" size="normal" @click="gotoApp">跳过</mt-button>
  </div>
</template>
<script>
export default {
  name: "guide",
  data() {
    return {
      imgs: [
        require("@/assets/images/1.jpg"),
        require("@/assets/images/2.jpg"),
        require("@/assets/images/3.jpg")
      ]
    };
  },
  methods: {
    gotoApp() {
      this.$router.push({
        name: "home"
      });
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
.tg {
  position: absolute;
  right: 24px;
  top: 10px;
  border-radius: 20px;
}
</style>

