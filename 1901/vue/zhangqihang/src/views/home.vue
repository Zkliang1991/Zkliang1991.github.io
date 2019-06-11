<template>
    <div>
        <Head title="首页" class="head"></Head>  
        <Swipe class="top"></Swipe>
        <ul>
            <li>
                <p class="menuicon icon1" style="background-color:#ff6766"></p>
                <p>鲜花</p>
            </li>
            <li>
                <p class="menuicon icon2" style="background-color:#ffcf2f"></p>
                <p>蛋糕</p>
            </li>
            <li>
                <p class="menuicon icon3" style="background-color:#8b8ffa"></p>
                <p>花篮</p>
            </li>
            <li>
                <p class="menuicon icon4" style="background-color:#4cc6ed"></p>
                <p>礼品</p>
            </li>
            <li>
                <p class="menuicon icon5" style="background-color:#2bd3c2"></p>
                <p>更多</p>
            </li>
        </ul>
        <div class="ul2">
            <div class="li2">400652078</div>
            <div class="li3"> 在线咨询</div>
        </div>
        <div>
            <p class="list_title">爆款蛋糕
                <span class="lmore">更多>></span>
            </p>
        </div>
        <Swipe></Swipe>
    </div>
</template>
<script>
import Swipe from "@/components/swipe.vue"
export default {
    components:{
        Swipe
    }
}
</script>
<style lang="scss" scoped>
 .head{
      position: fixed;
      top: 0; 
      left: 0;
      width: 100%;
      z-index: 2;
    }
    .top{
        margin-top: 40px;
    }
ul{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    background-clip: white;
    padding: 20px 0;
    background: #fff;
    li{
        height: 80px;
        width: 20%;   
        .menuicon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            padding: 4px;     
            margin: auto;
        }
        p{
            text-align: center;
        }
    }
}
.icon1{
    background: url("../assets/images/xianhua.png") no-repeat center center;
    background-size: 45px 40px;
}
.icon2{
    background: url("../assets/images/dangao.png") no-repeat center center;
    background-size: 38px 40px;
}
.icon3{
    background: url("../assets/images/hualan.png") no-repeat center center;
    background-size: 35px 35px;
}
.icon4{
    background: url("../assets/images/lipin.png") no-repeat center center;
    background-size: 35px 35px;
}
.icon5{
    background: url("../assets/images/shenglue.png") no-repeat center center;
    background-size: 45px 40px;
}
.ul2{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: .3rem;
    .li2{
        width: 31%;
        height: .6rem;
        border-radius: 1.1rem;
        background: #ff6600 url("../assets/images/dianhau.png") no-repeat 15px center;
        background-size: 25px 30px;
        line-height: .6rem;
        padding-left: 45px;
        color: white;
    }
    .li3{
        width: 32%;
        height: .6rem;
        border-radius: 1.1rem;
        background: #8b8ffa url("../assets/images/kefu.png") no-repeat 15px center;
        background-size: 25px 25px;
        line-height: .6rem;
        padding-left: 55px;
        color: white;
    }
}
.list_title {
    border-top: 1px solid #eeeeee;
    width: 95%;
    display: block;
    padding: 10px;
    background-color: #fff;
    margin-top: .2rem;
    color: #666;
    font-weight: 500;
    line-height: 30px;
    .lmore {
        float: right;
        color: #aaaaaa;
        font-size: .2rem;
    }
}
</style>


