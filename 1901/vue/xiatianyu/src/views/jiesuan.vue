<template>
  <div>
    <Head></Head>
    <div class="kong"></div>
    <van-card
      v-for="(item,i) in goods"
      :key="i"
      :title="item.good.title"
      :num="item.count"
      :price="formatPrice(item.good.price*1)"
      :thumb="item.good.img"
    >
      <!-- <div slot="footer">
            <van-button size="mini" type="danger" @click="delCar">删除</van-button>
         
      </div>-->
    </van-card>
    <van-button type="danger" size="large" :price="totalPrice" @click="gopay">去付款</van-button>
  </div>
</template>

<script>

import { Toast } from "vant";
export default {
  data() {
    return {
      goods: [],
      price:""
    };
  },
  mounted() {
    // console.log(this.$route.params)
    console.log(JSON.parse(this.$route.params.checkgood));
    this.goods = JSON.parse(this.$route.params.checkgood);
  },
  methods: {
    formatPrice(price) {
      return (price * 1).toFixed(2);
    },
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item) !== -1
            ? item.good.price * 100 * item.count
            : 0),
        0
      );
      // if(this.checkedGoods.indexOf(name) !==-1){
      //   console.log("1121323132")
      //   console.log(this.name);
      //  // name.good.price=0;
      // }else{
      //    console.log("66666")
      // }
      //return name.good.price*name.count
    },
    gopay(){
      Toast("付款成功")
    }
  }
};
</script>

<style>
.kong {
  width: 100px;
  height: 46px;
}
</style>
