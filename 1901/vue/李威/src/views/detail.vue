<template>
  <div style="background: #F1F1F1;
    color: #333;" v-if="flag">
    <Header :title="goodsinfo.title" :show="true"></Header>
    <Topkong></Topkong>
    <Swiper :istyle="dstyle" :imgs="goodsinfoimgs" :autoplayflag="false" arrowtype="always"></Swiper>
    <div class="Hodgepodge">
      <!-- 价格 -->
      <div class="Hodgepodge_money">
        <span class="nowprice">{{goodsinfo.price*1 | currency("￥",2)}}</span>
        <span class="oldprice">{{goodsinfo.oldprice*1 | currency("￥")}}</span>
        <span class="salenumber">
          已售:
          <span>{{goodsinfo.sale_good}}</span>件
        </span>
      </div>
      <!-- 信息 -->
      <div class="complex">
        <!-- 包邮 -->
        <div class="label">
          <span style="border:1px solid #ff6262;background:#ffffff;color:#ff6262">好货当日发</span>
          <span style="border:1px solid #ffffff;background:#ff0000;color:#ffffff">顺丰包邮</span>
        </div>
        <!-- 标题 -->
        <div class="cont_title">
          <p>{{goodsinfo.title}}</p>
        </div>
        <!-- 推广 -->
        <div class="Promotion">
          <p>一款轻质、易于打包的防水应急硬壳夹克 外观简洁 可应对各种徒步远足时的突变天气</p>
        </div>
      </div>
    </div>
    <!-- 购买数量 -->
    <div class="count">
      <span class="num">购买数量:</span>
      <div class="control">
        <span class="reduce" @click="countR">-</span>
        <input readonly="readonly" type="number" v-model="number">
        <span class="add" @click="countA">+</span>
      </div>
    </div>
    <div class="Guarantee">
      <img src="@/assets/images/baozhengshu.png" alt>
    </div>
    <!-- 商品评论 -->
    <div class="product_comment">
      <div class="product_comment_title">
        <span>商品评论</span>
      </div>
      <div class="product_comment_top">
        <div class="product_comment_icon">
          <img src alt>
        </div>
        <span class="product_comment_name">匿名</span>
        <span>金牌会员</span>
        <span class="product_comment_date">
          <span>19-04-19 00:00</span>
        </span>
      </div>
      <div class="product_comment_cont">
        <span>第二次购了，五星好评 质量非常好，与卖家描述的完全一致，非常满意,真的很喜欢。</span>
      </div>
    </div>
    <Buttonkong></Buttonkong>
    <div class="footer">
      <div class="left">
        <a>
          <img src="@/assets/images/waiter.png" alt>
          <h3>客服</h3>
        </a>
        <a>
          <img src="@/assets/images/star.png" alt>
          <h3>收藏</h3>
        </a>
        <a class="cart" @click="gotocart">
          <img src="@/assets/images/shopping_cart.png" alt>
          <h3>购物车</h3>
          <span style="display:block;" class="tip">{{carNum}}</span>
        </a>
      </div>
      <div class="right">
        <mt-button type="primary" @click="addToCar">加入购物车</mt-button>
        <mt-button type="danger" @click="addToCar">立即购买</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "../components/swiper.vue";
import Topkong from "../components/top-kong.vue";
import Buttonkong from "../components/button-kong.vue";

import { Message } from "iview";
import { MessageBox } from "mint-ui";
import { Indicator, Toast } from "mint-ui";
export default {
  data() {
    return {
      goodsinfo: [], //当前商品所有信息
      goodsinfoimgs: [],
      dstyle: { width: "100%", height: "7.2rem" },
      number: 1,
      flag: false
    };
  },
  computed: {
    //从store中取值
    carNum() {
      return this.$store.state.carNum;
    }
  },
  methods: {
    gotocart() {
      this.$router.push({ name: "shoppingcar" });
    },
    countR() {
      this.number--;
      if (this.number < 1) {
        this.number = 1;
      }
    },
    countA() {
      this.number++;
      if (this.number > 5) {
        this.$Message.config({
          top: 280,
          duration: 2
        });
        this.$Message.error("亲,库存有限数量不能超过5件哦~~");
        this.number = 5;
      }
    },
    addToCar() {
      if (localStorage.username) {
        this.$store.dispatch("carNumAdd", this.number);
        //有用户名跳购物车
        // 数量  goodId  username
        MessageBox.confirm("加入商品成功,确定前往购物车?").then(action => {
          this.$axios
            .post("vue/addshoppingcar", {
              goodId: this.goodsinfo._id,
              count: this.number,
              username: localStorage.username,
              good: JSON.stringify(this.goodsinfo)
            })
            .then(res => {
              console.log(res.data);
              if (res.data) {
                this.$router.push({ name: "shoppingcar" });
              }
            });
        });
      } else {
        MessageBox.confirm("您还没有登录,是否前往登录页面?").then(action => {
          this.$router.push({ name: "login" });
        });
      }
    }
  },
  filters: {
    currency(value, type, n) {
      if (!value) {
        return value;
      }
      type = type || "¥";
      n = n || 2;
      var num = value.toFixed(n);
      var n1 = num.split(".")[0]; //整数
      var n2 = num.split(".")[1]; //小数
      n1 = n1.split("").reverse();
      n1 = n1.map((item, index) => {
        if (index != 0 && index % 3 == 0) {
          item = item + ",";
        }
        return item;
      });
      n1 = n1.reverse().join("");
      return type + n1 + "." + n2;
    }
  },
  components: {
    Swiper,
    Topkong,
    Buttonkong
  },
  created() {
    Indicator.open({
      text: "加载中...",
      spinnerType: "double-bounce"
    });
    var goodsId = this.$route.params.goodsId;
    this.$axios
      .get("vue/goodsinfo", {
        params: {
          goodsId
        }
      })
      .then(res => {
        this.$nextTick(() => {
          console.log(res.data.result);
          Indicator.close(); //请求成功后关闭弹框
          Toast({
            message: "商品加载成功",
            iconClass: "icon iconfont icon-web-icon-",
            duration: 1500
          });
          this.goodsinfo = res.data.result;
          this.goodsinfoimgs = [
            this.goodsinfo.lithumba1,
            this.goodsinfo.lithumba2,
            this.goodsinfo.lithumba3
          ];
          this.flag = true;
        });
      });
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background: #fff;
  box-shadow: 0 -1px 0.12rem rgba(0, 0, 0, 0.1);
  border-top: 1px solid #eee;
  display: block;
  height: 1rem;
  width: 100%;
  padding: 0 !important;
  position: fixed;
  bottom: 0;
  .left {
    float: left;
    height: 100%;
    text-align: center;
    display: block;
    width: 41%;
    padding: 2.6% 1%;
    a {
      display: block;
      color: #333;
      float: left;
      line-height: 1;
      width: 33%;
      margin: auto;
      img {
        width: 0.4rem;
        display: inline-block;
      }
    }
    a.cart {
      .tip {
        position: relative;
        right: -0.56rem;
        top: -0.84rem;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background-color: red;
        text-align: center;
        line-height: 0.4rem;
        color: white;
      }
    }
  }
  .right {
    float: right;
    margin-top: 0.08rem;
  }
}
.count {
  background: #fff;
  color: #232326;
  width: 100%;
  padding: 0.28rem;
  margin-top: 0.14rem;
  font-size: 0.32rem;
  overflow: hidden;
  .num {
    float: left;
  }
  .control {
    float: right;
    width: 30%;
    text-align: center;
    span {
      width: 33.3%;
      display: inline-block;
      border: 1px solid #ddd;
    }
    input {
      width: 33.3%;
      border: 1px solid #ddd;
      text-align: center;
      color: red;
    }
  }
}
.product_comment {
  background: #fff;
  color: #232326;
  width: 100%;
  padding: 0 0.28rem 0.3rem;
  box-sizing: border-box;
  margin-top: 0.14rem;
  .product_comment_title {
    font-size: 0.28rem;
    color: #000;
    font-weight: 600;
    line-height: 1.15rem;
    position: relative;
  }
  .product_comment_top {
    overflow: hidden;
    .product_comment_icon {
      height: 0.54rem;
      width: 0.54rem;
      border-radius: 50%;
      border: 1px solid #e7e7e7;
      float: left;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      float: left;
      line-height: 0.54rem;
      font-size: 0.24rem;
      color: #232326;
    }
    .product_comment_name {
      padding-left: 0.27rem;
      padding-right: 10px;
    }
    .product_comment_date {
      float: right;
      line-height: 0.54rem;
      font-size: 0.24rem;
      color: #232326;
    }
  }
  .product_comment_cont {
    line-height: 0.54rem;
    font-size: 0.28rem;
    color: #232326;
    padding-top: 0.12rem;
  }
}
.Guarantee {
  width: 100%;
  padding: 0.28rem;
  line-height: 0.9rem;
  margin-top: 0.14rem;
  background: #fff;
  img {
    width: 100%;
    vertical-align: middle;
  }
}
.Hodgepodge {
  padding: 0 0.28rem 0.2rem 0.28rem;
  background: #fff;
  .Hodgepodge_money {
    height: 0.89rem;
    line-height: 0.89rem;
    position: relative;
    .nowprice {
      font-size: 0.38rem;
      color: #000;
      letter-spacing: -1px;
      padding-left: 0.35rem;
    }
    .oldprice {
      font-size: 0.22rem;
      color: #666;
      margin-left: 0.37rem;
      text-decoration: line-through;
    }
    .salenumber {
      float: right;
      span {
        color: brown;
      }
    }
  }
  .complex {
    width: 100%;
    background: #f8f8f8;
    padding: 0.12rem 0;
    .label {
      padding-bottom: 0.12rem;
      padding-left: 0.1rem;
      span {
        display: inline-block;
        padding: 0 0.1rem;
        line-height: 0.26rem;
        border: 1px solid #51ad8b;
        font-size: 0.2rem;
        color: #51ad8b;
        margin-right: 0.1rem;
        border-radius: 0.12rem;
        padding-top: 1px;
      }
    }
    .cont_title {
      font-size: 0.28rem;
      color: #000;
      font-weight: bold;
      line-height: 0.36rem;
      padding-left: 0.1rem;
    }
    .Promotion {
      height: auto;
      font-size: 0.22rem;
      color: #999;
      line-height: 0.41rem;
      padding-bottom: 0.16rem;
      padding-left: 0.1rem;
    }
  }
}
</style>
