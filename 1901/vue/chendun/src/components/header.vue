<template>
  <div class="mainhead">
    <!-- <mt-header :title="title">
      <mt-button icon="back" slot="left" v-if="show" @click="callBack">返回</mt-button>
      <mt-button icon="search" slot="right" v-if="searchShow" @click="search"></mt-button>
    </mt-header>-->
    <van-nav-bar :title="title">
      <!-- <van-button round type="info" left-text="返回" slot="left" v-if="show" @click="callBack"></van-button> -->
      <van-icon name="arrow-left" slot="left" left-arrow @click="callBack" v-if="show"></van-icon>
      <!-- <van-button round type="danger" icon="search" slot="right" v-if="searchShow"  @click="search">搜索</van-button> -->
      <van-icon name="search" slot="right" @click="search" v-if="searchShow"></van-icon>
    </van-nav-bar>

    <!-- <van-nav-bar title="标题" left-text="返回" left-arrow>
  <van-icon name="search" slot="right" />
    </van-nav-bar>-->
  </div>
</template>
<script>
export default {
  methods: {
    callBack() {
      this.$router.go(-1);
    },
    search() {
      this.$router.push({ name: "search" });
    }
  },
  data() {
    if (this.$route.name === "cart") {
      return {
        searchShow: false
      };
    } else {
      return {
        searchShow: true
      };
    }
  },
  mounted() {
    if (this.$route.name == "search") {
      this.searchShow = false;
    } else if (this.$route.name == "login") {
      this.searchShow = false;
    } else if (this.$route.name == "my") {
      this.searchShow = false;
    } else if (this.$route.name == "login") {
      this.searchShow = false;
    } else if (this.$route.name == "good") {
      this.searchShow = false;
    } else if (this.$route.name == "register") {
      this.searchShow = false;
    } else if (this.$route.name == "addressList") {
      this.searchShow = false;
    } else if (this.$route.name == "insertAdd") {
      this.searchShow = false;
      // addressEditer
    } else if (this.$route.name == "addressEditer") {
      this.searchShow = false;
    } else if (this.$route.name == "jiesuan") {
      this.searchShow = false;
    }else if(this.$route.name == "userinfo"){
      this.searchShow = false;
    }else if(this.$route.name == "now"){
      this.searchShow =false;
    }else if(this.$route.name == "order"){
      this.searchShow = false;
    }
  },
  props: {
    title: String,
    show: Boolean
  }
};
</script>
<style scoped>
.bann {
  border: 1px solid rebeccapurple;
}
.mainhead{
  /* position:fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index:999; */
}
</style>


