<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/images/01.png" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/2.png" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/3.png" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/4.png" alt>
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar class="notice" :text="text" left-icon="volume-o"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text:
        "富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善！扫黑、除恶。维护社会的和谐与稳定是每一个公民义不容辞的责任！"
      // text1:"诚邀您参与微课需求调研"
    };
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 4rem;
}
.notice {
  color: white;
  background-color: red;
}
</style>