<template>
  <div class="main">
    <Header title="商品购物车" :show="true"></Header>
    <Topkong></Topkong>
    <!-- ************************* -->
    <div class="top-show" v-if="flag">
      <!--购物车商品08-->
      <div class="product-catShow">
        <div class="yrow">
          <span class="fl" style="margin-top: 0.4em;margin-left: 1em;font-size: 1.5em;">山脉户外官方商城</span>
          <span
            class="fr"
            id="catShow_del_modle"
            style="color:#333;font-size:0.3rem;line-height:0.88rem;padding:0 0.2rem;"
          >编辑</span>
        </div>
        <ul>
          <li v-for="(cargood,i) in cargoodslist" :key="i">
            <div class="left">
              <input type="checkbox" v-model="cargood.check">
              <div class="pic">
                <img :src="cargood.good.img" alt>
              </div>
            </div>
            <div class="right">
              <div class="title">{{cargood.good.title}}</div>
              <div class="buttom">
                <span class="price">{{cargood.good.price*cargood.count | currency("￥",2)}}</span>
                <div class="count">
                  <span class="reduce" @click="countR(i,-1)" :style="cargood.count==1?styleObj:''">-</span>
                  <input type="number" v-model="cargood.count">
                  <span class="reduce" @click="countA(i,1)" :style="cargood.count==10?styleObj:''">+</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="top-kong" v-else>
      <router-link :to="{path:'/index/classify'}">
        <span>去逛逛</span>
      </router-link>
    </div>
    <!-- ************************* -->
    <div class="jiesuan" v-if="flag">
      <p>
        <input type="checkbox" id="quan" v-model="quan">
        <label for="quan">全选</label>
      </p>
      <p class="total">
        总计:
        <span>{{total | currency("￥",2)}}</span>
      </p>
      <P>
        数量:
        <span>{{selCount}}</span>
      </P>
      <p class="delseleted" @click="deleteCheck()">删除选中</p>
      <p class="js" @click="gotoPay">去结算</p>
    </div>
    <Buttonkong></Buttonkong>
  </div>
</template>

<script>
import Topkong from "../components/top-kong.vue";
import Buttonkong from "../components/button-kong.vue";
import { Toast } from "mint-ui";
export default {
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
  computed: {
    quan: {
      get() {
        //取值
        var flag = true;
        this.cargoodslist.forEach(cargood => {
          if (!cargood.check) {
            flag = false;
          }
        });
        return flag;
      },
      set(val) {
        //监听   全选反选
        console.log(val);
        this.cargoodslist = this.cargoodslist.map(cargood => {
          cargood.check = val;
          return cargood;
        });
      }
    },
    total: {
      get() {
        var total = 0;
        this.cargoodslist.map(cargood => {
          if (cargood.check) {
            total += cargood.count * cargood.good.price;
          }
        });
        return total;
      },
      set() {}
    },
    selCount() {
      //取值
      var seltotal = 0;
      this.cargoodslist.forEach(cargood => {
        if (cargood.check) {
          seltotal += cargood.count * 1;
        }
      });
      return seltotal;
    }
  },
  components: {
    Topkong,
    Buttonkong
  },
  data() {
    return {
      cargoodslist: [],
      buy_num: "",
      all: 0,
      flag: false,
      styleObj: { "background-color": "#928989" }
    };
  },
  methods: {
    deleteCheck() {
      this.cargoodslist = this.cargoodslist.filter(cargood => {
        return !cargood.check;
      });
    },
    gotoPay() {
      var arr = this.cargoodslist.filter(cargood => {
        return cargood.check;
      });
      console.log(arr);
      if (arr.length != 0) {
        //将选中商品集合发送后台
        this.$axios
          .post("vue/selectedGoods", {
            arr
          })
          .then(res => {
            // console.log(res.data);
            this.$router.push({ name: "pay" });
            localStorage.total = this.total;
          });
      } else {
        Toast("请勾选需要结算的商品");
      }
    },
    countA(index, n) {
      //count++
      if (this.cargoodslist[index].count < 10) {
        this.$axios
          .post("vue/changeCarCount", {
            username: localStorage.username,
            goodId: this.cargoodslist[index].goodId,
            n
          })
          .then(res => {
            console.log(res.data.result);
            this.cargoodslist[index].count++;
          });
      }
    },
    countR(index, n) {
      //count--
      if (this.cargoodslist[index].count > 1) {
        this.$axios
          .post("vue/changeCarCount", {
            username: localStorage.username,
            goodId: this.cargoodslist[index].goodId,
            n
          })
          .then(res => {
            console.log(res.data.result);
            this.cargoodslist[index].count--;
          });
      }
    }
  },
  mounted() {
    this.$axios
      .get("vue/getcarlist", {
        params: {
          username: localStorage.username
        }
      })
      .then(res => {
        console.log(res.data.result);
        if (res.data.result.length) {
          this.cargoodslist = res.data.result;
          this.flag = true;
        }
      });
  }
};
</script>


<style lang="scss" scoped>
.main {
  background: #f1f1f2;
  font-family: "华文细黑", Arial;
  color: #333;
  font-size: 0.26rem;
  line-height: 1.5;
  word-wrap: break-word;
  .top-show {
    .product-catShow {
      width: 100%;
      height: auto;
      .yrow {
        overflow: hidden;
        span.fl {
          float: left;
        }
        span.fr {
          float: right;
        }
      }
    }
    ul {
      width: 100%;
      height: auto;
      margin-bottom: 2rem;
      li {
        width: 100%;
        height: 2.4rem;
        background-color: #fff;
        margin-bottom: 0.2rem;
        .left {
          width: 45%;
          height: 2.4rem;
          float: left;
          input {
            width: 0.32rem;
            height: 0.32rem;
            float: left;
            margin-top: 1.04rem;
            margin-left: 0.24rem;
          }
          .pic {
            width: 2rem;
            height: 2rem;
            float: right;
            margin-top: 0.2rem;
            margin-right: 0.26rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .right {
          width: 55%;
          height: 2.4rem;
          float: right;
          .title {
            width: 100%;
            height: 50%;
            margin-top: 0.2rem;
          }
          .buttom {
            width: 100%;
            height: 50%;
            .price {
              width: 40%;
              float: left;
              color: red;
              font-size: 0.28rem;
            }
            .count {
              width: 60%;
              float: left;
              font-size: 0.32rem;
              text-align: center;
              span {
                width: 25%;
                display: inline-block;
                border: 1px solid #ccc;
              }
              input {
                width: 30%;
                border: 1px solid #ccc;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
  .top-kong {
    width: 100%;
    height: auto;
    background: #f1f1f2;
    font-size: 0.32rem;
    text-align: center;
    line-height: 20;
    background: url(../assets/images/kong.png) no-repeat;
    background-size: 100% 100%;
    span {
      position: relative;
      top: 4rem;
      left: 0;
      padding: 0.16rem;
      border-radius: 10%;
      border: 1px solid #ccc;
      background-color: #0e7c5b;
      color: #f1f1f2;
    }
  }
  .jiesuan {
    width: 100%;
    height: 1.04rem;
    position: fixed;
    left: 0;
    bottom: 1.16rem;
    border: 1px solid #ccc;
    background-color: #fff;
    p {
      width: 17.5%;
      float: left;
      text-align: center;
      line-height: 1rem;
      span {
        font-size: 0.3rem;
        color: red;
      }
    }
    p.total {
      width: 30%;
    }
    p.delseleted {
      background-color: green;
      color: white;
    }
    p.js {
      background-color: red;
      font-size: 0.28rem;
      color: white;
    }
  }
}
</style>

