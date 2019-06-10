<template>
  <van-swipe :autoplay="3000" indicator-color="white" :height="200">
    <van-swipe-item>
      <img src="@/assets/banner_1.jpg" alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="@/assets/banner_2.jpg" alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="@/assets/banner_3.jpg" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script>

export default {
    
}
</script>
<style scoped>
img{
  width: 100%;
  height: 100%;
}
</style>

