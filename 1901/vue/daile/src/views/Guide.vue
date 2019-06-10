<template>
    <div>

<!-- <van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe> -->
    <van-swipe :autoplay="3000"  class="swiper" indicator-color="#fac">
        <van-swipe-item v-for="(img,i) in imgs" :key="i">
            <img :src="img" alt="" class="img" @click="goIndex(i)">
            </van-swipe-item>
        </van-swipe>
        <div id="jump" @click="gotoIndex">跳过</div>
    </div>
</template>

<script>
    export default{
        name:"guide",
        data(){
            return {
                imgs:[
                    require("@/assets/imgs/5.jpg"),
                    require("@/assets/imgs/6.jpg"),
                    require("@/assets/imgs/7.jpg"),
                    require("@/assets/imgs/8.jpg")
                ]
            }
        },
        methods:{
            //引导页面跳转到首页
            goIndex(id){
                if(id==this.imgs.length-1){
                    this.$router.push({name:'home'})
                }
            },
            //引导页跳过按钮
            gotoIndex(){
                this.$router.push({name:'home'})  
            }
        },
        mounted(){
            if(localStorage.pcount){
                localStorage.pcount++;
                if(localStorage.pcount>3){
                    this.$router.push({name:'home'})
                }
            }else{
                localStorage.pcount=1;
            }
        }
    }
</script>

<style scoped>
   
    van-swipe-item,.swiper,.img{
        width:100vw;
        height:100vh;
        z-index: 99;
    }
    #jump{
        width:1.2rem;
        height:0.6rem;
        border-radius:0.1rem;
        text-align:center;
        line-height:0.6rem;
        color:#fff;
        background:rgba(0,0,0,.5);
        position:fixed;
        right:0.2rem;
        top:.2rem;
        z-index: 100;
    }
     .van-swipe__indicators{
         background-color: #000;
         display: inline-block;
     }
   
</style>