<template>
  <div>
    <Head title="首页"></Head>
    <van-swipe :autoplay="3000" indicator-color="white" :show-indicators="false">
      <van-swipe-item v-for="(img,i) in imgs" :key="i">
        <img :src="img" alt>
      </van-swipe-item>
    </van-swipe>
    <ul class="caidanul">
      <li>
        <div>
          <img src="../assets/images/nz.jpg" alt>
        </div>
        <p>男装</p>
      </li>
      <li>
        <div>
          <img src="../assets/images/nvz.jpg" alt>
        </div>
        <p>女装</p>
      </li>
      <li>
        <div>
          <img src="../assets/images/nanx.jpg" alt>
        </div>
        <p>男鞋</p>
      </li>
      <li>
        <div>
          <img src="../assets/images/nk.jpg" alt>
        </div>
        <p>男裤</p>
      </li>
      <li>
        <div>
          <img src="../assets/images/nvk.jpg" alt>
        </div>
        <p>女裤</p>
      </li>
      <li>
        <div>
          <img src="../assets/images/nx.jpg" alt>
        </div>
        <p>女鞋</p>
      </li>
      <li>
        <div>
          <img src="../assets/images/bb.jpg" alt>
        </div>
        <p>背包</p>
      </li>
      <li>
        <div>
          <img src="../assets/images/tz.jpg" alt>
        </div>
        <p>童装</p>
      </li>
    </ul>
    <div class="adver">
      <img src="../assets/images/miaosha.jpg" alt>
      <img src="../assets/images/tuangou.jpg" alt>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        require("@/assets/images/zy1.jpg"),
        require("@/assets/images/zy2.jpg"),
        require("@/assets/images/zy3.jpg")
      ]
    };
  }
};
</script>

<style>
van-swipe,
van-swipe-item,
img {
  width: 100%;
  height: 4rem;
}
.caidanul li {
  width: 21%;
  height: 1.5rem;
  margin: 0 2%;
  float: left;
}
.caidanul li img {
  width: 100%;
  height: 1rem;
}
.adver{
  width: 100%;
  height: 3rem;
}
.adver img{
  float: left;
  width: 50%;
  height: 100%;
}
</style>
