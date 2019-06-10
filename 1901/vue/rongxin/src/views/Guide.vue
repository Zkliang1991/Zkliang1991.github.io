<template>
    <div>
        <!-- <mt-swipe :auto="3000" class="swiper">
            <mt-swipe-item v-for="(img,i) in imgs" :key="i">
                <img :src="img" alt="" class="img" @click="goIndex(i)">
            </mt-swipe-item>
        </mt-swipe>
        <div id="jump" @click="gotoIndex">跳过</div> -->

        <van-swipe :autoplay="3000" class="swiper" indicator-color="#ccc">
            <van-swipe-item v-for="(img,i) in imgs" :key="i" class="box">
                <img v-lazy="img" alt="" class="img" @click="goIndex(i)">
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
                    require("@/assets/imgs/1.jpg"),
                    require("@/assets/imgs/2.jpg"),
                    require("@/assets/imgs/3.jpg")
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
    mt-swipe-item,.swiper,.img{
        width:300;
        height:100vh;
    }
    .box{
        position:relative;
    }
    #jump{
        width:1.2rem;
        height:0.6rem;
        border-radius:0.1rem;
        text-align:center;
        line-height:0.6rem;
        color:#fff;
        background:rgba(0,0,0,.5);
        position: absolute;
        right:0.2rem;
        top:0.2rem;
    }
</style>