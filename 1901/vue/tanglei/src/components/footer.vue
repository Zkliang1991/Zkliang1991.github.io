<template>
    <footer>
        <van-tabbar v-model="active" route active-color="#333"  >
            <van-tabbar-item  icon="home-o" to="/app/home">首页</van-tabbar-item>
            <van-tabbar-item  icon="qr" to="/app/fenlei">分类</van-tabbar-item>
            <!-- <van-tabbar-item  icon="friends-o">团建</van-tabbar-item> -->
            <van-tabbar-item  icon="user-circle-o" to="/app/my">我的</van-tabbar-item>
        </van-tabbar>
    </footer>
</template>
<script>
// import { Tabbar, TabbarItem } from 'vant';

export default {
  data() {
    return {
      active:0
    }
  },
  computed:{
   get(){
     
   }
  },
  mounted(){
   
      
  }
}
</script>
<style scoped>
.van-icon{
    font-size:24px !important;
}
</style>


