<template>
<div>
    <Head title="商品详情" :show="true"></Head>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item>
        <img :src="good.imgs" >
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ good.title }}</div>
        <div class="goods-price">{{good.price }} <van-stepper v-model="number" /></div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：免运费</van-col>
        
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link>
        <template slot="title">
          <span class="van-cell-text">{{good.shopname}}</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell :title="good.location" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" @click="sorry">
        客服
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="buyGood">
        加入购物车
      </van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="sorry">
        立即购买
      </van-goods-action-big-btn>
    </van-goods-action>
  </div>
  </div>
</template>

<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';
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
  data() {
    return {
        //自己写的带参
        goodId:this.$route.params.goodId,

        //接收数据
        good:{},
        goodId:this.$route.params.goodId,
        show:false,
        number:1,
    };
  },
  methods: {
    sorry(){
      Toast('暂无后续');
    },
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push({name:'shoppingcar'});
    },
    buyGood() {
      this.$axios.post("/vue/addCart",{
        goodId:this.goodId,
        count:this.number,
        good:JSON.stringify(this.good)
      }).then(res=>{
        Toast(res.data);
      })
    }
  },
  created(){
      this.$axios.get("/vue/getGoodOne",{
          params:{
              goodId:this.goodId
          }
      }).then((res)=>{
            this.good = res.data.result;
      })
  }
};
</script>

<style lang="less">
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
</style>
