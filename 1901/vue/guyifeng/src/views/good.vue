<template>
  <div>
    <Head title="商品详情 " :backShow="true" id="toubu"></Head>
    <div class="center">
      <img :src="good.img" alt width="100%" height="400px">
      <h2>
        <p>品牌:</p>
        <span>{{good.type}}</span>
      </h2>
      <h2 style="color:deeppink;">
        <p>商品名:</p>
        <span>{{good.title}}</span>
      </h2>
      <h3 style="color:red;">
        <p>价格:</p>
        <span>¥{{(good.price*1).toFixed(2)}}</span>
        <van-stepper class="anniu" v-model="adda"/>
      </h3>
      <h3>
        <p>评论:</p>
        <span>{{good.punlun}}条</span>
      </h3>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"/>
      <van-goods-action-icon @click="goCars" info="" icon="cart-o" text="购物车"/>
      <van-goods-action-icon icon="shop-o" text="店铺"/>
      <van-goods-action-button @click="addCars" type="warning" text="加入购物车"/>
      <van-goods-action-button type="danger" text="立即购买"/>
    </van-goods-action>
  </div>
</template>


<script>
import store from "@/store";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      goodId: store.state.goodId,
      username: localStorage.username,
      good: {},
      show: false
    };
  },
  computed: {
    ...mapState(["spNum"]),
    adda: {
      get() {
        return this.spNum.num;
      },
      set(val) {
        console.log(val);
        this.$store.commit("addNum", val);
      }
    }
  },
  methods: {
    goCars() {
      this.$router.push({ name: "cart" });
    },
    addCars() {
      console.log(this.spNum.num);
      this.$axios
        .get("/vue/addCars", {
          params: {
            username: this.username,
            goodId: this.goodId,
            spNum: this.spNum.num * 1,
            goodimg: this.good.img,
            goodtitle: this.good.title,
            goodprice: this.good.price,
            goodname:this.good.type
          }
        })
        .then(res => {
          console.log(res);
        });
    }
  },
  mounted() {
    console.log(this.goodId);
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

<style lang="scss" scoped>
#toubu {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
}
.center {
  margin-top: 60px;
  margin-bottom: 75px;
  h2 {
    padding-left: 10px;
    line-height: 35px;
    overflow: hidden;
    p {
      float: left;
      color: black;
    }
    span {
      float: left;
      padding-left: 10px;
    }
  }
  h3 {
    padding-left: 10px;
    line-height: 30px;
    overflow: hidden;
    p {
      float: left;
      color: black;
    }
    span {
      float: left;
      padding-left: 10px;
    }
    .anniu {
      float: right;
    }
  }
}
</style>
