<template>
    <div>
        <Head :title="good.name" :show="!!1"></Head>
        <div class="goods">
            <van-swipe class="goods-swipe" :autoplay="3000">
            <van-swipe-item >
                <img :src="good.img" >
            </van-swipe-item>
            </van-swipe>

            <van-cell-group>
            <van-cell>
                <div class="goods-title">{{ good.name }}</div>
                <div class="goods-price">{{ good.price}}</div>
            </van-cell>
            <van-cell class="goods-express">
                <van-col span="10">运费：</van-col>
                <van-col span="14">剩余：</van-col>
            </van-cell>
            </van-cell-group>

            <van-cell-group class="goods-cell-group">
            <van-cell value="进入店铺" icon="shop-o" >
                <template slot="title">
                <span class="van-cell-text">有赞的店</span>
                <van-tag class="goods-tag" type="danger">官方</van-tag>
                </template>
            </van-cell>
            <van-cell title="线下门店" icon="location-o"/>
            </van-cell-group>

            <van-cell-group class="goods-cell-group">
            <van-cell title="查看商品详情" />
            </van-cell-group>

            <van-goods-action>
            <van-goods-action-mini-btn icon="chat-o">
                客服
            </van-goods-action-mini-btn>
            <van-goods-action-mini-btn icon="cart-o">
                购物车
            </van-goods-action-mini-btn>
            <van-goods-action-big-btn @click="buyGood">
                加入购物车
            </van-goods-action-big-btn>
            <van-goods-action-big-btn primary @click="gotoCart">
                立即购买
            </van-goods-action-big-btn>
            </van-goods-action>
        </div>
    </div>
</template>

<script>
import {Indicator} from "mint-ui";
import {http} from "../utils"
import {Tag,Col,Icon,Cell,CellGroup,Swipe,Toast,SwipeItem,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn} from 'vant';

export default {
    components: {
        [Tag.name]: Tag,
        [Col.name]: Col,
        [Icon.name]: Icon,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [GoodsAction.name]: GoodsAction,
        [GoodsActionBigBtn.name]: GoodsActionBigBtn,
        [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
    },
    data(){
        return {
            goodId:this.$route.params.goodId,
            good:{},
        }
    },
    
    mounted(){
        Indicator.open({
            text: '加载中...',
            spinnerType: 'triple-bounce'
        });
  
        http.get("/vue/getGoodOne",{
            params:{
                _id:this.$route.params.goodId
            }
        }).then(res=>{
    
            this.good = res.data.result;
            Indicator.close();
        })
    },
    methods:{
        gotoCart() {
        this.$router.push({name:'car'});      
        },
        buyGood(){
            http.post("/vue/addCart",{
                 goodId:this.goodId,
                good:JSON.stringify(this.good)
            }).then(res=>{
               
            })
        },
    }
}
</script>
<style lang="scss">
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
.van-goods-action{
    z-index: 999;
}
</style>
