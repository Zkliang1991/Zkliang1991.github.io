<template>
  <div class="car">
    <Head title="购物车" :backshow="true" :moreshow="true"></Head>
    <ul class="shoppinglist">
      <li v-for="(good,i) in carlist" :key="i">
          <van-card
            :num="good.count"
            :tag="good.good.typetext"
            :price="good.good.goodsprice"
            :desc="good.good.goodstitle"
            :title="good.good.shoptext"
            :thumb="good.good.goodsimg"
            :origin-price="good.good.itembg"
            class="caritem"
          >
            <div slot="footer">
              <van-button size="mini">更多</van-button>
              <van-button size="mini">删除</van-button>
            </div>
          </van-card>
      </li>
    </ul>
    <van-submit-bar :price="totalprice" button-text="提交订单" @submit="onSubmit" class="submitbar"></van-submit-bar>
    <Foot :carNum="carNum"></Foot>
  </div>
</template>
<script>
import Foot from "@/components/Foot.vue";
export default {
  name: "car",
  data() {
    return {
      carlist: [],
      totalprice: 0,
      carNum: 0,
      checked: true
    };
  },
  components: {
    Foot
  },
  mounted() {
    var loginname = window.localStorage.getItem("loginname");
    console.log(loginname);
    var shopping = 0;
    var totalprice = 0;
    this.$axios.get("/vue/showcar").then(res => {
      this.carlist = res.data.result;
      for (var i = 0; i < this.carlist.length; i++) {
        shopping += this.carlist[i].count * 1;
        totalprice +=
          this.carlist[i].good.goodsprice * this.carlist[i].count * 100;
      }
      this.carNum = shopping;
      this.totalprice = totalprice;
    });
  }
};
</script>


<style lang="scss">
.car {
  .shoppinglist {
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 2.2rem;
  }
  .submitbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 1.1rem;
  }
}
</style>