<template>
  <div class="goods">
    <van-nav-bar :fixed="true" title="详情" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-swipe class="goods-swipe" :autoplay="3000" :show-indicators="false">
      <van-swipe-item>
        <img :src="goods.thumb_url">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title" id="goodstitle">{{ goods.goods_name }}</div>
        <div class="goods-price">{{ formatPrice(goods.min_price)}}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ (goods.market_price/100).toFixed(2)}}</van-col>
        <van-col span="14">剩余：{{ goods.sales }}</van-col>
      </van-cell>
      <van-cell>
        <van-col span="14">
          数量:
          <van-stepper :value="value" async-change @change="onChange"/>
        </van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link>
        <template slot="title">
          <span class="van-cell-text">没赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link/>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link/>
    </van-cell-group>
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o">客服</van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">购物车</van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="addCart()">加入购物车</van-goods-action-big-btn>
      <van-goods-action-big-btn primary>立即购买</van-goods-action-big-btn>
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
  GoodsActionMiniBtn
} from "vant";
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
      goods: this.$route.query.item,
      showIndicators: true,
      true: true,
      value: 1,
      token: JSON.parse(window.sessionStorage.userInfo).token
      // userInfo: window.sessionStorage.userInfo
    };
  },
  methods: {
    formatPrice() {
      return "¥" + (this.goods.min_price / 100).toFixed(2);
    },
    onClickCart() {
      if (window.sessionStorage.userInfo) {
        this.$router.push({ name: "cart", token: this.token });
      } else {
        Toast("请先登录");
      }
    },
    addCart() {
      if (window.sessionStorage.userInfo) {
        var goodsId = this.goods.goods_id;
        var goodsName = this.goods.goods_name;
        var count = this.value;
        var img = this.goods.thumb_url;
        var price = (this.goods.min_price / 100).toFixed(2);
        var footnote = this.goods.footnote;
        var obj = {
          goodsId,
          goodsName,
          count,
          img,
          price,
          footnote,
          token: this.token
        };
        console.log(obj);
        this.$axios.post("/vue/addCart", obj).then(res => {
          Toast("加入成功");
        });
      } else {
        Toast("请先登录");
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onChange(value) {
      if (this.changing) {
        return;
      }
      this.changing = true;
      setTimeout(() => {
        this.value = value;
        this.changing = false;
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
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