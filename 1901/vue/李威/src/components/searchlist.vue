<template>
  <div style="margin-top:0.8rem;">
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <div class="products">
        <ul class="row">
          <li v-for="(good,i) in goods" :key="i" class="shake">
            <router-link :to="{name:'detail',params:{goodsId:good._id}}">
              <div class="imgDiv">
                <a>
                  <img :src="good.img">
                </a>
              </div>
            </router-link>
            <div class="name">
              <a>{{good.title}}</a>
            </div>
            <div class="price">
              {{good.price*1 | currency("￥",2)}}
              <del
                class="mktprice"
              >{{good.oldprice*1 | currency("￥",2)}}</del>
            </div>
            <div class="yrow">
              <a class="a1">好货当日发</a>
              <a class="a2">顺丰包邮</a>
            </div>
          </li>
        </ul>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  props: {
    goods: {
      type: Array,
      required: true //必传
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
  methods: {
    loadTop() {
      console.log("下拉刷新");
      setTimeout(() => {
        this.goods = this.goods.reverse();
        this.$refs.loadmore.onTopLoaded();
        Toast({
          message: "下拉刷新-成功",
          duration: 500
        });
      }, 1500);
    }
  },
};
</script>

<style lang="scss" scoped>
.products {
  padding: 0 0.2rem;
  .row {
    li {
      height: 2.6rem;
      position: relative;
      overflow: visible;
      border-bottom: 1px solid #f3f3f3;
      margin: 0.18rem 0 0 2.6rem;
      padding: 0;
      line-height: 1.3;
      .imgDiv {
        position: absolute;
        left: -2.6rem;
        top: 0;
        a {
          text-decoration: none;
          outline: none;
          color: #333;
          img {
            height: 2.4rem;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 0.1rem;
            width: 2.4rem;
          }
        }
      }
      .name {
        font-size: 0.28rem;
        line-height: 1.5;
        height: 0.8rem;
        overflow: hidden;
        word-break: break-all;
        a {
          text-decoration: none;
          outline: none;
          color: #333;
        }
      }
      .price {
        font-size: 0.36rem;
        line-height: 1.5;
        color: #f23030;
        padding: 0.1rem 0;
        .mktprice {
          font-size: 0.24rem;
          font-weight: normal;
          color: #aaa;
        }
      }
      .yrow {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        .a1 {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          float: left;
          border-radius: 0.08rem;
          display: block;
          font-size: 0.26rem;
          padding: 0.02rem 0.08rem;
          margin-right: 0.08rem;
        }
        .a2 {
          border: 1px solid #ffffff;
          color: #ffffff;
          background: #ff0000;
          float: left;
          border-radius: 0.08rem;
          display: block;
          font-size: 0.26rem;
          padding: 0.02rem 0.08rem;
          margin-right: 0.08rem;
        }
      }
    }
  }
}
</style>


