<template>
  <div class="head">
    <mt-header class="header" :title="title">
      <!-- <router-link to="/payfor" > -->
        <mt-button slot="left" icon="back" @click="goback" v-if="show">返回</mt-button>
      <!-- </router-link> -->
      <mt-button icon="search" slot="right" @click="gosearch" v-if="searchshow"></mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    show: Boolean,
    searchshow: Boolean
  },
  methods: {
    goback() {
      this.$router.push({name:'payfor',params:{active:1}});
    },
    gosearch() {
      this.$router.push({ name: "search" });
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  background-color: rgba(255,0,0,.6);
  height: 0.8rem;
  line-height: 0.8rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
