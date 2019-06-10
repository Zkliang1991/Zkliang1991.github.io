<template>
  <div>
    <Head title="立即购买" :show="true"></Head>
    <van-steps :active="active">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
    <van-address-list :list="list"/>
    <van-card
      class="goodcard"
      :num="num"
      tag="对的选择"
      :price="goods.pice"
      :desc="goods.name"
      :title="goods.name"
      :thumb="goods.img"
    >
      <!-- <div slot="footer">
        <van-button size="mini">删除</van-button>
      </div>-->
    </van-card>
    <van-submit-bar :price="totalPrice" button-text="提交订单" @click="onSubmit"/>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      list: [],
      goods: {},
      num: 1,
      active: 0
    };
  },
  mounted() {
    this.$axios.get("/vue/dingdandizhi").then(res => {
      this.list = res.data.result;
    });
    this.goods = this.$route.params.good;
    this.num = this.$route.params.number;
    //    this.goods = this.$route.params.good;
    console.log("xzvcvzxcvzxcv");
    console.log(this.goods);
    console.log(num);
  },
  computed: {
    totalPrice() {
      return this.num * this.goods.price * 100;
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: "cart" });
    }
  }
};
</script>
<style scoped>
.van-address-list__add {
  display: none;
}
.van-icon-edit {
  display: none !important;
}
</style>
<style scoped>
.van-card:not(:first-child) {
  margin-top: 0px;
}
.van-address-list {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 0%;
  padding-bottom: 100px;
}
</style>

