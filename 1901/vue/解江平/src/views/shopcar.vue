<template>
  <div class="shopcar">
    <header>
      <ul>
        <li class="li1">购物车</li>
        <li class="li2">
          <a v-show="show" @click="changeshow">编辑全部</a>
          <a v-show="!show" @click="changeshow">完成</a>
        </li>
      </ul>
    </header>
    <div class="main">
      <div class="shop_title">
        <p class="shop">全选</p>
        <span class="car_tik">
          <van-checkbox class="xuan" v-model="quan" checked-color="#d90000"></van-checkbox>
        </span>
      </div>
      <div class="shop_list" v-show="empty">
        <div class="list_item move4" v-for="(good,index) in arr" :key="index">
          <div class="info">
            <div class="img">
              <img :src="good.goodFullInfo.imgs" alt>
            </div>
            <div class="des" v-show="show">
              <p class="words">{{good.goodFullInfo.des}}</p>
              <p class="price">
                <span class="le">
                  <i>￥</i>
                  {{good.goodFullInfo.newPrice}}
                </span>
                <span class="old">
                  <i>￥</i>
                  {{good.goodFullInfo.oldPrice}}
                </span>
                <span class="num">
                  x
                  <span>{{good.count}}</span>
                </span>
              </p>
            </div>
          </div>
          <div class="editor" v-show="!show">
            <div class="cal">
              <van-stepper @change="change(good.goodId,good.count)" max="10" v-model="good.count"/>
            </div>
            <button class="del" @click="delOne(index,good.goodId)">删除</button>
          </div>
          <span class="car_tik">
            <van-checkbox class="xuan" v-model="good.checked" checked-color="#d90000"></van-checkbox>
          </span>
        </div>
      </div>
      <div class="empty" v-show="!empty">
        <div class="icon"></div>
        <p>购物车是空的</p>
        <div class="wrap">
          <div class="s1">
            <a @click="goindex">逛逛首页</a>
          </div>
          <div class="s2">
            <a @click="gomycol">查看收藏</a>
          </div>
        </div>
      </div>
    </div>
    <div class="botto">
      <div class="b1">
        <span class="car_tik">
          <van-checkbox class="xuan" v-show="show" checked-color="#d90000" v-model="quan">全选</van-checkbox>
          <van-button v-show="!show" type="danger" @click="delsel">删除选中</van-button>
        </span>
        <div class="count">
          <p>
            总计￥：
            <span id="pay">{{all}}</span>
          </p>
        </div>
      </div>
      <button @click="pay">结算</button>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import { Indicator, Toast } from "mint-ui";
export default {
  data() {
    return {
      show: true,
      checked: true,
      value: 1,
      arr: [],
      all: 0,
      empty: true
    };
  },
  created() {},
  mounted() {
    this.$axios.get("/vue/getCarGoods").then(res => {
      var lists = res.data.result;
      if (lists) {
        for (let i = 0; i < lists.length; i++) {
          lists[i].checked = false;
        }
        this.arr = lists;
      }
    });
    if (this.arr.length == 0) {
      this.empty = false;
    } else {
      this.empty = true;
    }
  },
  updated() {
    this.$store.dispatch("getCarGoods", { url: "/vue/getCarGoods" });
    if (this.arr.length == 0) {
      this.empty = false;
    } else {
      this.empty = true;
    }
  },
  methods: {
    ...mapActions(["getCarGoods"]),
    changeshow() {
      this.show = !this.show;
    },
    pay() {
      var payArr = [];
      this.arr.forEach(good => {
        if (good.checked) {
          payArr.push(good._id);
        }
      });
      //  console.log(payArr);
      if (payArr.length>0) {
        this.$axios.get("/vue/order", { params: { payArr } }).then(res => {
          this.$router.push({ name: "order" });
        });
      } else {
        Toast({
          message: "请选择商品",
          duration: 800
        });
      }
    },
    delOne(i, goodId) {
      this.arr.splice(i, 1);
      this.$axios.get("/vue/delone", { params: { goodId } }).then(res => {
        this.$store.dispatch("getCarGoods", { url: "/vue/getCarGoods" });
      });
    },
    delsel() {
      var delArr = [];
      this.arr = this.arr.filter(good => {
        if (good.checked) {
          delArr.push(good.goodId);
        }
        return !good.checked;
      });
      // console.log(delArr);
      this.$axios
        .get("/vue/delselect", {
          params: {
            delArr
          }
        })
        .then(res => {
          console.log(res);
        });
    },
    change(goodId, count) {
      this.$axios
        .get("/vue/updateNum", { params: { goodId, count } })
        .then(res => {});
    },
    goindex() {
      this.$router.push({ name: "home" });
    },
    gomycol() {
      this.$router.push({ name: "mycol" });
    }
  },
  watch: {
    arr: {
      deep: true, // 深度监听
      handler(newVal) {
        // console.log(newVal);
        var all = 0;
        newVal.forEach(good => {
          if (good.checked) {
            all += good.goodFullInfo.newPrice * good.count;
          }
        });
        this.all = all;
      }
    }
  },
  computed: {
    quan: {
      get() {
        //取值
        var flag = true;
        this.arr.forEach(good => {
          if (!good.checked) {
            flag = false;
          }
        });
        return flag;
      },
      set(val) {
        // 监听
        console.log(val);
        this.arr = this.arr.map(good => {
          good.checked = val;
          return good;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.shopcar {
  width: 100%;
  height: 100%;
  header {
    width: 100%;
    height: 44px;
    ul {
      li {
        position: absolute;
        display: block;
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        color: #444;
      }
      .li1 {
        top: 0;
        text-align: center;
        width: 100%;
        z-index: 1;
        margin-left: 0;
      }
      .li2 {
        right: 12px;
        top: 0;
        font-size: 12px;
        width: auto;
        z-index: 2;
      }
    }
  }
  .main {
    width: 100%;
    .shop_title {
      width: 100%;
      position: relative;
      height: 40px;
      line-height: 40px;
      > p {
        margin-left: 38px;
        font-size: 14px;
        margin-right: 12px;
        color: #333;
        text-align: left;
      }
      .car_tik {
        position: absolute;
        top: 0;
        left: 0;
        width: 38px;
        height: 100%;
        .xuan {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .shop_list {
      margin-bottom: 2rem;
      .list_item {
        position: relative;
        height: 132px;
        width: 100%;

        .info {
          height: 132px;
          margin-left: 38px;
          border-top: 1px solid #ddd;
          .img {
            position: relative;
            width: 98px;
            height: 98px;
            margin-top: 18px;
            float: left;
            img {
              width: auto;
              height: 100%;
              margin: 0 auto;
            }
          }
          .des {
            position: relative;
            height: 98px;
            margin-top: 18px;
            margin-left: 107px;
            .words {
              height: 32px;
              font-size: 12px;
              line-height: 16px;
              margin-right: 12px;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              color: #151515;
            }
            .price {
              position: absolute;
              width: 100%;
              bottom: 0;
              left: 0;
              line-height: 16px;
              .le {
                float: left;
                margin-right: 5px;
                i {
                  font-style: normal;
                  font-size: 12px;
                }
              }
              .old {
                text-decoration: line-through;
                color: #ccc;
                font-size: 10px;
                float: left;
                i {
                  font-style: normal;
                  font-size: 12px;
                }
              }
              .num {
                float: right;
                font-size: 14px;
                color: #999;
                margin-right: 12px;
              }
            }
          }
        }
        .editor {
          position: absolute;
          right: 0;
          top: 0;
          height: 127px;
          margin-left: 150px;
          padding-right: 60px;
          .cal {
            position: relative;
            top: 50px;
            margin-right: 16px;
            border: 1px solid #ddd;
            height: 28px;
            > span {
              display: inline-block;
              font-size: 18px;
              width: 40px;
              height: 28px;
              line-height: 28px;
              text-align: center;
              color: #979797;
            }
            .minus {
              float: left;
            }
            .val {
              width: 60px;
              display: block;
              margin: 0 40px;
              border-left: 1px solid #ddd;
              border-right: 1px solid #ddd;
              height: 28px;
              line-height: 28px;
              text-align: center;
              font-size: 14px;
            }
            .add {
              position: absolute;
              right: 0;
              top: 0;
            }
          }
          .del {
            border: none;
            position: absolute;
            right: 0;
            top: 0;
            height: 127px;
            width: 60px;
            color: #fff;
            background-color: #d90000;
          }
        }
        .car_tik {
          position: absolute;
          top: 0;
          left: 0;
          width: 38px;
          height: 100%;
          .xuan {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
    .empty {
      .icon {
        margin: 0 auto;
        display: block;
        background-image: url(../assets/images/a.png);
        background-position: -89px -89px;
        background-size: 443px;
        width: 82px;
        height: 84px;
      }
      p {
        font-size: 14px;
        line-height: 20px;
        padding-top: 16px;
      }
      .wrap {
        margin-top: 60px;
        text-align: center;
        > div {
          display: inline-block;
          width: 100px;
          height: 32px;
          line-height: 32px;
          border: 1px solid #d90000;
          font-size: 12px;
          border-radius: 16px;
        }
        .s1 {
          margin-right: 18px;
          background-color: #d90000;
          color: #fff;
        }
        .s2 {
          display: inline-block;
          width: 100px;
          height: 32px;
          line-height: 32px;
          border: 1px solid #d90000;
          color: #d90000;
          font-size: 12px;
          border-radius: 16px;
        }
      }
    }
  }
  .botto {
    position: fixed;
    bottom: 0.9rem;
    left: 0;
    width: 100%;
    height: 46px;
    background-color: #fff;
    .b1 {
      padding-right: 99px;
      border-top: 1px solid #ddd;
      .car_tik {
        position: absolute;
        left: 12px;
        top: 0;
        line-height: 46px;
        font-size: 14px;
        float: left;
        display: inline-block;
        i {
          font-style: normal;
          position: absolute;
          top: 0;
          left: 100%;
          width: 40px;
          height: 100%;
        }
      }
      .count {
        float: right;
        padding-top: 6px;
        padding-right: 10px;
        text-align: right;
        font-size: 10px;
        color: #999;
        > p {
          font-size: 14px;
          span {
            font-size: 20px;
            color: red;
          }
        }
      }
    }
    > button {
      position: absolute;
      top: 0;
      right: 0;
      width: 99px;
      height: 100%;
      background-color: #d90000;
      color: #fff;
      border: none;
      font-size: 14px;
    }
  }
}
</style>
