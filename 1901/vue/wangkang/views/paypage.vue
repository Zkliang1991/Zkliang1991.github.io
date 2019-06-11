<template>
  <div>
    <detailsHead title="订单提交"></detailsHead>
    <van-steps :active="active" active-icon="success" active-color="#38f" class="steps">
      <van-step>提交订单</van-step>
      <van-step>添加联系人</van-step>
      <van-step>添加地址</van-step>
      <van-step>支付</van-step>
    </van-steps>
    <div class="paygoodslist">
      <van-card
        v-for="(item,i) in checkedGoods"
        :key="i"
        :num="item.count"
        :tag="item.good.typetext"
        :price="item.good.goodsprice"
        :desc="item.good.shoptext"
        :title="item.good.goodstitle"
        :thumb="item.good.goodsimg"
        origin-price="10.00"
      >
        <div slot="footer">
          <van-button size="mini">删除</van-button>
          <van-button size="mini">详情</van-button>
        </div>
      </van-card>
    </div>

    <van-button round type="primary" size="large" class="nextBtn" @click="gotoconnect">确认提交订单</van-button>
    <van-button round type="danger" size="large" class="prevBtn" @click="backstep">上一步</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      checkedGoods: []
    };
  },
  mounted() {
    var list = this.$route.params.list;
    var cargoods = this.$route.params.carGoods;
    for (var i = 0; i < cargoods.length; i++) {
      for (var j = 0; j < list.length; j++) {
        if (cargoods[i]._id == list[j]) {
          this.checkedGoods.push(cargoods[i]);
        }
      }
    }
  },
  methods: {
    gotoconnect() {
      this.$router.push({ name: "connect" });
    },
    backstep() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.steps {
  position: fixed;
  left: 0;
  right: 0;
  top: .92rem;
  z-index:999;
}
.paygoodslist {
  padding-top: 2.2rem;
  padding-bottom: 2.2rem;
}
.nextBtn {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 1.1rem;
}
.prevBtn {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>