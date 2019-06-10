<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white" :show-indicators="false">
      <van-swipe-item v-for="(img,i) in imgs" :key="i">
        <img :src="img" alt @click="goApp(i)">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        require("@/assets/images/yd1.jpg"),
        require("@/assets/images/yd2.jpg"),
        require("@/assets/images/yd3.jpg")
      ]
    };
  },
methods:{
    goApp(i){
        if(i==this.imgs.length-1){
            this.$router.push({name:'home'})
        }
    }
}



};
</script>




<style scoped>
van-swipe,van-swipe-item,img{
    width: 100%;
    height: 100%;
}




</style>

