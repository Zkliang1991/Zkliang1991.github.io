<template>
    <div class="det">
            <p class="title">
                <img src="../assets/images/back.png" alt="" class="fanhui" @click="goback">
                <i>6.18限时优惠商品</i></p>
            <img :src="list.img" alt="" class="images">
            <div class="xs">
                <h2 class="price">{{list.title}}</h2>
               <h2 class="priceOld">原价￥:<s>{{list.priceOld}} </s></h2>
               <p class="time">距离活动结束还有:</p>
               <!-- 计时器 -->
                <nut-countdown 
                    class="time"
                    showDays 
                    showPlainText 
                    :startTime="Date.now()"
                    :endTime="end"  
                    >
                </nut-countdown>    
            </div> 
            <h2 class="price">限时秒杀价￥:{{list.price}}</h2>
            <div style="text-align:left;">
                <span style="margin:10px 10px">服务:</span>
                <span>订单险 - 7天无理由 - 公益宝贝</span>
            </div>
            <div style="text-align:left;">
                <span style="margin:10px 10px">选择:</span>
                <span>选择 颜色分类</span>
                <p style="margin:10px 30px">
                <nut-radiogroup v-model="radioGroupVal1">
                    <nut-radio label="a">白色</nut-radio>
                    <nut-radio label="b">黑色</nut-radio>
                </nut-radiogroup>
                </p>
            </div>
            <ul class="sup">
                <li>
                    <img src="../assets/images/guojiaguan.png" alt="" style="width:70%;margin-left:20%">
                    <span>店铺</span>
                </li>
                <li>
                    <img src="../assets/images/kefu.png" alt="" style="width:70%;margin-left:20%">
                    <span>客服</span>
                </li>
                <li>
                    <img src="../assets/images/shoucang.png" alt="" style="width:70%;margin-left:20%">
                    <span>收藏</span>
                </li>
                  <nut-button 
            @click="clickHandler"
            >
                加入购物车
            </nut-button>
            </ul>
    </div>  
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    data(){
        return{
            list:{},
            end : "2019.6.18",
            radioGroupVal1:"b",
            number:1,
        }
    },
    computed:{
        ...mapState([
            "nGoodsId"
        ]),                 
    },
    mounted(){
        var goodsId=this.nGoodsId.goodsID;
        var token = window.sessionStorage.userInfo;
        console.log("商品卡"+goodsId);
        if(token){
            this.$axios.get("/vue/detail",{
                params:{
                    goodsId
                }
            }).then(res=>{
                // console.log(res);
                this.list = res.data.result; 
            })
        }else{
            this.$router.push({name:"login"});
        }

    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        clickHandler(){
            var goodsId=this.nGoodsId.goodsID;
            console.log(goodsId);
            this.$axios.post("/vue/getlist",{
                    goodsId,
                    count:this.number,
                    good:JSON.stringify(this.list),
            }).then(res=>{
                this.$router.push({name:"shoppingcar"});
            })
        }   
    }
}
</script>
<style scoped>
    .det{
        width: 100%;
        overflow: hidden;
        background-color:lightseagreen;
    }
    .images{
        width: 100%;
        height: 80%;
    }
    .title{
        background-color:skyblue;
        color:orangered;
        font-size: 25px;
        padding:15px 0;
        font-weight: 900;
    }
    .xs{
        width: 100%;
        height: 5%;
        overflow: hidden;
    }
    .fanhui{
        float:left;
        width: 8%;
        height: 5%;
        margin-left:10px;
    }
    .price{
        color:ghostwhite;
        font-size: 20px;
        font-weight: 900;
        text-align: left;
        margin:10px 10px;
    }
    .priceOld{
        color:cyan;
        font-size: 20px;
        font-weight: 900;
        text-align: left;
        margin:10px 10px;
        float:left;
    }
    .time{
        float:right;
        margin:10px 10px;
        font-size: 18px;
        font-weight: 900;
        color:orangered;
    }
    .sup{
        width: 100%;
    }
    li{
        float:left;
        width: 14%;
        height: 20%;
    }
</style>

