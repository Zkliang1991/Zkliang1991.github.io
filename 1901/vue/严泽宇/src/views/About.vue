<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="@/assets/images/imgs1.jpeg" alt>
      </van-swipe-item>
     
      <van-swipe-item>
        <img src="@/assets/images/imgs2.jpeg" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/imgs2.jpg" alt>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="scss" scoped>
  van-swipe,
  van-swipe-item,
  img{
    width: 100%;
    height: 100%;
  }

</style>


