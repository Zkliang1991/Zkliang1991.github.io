<template>
  <div class="detail">
    <header>
      <span class="back" @click="()=>{$router.go(-1)}"></span>
      <span class="de">商品详情</span>
    </header>

    <div class="main_content">
      <div class="pr_carouse">
        <img :src="good.imgs" alt>
      </div>
      <div class="pr_title">
        <div class="price">
          <span class="newP">
            ￥
            <span>{{good.newPrice}}</span>
          </span>
          <span class="oldP">￥{{good.oldPrice}}</span>
          <span class="shouc" @click="changeshow(good)">
            <p class="icon" v-show="show"></p>
            <p class="icon2" v-show="!show"></p>
            <p>收藏</p>
          </span>
        </div>
      </div>
      <div class="title">
        <span>{{good.des}}</span>
      </div>
      <div class="ziyi">
        <span>自营/</span>
        {{good.title2}}
      </div>
      <div class="baoyou">
        <span class="y1">顺丰包邮</span>
        <span class="y2">
          销售
          <span>{{good.saleNum}}</span>
        </span>
      </div>
      <div class="coice">
        <span>已选</span>
        <span>白色 不锈钢 1个</span>
        <div></div>
      </div>
    </div>
    <div class="dicuss">
      <div class="dishead">
        <span class="spa1">评价(1041)</span>
        <span class="spa2"></span>
        <span class="spa3">33%</span>
        <span class="spa4">好评</span>
      </div>
      <Discuss></Discuss>
    </div>
   
    <div class="footer">
      <ul>
        <li>
          <p class="ic1"></p>
          <p class="ic2">客服</p>
        </li>
        <li class="li2" @click="goshopcar">
          <p class="ic1"></p>
          <p class="ic2">购物车</p>
          <van-tag class="tag" round type="danger">{{car_goods_num}}</van-tag>
        </li>
        <li class="li3" @click="changeshow(good)">收藏</li>
        <li class="li4" @click="joinShopc">加入购物车</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Indicator, Toast } from "mint-ui";
import { mapState, mapActions } from "vuex";
import Discuss from "../components/discuss";
export default {
  data() {
    return {
      good: {},
      show: true
    };
  },
  created() {
    //得到商品详情的数据
    var _id = this.$route.params._id;
    this.$axios.get("/vue/getGoodOne", { params: { _id } }).then(res => {
      this.good = res.data.result;
    });
    //检查是否收藏的状态
    this.$axios
      .get("/vue/checkmycol", { params: { goodId: _id } })
      .then(res => {
        if (res.data.result.length) {
          this.show = false;
        }
      });
  },
  methods: {
    joinShopc() {
      var _id = this.$route.params._id;
      this.$axios
        .post("/vue/addCart", {
          goodId: _id,
          count: 1,
          goodFullInfo: this.good
        })
        .then(res => {
          // console.log(res);
          this.$store.dispatch("getCarGoods", { url: "/vue/getCarGoods" });
        });
    },
    changeshow(goodsInfo) {
      this.show = !this.show;
      var goodId = this.$route.params._id;

      if (this.show) {
        this.$axios
          .get("/vue/cancelmycol", {
            params: {
              goodId
            }
          })
          .then(res => {
            console.log(res);
          });
      } else {
        this.$axios
          .get("/vue/mycol", {
            params: {
              goodId,
              goodsInfo
            }
          })
          .then(res => {
            console.log(res);
          });
      }
    },
    goshopcar() {
      this.$router.push({ name: "shopcar" });
    }
  },
  updated() {
    // console.log(this.shopCarInfo)
    // let nu =0;
    //   for(let i = 0;i<this.shopCarInfo.shangpin.length;i++){
    //   nu+=this.shopCarInfo.shangpin[i].count;
    // }
    // this.$store.commit("updateNum",nu);
    //   return this.shopCarInfo.num;
  },
  computed: {
    car_goods_num() {
      return this.$store.state.car_goods_num;
    }
    // ...mapState(["shopCarInfo"]),
    //  car_goods_num() {
    // let nu =this.shopCarInfo.num;
    //   for(let i = 0;i<this.shopCarInfo.shangpin.length;i++){
    //   nu+=this.shopCarInfo.shangpin[i].count;
    // }
    //   return nu;
    // }
  },
  components: {
    Discuss
  }
};
</script>
<style lang="scss" scoped>
.detail {
  width: 100%;
  height: 100%;
  text-align: left;
  header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 8;
    min-width: 320px;
    max-width: 640px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: white;
    .back {
      display: block;
      background-image: url(/img/d1.30c5a307.png);
      background-position: -149px -131.5px;
      background-size: 330.5px;
      width: 44px;
      height: 44px;
    }
    .de {
      position: absolute;
      width: 70px;
      height: 44px;
      line-height: 44px;
      top: 0;
      left: 50%;
      margin-left: -35px;
    }
  }
  .main_content {
    width: 100%;
    margin-bottom: 51px;
    margin-top: 44px;
    .pr_carouse {
      width: 90%;
      background-color: #fff;
      padding: 10px 5%;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .pr_title {
      .price {
        padding-top: 8px;
        overflow: hidden;
        span {
          display: inline-block;
        }
        .newP {
          font-size: 28px;
          color: #d90000;
          margin-right: 5px;
          font-weight: 700;
          float: left;
        }
        .oldP {
          font-size: 14px;
          color: #ccc;
          text-decoration: line-through;
          line-height: 39px;
          float: left;
        }
        .shouc {
          font-size: 10px;
          color: #999;
          text-align: center;
          float: right;
          margin-top: 5px;
          .icon {
            display: block;
            margin: 0 auto;
            background-image: url(../assets/images/d.png);
            background-position: -433.5px -22px;
            background-size: 448.5px;
            width: 14px;
            height: 14px;
          }
          .icon2 {
            display: block;
            margin: 0 auto;
            background-image: url(../assets/images/d.png);
            background-position: -433.5px -79px;
            background-size: 448.5px;
            width: 14px;
            height: 14px;
          }
        }
      }
    }
    .title {
      span {
        font-size: 16px;
        color: #666;
        line-height: 20px;
        font-weight: 700;
        white-space: normal;
        word-break: break-all;
        word-wrap: break-word;
        text-align: left;
      }
    }
    .ziyi {
      font-size: 12px;
      color: #d90000;
      padding: 2px 0;
      line-height: 20px;
      font-weight: 700;
      > span {
        color: #999;
        font-weight: 400;
      }
    }
    .baoyou {
      overflow: hidden;
      padding-top: 8px;
      .y1,
      .y2 {
        font-size: 14px;
        color: #ccc;
        line-height: 25px;
      }
      .y1 {
        float: left;
      }
      .y2 {
        float: right;
      }
    }
    .coice {
      text-align: left;
      padding-top: 5px;
      padding-bottom: 3px;
      span:first-child {
        width: 12%;
        font-size: 14px;
        color: #666;
        margin-right: 10%;
      }
      span:last-child {
        color: #333;
        font-weight: 700;
      }
      > div {
        float: right;
        background-image: url(../assets/images/a.png);
        background-position: -381px -74px;
        background-size: 443px;
        width: 32px;
        height: 32px;
        margin-top: -4px;
      }
    }
    .coupons {
      > span {
        width: 12%;
        font-size: 14px;
        color: #666;
        margin-top: 2px;
      }
      > div {
        display: inline-block;
        .mj {
          border-radius: 100px;
          font-size: 10px;
          color: #d90000;
          border: 1px solid #d90000;
          width: 15%;
          line-height: 15px;
          text-align: center;
          margin-bottom: 8px;
        }
        .des {
          font-size: 12px;
          color: #d90000;
          width: 75%;
          line-height: 17px;
          margin-left: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .pr_title,
    .title,
    .baoyou,
    .ziyi,
    .coice,
    .coupons {
      width: 94%;
      padding-left: 3%;
      padding-right: 3%;
      background-color: #fff;
      margin-bottom: 12px;
    }
  }
  .dicuss {
    width: 94%;
    padding-left: 3%;
    padding-right: 3%;
    display: inline-block;
    background-color: #fff;
    margin-bottom: 80px;
    .dishead {
      > span {
        font-size: 14px;
        color: #333;
      }
      width: 100%;
      border-bottom: 1px solid #f1f1f1;
      height: 32px;
      padding: 5px 0;
      line-height: 32px;
      position: relative;
      .sp1 {
        float: left;
      }
      .spa2 {
        display: block;
        background-image: url(../assets/images/a.png);
        background-position: -381px -74px;
        background-size: 443px;
        width: 32px;
        height: 32px;
        float: right;
      }
      .spa3 {
        color: #d90000;
        font-weight: 700;
        margin-right: 5px;
        float: right;
      }
      .spa4 {
        font-weight: 700;
        margin-right: 5px;
        float: right;
      }
    }
  }
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    z-index: 5;
    max-width: 640px;
    border: 0.5px solid #f1f1f1;
    > ul {
      li:first-child,
      .li2 {
        float: left;
        width: 13%;
        text-align: center;
        position: relative;
        .tag {
          position: absolute;
          right: 0;
          top: 0;
        }
        .ic1 {
          width: 21px;
          height: 21px;
          display: block;
          margin: 8px auto 0 auto;
          position: relative;
          background-image: url(../assets/images/a.png);
          background-position: -418px -199.5px;
          background-size: 443px;
        }
        .ic2 {
          font-size: 10px;
          color: #666;
          line-height: 20px;
          display: block;
        }
      }
      .li2 {
        .ic1 {
          background-image: url(../assets/images/d.png);
          background-position: -114px -366.5px;
          background-size: 448.5px;
        }
      }
      .li3 {
        width: 30%;
        float: right !important;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        color: #fff;
        background: #d90000;
        border-top: 0.5px solid #d90000;
      }
      .li4 {
        width: 30%;
        float: right !important;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        color: #666;
        border-left: 1px solid #f1f1f1;
      }
    }
  }
}
</style>
