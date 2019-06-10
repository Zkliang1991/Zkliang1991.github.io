<template>
    
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
         <ul class="content">
           <li v-for="(good,i) in goods" :key="i" class="goodli" @click="go(good.goodid)">
             <div class="goodimg">
               <img :src="good.img"  class="img zoomln">
             </div>
              <h2 class="goodname">{{ good.goodname }}</h2>
              <p class="price">价格：<span> {{ good.price | money }} </span></p>
           </li>
         </ul> 
        
   </van-pull-refresh>
  
        
</template>
<script>
export default {
    data() {
    return {
      list: [],
      loading: false,
      finished: false,
      count: 0,
      isLoading: false
      
    };
  },
  props:{
    goods:Array 
  },
   methods: {
      onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    go(goodid){
      this.$router.push({name:"goodone",query:{goodid:goodid}})

    }
   }
}
</script>
<style  scoped>
 .goodli{
   width: 90%;
   margin: .35rem auto;
 }
 .goodimg{
  width: 100%;
 }
 .img{
   width: 100%;
   height: 4rem;
 }
.goodname{
  line-height: .8rem;
  font-size: .35rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  margin-top: 0.2rem;
}
 .price{
   /* height: 0.7rem; */
 }
  .price span{
    font-size: 0.4rem;
    color: red;
  }
  .zoomln{
    animation:zoomln 2s;
  }
</style>


 