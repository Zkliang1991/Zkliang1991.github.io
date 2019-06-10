<template>
    <div class='lunbo content'>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        require("@/assets/images/img1.jpg"),
        require("@/assets/images/img2.jpg"),
        require("@/assets/images/img3.jpg"),
        require("@/assets/images/img4.jpg")
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.lunbo{
    height:4rem;
    img{
        width:100%;
        height:4rem;
    }
}
    
</style>

