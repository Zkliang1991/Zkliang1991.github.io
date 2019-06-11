<template>
    <div style="margin-bottom:75px">
        <Head title="个人中心"></Head>
        <div class="my" v-if="username" >
            <img src="../assets/images/mine.png" alt="" class="img2">
            <div class="mine">
                <p>欢迎你,{{username}}少年</p>
                <span>签到、抽奖、海淘贝礼品送不停</span>
            </div>
        </div>
        <div class="my" v-else @click="gotoLogin">
            <img src="../assets/images/mine.png" alt="" class="img2">
            <div class="mine">
                <p>登录/注册</p>
                <span>签到、抽奖、海淘贝礼品送不停</span>
            </div>
        </div>
        <hr style="background-color:paleturquoise">
        <div class="king">
            <ul class="cj">
                <li class="jf">
                    <img src="../assets/images/choujiang.png" alt="" class="img3">
                    <span>每日抽奖</span>
                </li>
                 <li class="jf">
                    <img src="../assets/images/jifen.png" alt="" class="img3">
                    <span>积分兑换</span>
                </li>
                 <li class="jf">
                    <img src="../assets/images/youhuiquan.png" alt="" class="img3">
                    <span>优惠券</span>
                </li>
                 <li class="jf">
                    <img src="../assets/images/jilu.png" alt="" class="img3">
                    <span>兑换记录</span>
                </li>    
            </ul>
        </div>
        <div class="tool">
            <h3>我的工具箱</h3>
            <ul class="cj">
                <li class="jf">
                    <img src="../assets/images/rukou.png" alt="" class="img3">
                    <span>海淘入口</span>
                </li>
                 <li class="jf">
                    <img src="../assets/images/zhuanyun.png" alt="" class="img3">
                    <span>转运地址</span>
                </li>
                 <li class="jf">
                    <img src="../assets/images/mima.png" alt="" class="img3">
                    <span>密码填充</span>
                </li>
                 <li class="jf">
                    <img src="../assets/images/wuliu.png" alt="" class="img3">
                    <span>包裹跟踪</span>
                </li>    
            </ul>
        </div>
        <div class="sc">
            <ul class="pl">
                <li class="xinxi">
                    <img src="../assets/images/img1.jpg" alt="" class="img5">
                    <span class="con">我的收藏</span>
                </li>
                <li class="xinxi">
                    <img src="../assets/images/img2.jpg" alt="" class="img5">
                    <span class="con">我的评论</span>
                </li>
                <li class="xinxi">
                    <img src="../assets/images/img3.jpg" alt="" class="img5">
                    <span class="con">我的消息</span>
                </li>
                <li class="xinxi">
                    <img src="../assets/images/img4.jpg" alt="" class="img5">
                    <span class="con">我的帖子</span>
                </li>
                <li class="xinxi">
                     <img src="../assets/images/home1.jpg" alt="" class="img5">
                    <span class="con">积分日志</span>
                </li>
            </ul>
            <ul class="pl">
                <li class="xinxi">
                    <img src="../assets/images/logo1.jpg" alt="" class="img5">
                    <span class="con">经验投稿</span>
                </li>
                <li class="xinxi">
                    <img src="../assets/images/logo2.jpg" alt="" class="img5">
                    <span class="con">在线客服</span>
                </li>
                <li class="xinxi">
                    <img src="../assets/images/logo5.jpg" alt="" class="img5">
                    <span class="con">问题反馈</span>
                </li>
                <li class="xinxi">
                    <img src="../assets/images/logo4.jpg" alt="" class="img5">
                    <span class="con">系统设置</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
        username:localStorage.username,
    }
    },
    methods:{
        gotoLogin(){
           this.$router.push({name:"login"});
        }

    }
}
</script>


<style scoped>
    .my{
        width: 100%;
        height: 80px;
         background-color:snow;
        overflow: hidden;
    }
    .img2{
        float: left;
        vertical-align: top;
        width: 50px;
        height: 50px;
        padding-top:15px;
        margin-left:10px;
    }
    .mine{
        float:left;
    }
    p{
        font-weight: 900;
        font-size: 20px;
        margin:10px 0;
    }
    span{
        margin-left:20px;
    }
    .king{
        width: 100%;
        height: 75px;
         background-color:snow;
        padding-bottom:10px;
    }
    .cj{
         width: 100%;
        height: 75px;
         background-color:snow;
    }
    .jf{
        float:left;
        width: 23%;
        height: 50px;
    }
    .img3{
        width: 30%;
        height: 30px;
        margin-left:40px;
        margin-bottom:10px;
    }
    .tool{
        width: 100%;
        margin: 10px 0;
    }
    h3{
        padding:10px 0;
        font-weight: 900;
        font-size: 20px;
        background-color:snow;
    }
    .sc{
        width: 100%;
        text-align: left;
    }
    .pl{
        margin:10px 0;
    }
    .xinxi{
        line-height: 30px;
        margin:3px 0;
        font-weight: 900;
         background-color:snow;
    }
    .img5{
        display: inline;
        width: 20px;
        height: 20px;
        margin:7px 0 0 5px;
    }
    .con{
        margin-left:5px;
    }
</style>
