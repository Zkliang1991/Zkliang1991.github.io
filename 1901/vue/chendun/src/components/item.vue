<template>
  <div>
    <!-- <van-card num="2" price="2.00" desc="描述信息"   title="商品标题":thumb="imageURL"
/> -->
    <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
      <img :src="good.img" alt class="item-img">
      <h3 class="goodname">{{good.name}}</h3>
      <span class="man">￥{{good.price}}</span>&nbsp;&nbsp; &nbsp; &nbsp;  <span>剩余:{{good.count}}件</span>
      <van-rate v-model="value" />
    </router-link>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value: 3
    }
  },
    props: {
    good: Object
  }
};
</script>
<style scoped>
.item-img {
  width: 100%;
  height: 3.7rem;
}
.goodname{
    color: #4b566a;
}
.man{
      color: #eb5211;
}
</style>

