<template>
    <router-link :to="{name:'good',params:{goodId:good._id},query:{title:good.title}}">
        <!-- <img v-lazy="good.img" alt="" class="item-img"> -->
        <img :src="good.img">
          <i class="iconfont icon-D"></i>
          <h4>{{good.title}}</h4>

          <p>{{good.grade}}</p>
          <h3>主演：{{good.star}}</h3>
          <h3>{{good.region}} | {{good.duration}}</h3>
          <!-- <h3>{{good.movieAbstract}}</h3> -->
    </router-link>
</template>


<script>
export default {
    props:{
        good:Object
    }
}
</script>

<style scoped>
p {
  margin-top: 5px;
  margin-bottom: 5px;
  color: black;
}

img {
  width: 120px;
  height: 150px;
  float: left;
  display: inline;
  margin-right: 10px;
  margin-bottom: 10px;
}

h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 20px 0;
  color: black;
}
h4 {
  font-weight: 900 !important;
  font-size: 16px !important;
  color: black;
}
.film li .iconfont {
  float: left;
  background: rgb(194, 191, 191);
  margin-top: -5px;
  margin-right: 5px;
  color: black;
}
</style>
