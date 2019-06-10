<template>
  <div class="box">
      <span class="skip" @click="gotoHome()">跳过</span>
    <van-swipe @change="onChange" class="box">
      <van-swipe-item class="box">
          <img src="../assets/images/g1.jpg" alt="" class="img">
      </van-swipe-item>
      <van-swipe-item>
          <img src="../assets/images/g2.jpg" alt="" class="img">
      </van-swipe-item>
      <van-swipe-item>
          <img src="../assets/images/g3.jpg" alt="" class="img">
      </van-swipe-item>
      <van-swipe-item>
          <img src="../assets/images/g4.jpg" alt="" class="img" @click="gotoHome()">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import {Toast} from 'vant'
export default {
  methods: {
    onChange(index) {
      Toast("当前 Swipe 索引：" + index)
    },
    gotoHome(){
          this.$router.push({name:'home'})
      }
  }
};
</script>

<style scoped>
.box,
.swiper,
van-swipe-item,
.img {
  width: 100%;
  height: 100%;
}
.skip{
    background-color: darkorange;
    border:1px solid white;
    width: .9rem;
    height: .4rem;
    border-radius: 30%;
    position: fixed;
    font-size: .28rem;
    text-align: center;
    line-height: .4rem;
    color: white;
    right: .8rem;
    top: .6rem;
    z-index: 4;
    display: block;
}
</style>