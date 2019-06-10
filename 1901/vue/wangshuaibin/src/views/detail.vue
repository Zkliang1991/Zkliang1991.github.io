<template>
  <div class="goods" v-if="show">
    <mt-header :title="good.title" style="backgroundColor:red;height:.8rem" :fixed="true">
      <mt-button icon="back" slot="left" @click="goback">返回</mt-button>
    </mt-header>

    <img :src="good.img" class="goodimg">

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ good.title }}</div>
        <div class="goods-price">¥ {{ good.price }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="8">运费：包邮</van-col>
        <van-col span="8">
          剩余：
          <span style="color:#d70057">68</span> 件
        </van-col>
        <van-col span="8">
          <van-stepper style="float:right" v-model="value"/>
        </van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">查看店铺</span>
          <van-tag class="goods-tag" type="danger" >好评</van-tag>
        </template>
      </van-cell>
      <van-cell title="包邮范围" icon="location-o" is-link @click="sorry"/>
      <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true"/>
      <van-popup v-model="showList" position="bottom">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" @click="sorry">客服</van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">购物车</van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="addToMyCar">加入购物车</van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="buyNow">立即购买</van-goods-action-big-btn>
    </van-goods-action>
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠20元",
  reason: "",
  value: 2000,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1584592990,
  valueDesc: "20",
  unitDesc: "元"
};
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
      goodId: this.$route.params.goodId,
      good: {},
      show: false,
      num: 1,
      value: 1,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false
    };
  },
  methods: {
    formatPrice() {
      return "¥" + (this.goods.price *1).toFixed(2);
    },
    onClickCart() {
      this.$router.push({ name: "car" });
    },
    sorry() {
      Toast("未知错误");
    },
    goback() {
      this.$router.go(-1);
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    addToMyCar() {
      if (window.sessionStorage.username) {
        this.$axios
          .post("/vue/addCar", {
            goodId: this.goodId,
            username: window.sessionStorage.username,
            num: this.value,
            title: this.good.title,
            img: this.good.img,
            price: this.good.price
          })
          .then(res => {
            console.log(res);
            Toast(res.data.msg);
          });
      } else {
        Toast("请先登录后再购买商品");
        this.$router.push({ name: "login" });
      }
    },
    buyNow() {}
  },
  mounted() {
    this.$axios
      .get("/vue/getGoodOne", {
        params: { goodId: this.goodId }
      })
      .then(res => {
        // console.log(res);
        this.good = res.data.result;
        this.show = true;
      });
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
    color: #d70057;
    font-weight: 600;
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
  .goodimg {
    margin-top: 0.8rem;
    width: 100%;
    height: 7.5rem;
  }
  .van-button--warning {
    background-color: #fff;
    border: 1px solid #eee;
    color: #000;
  }
  .van-button--danger {
    background-color: #fff;
    border: 1px solid #eee;
    color: #d70057;
  }
}
</style>