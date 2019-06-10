<template>
  <div>
    <van-tabbar v-model="active" active-color="#07c160">
      <van-tabbar-item icon="wap-home" to="/index/home">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-collect-o" to="/index/classify">商品列表</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/index/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/index/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      }
    };
  },
  mounted() {
    if (this.$route.name == "home") {
      this.active = 0;
    } else if (this.$route.name == "classify") {
      this.active = 1;
    } else if (this.$route.name == "cart") {
      this.active = 2;
    } else if (this.$route.name == "my") {
      this.active = 3;
    }
  }
};
</script>
