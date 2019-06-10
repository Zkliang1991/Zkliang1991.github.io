<template>
    <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home" @click="goHome">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" @click="goGood">分类</van-tabbar-item>
    <van-tabbar-item icon="cart-o" @click="goCar" info="8">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-o" @click="goMine" >个人中心</van-tabbar-item>
   
</van-tabbar>
</template>
<script>
export default {
  
  data() {
    return {
      active: 0,
    }
  
},
methods:{
    goHome(){
        this.$router.push({name:"home"});
        
    },
     goGood(){
        this.$router.push({name:"good"})
        
    },
     goCar(){
        this.$router.push({name:"car"})
        
    },
     goMine(){
        this.$router.push({name:"mine"})
         
    },
},
computed:{
   
}
}
</script>
<style scoped>

</style>


