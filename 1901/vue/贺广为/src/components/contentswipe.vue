<template>
  <div class="block">
    <el-carousel class="homeswipe" height="3rem">
      <el-carousel-item v-for="(img,i) in imgs" :key="i">
        <img :src="img" class="swiper-img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
 <script>
export default {
  data() {
    return {
      imgs: [
        "https://img1.yesmyimg.com/2019/4/30/20190530104854884.jpg",
        "https://img1.yesmyimg.com/2019/3/23/20190423133132292.jpg",
        "https://img4.yesmyimg.com/2019/4/31/20190531094055237.jpg",
        "https://img4.yesmyimg.com/2019/4/22/20190522101541148.jpg"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.block {
  .homeswipe {
    width: 100%;
    height: 3rem;
    .swiper-img {
      width: 100%;
      height: 3rem;
    }
  }
}
</style>