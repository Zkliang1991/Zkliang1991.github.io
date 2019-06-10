<template>
  <div>
    <van-nav-bar :title="title">
      <van-icon name="arrow-left" slot="left" v-if="show" @click="goback"/>
      <van-icon name="search" slot="right" @click="goSearch" v-if="searchShow"/>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    show: Boolean
  },
  data(){
        return {
            searchShow:true
        }
    },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    goSearch() {
      this.$router.push({ name: "search" });
    }
  },
  mounted() {
    this.searchShow = this.$route.name == "search" ? false : true;
  }
};
</script>
<style scoped>
</style>
