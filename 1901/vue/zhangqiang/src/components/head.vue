
<template>
  
  <mt-header :title="title" class="headtitle headanimate">
    <mt-button icon="back" slot="left" @click="goback" v-if="show" class="headleft">返回</mt-button>
    <mt-button icon="search" slot="right" v-if="searchShow" @click="goSearch" class="headright"></mt-button>
  </mt-header>

  <!-- <van-nav-bar title="标题" left-text="返回" left-arrow>
  <van-icon name="search" slot="right" />
  </van-nav-bar> -->
</template>

<script>
export default {
  props: {
    title: String,
    show: Boolean
  },
  data() {
    return {
      searchShow: true
    };
  },
  mounted() {
    this.searchShow = this.$route.name == "search" ? false : true;
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    goSearch() {
      this.$router.push({ name: "search" });
    }
  }
};
</script>

<style scoped>
    .headtitle{
        background-color: darkblue;
        color:yellow;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
    }
    .headleft{
        text-align: center;
    }
    .headright{
        background-color: #000;
    }
</style>

