<template>
  <router-link :to="{name:'good',params:{goodId:good.goods_id},query:{name:good.goods_name}}">
    <div class="imgbox">
      <img :src="good.thumb_url" alt class="item-img">
    </div>
    <div class="msgbox">
      <p>{{good.goods_name}}</p>
      <p>{{good.sales}}</p>
    </div>
  </router-link>
</template>


<script>
export default {
  props: {
    good: Object
  }
};
</script>
<style lang="scss" scoped>
.imgbox {
  float: left;
  width: 30%;
  height: 3.2rem;
  .item-img {
    width: 3rem;
    height: 3.2rem;
    margin-top: 0.1rem;
  }
}
.msgbox {
  width: 70%;
  float: right;
}
</style>
