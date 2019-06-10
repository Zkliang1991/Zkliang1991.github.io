<template>
  <div>
    <Head title="首页"></Head>
    <!-- <h2>home - home - home</h2> -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="banner">
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar text="公告：为响应国家净网行动，部分电影情节将不予展示，感谢广大影迷的理解。" left-icon="volume-o"/>
    <div class="tong">
      <span class="day">今日热榜</span>
      <span class="ying">百万影迷与你一同观看</span>
    </div>
    <ul class="film">
      
      <li v-for="(good,i) in goods" :key="i" class="shou">
        <router-link :to="{name:'good',params:{goodId:good._id},query:{title:good.title}}">
        <img v-lazy="good.img">
        <i class="iconfont icon-D"></i>
        <h4>{{good.title}}</h4>
        
        <p>{{good.grade}}</p>
        <h3>主演：{{good.star}}</h3>
        <h3>{{good.region}} | {{good.duration}}</h3>
        <!-- <h3>{{good.movieAbstract}}</h3> -->
        </router-link>
      </li>
      
    </ul>
    <!-- <Demo></Demo> -->
  </div>
</template>

<script>
// import Demo from "../components/demo.vue";
export default {
  data() {
    return {
      images: [
        require("@/assets/img/1.png"),
        require("@/assets/img/2.png"),
        require("@/assets/img/3.png"),
        require("@/assets/img/4.png"),
        require("@/assets/img/5.png"),
        require("@/assets/img/6.png")
      ],
      goods: []
    };
  },
  // props:{
  //    good:Object
  // },
  created() {
    this.$axios
      .get("/vue/goods", {
        params: {
          limit: 6
        }
      })
      .then(res => {
        this.goods = res.data.result;
      });
  }
};
</script>
<style scoped>
.banner {
  margin-top: 40px;
  width: 100%;
  height: 224px;
}
.tong {
  /* text-align: center; */
  line-height: 20px;
  margin-top: 10px;
}
.day {
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
}
.ying {
  color: rgba(148, 146, 146, 0.884);
  font-size: 14px;
  margin-left: 10px;
}
.film li {
  width: 100%;
  /* border: 1px solid rgb(75, 73, 73); */
  border-bottom: 1px solid rgb(194, 191, 191);
  /* height: 100px; */
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  /* text-align: right; */
}

.film li p {
  margin-top: 5px;
  margin-bottom: 5px;
  color: coral;
}

.film li img {
  width: 120px;
  height: 150px;
  float: left;
  display: inline;
  margin-right: 10px;
  margin-bottom: 10px;
}
.film {
  overflow: hidden;
  margin-bottom: 1rem;
}
h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 20px 0;
  color: coral;
}
.film li h4{
  font-weight:900 !important;
  font-size: 16px !important;
  color: coral;
}
#app {
}
.film li .iconfont{
  float: left;
  background: rgb(194, 191, 191);
  margin-top: -5px;
  margin-right: 5px;
  color: coral;
}

</style>


