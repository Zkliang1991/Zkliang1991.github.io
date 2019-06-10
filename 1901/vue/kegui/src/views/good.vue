<template>
  <div class="goods">
    <Head :title="$route.query.name" :show="show"></Head>
    <div class="good_img">
      <img :src="good.img" alt>
    </div>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ good.name }}</div>
        <div class="goods-price">售价:{{ good.price }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：免运费</van-col>
        <van-col span="14">该月成交: 99999件</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link >
        <template slot="title">
          <span class="van-cell-text">{{good.name+"旗舰店"}}</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link />
    </van-cell-group>

 
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" >客服</van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">购物车</van-goods-action-mini-btn>
      <van-goods-action-big-btn  @click="addCart">加入购物车</van-goods-action-big-btn>
      <van-goods-action-big-btn primary >立即购买</van-goods-action-big-btn>
    </van-goods-action>
  </div>
</template>

<script>
import {Toast} from 'vant'
export default {
  
  data() {
    return {
      goodId: this.$route.params.goodId,
      good: {},
      show: false,
      number: 1,
    };
  },
  methods: {
    onClickCart() {
      this.$router.push({ name: "cart" });
    },

    addCart(){
      this.good.goodId=this.goodId
      this.$axios.post("/vue/addCart",this.good)
      .then(res=>{
        Toast('加入成功')
      })
    }
  },
  mounted() {
    this.$axios.get("/vue/getonegood", {
        params: {
          goodId: this.goodId
        }
      }).then(res => {
        this.good = res.data.result;
      });
  }
};
</script>

<style scoped>
.good_img img {
  width: 100%;
}

</style>
