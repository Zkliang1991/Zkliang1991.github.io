<template>
  <div>
    <van-swipe :autoplay="3000" vertical>
       <van-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img" class="swiper-img">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
    data(){
    return{
       imgs: [
        require("@/assets/images/O1CN01J-0-lubanu.jpg"),
        require("@/assets/images/O1CNlubanu.jpg"),
        require("@/assets/images/q70.jpg"),
        require("@/assets/images/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg")
      ],
    }
  },
}
</script>

<style scoped>
.slide,
.swiper-img {
  width: 100%;
  height: 4rem;
}
.van-swipe-item{
    width: 100%;
    height: 1.74rm;
}
</style>

