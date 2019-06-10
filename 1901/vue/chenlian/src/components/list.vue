<template>
  <div class="searchlist">    
    <div class="goodlist" v-for="(good,i) in goods" :key="i">
      <img :src="img" class="goodimg">
      <ul class="goodinfo">
        <p class="goodtitle">青春有你李汶翰同款</p>
        <span class="goodspan">BLACKMORES澳佳宝高浓度DHA鱼油胶囊60粒</span>
      </ul>
    </div>    
  </div>
</template>

<script>
import { Image } from "vant"; //图片
export default {
  data() {
    return {
      img:
        "https://haitao.nos.netease.com/iszg6xqg71_800_800.jpg?imageView&amp;thumbnail=262x262&amp;quality=90"
    };
  },
  porps: {
    goods:Object
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

