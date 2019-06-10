<template>
  <div> 
    <van-tabbar  v-if="show">
      <!-- v-model="active" -->
      <van-tabbar-item  icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="bag-o" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item info="9" icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" replace to="/my">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      // active: "//b.yzcdn.cn/vant/icon-demo-1126.png", 
      icon: {
        normal: "wap-home",
        active: "//b.yzcdn.cn/vant/icon-demo-1126.png"
      }
    }
  },
  props:{
    show:Boolean,
  },
  mounted() {
    
  }
};
</script>

<style>
</style>


