<template>
    <div>
        <Head></Head>
        <div class="context">
            <img :src="this.ngoods.goods.images" width="100%" height="300px">
            <p class="p1">{{ngoods.goods.title}}</p>
            <p class="p2">￥:{{ngoods.goods.price}}元
                <span class="span3">{{ngoods.goods.saleData}}件</span>
            </p>
            <van-stepper class="van-stepper" v-model="keyNum"/>
            <div class="p5">
                <p class="p3">促销:乐卡分期 新用户3期免息 <span class="span1">></span></p>
                <p class="p3">99成新 128GB 2GB 全网通 <span class="span1">></span></p>
                <p class="p3">服务:假一赔十 顺丰包邮 一年保修 <span class="span1">></span></p>
            </div>
        </div>

        <van-goods-action>
            <van-goods-action-mini-btn
                icon="chat-o"
                text="客服"
            />
            <van-goods-action-mini-btn
                icon="cart-o"
                text="购物车"
            />
            <van-goods-action-big-btn text="立即购买" />
            <van-goods-action-big-btn
                primary
                text="加入购物车"
                @click="goumai"
            />
        </van-goods-action>

    </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState([
            "nGoodsId",
            "ngoods",
            "nNum",
            "nLogin",
            "nHui"
        ]),
        keyNum:{
            get(){
                return this.nNum.num;
            },
            set(val){
                console.log(val);
                this.$store.commit("getKeyNums",val); 
            }
        }
    },
    mounted(){
        // console.log(this.nGoodsId.goodsID);
        // console.log(this.nNum.num);
        this.$store.state.nTitle.title = "详情";
        if(this.nGoodsId.goodsID!=""){
            this.$axios.get("/vue/getGoodOne",{
                params:{
                    goodId:this.nGoodsId.goodsID
                }
            }).then(res=>{
                this.ngoods.goods = res.data.result;
            })
        }
    },
    methods:{
        goumai(){
            // console.log("123456")
            if(this.nLogin.username!=""){
                this.$axios.get("/vue/setGoodGuwu",{
                    params:{
                        gId:this.nGoodsId.goodsID,
                        gImg:this.ngoods.goods.images,
                        gTitle:this.ngoods.goods.title,
                        gPrice:this.ngoods.goods.price,
                        gNum:this.nNum.num*1,
                        gname:this.nLogin.username
                    }
                }).then(res=>{
                    console.log(res.data);
                    this.nNum.num=1;
                    console.log(this.nNum.num)
                    this.$router.push({name:"shopping"});
                })
            }else{
                // console.log("用户名已经过期,请重新登录");
                this.nHui.hui="details";
                this.$router.push({name:"login"})
            }
        }
    }
}
</script>
<style scoped>
    .context{
        margin-top:11%;
    }
    .p1{
        margin: 0;
        /* font-size: 20px; */
    }
    .p2,.span3{
        color: #fff;
        font-weight: 600;
        font-size: 20px;
        height: 40px;
        line-height: 40px;
        background-color: red;
        padding-left: 20px;
        margin:0;
    }
    .span3{
        float: right;
        margin-right: 20px;
    }
    .van-stepper{
        float: right;
        margin-right: 15px;
        margin-top: 10px;
    }
    .span1{
        float: right;
    }
    .p3{
        padding: 0 20px;
    }
    .p5{
        width: 100%;
        position: absolute;
        top:450px;
    }
</style>