<template>
  <div class="searchlist">    
     <!-- <div class="goodlist" v-for="(good,i) in goodInfo.allgoods" :key="i"> -->
        <img :src="good.img" alt class="goodimg">
        <ul class="goodinfo">
          <p class="goodtitle">{{good.title}}</p>
          <span class="goodspan">{{good.price}}</span>
        </ul>
    <!-- </div> -->
  </div>
</template>

<script>
import { Image } from "vant"; //图片
export default {  
  porps:{
      good:Object
  },
  methods: {}
};
</script>

<style scoped>
.searchlist {
  width: 100%;
}
.goodlist {
  width: 45.5%;
  height: 12.5rem;
  margin-left: 2.5%;
  float: left;
  text-align: center;
  border: 1px solid #f5f5f5;
  border-radius: 5%;
  overflow: hidden;
  background: #fafafa;
}
.goodimg {
  width: 100%;
  padding: 0;
  margin: 0;
  border-radius: 5%;
}
.goodinfo {
  text-align: left;
  width: 90%;
  padding: 0;
  margin: 0 auto;
  overflow: hidden;
  font-size: 0.9rem;
}
p.goodtitle {
  padding: 0;
  margin: 0;
  line-height: 1.5rem;
  color: #333;
}
span.goodspan {
  padding: 0;
  margin: 0;
  line-height: 1rem;
  color: #333;
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
}
</style>

