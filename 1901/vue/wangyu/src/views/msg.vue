<template>
  <div>
    <mt-header title="课程">
      <router-link :to="{name:'search'}" slot="left">
        <mt-button icon="search">搜索</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <van-row type="flex" style="text-align:center">
      <van-col span="6">微课</van-col>
      <van-col span="6">视频课</van-col>
      <van-col span="6">实战</van-col>
      <van-col span="6">题库</van-col>
    </van-row>
    <Swipe></Swipe>
  </div>
</template>
<script>
import Swipe from "@/components/swipe.vue";
export default {
  data() {
    return {};
  },
  components: {
    Swipe
  }
};
</script>

