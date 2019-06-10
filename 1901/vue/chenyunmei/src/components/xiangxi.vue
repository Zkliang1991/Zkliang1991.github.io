<template>
  <div class="xiangxi">
    <img :src="good.goodimg" alt class="item-img">
    <h3>{{good.goodname}}</h3>
    <p>{{good.miaoshu}}</p>
    <span>&emsp;&emsp;{{good.aiqingdeyangzi}}</span>
  </div>
</template>
<script>
export default {
  props: ["good"]
};
</script>
<style scoped>
.xiangxi img {
  /* margin-top: 1.5rem; */
  width: 100%;
  height: 5rem;
  padding-top: 1rem;
}
.xiangxi h3 {
  line-height: 1rem;
  font-size: 0.4rem;
  color: #9b745c;
}

.xiangxi p {
  line-height: 0.5rem;
  font-size: 0.3rem;
  color: #666;
}

.xiangxi span {
  display: block;
  margin-top: 1rem;
  line-height: 0.5rem;
  font-size: 0.4rem;
  color: #666;
  text-align: left;
}
</style>


