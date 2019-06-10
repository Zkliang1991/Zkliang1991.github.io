<template>
  <div>
    <!-- <van-tabs v-model="active"> 
      <van-tab title="标签 1">home首页</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">my个人中心</van-tab>
    </van-tabs>-->
    <van-tabbar v-model="name">
      <van-tabbar-item name="home" icon="home-o">home首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: name
      // active: 4
    };
  },
  props:{
    name:String,
  }
};
</script>

<style>
</style>


