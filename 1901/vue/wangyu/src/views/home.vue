<template>
  <div style="margin-bottom:1rem">
    <van-search @click="goSearch" class="search_home" placeholder="请输入搜索内容"/>
    <Head></Head>
    <!-- <Foot title="首页" :show="true"></Foot> -->
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    goSearch() {
      this.$router.push({ name: "search" });
    }
  }
};
</script>
<style scoped>
</style>

