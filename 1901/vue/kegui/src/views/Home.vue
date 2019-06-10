<template>
  <div class="home">
    <Head title="首页" :show="true"></Head>
    <van-notice-bar
      text="至此618之际，原价一千多两千多三千多现在统统只要二十块，二十块你买不了吃亏买不了上当，腰不酸了，腿也不痛了，一口气爬珠峰不费劲，就连心脏都不跳了呢！！！"
      left-icon="volume-o"
    />
    <van-swipe :autoplay="3000">
      <van-swipe-item class="van">
        <img
          class="img"
          src="https://yanxuan.nosdn.127.net/3fb764b1112c06caabceeb5bb0aed10a.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzdjZjE2YjNiZThkNjA4YmI3MGI3YTRmZDE3YmQ5ZjAucG5n|imageView&quality=95&thumbnail=1920x420"
          alt
        >
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="img"
          src="https://yanxuan.nosdn.127.net/b1d31ad2860a2a5784a6dd7ab980de3e.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzdjZjE2YjNiZThkNjA4YmI3MGI3YTRmZDE3YmQ5ZjAucG5n|imageView&quality=95&thumbnail=1920x420"
          alt
        >
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="img"
          src="https://yanxuan.nosdn.127.net/d55024a99b25907f5b12b79557722e49.jpg?imageView&quality=95&thumbnail=1920x420"
          alt
        >
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="img"
          src="https://yanxuan.nosdn.127.net/b0b920f024a01b488fe13271514ddc02.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzdjZjE2YjNiZThkNjA4YmI3MGI3YTRmZDE3YmQ5ZjAucG5n|imageView&quality=95&thumbnail=1920x420"
          alt
        >
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="img"
          src="https://yanxuan.nosdn.127.net/1772adfdf112769cf04c9f5de997bc4b.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzdjZjE2YjNiZThkNjA4YmI3MGI3YTRmZDE3YmQ5ZjAucG5n|imageView&quality=95&thumbnail=1920x420"
          alt
        >
      </van-swipe-item>
      <van-swipe-item>
        <img
          class="img"
          src="https://yanxuan.nosdn.127.net/bff87289d162744a05dbb2063f50e4f3.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzdjZjE2YjNiZThkNjA4YmI3MGI3YTRmZDE3YmQ5ZjAucG5n|imageView&quality=95&thumbnail=1920x420"
          alt
        >
      </van-swipe-item>
    </van-swipe>
    <van-row class="van">
      <van-col span="6" offset="1">
        <van-icon name="bookmark-o"/>网易自营品牌
      </van-col>
      <van-col span="7" offset="2">
        <van-icon name="medel-o"/>30天无忧
      </van-col>
      <van-col span="7">
        <van-icon name="passed" class="icon"/>48小时快速退款
      </van-col>
    </van-row>
    <ul>
      <li>
        <router-link to="/boyt">
          <img src="https://yanxuan.nosdn.127.net/5990ad8a983a0fa21e5304aacbec7346.png" class="move" alt>
        </router-link>
        <router-link to="/boyt" class="router-link">男士T恤</router-link>
      </li>
      <li>
        <router-link to="/pants">
          <img src="https://yanxuan.nosdn.127.net/9c4ba11670364b7581d1aaa23b6d1b88.png" class="move" alt>
        </router-link>
        <router-link to="/pants" class="router-link">女裤</router-link>
      </li>
      <li>
        <router-link to="/dress">
          <img src="https://yanxuan.nosdn.127.net/222cd7041d941627153566009cb73c94.png" class="move" alt>
        </router-link>
        <router-link to="/dress" class="router-link">连衣裙</router-link>
      </li>
      <li>
        <router-link to="/phone">
          <img src="https://yanxuan.nosdn.127.net/7d0e798e1f9c0eefbe65d4e3bc9f08de.png" class="move" alt>
        </router-link>
        <router-link to="/phone" class="router-link">手机</router-link>
      </li>
      <li>
        <router-link to="/other">
          <img src="https://yanxuan.nosdn.127.net/7d0e798e1f9c0eefbe65d4e3bc9f08de.png" class="move" alt>
        </router-link>
        <router-link to="/other" class="router-link">新品首发</router-link>
      </li>
      <li>
        <router-link to="/other">
          <img src="https://yanxuan.nosdn.127.net/565f714124c2211941b15dff30373f1c.png" class="move" alt>
        </router-link>
        <router-link to="/other" class="router-link">新品首发</router-link>
      </li>
      <li>
        <router-link to="/other">
          <img src="https://yanxuan.nosdn.127.net/222cd7041d941627153566009cb73c94.png" class="move" alt>
        </router-link>
        <router-link to="/other" class="router-link">新品首发</router-link>
      </li>
      <li>
        <router-link to="/other">
          <img src="https://yanxuan.nosdn.127.net/5990ad8a983a0fa21e5304aacbec7346.png" class="move" alt>
        </router-link>
        <router-link to="/other" class="router-link">新品首发</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.img {
  width: 96%;
  height: 8rem;
  border-radius: 12px;
  margin-left: 2%;
}
.van {
  font-size: 13px;
  color: #f00;
}
li {
  width: 21%;
  height: 6rem;
  float: left;
  margin: 0 2%;
  margin-top: 4%;
}
li img {
  width: 100%;
  height: 5rem;
  margin-left: 7%;
  background-color: #eee;
  border-radius: 20px;
}
li .router-link {
  width: 100%;
  height: 2rem;
  text-align: center;
  display: block;
  color: #444;
}
</style>

