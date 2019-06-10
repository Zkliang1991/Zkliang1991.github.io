<template>
  <router-link :to="{name:'good',params:{goodId:good._id},query:{goodname:good.goodname}}">
    <!-- <img v-lazy="good.img" alt="" class="item-img"> -->
    <img :src="good.goodimg" alt class="item-img">
    <h3 class="lih3">{{good.goodname}}</h3>
    <p class="lip">{{good.miaoshu}}</p>
    <h2 class="jiage">￥{{good.goodsprice}}</h2>
  </router-link>
</template>


<script>
export default {
  props: {
    good: Object
  }
};
</script>

<style scoped>
.jiage {
  color: #9b745c;
  font-size: 0.3rem;
}
.item-img {
  width: 100%;
  height: 3rem;
}
.lih3 {
  color: #333;
  font-size: 0.2rem;
  font-weight: normal;
  margin-top: 0.5rem;
  line-height: 0.8rem;
}
.lip {
  color: #666;
  font-size: 0.1rem;
  margin-bottom: 0.2rem;
  /* line-height: -0.2rem; */
}
</style>
