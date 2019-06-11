<template>
    <div>
        <nut-noticebar
            :closeMode="true"
            >
            分享海淘的乐趣! 最新6.18活动重磅来袭,全场打折领券,优惠多多!
        </nut-noticebar>

        <Header></Header>

        <nut-tab class="dh">
            <nut-tab-panel tabTitle="母婴"></nut-tab-panel>
            <nut-tab-panel tabTitle="保健"></nut-tab-panel>
            <nut-tab-panel tabTitle="美妆"></nut-tab-panel>
            <nut-tab-panel tabTitle="鞋包"></nut-tab-panel>
            <nut-tab-panel tabTitle="手表"></nut-tab-panel>
            <nut-tab-panel tabTitle="百货"></nut-tab-panel>
        </nut-tab>

        <div>
            <nut-swiper
                ref="dem4"
                :autoPlay="3000"
                id="dome4"
                :paginationVisible="true"
                :paginationClickable="true"
                >
                <div  class="nut-swiper-slide gray" >
                    <img src="../assets/images/home1.jpg" alt="" class="img">
                </div>
                <div  class="nut-swiper-slide gray_1" >
                    <img src="../assets/images/home2.jpg" alt="" class="img">
                </div>
                <div  class="nut-swiper-slide gray" >
                    <img src="../assets/images/home3.jpg" alt="" class="img">
                </div>
                <div  class="nut-swiper-slide gray_1" >
                    <img src="../assets/images/home4.jpg" alt="" class="img">
                </div>
            </nut-swiper>
        </div>

        <div id="list">
            <ul>
                <li>
                    <img src="../assets/images/haitao.png" alt="" class="img1">
                    <span>海淘</span>
                </li>
                <li>
                   <img src="../assets/images/kuajingdianshang.1.png" alt="" class="img1">
                    <span>跨境</span>
                </li>
                <li>
                    <img src="../assets/images/guoneiyou.png" alt="" class="img1">
                    <span>国内</span>
                </li>
                <li>
                    <img src="../assets/images/zhuanti.png" alt="" class="img1">
                    <span>专题</span>
                </li>
                <li>
                    <img src="../assets/images/guojiaguan.png" alt="" class="img1">
                    <span>国家馆</span>
                </li>
                <li>
                    <img src="../assets/images/bang.png" alt="" class="img1">
                    <span>日陶榜</span>
                </li>
                <li>
                    <img src="../assets/images/dijia.png" alt="" class="img1">
                    <span>史低价</span>
                </li>
                <li>
                    <img src="../assets/images/rukou.png" alt="" class="img1">
                    <span>海淘入口</span>
                </li>
                <li>
                    <img src="../assets/images/ziyuan.png" alt="" class="img1">
                    <span>汇率</span>
                </li>
                <li>
                    <img src="../assets/images/chimabiao.png" alt="" class="img1">
                    <span>尺码表</span>
                </li>
            </ul>
            <img src="../assets/images/jd.jpg" alt="" style="width:100%;height:100px">
        </div>

        <Goodlist></Goodlist>

    </div>
</template>


<script>
import Header from "@/components/header.vue";
export default {
    data(){
        return {
        
        }
    },

    methods: {

    },

    components:{
        Header,
    }
}
</script>


<style>
    .img{
        vertical-align: top;
        width: 100%;
        height: 100%;
       margin-top:0;
    }
    .dh .nut-tab-item{
        height: 0;
        padding:0;
        border: 0;
    }
    .nut-tab .nut-tab-title{
        height: 30px;
    }
    #list{
        width: 100%;
    }
    ul{
         width: 100%;
        height: 100%;
    }
    #list li{
        float: left;
        width: 20%;
        height: 70px;
        margin-top:10px;
        text-align: center;
    }
    .img1{
        margin:5px 30%;
        width: 30px;
        height: 30px;
    }
    span{
        font-weight: 900;
    }
</style>
