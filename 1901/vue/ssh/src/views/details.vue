<template>
    <div>
        <van-button class="back" icon="plus"  type="danger" @click="bk">返回</van-button>
        <div class="proimg-box">
            <img :src="good.thumBnail" alt="">
        </div>

         <div class="proinfo">
                    <div class="proinfoTop">
                            <div class="proprice">
                                <div class="truePrice">
                                    <em></em><span>¥{{good.price}}</span>
                                </div>
                                <div class="priceMsg">
                                    <i>
                                        <em>{{(good.par)}}</em> ↓￥
                                    </i><span>降价</span>
                                </div>
                            </div>
                        <div class="prolabelBox">
                            <div class="prolabel">
                                <span>快递: 满80包邮</span>
                                    <span>已售: 2680件</span>
                                <span class="proloveNum">
                                    <i>♡</i>190
                                </span>
                            </div>
                            <div class="prolabel">
                                <span><em></em>正品保障</span>
                                    <span><em></em>贴心客服</span>
                                <span><em></em>极速物流</span>
                            </div>
                        </div>
                    </div>
                    <div class="proMsg-box">
                            <em>自营</em>
                        <div class="prointroduce">
                            {{good.details}}

                        </div>

                    </div>
                </div>
    <div class="blackLine">FULL OFFER | 优惠满满</div>                
                    
      <div class="lingQuan afterline">
                        <em>领券</em>
                                    <span>满99.00-10.00</span>
                                    <span>满159.00-30.00</span>
                                    <span>满259.00-50.00</span>

                    </div>
<div>数量<van-stepper v-model="number" /></div>
    <div class="footnav">
                        <a href="/" class="index"><i></i>首页</a>
                        <div class="service" onclick="NTKF.im_openInPageChat('kf_9562_1494213565929')"><i></i>客服</div>
                        <a href="/cart" class="shopcar">
                            <i>
                                <em id="cartCountBox"></em>
                            </i>购物车
                        </a>
                                <div class="addcart" id="js_addcarbtn" @click="buyGood" >加入购物车</div>
                                <div class="buynow" id="js_buynow" @click="gotoCart">立即购买</div>
                        
                    </div>

    </div>
</template>
<script>
export default {
    
    data(){
        return {
            goodId:this.$route.params.goodId,
            good:{},
            // show:false,
            number:1
        }
    },
    mounted(){
        this.$axios.get("/vue/getGoodOne",{
            params:{
                goodId:this.goodId
            }
        }).then(res=>{
            this.good=res.data.result;
        })
    },
    methods:{
        gotoCart(){
            this.$router.push({name:'cart'})
        },
        buyGood(){
            // 数量 
            // goodId
            // username  ==>  token 
            this.$axios.post("/vue/addCart",{
                goodId:this.goodId,
                count:this.number,
                good:JSON.stringify(this.good)
            }).then(res=>{
                console.log(res.data);
            })
        },
        bk(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
    .proimg-box{
        width: 100%;
        height: 7.5rem;
       
    }
     .proimg-box img{
        width: 100%;
        height: 100%;
       
    }
    .proinfoTop{
        color:#919191;
        display:flex;
        flex-direction: row;
        font-size: 12px;
        justify-content: space-between;
        padding: 10px;
        padding-bottom: 0;
    }
    .proprice{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .truePrice{
        color: #E31436;
        font-size: 25px;
    }
    .truePrice em {
    font-size: 18px;
}
.priceMsg {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.priceMsg i {
    color: #E31436;
    display: flex;
}
.priceMsg span {
    background: linear-gradient(to right, #343434, #141414);
    color: #ffffff;
    height: 14px;
    line-height: 14px;
    margin: 2px;
    min-width: 60px;
    text-align: center;
    padding: 0 2px;
    overflow: hidden;
}
.priceMsg em {
    color: #919191;
    text-decoration: line-through;
}
.priceMsg em {
    color: #919191;
    text-decoration: line-through;
}
.prolabel {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    padding: 0px 5px;
}
.prolabel span {
    align-items: center;
    display: flex;
    height: 18px;
    justify-content: center;
}
.proloveNum i {
    color: #919191;
    font-size: 18px;
}
.prolabel {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    padding: 0px 5px;
}
.prolabel span {
    align-items: center;
    display: flex;
    height: 18px;
    justify-content: center;
}
.prolabel span {
    align-items: center;
    display: flex;
    height: 18px;
    justify-content: center;
}
.proMsg-box {
    border: 1px solid #B5B5B5;
    display: flex;
    margin: 10px 5px;
    padding: 5px;
    min-height: 50px;
}
.proMsg-box em {
    background: #7B7B7B;
    color: #ffffff;
    display: flex;
    font-size: 15px;
    height: 20px;
    justify-content: center;
    line-height: 20px;
    margin-right: 6px;
    min-width: 34px;
}
.prointroduce {
    color: #000000;
    font-size: 15px;
    font-weight: bold;
    width: 100%;
    text-indent: 0.1rem;
}
.blackLine {
    background: #040000;
    color: #ffffff;
    font-size: 12px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    width: 100%;
}
.afterline {
    position: relative;
}
.lingQuan {
    padding: 10px 15px;
}
.lingQuan > em {
    border-right: 1px solid #ccc;
    color: #040000;
    display: inline-block;
    font-size: 13px;
    font-weight: bold;
    height: 20px;
    line-height: 20px;
    padding: 0 5px;
    padding-right: 10px;
}
.lingQuan span {
    background: #cab894;
    color: #ffffff;
    display: inline-block;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    margin-left: 5px;
    padding: 0 5px;
    position: relative;
}
.lingQuan a {
    float: right;
}
a {
    text-decoration: none;
    cursor: pointer;
    color: #888888;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
.footnav {
    background: #ffffff;
    bottom: 0;
    display: flex;
    height: 50px;
    margin: 0 auto;
    max-width: 750px;
    min-width: 320px;
    position: fixed;
    text-align: center;
    width: 100%;
    z-index: 3;
}
.footnav .index {
    align-items: center;
    border: 1px solid #F4F4F4;
    box-sizing: border-box;
    color: #6C6C6C;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    justify-content: center;
    width: 13%;
}
a {
    text-decoration: none;
    cursor: pointer;
    color: #888888;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
.footnav .index i {
    background: url(/app/images/productInfo/bottomicon.png);
    height: 17px;
    width: 18px;
}
.footnav .service {
    align-items: center;
    border: 1px solid #F4F4F4;
    box-sizing: border-box;
    color: #6C6C6C;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    justify-content: center;
    width: 13%;
}
.footnav .service i {
    background: url(/app/images/productInfo/bottomicon.png);
    background-position: 0px -22px;
    background-size: 100%;
    height: 17px;
    width: 18px;
}
.footnav .shopcar {
    align-items: center;
    border: 1px solid #F4F4F4;
    box-sizing: border-box;
    color: #6C6C6C;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    justify-content: center;
    width: 14%;
}
a {
    text-decoration: none;
    cursor: pointer;
    color: #888888;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
.footnav .shopcar i {
    background: url(/app/images/productInfo/bottomicon.png);
    background-position: 0px -47px;
    background-size: 100%;
    height: 17px;
    position: relative;
    width: 18px;
}
.footnav .addcart {
    background: #000000;
    color: #ffffff;
    line-height: 50px;
    width: 30%;
}
.footnav .buynow {
    background: #CAB894;
    color: #ffffff;
    line-height: 50px;
    width: 30%;
}
.back{
    position: fixed;
    top: 10px;
    left: 10px;
    color: #000;
    font-size: 20px;
    background-color: rgba(0,0,0,0);
    border: none;

    /* width: .3rem;
    height:.7rem; */
}
</style>

