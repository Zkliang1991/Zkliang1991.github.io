<template>
    <div>
        <van-swipe :autoplay="3000" class="swiper">
            <van-swipe-item v-for="(image, i) in images" :key="i">
                 <img :src="image" alt="" class="img" >
            </van-swipe-item>
        </van-swipe>
    </div>  
</template>

<script>
export default {
    name:"swipe",
     data() {
        return {
            images: [
                "http://image7.wbiao.co/mall/8ad7603bf0a64e488a2ba3fde8fb0e23.jpg",
                "http://image7.wbiao.co/mall/0afabd413ea34811bdabfb4cb0aea8d6.jpg",
               " http://image7.wbiao.co/mall/1fb17fa91e7e4423b47879a8a900e128.jpg",
                "http://image7.wbiao.co/mall/1fb17fa91e7e4423b47879a8a900e128.jpg",
                "http://image7.wbiao.co/mall/44b9768140f84befbf7b751a91adbf9f.jpg"
                ]
        }
  }
}
</script>

<style scoped>
      .swiper,mt-swipe-item ,.img {
        width:100%;
        height:100%;
    }
    .swiper{
        margin-top: 1rem;
    }
</style>

