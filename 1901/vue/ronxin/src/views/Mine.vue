<template>
    <div>     
        <img src="../assets/imgs/mybg.png" alt="" id="mybg">

        <p v-if="show1" id="username">欢迎你 : {{username}}</p>
        <van-button type="info" @click="outLogin" id="tuichu" v-if="show1"> 退出</van-button>

        <van-button type="default" @click="gotoRegister" id="zhuce" v-if="show2"> 注册</van-button>
        <van-button type="info" @click="gotoLogin" id="denglu" v-if="show2"> 登录</van-button>
        <hr>
        <div class="myOrder">量身记录<i></i></div>
        <div class="myOrder">我的订单<i></i></div>
        <div class="myOrder">我的收藏<i></i></div>
        <div class="myOrder">收货地址<i></i></div>
        <div class="myOrder">我的评价<i></i></div>
    </div>
</template>


<script>
import { Indicator ,Toast } from 'mint-ui';
export default {
    inject:['reload'],
    data(){
        return {
            username:localStorage.username,
            show1:Boolean,
            show2:Boolean
        }
    },
    methods:{
        gotoLogin(){
            this.$router.push({name:'login'})
        },
        gotoRegister(){
            this.$router.push({name:'register'})
        },
        outLogin(){
            localStorage.username="",
            this.show2=false,
            this.show1=true,
            this.reload()
        }
    },
    mounted(){
        if(localStorage.username==""){
            this.show1=false,
            this.show2=true
        }else{
            this.show1=true,
            this.show2=false
        }
    }
}
</script>


<style scoped>
.slide,  .swiper-img{
    width:100%;
    height:4rem;
}
#mybg{
    width:100%;
    height:3.2rem;
}
#zhuce{
    margin-left:32%;
    margin-right:3%;
    margin-top:5%;
    margin-bottom:5%;
}
.myOrder{
    height:1rem;
    line-height:1rem;
    margin-left:0.4rem;
    border-bottom:1px solid #ccc;
}
#username{
    display:inline-block;
    margin-left:0.8rem;
    margin-top:5%;
    margin-bottom:5%;
}
#tuichu{
    display:inline-block;
    margin-left:0.2rem;
    margin-top:5%;
    margin-bottom:5%;
}
</style>