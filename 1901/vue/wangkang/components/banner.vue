<template>
  <div class="banner">
    <mt-swipe :auto="0" class="swiper">
      <mt-swipe-item v-for="(img,i) in imgs" :key="i">
        <img :src="img" alt class="img" @click="gotoapp(i)">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>



<script>
export default {   
  name: "banner",
  data() {
    return {
      imgs: [
        require("../assets/images/index1.jpg"),
        require("../assets/images/index2.jpg"),
        require("../assets/images/index3.jpg"),
        require("../assets/images/index4.png")
      ]
    };
  },
  methods: {
    gotoapp(i) {
      if (i == this.imgs.length - 1) {
        this.$router.push({ name: "home" });
      }
    }
  },
  mounted(){
    
  }
};
</script>


<style lang="scss">
.swiper,
mt-swipe-item,
.img {
  width: 100%;
  height: 100%;
}
</style>