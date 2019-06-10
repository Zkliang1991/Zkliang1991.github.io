<template>
  <div class="goods">
    <Head :title="$route.query.name" :flag="true"></Head>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" @click="showimg">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ (goods.price*1).toFixed(2) }}</div>
        <span>商品数量：</span><van-stepper v-model="value" integer :max=" goods.remain" />
      </van-cell>
      
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ goods.remain }}</van-col>
      </van-cell>
      
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry"/>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry"/>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" @click="sorry">客服</van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">购物车</van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="shoppingcar">加入购物车</van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="sorry">立即购买</van-goods-action-big-btn>
    </van-goods-action>
   
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
  GoodsActionMiniBtn,
  ImagePreview,
} from "vant";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  // components: {
  //   [Tag.name]: Tag,
  //   [Col.name]: Col,
  //   [Icon.name]: Icon,
  //   [Cell.name]: Cell,
  //   [CellGroup.name]: CellGroup,
  //   [Swipe.name]: Swipe,
  //   [SwipeItem.name]: SwipeItem,
  //   [GoodsAction.name]: GoodsAction,
  //   [GoodsActionBigBtn.name]: GoodsActionBigBtn,
  //   [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  // },

  data() {
    return {
      goods: {
        title: this.$route.query.name,
        price: this.$route.query.price,
        express: "免运费",
        remain: this.$route.query.remain,
        thumb: [this.$route.query.img],
        goodId:this.$route.params.goodId
      },
      value: 1
    };
  },
  watch:{
    value(newVal) {
      console.log(newVal);
      this.value = newVal;
    }
  },
  methods: {
    onClickCart() {
      console.log(window.sessionStorage.userInfo)
      if(window.sessionStorage.userInfo){
        this.$router.push("/shoppingcar");
      }else{
        this.$router.push({name:'login'});
      }
    },
    ...mapActions(["gocart"]),
    shoppingcar(){
      this.gocart({url:"/vue/shoppingcar",params:{goodId:this.goods.goodId,goodname:this.goods.title,goodimg:this.$route.query.img,goodprice:this.goods.price,count:this.value}})
      // this.$router.push({name:'shoppingcar',params:{goodname:this.goods.title,goodprice:this.goods.price,goodnum:this.value}},)
    },
    sorry() {
      alert(this.$route.params.goodId)

    },
    showimg() {
      this.thumb = ImagePreview({
        images: [this.$route.query.img]
      });
    },
    
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