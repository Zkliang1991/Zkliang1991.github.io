<template>
  <div>
      <router-view></router-view>
      
  </div>
</template>

<script>
import Home from '@/views/home.vue'
export default {
  components: {
    Home,
  }
};
</script>

<style>
.header-top{
  margin-bottom: 45px;
}
.searchlist {
  width: 100%;
}
.goodlist {
  width: 45.5%;
  height: 12.5rem;
  margin-left: 2.5%;
  margin-top: 0.5rem;
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
  border-radius: 2%;
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
.van-tabs-top {
  margin-top: 45px;
  z-index: 0;
}



/* 最外层div */
.cart {
    margin-bottom: 5.2rem;
}
.classify{
  margin-bottom: 5.2rem;
}
</style>
