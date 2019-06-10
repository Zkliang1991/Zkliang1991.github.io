<template>
  <div class="xiangxi">
    <img :src="good.goodimg" alt @click="onBuyClicked">
    <van-popup v-model="show">
      <img :src="good.goodimg" alt class="item-img showimg">
    </van-popup>
    <h3>{{good.goodname}}</h3>
    <p>{{good.miaoshu}}</p>
    <i class="priceSpan">￥{{good.goodsprice}}</i>

    <van-stepper v-model="value" input-width="100px" :integer="false"/>
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" text="客服"/>
      <van-goods-action-mini-btn icon="cart-o" @click="gotoshopcar" text="购物车"/>
      <van-goods-action-big-btn @click="gotoshop" text="加入购物车"/>
      <van-goods-action-big-btn primary text="立即购买" @click="shop"/>
    </van-goods-action>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      goodId: this.$route.params.goodId,
      goodname: this.$route.query.goodname,
      showBase: false,
      show: false,
      sku: {},
      value: 1,
      goods: {}
    };
  },
  methods: {
    gotoshop() {
      var token = window.sessionStorage.userInfo;
      if (token) {
        this.$axios
          .post("/bu/addCart", {
            goodId: this.goodId,
            count: this.value,
            good: JSON.stringify(this.good)
          })
          .then(res => {});
      } else {
        Dialog.confirm({
          title: "提醒",
          message: "亲，您还未登录，是否立即登陆?"
        })
          .then(() => {
            console.log(this.goodId);
            window.sessionStorage.goodId = this.goodId;
            window.sessionStorage.url = this.$route.name;
            window.sessionStorage.goodname = this.goodname;
            this.$router.push({ name: "login" });
          })
          .catch(() => {
            // on cancel
          });
      }
      window.sessionStorage.url = "";
    },
    gotoshopcar() {
      var token = window.sessionStorage.userInfo;

      if (token) {
        this.$router.push({ name: "shoppingcar" });
      } else {
        Dialog.confirm({
          title: "提醒",
          message: "亲，您还未登录，是否立即登陆?"
        })
          .then(() => {
            console.log(this.goodId);
            console.log(123);
            window.sessionStorage.goodId = this.goodId;
            window.sessionStorage.url = this.$route.name;
            window.sessionStorage.goodname = this.goodname;
            this.$router.push({ name: "login" });
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    shop() {
      var token = window.sessionStorage.userInfo;
      if (token) {
        this.$router.push({ name: "jiesuan" });
      } else {
        Dialog.confirm({
          title: "提醒",
          message: "亲，您还未登录，是否立即登陆?"
        })
          .then(() => {
            console.log(this.goodId);
            window.sessionStorage.goodId = this.goodId;
            window.sessionStorage.url = this.$route.name;
            window.sessionStorage.goodname = this.goodname;
            this.$router.push({ name: "login" });
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    onBuyClicked() {
      this.show = !this.show;
    }
  },
  props: ["good"]
};
</script>
<style scoped>
.showimg {
  float: left;
  width: 500px;
  height: auto;
}
.cheBtn {
  margin-top: 0.4rem;
  margin-right: 0.3rem;
  margin-left: -0.2rem;
}
.xiangxi {
  text-align: center;
  padding-top: 1rem;
}
.xiangxi img {
  /* margin-top: 1.5rem; */
  width: 6rem;
  height: 6rem;
  margin-left: 0.9rem;
}
.xiangxi h3 {
  line-height: 1rem;
  font-size: 0.4rem;
  color: #9b745c;
}

.xiangxi p {
  line-height: 0.5rem;
  font-size: 0.3rem;
  color: #666;
}
.priceSpan {
  display: block;
  text-align: center;
  font-size: 0.5rem;
  color: #ff8888;
  padding-bottom: 0.3rem;
}
</style>


