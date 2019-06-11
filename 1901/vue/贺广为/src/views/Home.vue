<template>
  <div class="home">
    <div class="home-top">
      <i class="iconfont icon-liebiao icon-list" @click="gotolist"></i>
      <div class="search-box">
        <input class="search" type="text" @click="gotosearch" placeholder="请输入搜索关键词">
        <i class="iconfont icon-sousuo icon-mid"></i>
      </div>
      <i class="iconfont icon-kefu icon-right"></i>
    </div>
    <Homeswipe></Homeswipe>
    <Nav></Nav>
    <Nav></Nav>
    <Limit></Limit>
    <Contentswipe></Contentswipe>
    <F2 :title='title1'></F2>
    <Contentswipe></Contentswipe>
    <F2 :title='title2'></F2>
    <Contentswipe></Contentswipe>
    <F2 :title='title3'></F2>
    <Like></Like>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Nav from "../components/nav.vue";
import Limit from "../components/limit.vue";
import Homeswipe from "../components/homeswipe.vue";
import Contentswipe from "../components/contentswipe.vue";
import F2 from "../components/2f.vue";
import Like from "../components/like.vue"

export default {
  components: {
    Nav,
    Limit,
    Homeswipe,
    Contentswipe,
    F2,
    Like
  },
  computed: {
    ...mapState(['title1','title2','title3'])
  },
  methods: {
    gotosearch(){
      this.$router.push({name:"search"})
    },
    gotolist(){
      this.$router.push({name:"classify"})
    }
  },
};
</script>

<style scoped lang="scss">
.home {
  background-color: #eee;

  .home-top {
    background-color: red;
    height: 0.8rem;
    line-height: 0.8rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    .icon-list {
      float: left;
      font-size: 0.6rem;
      color: #fff;
      margin-left: 0.1rem;
      margin-right: 0.3rem;
    }
    .search-box {
      float: left;
      background: rgba(255, 255, 255, 0.5);
      color: #fff;
      height: 0.5rem;
      margin-top: 0.15rem;
      border-radius: 2px;
      .search {
        border: none;
        background: rgba(255, 255, 255, 0);
        color: #fff;
        font-size: 0.12rem;
        width: 5rem;
        height: 0.5rem;
        vertical-align: top;
        margin-left: 0.1rem;
      }
      .icon-mid {
        float: left;
        color: #fff;
        line-height: 0.5rem;
        margin-left: 0.1rem;
      }
    }
    .icon-right {
      float: right;
      font-size: 0.5rem;
      color: #fff;
      margin-left: 0.1rem;
      margin-right: 0.15rem;
    }
  }
  .block {
    .swiper-img {
      width: 100%;
      height: 3rem;
    }
  }
  .navbar {
    position: relative;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    flex-wrap: wrap;
    border-bottom: 4px solid #dcdcdc;
    background-color: #fff;
    li {
      width: 20%;
      text-align: center;
      i {
        display: block;
        width: 100%;
        height: 0.77rem;
        background: url(https://img3.yesmyimg.com/2015/11/15/20151215121224712.png)
          center 0 no-repeat;
        background-size: 0.77rem;
      }
      span {
        color: #000;
      }
    }
  }
  .limit-time {
    display: flex;
  }
}
</style>
