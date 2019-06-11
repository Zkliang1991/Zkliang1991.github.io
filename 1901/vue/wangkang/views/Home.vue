<template>
  <div class="home">
    <van-search placeholder="请输入搜索关键词" show-action shape="round" class="search" @click="gotosearch">
      <div slot="action">搜索</div>
    </van-search>
    <banner></banner>
    <indexnav></indexnav>
    <indextj></indextj>
    <indexhot></indexhot>
    <banner></banner>
    <foot></foot>
  </div>
</template>
<script>
import foot from "@/components/Foot.vue";
import banner from "@/components/swipe.vue";
import indexnav from "@/components/indexnav.vue";
import indextj from "@/components/indextj.vue";
import indexhot from "@/components/indexhot.vue";
export default {
  name: "home",
  components: {
    foot,
    banner,
    indexnav,
    indextj,
    indexhot
  },
  methods: {
    gotosearch() {
      this.$router.push({ name: "search" });
    }
  }
};
</script>

<style scoped>
.search {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
}
</style>
