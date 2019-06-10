<template>
  <div class="goods">
    <Head :title="$route.query.name" :show="true"></Head>
    <div class="good_img">
      <img :src="good.images" alt>
    </div>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ good.name }}</div>
        <div class="goods-price">售价:{{ good.price }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：免运费</van-col>
        <van-col span="14">该月成交:{{ good.deal }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">{{good.shopNick||"黑店"}}</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry"/>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry"/>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" @click="sorry">客服</van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">购物车</van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="addGood">加入购物车</van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="sorry">立即购买</van-goods-action-big-btn>
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      goodId: this.$route.params.goodId,
      good: {},
      show: false,
      number: 1
    };
  },
  methods: {
    onClickCart() {
      this.$router.push({ name: "cart" });
    },
    sorry() {
      Toast("暂无后续逻辑~");
    },
    addGood() {
      console.log(11)
      this.good.goodId = this.goodId
      console.log(this.good)
      this.$axios.post("/vue/addCart",this.good).then(res=>{
        console.log(res.data);
      });
    }
  },
  mounted() {
    this.$axios
      .get("/vue/getGoodOne", {
        params: {
          goodId: this.goodId
        }
      })
      .then(res => {
        this.good = res.data.result;
        this.show = true;
      });
  }
};
</script>

<style scoped>
.good_img img {
  width: 100%;
}
/* .goods {
  padding-bottom: 50px;
}
.goods-swipe img {
  width: 100%;
  display: block;
}
.goods-title {
  font-size: 16px;
}
.goods-price {
  color: #f44;
}
.goods-express {
  color: #999;
  font-size: 12px;
  padding: 5px 15px;
}
.goods-cell-group {
  margin: 15px 0;
}
.van-cell__value {
  color: #999;
}

.goods-tag {
  margin-left: 5px;
} */
</style>