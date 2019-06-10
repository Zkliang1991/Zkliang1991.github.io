<template>
  <div>
    <!-- :show-indicators="false" -->
    <mt-swipe :auto="2000" class="swiper">
      <mt-swipe-item v-for="(m,i) in imgs" :key="i">
        <img :src="m" alt class="img" @click="gotoApp(i)">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        require("@/assets/images/325345.jpg"),
        require("@/assets/images/325420.jpg"),
        require("@/assets/images/325447.jpg"),
        require("@/assets/images/325455.jpg")
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
      if (localStorage.pcount > 3) {
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

