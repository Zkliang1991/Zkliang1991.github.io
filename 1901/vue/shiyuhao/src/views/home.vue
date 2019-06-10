<template>
  <div>
    <Head title="电影" class="c"></Head>
    <van-notice-bar class="d" mode="closeable">电影票特价贱卖，首次购买立减20，活动多多啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊!!!</van-notice-bar>
    <van-swipe :autoplay="1500" indicator-color="white" class="box">
      <van-swipe-item>
        <img src="@/assets/images/5.jpg" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/6.jpg" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/7.jpg" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/9.jpg" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/10.jpg" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/11.jpg" alt>
      </van-swipe-item>
    </van-swipe>
     
   
    <ul style="marginBottom:1rem;overflow:hidden">
      <li v-for="(good,i) in goods" :key="i" class="item move">
        <img :src="good.img" alt class="item-img">
        <div class="b">
          <h3 class="van-ellipsis">{{good.title}}</h3>
          <p>观众评分：{{good.grade}}</p>
          <p class="van-ellipsis">主演：{{good.director}}{{good.name}}</p>
          <p>时间：{{good.mins}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      goods: [],
    };
  },
  created() {
    this.$axios.get("/vue/getHome").then(res => {
      this.goods = res.data.result;
    });
  },
    
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 3.5rem;
}
van-swipe-item,
img {
  width: 100%;
  height: 100%;
}
 
 .item {
    width:48%;
    color:black;
    font-size:12px;
    float: left;
    margin: 1%;
    height: 300px;
     
}
.item img {
    width:100%;
    height:220px;
}
.b{
    width: 100%;
    height: 100px;
}
.b h3{
  font-size: 0.3rem;
}
.b p{
  font-size: 0.25rem;
}
 
.c{
  position: fixed;
  top:-10px;
  left: 0;
  width: 100%;
  margin-bottom: 10px;
}
.d{
  margin-top: 40px;
}
 
</style>
