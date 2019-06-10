<template>
  <div class="op">
    <myheader dizhi="填写订单"></myheader>
    <div class="content">
      <div class="area" @click="goaddress">
        <div class="lines_in">
          <div v-show="flag">
            <h6>
              <span>{{name}}</span>
              <em>{{tel}}</em>
            </h6>
            <p>
              <span class="province">{{address}}</span>
              
            </p>
          </div>
          <div v-show="!flag">添加地址</div>
          <span class="icon1"></span>
          <span class="icon2"></span>
        </div>
      </div>
      <div class="item" v-for="(good,i) in ordergoods" :key="i">
        <a>
          <div class="goodsimg">
            <img :src="good.goodFullInfo.imgs" alt>
          </div>
          <div class="goods_info">
            <p class="des">{{good.goodFullInfo.des}}</p>
            <p class="price">
              <b>
                <i>￥</i>
                {{good.goodFullInfo.newPrice}}
              </b>
              <em>
                x
                <i>{{good.count}}</i>
              </em>
            </p>
            <span class="tui">七天退换</span>
          </div>
        </a>
      </div>
      <div class="liuyan">
        <div class="f1">留言</div>
        <div class="f2">
          <input type="text" placeholder="请填写....">
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="normal">
        <p>
          实付款
          <span>
            ￥
            <em>{{all}}</em>
          </span>
        </p>
      </div>
      <div class="submit" @click="submit">提交订单</div>
    </div>
  </div>
</template>

<script>
import { Indicator, Toast } from "mint-ui";
import myheader from "../components/commonheader.vue";
export default {
  components: {
    myheader
  },
  data() {
    return {
      ordergoods: [],
      all: 0,
      flag: false,
      arr: {},
      name:"",
      tel:"",
      address:""
    };
  },
  mounted() {
    this.$axios.get("/vue/chaorder").then(res => {
      this.ordergoods = res.data.result;
    });


    this.arr = this.list[this.chosenAddressId - 1];
    if(this.arr){
      this.flag = true;
      this.name = this.arr.name;
      this.tel = this.arr.tel;
      this.address = this.arr.address;
    }
   
  },
  methods: {
    goaddress() {
      this.flag = true;
      this.$router.push({ name: "address2" });
    },
    submit() {
      Toast({
        message: "付款成功",
        iconClass: "icon icon-success"
      });
    }
  },
  watch: {
    ordergoods: {
      deep: true, // 深度监听
      handler(newVal) {
        // console.log(newVal);
        var all = 0;
        newVal.forEach(good => {
          all += good.goodFullInfo.newPrice * good.count;
        });
        this.all = all;
      }
    }
  },
  computed: {
    list() {
      return this.$store.state.list;
    },
    chosenAddressId() {
      return this.$store.state.chosenAddressId;
    }
  }
};
</script>

<style lang="scss" scoped>
.op {
  background: #f1f1f1;
  height: 100%;
  .content {
    width: 100%;
    margin-bottom: 100px;
    .area {
      position: relative;
      background-color: #fff;
      margin: 12px 10px 0 10px;
      z-index: 10;
      border-radius: 8px;
      .lines_in {
        margin-left: 35px;
        padding-top: 12px;
        padding-bottom: 12px;
        position: relative;
        text-align: left;
        > div {
          > h6 {
            color: #333;
            font-size: 16px;
            line-height: 19px;
            margin-bottom: 2px;
            > span {
            }
            > em {
            }
          }
          > p {
            color: #999;
            font-size: 12px;
            line-height: 18px;
            padding-right: 30px;
            overflow: hidden;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
            display: -webkit-box;
          }
        }
        .icon1 {
          position: absolute;
          top: 50%;
          left: -23px;
          margin-top: -8px;
          background-image: url(../assets/images/d.png);
          background-position: -290px -366.5px;
          background-size: 448.5px;
          width: 20px;
          height: 20px;
        }
        .icon2 {
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: -8px;
          background-image: url(../assets/images/d.png);
          background-position: -433.5px -98px;
          background-size: 448.5px;
          width: 12px;
          height: 16px;
        }
      }
    }
    .item {
      position: relative;
      background-color: #fff;
      margin: 12px 10px 0 10px;
      z-index: 10;
      border-radius: 8px;
      > a {
        display: flex;
        margin: 0 12px;
        box-shadow: inset 0 0 0 0 #ededed;
        padding: 12px 0 20px;
        border-bottom: 1px solid #ededed;
        .goodsimg {
          width: 90px;
          height: 90px;
          flex: 0 0 90px;
          margin-right: 13px;
          overflow: hidden;
          text-align: center;
          > img {
            width: 100%;
          }
        }
        .goods_info {
          flex: 1;
          .des {
            overflow: hidden;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            word-break: break-all;
            display: -webkit-box;
            font-size: 14px;
            color: #333;
            line-height: 16px;
            font-weight: 700;
          }
          .price {
            margin-top: 32px;
            overflow: hidden;
            > b {
              font-size: 20px;
              color: #000;
              line-height: 20px;
              font-family: DIN-Bold;
              vertical-align: bottom;
              float: left;
              > i {
                margin-right: 5px;
                font-size: 12px;
              }
            }
            > em {
              float: right;
              font-size: 14px;
              color: #666;
              line-height: 20px;
            }
          }
          .tui {
            font-size: 10px;
            color: #b3b3b3;
            line-height: 10px;
            border-radius: 100px;
            border: 1px solid #b3b3b3;
            padding: 2px 4px;
            float: left;
            margin-top: 10px;
          }
        }
      }
    }
    .liuyan {
      position: relative;
      background-color: #fff;
      margin: 12px 10px 0 10px;
      z-index: 10;
      border-radius: 8px;
      padding-top: 16px;
      padding-bottom: 30px;
      margin-left: 12px;
      margin-right: 12px;
      padding-left: 10px;
      > div {
        float: left;
      }
      .f1 {
        font-size: 14px;
        line-height: 17px;
        color: #333;
        font-weight: 700;
      }
      .f2 {
        margin-left: 40px;
        input {
          display: block;
          font-size: 14px;
          line-height: 17px;
          height: 17px;
          color: #333;
          border: none;
          vertical-align: top;
          width: 100%;
        }
      }
    }
  }
  .footer {
    position: fixed;
    z-index: 11;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 -3px 4px 0 rgba(131, 131, 131, 0.16);
    .normal {
      line-height: 64px;
      font-size: 12px;
      color: #333;
      margin-left: 10px;
      float: left;
      > p {
        > span {
          display: inline-block;
          color: #d90000;
          font-weight: 700;
          font-size: 18px;
          vertical-align: top;
          line-height: 64px;
          > em {
            font-style: normal;
          }
        }
      }
    }
    .submit {
      width: 110px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      background-color: #cda97b;
      font-size: 14px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      margin: 12px 10px;
      float: right;
    }
  }
}
</style>
