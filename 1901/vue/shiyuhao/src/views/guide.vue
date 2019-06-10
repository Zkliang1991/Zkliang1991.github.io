<template>
  <div class="box">
    <!-- <mt-swipe :auto="2000" class="swiper" :show-indicators="false">
      <mt-swipe-item v-for="(img,i) in imgs" :key="i">
        <img :src="img" alt class="img" @click="gotoApp(i)">
      </mt-swipe-item>
    </mt-swipe>-->
    <p class="tiaoguo" @click="goHome">跳过</p>
    <van-swipe @change="onChange" class="top">
      <van-swipe-item>
          <img src="@/assets/images/1.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
          <img src="@/assets/images/2.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
          <img src="@/assets/images/3.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
          <img src="@/assets/images/4.jpg" alt="" @click="goHome">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// export default {
//   name: "guide",
//   data() {
//     return {
//       imgs: [
//         require("@/assets/images/1.jpg"),
//         require("@/assets/images/2.jpg"),
//         require("@/assets/images/3.jpg"),
//         require("@/assets/images/4.jpg")
//       ]
//     };
//   },
//   methods: {
//     gotoApp(id) {
//       if (id == this.imgs.length - 1) {
//         this.$router.push({ name: "home" });
//       }
//     }
//   },
//   mounted() {
//     if (localStorage.pcount) {
//       localStorage.pcount++;
//       if (localStorage.pcount > 2) {
//         this.$router.push({ name: "home" });
//       }
//     } else {
//       localStorage.pcount = 1;
//     }
//   },

// };
import {Toast} from 'vant'
export default {
  methods: {
    onChange(index) {
      Toast("当前 Swipe 索引：" + index);
    },
    goHome(){
        this.$router.push({name:"home"})
    }
  },
    mounted() {
    if (localStorage.pcount) {
      localStorage.pcount++;
      if (localStorage.pcount > 2) {
        this.$router.push({ name: "home" });
      }
    } else {
      localStorage.pcount = 1;
    }
  },
    
};
</script>
 
<style scoped>
    .box,.top,img{
        width: 100%;
        height: 100%;
    }
    .tiaoguo{
        width: 1.5rem;
        height: .5rem;
        background-color:orange;
        color: black;
        text-align: center;
        line-height: .5rem;
        position: fixed;
        top: .5rem;
        right: .5rem; 
        z-index: 1;
        border-radius: .3rem;
    }
</style>
