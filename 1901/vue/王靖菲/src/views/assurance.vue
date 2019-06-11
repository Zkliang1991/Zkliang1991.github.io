<template>
    <div>
        <van-row type="flex" justify="space-between" align="center">
        <van-col span="3">
            <van-icon name="arrow-left" color="#222121" size="0.6rem"/>
        </van-col>

        <van-col span="9">自营服务保障</van-col>
        <van-col span="4" >
            <van-icon name="wap-home" color="#222121" size="0.6rem" @click="onClickRight" />
        </van-col>
        </van-row>
        <img src="../assets/images/1.png" alt="">
        <div class="content">
            <h1>家具类商品</h1>
            <div class="item">
                <div class="img">
                    <img src="../assets/images/1-1.png" alt="">
                </div>
            </div>
            <div class="title">
                <span>品牌制造商直供</span>
            </div>
            <p class="text"> “我在家”拥有一支有多年家具从业经验的专业团队；为了挑选优质的家具，他们深入走访全国各大家具产业带；</p>
            <ul>
                <li>精选具备出口欧美认证体系的工厂</li>
                <li>(执行国际通用认证体系）:</li>
                <li>供应商社会责任认证WCA；欧洲通用的BSCI认证；</li>
                <li>英国Sedex认证;美国SGV反恐认证</li>
                <li>美国加州CARBP2环保认证。</li>
            </ul>

            <div class="item t2">
                <div class="img">
                    <img src="../assets/images/1-2.png" alt="">
                </div>
            </div>
            <div class="title">
                <span>3年质保 终身维护</span>
            </div>
            <p class="text"> “我在家”对您购买的家具产品自签收当天起提供三年质量保障。在质保期间，家具如出现质量问题，
                由“我在家”提供免费保修服务。对于超过质保期限的家具产品，“我在家”提供终身付费维护服务。</p>

            <div class="item t2">
                <div class="img">
                    <img src="../assets/images/1-3.png" alt="">
                </div>
            </div>
            <div class="title">
                <span>免费送货上门 免费安装</span>
            </div>
            <p class="text"> 您在“我在家”平台上购买家具产品，即可享受免费送货上门服务（注：您所在的地址没有配备电梯且楼层高于三层，我们仅收取15元/层/件的抬楼费用；如您购买的是三人位沙发、床垫、主材为大理石等商品，
                需收取40元/层/件；如商品需吊装上楼，所产生费用按实际情况收取，具体可咨询客服)。</p> 
            <p class="text3">送货上门后，我们会为您提供免费的专业安装服务。</p>

            <div class="item t2">
                <div class="img">
                    <img src="../assets/images/1-4.png" alt="">
                </div>
            </div>
            <div class="title">
                <span>7天无理由退货</span>
            </div>
            <p class="text">用户在收货后7天内，如因“不喜欢/不想要了”等主观原因可以提出“7天无理由退换货”的申请（清样商品除外），退回货物应当完好【商品完好指商品能够保持原有品质、功能，包括商品本身、包装、配件及附带的使用说明书等齐全。用户基于查验需要而打开商品包装，或者为确认商品的品质、功能而进行合理、
                适当的试用不影响商品的完好。对超出查验和试用需要而使用商品，导致商品产生明显的价值贬损，视为商品不完好】。</p> 
            <p class="text2">由于家具属于消费者定做的商品，需支付相应耗损费。</p>
            <p class="list"><span></span>如物流信息显示“您的订单已确认，正在安排生产中，请耐心等待！”状态至您收到货前，
            此期间您取消订单或退货，需要支付实付金额的10%作为耗损费。</p>
             <p class="list"><span></span>如您在收到货后申请退货，保留原包装条件下需支付实付金额的20%作为耗损费。【如无法提供原包装，需加收实付金额的5%作为包装费，单件商品限额最低50元，封顶500元；
             另大理石、玻璃、陶瓷等易碎材质的商品需加收实付金额的10%作为包装费，单件商品限额最低200元，封顶1000元】。</p>

             <div class="item t2">
                <div class="img">
                    <img src="../assets/images/1-4.png" alt="">
                </div>
            </div>
            <div class="title">
                <span>延期发货保障</span>
            </div>
            <p class="text"> 客服核单确认货期后商品未按日期交货，按逾期商品的实付金额千分之三*逾期天数给予补偿，
                赔偿金额不超过商品货值50%。</p>

            <div class="item t2">
                <div class="img">
                    <img src="../assets/images/1-1.png" alt="">
                </div>
            </div>
            <div class="title">
                <span>家具代存储服务</span>
            </div>
            <p class="text"> 如果您无法在交货期内及时收货，“我在家”可提供家具代存储服务，解决您的不时之需。
                如商品未从制造商发出，可免费代存。如商品已经发出我们仅收取每立方米每天10元的代存费用。</p>

            <div class="item t2">
                <div class="img">
                    <img src="../assets/images/1-5.png" alt="">
                </div>
            </div>
            <div class="title">
                <span>全国包邮（除偏远地区）</span>
            </div>
            <p class="text"> 家居类商品（含地毯、灯具、装饰画类）包邮但暂不享受上门安装服务。</p>
            <p class="text3"> 新疆、西藏、青海、宁夏、甘肃、港澳台客户购买具体家居产品实际运费请咨询在线家居顾问。</p>

        </div>
    </div>
</template>

<script>
export default {
    methods:{
         onClickLeft() {
            Toast('返回');
        },
        onClickRight() {
            this.$router.push({name:"home"})
        },
    }
}
</script>

<style lang="scss" scoped>
.van-row{
    text-align: center; height: 0.88rem;
}
.van-col--9{
    font-size: 18px;
    color: #222121;
    font-weight: 700;
}
.van-icon-wap-home{
    text-align: left;
}
img{
    height: 7.7rem; width: 100%;
}
.content{
    margin:1.34rem 0.32rem 0 0.32rem;
    h1{
        font-size: 22px;
        
        color: #000; padding-bottom: 1.3rem;
        text-align: center;  
    }
    .item{
        position: relative; width: 100%; 
        .img{
            width: 0.8rem; height: 0.8rem; position: absolute;
            left: 0; right: 0; margin:auto; bottom: 0;
            img{
                width: 100%; height: 100%;
                border-radius: 50%;
            }
        }
      
    }
    .title{
        width: 100%; border:1px solid gray; margin-top: 0.5rem;
        position: relative;
        span{
            position: absolute; top: -0.2rem; 
            background: #fff;width: 3rem; text-align: center;
            padding: 0 0.3rem ; left: 0; right: 0; margin:auto;
            color: #584b3a; font-size: 16px;
        }
    }
    .text{
        border-bottom: 1px dotted #c9c9c9; margin-top: 0.8rem;
        text-align: left;
        font-size: 12px;
        line-height: 0.48rem;
        color: #666;
    }
    .text2{
        font-size: 12px;
        font-weight: 700;
        margin:0.1rem 0;
        color: #333; margin-bottom: 0.5rem;
    }
    .text3{
        text-align: left;
        font-size: 12px;
        line-height:0.48rem;
        color: #666;
        margin:0.06rem 0;
    }
    .list{
            text-align: left;
        font-size: 12px;
        line-height:0.48rem;
        color: #666;
        margin:0.06rem 0;
        span{
                display: inline-block;
                border-left: 2px solid #b99484;
                margin-right: 0.2rem;
                height: 0.2rem;
        }
    }
    ul{
        border-bottom: 1px dotted #c9c9c9; 
        text-align: left;
        font-size: 12px;
        line-height: 0.48rem;
        color: #666;
        li{
            line-height: 0.48rem;
            color: #666;
            margin:0.06rem 0;
        }
    }
    .t2{
        height: 2rem;
    }
}
</style>
