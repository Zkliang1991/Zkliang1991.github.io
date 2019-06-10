<template>
    <div>
        <van-swipe  class="guide" :autoplay="3000" indicator-color="white" :show-indicators='false'>
            <van-swipe-item v-for= "(img,i) in imgs " :key="i">
                <img @touchend="goToApp(i)" :src="img" alt="" class="g-img">
            </van-swipe-item>
        </van-swipe>
        <van-button id="gohome" @click="gohome" round type="danger" size='mini'>跳过</van-button>
        <!-- <mt-swipe class="guide" :auto="3000" :show-indicators='false'>
            <mt-swipe-item v-for= "(img,i) in imgs " :key="i">
                <img @touchend="goToApp(i)" :src="img" alt="" class="g-img">
            </mt-swipe-item>
        </mt-swipe> -->
    </div>
</template>

<script>
export default {
    name:'guide',
    data(){
        return{
            imgs:[
                // 将图片当做图片
                require("@/assets/images/slide1.png"),
                require("@/assets/images/slide2.png"),
                require("@/assets/images/slide3.png"),
                require("@/assets/images/slide4.png"),
            ]
        }
    },
    methods:{
        goToApp(id){
            if(id==this.imgs.length-1){
                this.$router.push({name:'home'});
            }
        },
        gohome(){
            this.$router.push({name:'home'});
        }
    },
    // 组件载入之前
    mounted(){
        if(localStorage.visitCount){
            localStorage.visitCount++;
            if(localStorage.visitCount>5000){
                this.$router.push({name:'home'})
            }
        }else{
            localStorage.visitCount = 1;
        }
    }
}
</script>

<style scoped>
    .guide .g-img{
        width: 100%;
        height: 100%;
    }
    #gohome{
        position: absolute;
        top:0.65rem;
        right:0.5rem;
        font-size: 15px;
    }
</style>
