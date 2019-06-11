<template>
  <div class="goodsdetails">
    <detailsHead :title="good.shoptext"></detailsHead>
    <div class="detailsimg">
      <img :src="good.goodsimg">
    </div>
    <p class="detailstitle">{{good.goodstitle}}</p>
    <p class="price">¥{{good.goodsprice}}</p>
    <p class="comment">评论:{{good.comment}}</p>
    <p class="shop">{{good.shoptext}}</p>
    <van-tag plain type="danger" class="goodsbg">{{good.itembg}}</van-tag>
    <div class="goodscount">
      <van-coupon-cell/>
    </div>
    <hr>
    <div class="details">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服"/>
        <van-goods-action-icon icon="like-o" text="收藏" @click="addCollection"/>
        <van-goods-action-icon icon="cart-o" text="购物车" @click="gotocar"/>
        <van-goods-action-button type="warning" text="加入购物车" @click="addmyshopping"/>
        <van-goods-action-button type="danger" text="立即购买" @click="buynow"/>
      </van-goods-action>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodsdetails",
  data() {
    return {
      goodsid: this.$route.params.goodsid,
      good: {},
      number: 1
    };
  },
  mounted() {
    this.username = window.localStorage.getItem("loginname");
    this.$axios
      .get("/vue/getGoodOne", {
        params: {
          goodsid: this.goodsid
        }
      })
      .then(res => {
        this.good = res.data.result;
      });
  },
  methods: {
    addmyshopping() {
      this.$axios
        .post("/vue/addCart", {
          goodId: this.goodsid,
          count: this.number,
          good: JSON.stringify(this.good)
        })
        .then(res => {
          console.log(res.data.result);
        });
    },
    gotocar() {
      this.$router.push({ name: "newcar" });
    },
    buynow() {
      this.$axios
        .post("/vue/addCart", {
          goodId: this.goodsid,
          count: this.number,
          good: JSON.stringify(this.good)
        })
        .then(res => {
          this.$router.push({ name: "newcar" });
        });
    },
    addCollection(){
      this.$axios.post("/vue/addCollection",{
        goodId:this.goodsid,
        good:this.good
      }).then(res=>{

      })
    }
  }
};
</script>

<style lang="scss">
.goodsdetails {
  margin-top: 46px;
  width: 100%;
  .detailsimg {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .detailstitle {
    margin-top: 0.2rem;
    margin: 0.2rem;
    line-height: 0.4rem;
    font-size: 20px;
  }
  .price {
    margin-right: 0.4rem;
    line-height: 0.4rem;
    font-size: 24px;
    color: brown;
    text-align: right;
  }
  .comment {
    margin-left: 0.2rem;
    line-height: 0.3rem;
    font-size: 16px;
    color: darkblue;
    text-align: left;
  }
  .shop {
    margin-left: 0.2rem;
    line-height: 0.3rem;
    font-size: 18px;
    color: dimgray;
    text-align: left;
    margin-top: 0.1rem;
  }
  .goodsbg {
    margin-left: 0.2rem;
    line-height: 0.3rem;
    font-size: 16px;
    color: brown;
    text-align: right;
    margin-top: 0.1rem;
  }
  .goodscount {
    margin-top: 0.2rem;
    margin-bottom: 0.1rem;
  }
}
</style>

