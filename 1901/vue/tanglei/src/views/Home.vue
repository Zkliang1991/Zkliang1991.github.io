<template>
  <div class="home">
      <header>推荐·{{city}}<van-icon name="arrow-down" size="12px" /><i class="iconfont icon-icon-test"></i></header>
      <goodsList :goodslist="goods"></goodsList>
  </div>
</template>

<script>
import {Toast} from "vant";
// import List from '@/components/goodlist.vue'
export default {
  name: 'home',
  data(){
    return {
    }
  },
  data(){
    return {
      city:"武汉",
      goods:[]
    }
  },
  mounted(){
    this.$axios.get("/vue/goodslist").then(res=>{//,{params:{hash:{category:"轻手作"},query:{limit:20}}}
      // console.log(res);
      if(res.data.type==1){
        this.goods=res.data.result;
      }
    })
  },
  components: {
    // HelloWorld
    // List
  }
}
</script>
<style lang="scss" scoped>
$heightfont:.8rem;
  header{
    height: $heightfont;
    width: 100%;
    background:#eee;
    border-bottom: 1px solid #999;
    text-align: center;
    line-height: $heightfont;
    position: fixed;
    top:0;
    left:0;
    z-index: 10;
  }
  .iconfont{
    position:absolute;
    // top:.2rem;
    right:.4rem;
  }
</style>

