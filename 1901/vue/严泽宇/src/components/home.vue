<template>
  <div>
    <router-link :to="{name:'shoplist'}">
      <van-swipe :autoplay="4000" indicator-color="white">
        <van-swipe-item v-for="(img,i) in homeModule.imgs" :key="i">
          <img :src="img" class="navimg" alt>
        </van-swipe-item>
      </van-swipe>
      <van-row>
        <van-col span="4" v-for="(logo,i) in homeModule.logos" :key="i" offset="1">
          <img :src="logo.img" alt class="logoimg">
          <span class="logotitle">{{logo.title}}</span>
        </van-col>
      </van-row>
      <div class="imgsmall_box">
        <img src="../assets/images/show1.gif" alt class="img_gif">
        <van-swipe :autoplay="3000" indicator-color="white" id="imgsmall" :show-indicators="false">
          <van-swipe-item v-for="(img,i) in homeModule.imgsmall" :key="i">
            <img :src="img" class="navimg" alt>
          </van-swipe-item>
        </van-swipe>
        <img src="../assets/images/home1.jpg" alt>
        <img src="../assets/images/home2.jpg" alt>
        <img src="../assets/images/home1.png" alt>
        <img src="../assets/images/home3.jpg" alt>
        <img src="../assets/images/home2.png" alt>
      </div>
    </router-link>
    <div class="shop_home_list"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["homeModule"])
  }
};
</script>


<style lang="scss" scoped>
van-swipe,
van-swipe-item,
.navimg {
  width: 100%;
  height: 3.5rem;
}
i {
  width: 100%;
}
.logoimg {
  width: 70%;
  margin-bottom: 8px;
}
.van-col--4 {
  width: 15.666667%;
  margin-top: 10px;
  font-size: 0.15rem;
  margin-bottom: 12px;
}
.van-row {
  background-color: #fff;
}
.imgsmall_box {
  width: 100%;
  position: relative;
}
.imgsmall_box img {
  width: 100%;
}
.img_gif {
  width: 100%;
}
#imgsmall {
  width: 1.4rem;
  height: 1.4rem;
  position: absolute;
  top: 0.42rem;
  left: 0.8rem;
}
#imgsmall img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.shop_home_list {
  height: 50px;
}
</style>
