<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img :src="image" alt class="img" @click="gotoApp(index)">
    </van-swipe-item>
  </van-swipe>
</template>


<script>
export default {
  data() {
    return {
      images: [
        "https://res.darryring.com/wapactivity/brand/p1.jpg",
        "https://res.darryring.com/wapactivity/brand/zjlb2.jpg",
        "https://res.darryring.com/wapactivity/brand/djlb2.jpg",
        "https://res.darryring.com/wapactivity/brand/p4.jpg"
      ]
    };
  },
  methods: {
    gotoApp(id) {
      if (id == this.images.length - 1) {
        this.$router.push({ name: "index" });
      }
    }
  },
  mounted() {
    if (localStorage.pcount) {
      localStorage.pcount++;
      if (localStorage.pcount > 3) {
        this.$router.push({ name: "index" });
      }
    } else {
      localStorage.pcount = 1;
    }
  }
};
</script>

<style scoped>
van-swipe,
van-swipe-item,
img {
  width: 100%;
  height: 100%;
}
</style>


