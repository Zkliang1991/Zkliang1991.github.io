<template>
  <div>
    <Head :show="true"></Head>
    <div class="details">
      <img :src="good.img" alt>
      <p class="goodsname">{{good.name}}</p>
      <p class="goodsprice">￥{{good.pice}}</p>
      <div class="goodfreight">
        <span>运费:免运费</span>
        <span>剩余:{{good.comment}}</span>
      </div>
    </div>
    <div class="goodshop">
      <van-cell title="线上店铺" icon="shop-o" is-link/>
      <van-cell title="线下实体店" icon="location-o" is-link/>
      <van-cell title="优惠券" is-link to="index"/>
    </div>
    <van-goods-action>
      <van-goods-action-icon
        :style="{backgroundImage: 'url(' + (coverImgUrl ? coverImgUrl : baseImg) + ')' , backgroundSize:'30% 30%',backgroundRepeat:'no-repeat',backgroundPosition:'50% 27%', position: 'relative'}"
        ref="dian"
      >
        <span
          :style="{verticalAlign:'bottom',position: 'absolute',left:'0',top:' 64%',right:'0',margin:'auto',textAlign:'center',display:'block'}"
        >{{dianzan1}}({{numberdianzan}})</span>
      </van-goods-action-icon>
      <van-goods-action-icon @click="gotoCar()" :info="carNum" icon="cart-o" text="购物车"/>
      <van-goods-action-icon icon="send-gift-o" @click="shoucang" ref="shou" text="收藏"/>
      <van-goods-action-button @click="buyGood" type="warning" text="加入购物车"/>
      <van-goods-action-button type="danger" @click="gotoCar()" text="立即购买"/>
    </van-goods-action>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      coverImgUrl: require("../assets/images/shoucang1.png"),
      baseImg: require("../assets/images/shoucang.png"),
      dianzan1: "点赞",
      goodId: "",
      good: {},
      number: 1,
      numberdianzan: 0,
      flag1: true
    };
  },
  computed: {
    carNum() {
      return this.$store.state.carnum;
    }
  },
  methods: {
    gotoCar() {
      this.$dialog.confirm({
        title: "提示",
        message: "是否进入购物车?"
      })
        .then(() => {
           this.$router.push({ name: "cart" });
        })
        .catch(() => {
          // on cancel
        });
     
    },
    buyGood() {
      this.$axios
        .post("/vue/addCart", {
          goodId: this.goodId,
          count: this.number,
          good: this.good
        })
        .then(res => {
          console.log(res.data);
        });
    },
    // dianzan() {
    //   console.log("点赞");
    //   this.flag1 = !this.flag1;
    //   console.log(this.flag1);
    //   if (!this.flag1) {
    //     this.dianzan1 = "取消点赞";
    //     this.coverImgUrl = null;
    //   } else {
    //     this.dianzan1 = "点赞";
    //     this.coverImgUrl = require("../assets/images/shoucang1.png");
    //   }
    //   this.$axios
    //     .post("/vue/dianzan", {
    //       goodId: this.goodId,
    //       flag1: this.flag1
    //     })
    //     .then(res => {
    //       this.$axios
    //         .post("/vue/getdianzan", {
    //           goodId: this.goodId
    //         })
    //         .then(res => {
    //           console.log(res.data);
    //           if (res.data.result.length > 0) {
    //             this.numberdianzan = res.data.result[0].dianzan;
    //           } else {
    //             this.numberdianzan = 0;
    //           }
    //         });
    //     });
    // },
    shoucang() {
      console.log("收藏");
      console.log("444444444");
      console.log(this.$route.params.good._id);
      this.$axios
        .post("/vue/addCollection", { goodId: this.goodId, good: this.good })
        .then(res => {});
    }
  },
  mounted() {
    //   if (!this.flag1) {
    //     this.dianzan1 = "取消点赞";
    //     this.coverImgUrl = null;
    //   } else {
    //     this.dianzan1 = "点赞";
    //     this.coverImgUrl = require("../assets/images/shoucang1.png");
    //   }
    this.good = this.$route.params.good;
    this.goodId = this.$route.params.good._id;

    //   this.$axios
    //     .post("/vue/getdianzan", {
    //       goodId: this.goodId
    //     })
    //     .then(res => {
    //       console.log(res.data);
    //       if (res.data.result.length > 0) {
    //         this.numberdianzan = res.data.result[0].dianzan;
    //       } else {
    //         this.numberdianzan = 0;
    //       }
    //     });
  }
};
</script>
<style lang="scss" scoped>
.details {
  padding-top: 0.8rem;
  background-color: #fff;
  img {
    width: 100%;
    height: 7rem;
    padding-bottom: 0.1rem;
    background: #fff;
  }
  .goodsname {
    padding: 0.2rem 0.4rem 0.2rem 0;
    margin-left: 0.4rem;
    background-color: #fff;
    border-top: 1px solid #e1e1e1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .goodsprice {
    background-color: #fff;
    color: red;
    padding: 0rem 0.4rem 0.2rem 0;
    margin-left: 0.4rem;
    border-bottom: 1px solid #e1e1e1;
  }
  .goodfreight {
    padding: 0.2rem 0.4rem 0.2rem 0;
    margin-left: 0.4rem;
    font-size: 0.24rem;

    color: #aaa;
    span {
      margin-right: 0.3rem;
    }
  }
}
.goodshop {
  padding-bottom: 1rem;
}
</style>
