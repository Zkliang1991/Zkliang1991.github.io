<template>
  <div>
    <!-- :show-indicators="false" -->
    <!-- <Swipe id="banner" :options="{autoplay:true,speed:1500}">
      <div class="swiper-slide slide" v-for="(img,i) in imgs" :key="i">
        <img :src="img" alt class="swiper-img">
      </div>
    </Swipe>

    <Swipe id="movie" :options="{loop:true,autoplay:true}">
      <div class="swiper-slide slide" v-for="(b,i) in goodInfo.banner" :key="i">
        <img :src="b.images.large" alt class="swiper-img">
      </div>
    </Swipe> -->

     <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img" class="swiper-img">
      </van-swipe-item>
      
    </van-swipe>
  </div>
</template>


<script>
 import { Toast } from "vant";

// import { mapState, mapActions } from "vuex";
export default {
  // computed: {
  //   ...mapState(["goodInfo"])
  // },
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
};
</script>


<style scoped>
.slide,
.swiper-img {
  width: 100%;
  height: 4rem;
}
</style>


