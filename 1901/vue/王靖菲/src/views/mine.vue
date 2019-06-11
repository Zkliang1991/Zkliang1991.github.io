<template>
    <div>
        <div class="top">
            <img src="@/assets/images/mine1.png" alt="">
            <div class="head">

            </div>
            <div class="touxiang"></div>
            <van-row type="flex" justify="space-between">
                <van-col span="6">
                    <h1>0</h1>
                    <p>足迹</p>
                </van-col>
                <van-col span="6">
                    <h1>0</h1>
                    <p>收藏</p>
                </van-col>
                <van-col span="6">
                    <h1>3</h1>
                    <p>礼券</p>
                </van-col>
                <van-col span="6" class="last" align="center">
                    <img src="@/assets/images/mine1.webp" alt="">
                    <p>分享返利1.0%</p>
                </van-col>
            </van-row>
            <p class="kong"></p>
        </div>
        <div class="orders">
            <van-nav-bar left-text="我的订单" :left-arrow="false" color="black">
                <van-icon name="arrow" slot="right" color="rgb(90, 90, 90)" /> 
            </van-nav-bar>
            <van-row type="flex" justify="space-between">
                <van-col span="6">
                    <van-icon name="comment" />
                    <p>待付款</p>
                </van-col>
                <van-col span="6">
                    <h1>0</h1>
                    <p>待收货</p>
                </van-col>
                <van-col span="6">
                    <van-icon name="comment" />
                    <p>待评价</p>
                </van-col>
                <van-col span="6" class="last" align="center">
                    <van-icon name="comment" />
                    <p>退款售后</p>
                </van-col>
            </van-row>
        </div>
        <p class="kong"></p>
        <div class="yuyue">
            <van-nav-bar left-text="我的预约"  :left-arrow="false" color="black">
                <van-icon name="arrow" slot="right" color="rgb(90, 90, 90)" /> 
            </van-nav-bar>
        </div>
        <p class="kong"></p>
        <img src="@/assets/images/mine2.webp" alt="" class="photo">
        <p class="kong"></p>
        <van-row type="flex" justify="space-between" class="about">
            <van-col span="6">
                <h1>0</h1>
                <p>联系客服9:00-21:00</p>
            </van-col>
            <van-col span="6">
                <h1>0</h1>
                <p>帮助</p>
            </van-col>
            <van-col span="6">
                <h1>3</h1>
                <p>意见反馈</p>
            </van-col>
            <van-col span="6" class="last" align="center">
                <img src="@/assets/images/mine1.webp" alt="">
                <p>关于我们</p>
            </van-col>
        </van-row>
        <p class="kong"></p>
        <router-view></router-view>
        <hotsale></hotsale>
    </div>
</template>

<script>
// import { Lazyload } from 'vant';
import hotsale from '../components/hotSale'
export default {
    data(){
        return {
            city:"武汉市"
        }
    },
    components:{
        hotsale
    }
}

</script>

<style lang="scss" scoped>
.kong{
    height: 0.2rem;
    background-color: rgb(246, 246, 246);
    
}
.top{
    width: 100%; position: relative; 
    img{
        width: 100%;
        height: 4rem;
    }
    .head{
        width: 100%;
        background-color: rgba(250,250,250,0);
        border-color:rgba(250,250,250,0);
    }
    .touxiang{
        position: absolute;
        background-color: pink;
        height: 1.7rem; width: 1rem;
        left: 0; right: 0; margin:auto; bottom: 2.2rem;
    }
    .van-row{
        text-align: center;
        padding:0.26rem 0; 
        .van-col{
            p{
                margin-top:0.04px;
                font-size: 12px;
                color: #5a5a5a;
                line-height: 0.3rem;
            }
            h1{
                font-family: DINAlternate-Bold;
                line-height:0.53rem;
                font-size: 23px;
                color: #222121;
                font-weight: 700;
            }
        } 
        .last{
            img{
                width: 0.56rem;
                height: 0.52rem;
                margin-left:0.1rem;
            }
            p{
                width: 0.96rem;
            }
        }
    }
    
}
.orders{
    padding-bottom: 0.26rem;
    .van-row{
        margin:0.35rem 0 0.04rem 0;
        .van-col{
            text-align: center;
        }
    }
}
.yuyue{
    height: 1.04rem;
    line-height: 1.04rem;
}
.photo{
    width: 100%; height: 1.8rem;
}
.about{
    text-align: center;
    padding:0.26rem 0;
    height: 1.32rem;
}
</style>

