<template>
    <div>
         <Head title="个人中心" :show="false" class="fixed"></Head>        
      <div id="loginniu">
          <div id="imgbox" @click="gotoLogin"> </div>
        <van-button  @click="gotoLogin" class="login">登录</van-button>
        <van-button @click="gotoRegister" class="register">注册</van-button>
          <div id="minexs">
              <h3 @click="gotodingdan">我的订单<span >></span></h3>
                <h3 @click="gotoadd">地址管理</h3>
                <h3>我的余额</h3>
                <h3>我的积分</h3>
                <h3>我的优惠券</h3>
                <h3>我的收藏</h3>
          </div>
        </div>
       
      
    </div>
</template>
<script>
import { Button } from 'vant';
export default {
    data(){
        return {
            imgs:[
                require("@/assets/imgs/5.jpg"),
                require("@/assets/imgs/6.jpg"),
                require("@/assets/imgs/7.jpg"),
                require("@/assets/imgs/8.jpg")
            ],
            banner:[]
        }
    },
    methods:{
        gotoadd(){
            this.$router.push({name:'addRess'})
        },
        gotodingdan(){
             this.$router.push({name:'cart'})
        },
        gotoLogin(){
            this.$router.push({name:'login'})
        },
        gotoRegister(){
            this.$router.push({name:'register'})
        }
    }
}
</script>
<style scoped>
.register{
     width: 1.4rem;
    height: 1.4rem;
    font-size: 0.2rem;
    border-radius: 50%;
    position: absolute;
    top: 1.2rem;
    left: 80%;
    background-color: rgba(239, 241, 81, 0.5);
}
.login{
    width: 1.4rem;
    height: 1.4rem;
    font-size: 0.2rem;
    border-radius: 50%;
    position: absolute;
    top: 2.6rem;
    left: .2rem;
    background-color: rgba(243, 149, 94, 0.5);
}

.slide,  .swiper-img{
    width:100%;
    height:4rem;
    background-color: #000;   
}
#minexs{
    width: 100%;
    height: 9rem;
    overflow: hidden;
    margin-top: .3rem;
    z-index: 3;
}
#minexs h3{
    width: 85%;
    height: 0.7rem;
    line-height: 0.7rem;
    margin-top: .2rem;
    font-size: .24rem;
    margin-left:7.5%;
    border-bottom: 1px solid #ccc;
    color:#222;
    padding-bottom: .3rem;  
}
#minexs h3 span{
    float: right;
    color:#999;
}

#loginniu{
    width: 100%;
    height: 12rem;
    overflow: hidden;
    /* background-color: #ddd; */
    /* background-image: url(../assets/imgs/bg.jpg);
    background-size:100% 12rem; */ 
}
#imgbox{
    margin-top: 1.1rem;
    width: 100%;
    height: 3rem;
    overflow: hidden;
    position: relative;
    background-color:  rgba(0,0,0,.1);
    background-image: url(../assets/imgs/t.png);
    background-size:100% 3rem;
}
 /* button{
    width: 35%;
    margin-left: .8rem;
    background-color: rgba(0,0,0,.3);
    border:0;
     margin-top: .3rem;
     height: 0.8rem;
     line-height: 0.8rem;
} */

.fixed{
    position:fixed;
    left: 0;
    top: 0;
    width:100%;
    z-index:9999;
}

</style>