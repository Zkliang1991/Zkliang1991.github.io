<template>
  <div>
    <van-search class="se" placeholder="请输入搜索关键词" @click="search"/>
    <!-- <Head title="首页" ></Head> -->
    <van-notice-bar
      mode="closeable"
      :scrollable="true"
    >618尖货开抢618尖货开抢618尖货开抢618尖货开抢618尖货开抢618尖货开抢618尖货开抢618尖货开抢618尖货开抢</van-notice-bar>
    <swiper></swiper>
    <Liebiao></Liebiao>
    <div>
      <img src="../assets/images/4a36dbcf5d6766e2.gif" alt class="img" @click="goShopping">
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    search() {
      this.$router.push({ name: "search" });
    },
    goShopping() {
      this.$router.push({ name: "classify" });
    }
  }
};
</script>
<style scoped>
.nav {
  width: 100%;
  height: 0.7rem;
}
.sousuo input {
  width: 80%;
  /* margin-left: 0.7rem; */
  /* margin-top: 0.1rem; */
  /* background: black; */
  /* height: 1.0rem; */
  /* line-height: 1.0rem; */
  border-radius: 7%;
  background-color: #f5f4f0;
  margin: 0.1rem 0.7rem;
}
.img {
  width: 100%;
  height: 3.4rem;
}
</style>



