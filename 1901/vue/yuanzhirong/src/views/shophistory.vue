




<template>
  <div>
    <Head title="购物记录" :show="true" style="background-color:red"></Head>
    <div class="box">
    <div class="card-goods">
      <van-panel v-for="(item,i) in goods" :key="i" :id="item._id">
        <van-card
          tag="优惠"
          :title="item.title"
          :desc="item.grayB"
          :num="item.count"
          :price="item.price"
          :thumb="item.img"
          :origin-price="100.00"
          class="card"
        />
      </van-panel>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: {}
    };
  },
  mounted() {
    this.$axios
      .post("/vue/getPayment", { username: this.$store.state.username })
      .then(res => {
        console.log(res.data.result);
        this.goods = res.data.result;
      });
  }
};
</script>


<style lang="scss" scoped>
.box {
  margin-top: 50px;
  text-align-last: left;
}
.card-goods {
  width: 100%;
  margin-top: 10px;
  padding: 10px 0;
  padding-bottom: 300px;
  background-color: #fff;
  text-align: left;
}
</style>

