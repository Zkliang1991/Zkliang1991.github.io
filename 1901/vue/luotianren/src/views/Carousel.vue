<template>
  <div>
    <van-swipe :autoplay="3000" class="swipe">
      <van-swipe-item v-for="(img,i) in imgs" :key="i">
        <img :src="img" alt="" class="img" @click="gotoApp(i)">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script >

export default {
  name: "carousel",
  data() {
    return {
      imgs: [
        require("@/assets/images/3.jpg"),
        require("@/assets/images/2.jpg")
      ]
    };
  },
  methods: {
    gotoApp(id) {
      if (id == this.imgs.length - 1) {
        this.$router.push({ name: "home" });
      }
    }
  }
};
</script>

<style scoped>
.swipe,
van-swipe-item,
.van-swipe__track,
.img {
  width: 100%;
  height: 100%;
}
</style>

