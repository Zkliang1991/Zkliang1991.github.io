<template>
  <footer>
    <van-tabbar v-model="active" >
      <van-tabbar-item to="/home" name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/classify" name="classify" icon="cluster-o">分类</van-tabbar-item>
      <van-tabbar-item to="/shoppingcar" name="shoppingcar" icon="orders-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/mine" name="mine" icon="user-circle-o">我</van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      active:0
    };
  },
  
  mounted() {
    console.log(this.$route);
    if (this.$route.name == 'home') {
      this.active = 0;
    } else if (this.$route.name == 'classify') {
      this.active = 1;
      
    } else if (this.$route.name == 'shoppingcar') {
      this.active = 2;
    } else if (this.$route.name == 'mine') {
      this.active = 3;
    }
  },

};
</script>

