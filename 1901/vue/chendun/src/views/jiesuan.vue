<template>
  <div>
    <Head title="结算" :show="true"></Head>
    <van-steps :active="active">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
    <van-address-list :list="list"/>
    <van-button type="info" @click="updizhi">修改地址</van-button>
    <van-card
      class="goodcard"
      v-for="(item,index) in goods"
      :num="item.count"
      tag="对的选择"
      :price="item.good.pice"
      :desc="item.good.name"
      :title="item.good.name"
      :thumb="item.good.img"
      :key="index"
    >
      <div slot="footer">
        <!-- <van-button size="mini">删除</van-button> -->
      </div>
    </van-card>
    <van-submit-bar :price="totalPrice" button-text="提交订单"/>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      list: [],
      goods: [],
      active: 0
    };
  },
  mounted() {
    for (var i = 0; i < this.checked.length; i++) {
      this.goods.push(this.checked[i]);
    }
    // this.goods = this.checked.good
    console.log("qawdasdasd");
    console.log(this.goods);
    // dizhi = this.addr;
    this.$axios.get("/vue/dingdandizhi").then(res => {
      this.list = res.data.result;
    });
  },
  computed: {
    ...mapState(["checked", "addr"]),
    totalPrice() {
      return this.$route.params.totalPrice * 100;
    }
  },
  methods: {
    updizhi() {
      this.$router.push({ name: "addressList" });
    }
  }
};

// var carGoods=[]
// for(i=0;i<data.length;i++){
//     var obj ={}
//     obj.id=data[i]
//     carGoods.push(obj)
//[{id:"45"},{id:"78"}]

// arr:[{id:"45"},{id:"67"}]
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
.dizhi {
  color: cornflowerblue;
  margin-left: 0.2rem;
}
</style>
