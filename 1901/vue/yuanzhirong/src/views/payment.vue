


<template>
  <div>
    <Head title="核对订单" :show="true" style="background-color:red"></Head>
    <div class="box">
      <van-steps :active="active">
        <van-step>买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
      <van-cell-group class="user-group">
        <van-cell title="收货人" is-link @click="gotoaddresslist"/>
      </van-cell-group>

      <div class="card-goods">
        <van-panel v-for="(item,i) in goods" :key="i" :id="item._id">
          <van-card
            tag="优惠"
            :title="item.title"
            :desc="item.grayB"
            :num="item.count"
            :price="formatPrice(item.price)"
            :thumb="item.img"
            :origin-price="100.00"
            class="card"
          />
        </van-panel>
      </div>
      
    </div>

    <van-submit-bar :price="totalPrice" button-text="确认订单" @click="verify"></van-submit-bar>
  </div>
</template>

<script>
import {
  Step,
  Steps,
  Toast,
  AddressList,
} from "vant";
export default {
  data() {
    return {
      active: 0,
      totalPrice: 0,
      goods: [],
    };
  },
  methods: {
    formatPrice(price) {
      return (price * 1).toFixed(2);
    },
    gotoaddresslist(){
      this.$router.push({name:"addresslist"});
    },
    verify() {
      Toast();
    },
  },
  mounted() {
    this.goods  = this.$route.params.result;
    
    this.totalPrice =  this.$route.params.totalPrice;
  }
}
</script>


<style lang="scss" scoped>
.box {
  width: 100%;
  height: 0;
  margin-top: 50px;
  text-align-last: left;
}
.card-goods {
  width: 100%;
  margin-top: 15px;
  padding: 10px 0;
  padding-bottom: 300px;
  background-color: #fff;
  text-align: left;
}
</style>

