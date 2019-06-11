<template>
    <div class="orderconfirm">
        <div class="confirm">
            <van-icon  name="arrow-left" size="0.4rem"/>
            <p class="confirm2">订单确认</p>
        </div>
        <div class="adress" @click="choosead">
            <p class="adre1">哈哈
                <span class="adtel">15927192125</span>
            </p>
            <div class="adre2">
                <span>[默认]</span>
                武汉市江夏区x小区x号
            </div>
            <van-icon name="arrow" />
        </div>
        <p class="kong"></p>
        <div class="goods">
            <div class="img">
                <img src="" alt="">
            </div>
            <div class="content">
                <h3>若琳沙发</h3>
                <p>规格：2200*990*660（三人位） 头层牛皮（全皮） 深咖色</p>
                <h4 class="price">¥15300</h4>
            </div>
        </div>
        <p class="kong"></p>
        <div class="list">
            <h5>商品金额 <span>¥1600</span></h5>
            <h5 class="h52">运费 <span>当前商品包邮</span></h5>  
        </div>
        <p class="kong"></p>
        <div class="way">
           <h5>配送方式 <span @click="chooseway">请选择></span></h5>
           <h5>备注 <span><input type="text" placeholder="在此备注其他信息"></span></h5>  
           <van-popup v-model="show" position="bottom" :overlay="true">
                <p>选择配送方式</p>
                <van-radio-group v-model="radio">
                    <van-cell-group >
                        <van-cell title="电梯送货入户" clickable @click="radio = '1'" >
                            <van-radio name="1" checked-color="#be4c4b" />
                        </van-cell>
                        <van-cell title="抬楼梯入户" clickable @click="radio = '2'">
                            <van-radio name="2" checked-color="#be4c4b" />
                        </van-cell>
                        <van-cell title="送到楼下" clickable @click="radio = '3'" >
                            <van-radio name="3" checked-color="#be4c4b" />
                        </van-cell>
                        <van-cell title="自行提取" clickable @click="radio = '4'">
                            <van-radio name="4" checked-color="#be4c4b" />
                        </van-cell>
                    </van-cell-group>
                </van-radio-group>
                <p class="ok">确定</p>
            </van-popup>
           
        </div>






        <div class="submit">
            <span class="sub1">¥1600</span>
            <span class="sub2">提交订单</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show:false,
            radio:1
        }
    },
    methods:{
        chooseway(){
            this.show=true
        },
        choosead(){
            this.$router.push({name:"chooseadress"})
        }
    }
}
</script>






<style lang="scss" scoped>
.orderconfirm{
    .confirm{
        overflow: hidden; height: 0.88rem;
        .van-icon{
            line-height: 0.88rem; width: 10%;
            margin-left:8%; float:left;
        }
        .confirm2{
            float:left; text-align: center;
            text-align: center; width: 70%;
            font-size: 18px; line-height: 0.88rem;
            color: #222121; margin-right: 10%;
            font-weight: 700; 
            
        }
    }
    .adress{
        padding:0.4rem 0.2rem; position: relative;
        background-image: url("../assets/images/border.png");
        background-size:110%; border-bottom-width: 0px;
        background-color: #fff;
        background-position: bottom;
        background-repeat: repeat-x;
        background-size: 110%;    
        .van-icon{
            position: absolute;  right: 0.8rem;
            top:0.8rem;
        }
        .adre1{
             color: #222121;
            font-size: 18px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            .adtel{
                margin-left:0.2rem;
                font-family: HelveticaNeue-Medium;
            }
        }
        .adre2{
                margin-top:0.16rem;
                color: #4f5156;
                font-size: 14px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                line-height: 0.34rem;
            span{
                color:#be4c4b;
                font-size: 14px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                line-height: 0.34rem;
            }
        }
       
    }
    .goods{
        padding:0.3rem; overflow: hidden;
        .img{
             border-radius: 0.1rem; background-color: pink;
             float:left; margin-right: 0.2rem;
            width:1.8rem; height: 1.8rem;
            img{
                border-radius: 0.1rem;
                width:100%; height:100%;
            }
        }
        .content{
            float: left; width: 70%;
            h3{
                font-size: 14px;
                font-weight: 400;
                overflow: hidden;
                width: 70%;
                height:0.4rem;
                margin-bottom: 0.16rem;
            }
            p{
                width: 90%;
                font-size: 12px;
                color: #7d7d7d;
                overflow: hidden;
            }
            h4{
                font-size: 14px;
                line-height: 14px;
                color: #222121;
                margin-top:0.3rem;
            }
        }
    }
    .list{
        padding:0 0.3rem;
        h5{
            font-size: 14px; height: 0.88rem; font-size: 14px;
            border-bottom: 0.5px solid #e4e0e0; line-height: 0.88rem;
            span{
                float:right;
            }
        }
        .h52{
            border-bottom: none;
        }
    }
    .way{
        padding:0 0.3rem;
        h5{
             font-size: 14px; height: 0.88rem; font-size: 14px; 
            border-bottom: 0.5px solid #e4e0e0; line-height: 0.88rem;
            span{
                float:right; color: #be4c4b;
            }
            input{
                border:none;
                text-align:right;
            }
        }
        .van-popup{
            p{
                height: 1rem;  text-align: center;
                border-bottom: 1px solid #e6e6e6;
                color: #4f5156; line-height: 1rem;
            }
            .van-cell__title{
                color:#222121;
                font-family:Helvetica, SimHei;
                font-size:14px; font-weight:500;
                line-height:1rem;
            }
            .ok{
                background-color: #be4c4b; color:white;
                height: 1rem; text-align: center; line-height: 1rem;
                font-size: 15px;
            }
        }
    }
    .submit{
        position: fixed; bottom: 0;left: 0; line-height: 1rem;
        height: 1rem; overflow: hidden; width: 100%;
        .sub1{
            float:left;     font-size: 25px;
            font-weight: 500; color:#be4c4b;
            margin-left: 0.3rem;
        }
        .sub2{
            float:right;  font-size: 18px; padding:0 0.4rem;
            color: #fff; background-color:#be4c4b;
        }

    }
}
</style>
