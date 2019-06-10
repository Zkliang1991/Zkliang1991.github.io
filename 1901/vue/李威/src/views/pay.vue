<template>
  <div>
    <Header title="商品结算" :show="true"></Header>
    <Topkong></Topkong>
    <!-- 选中商品列表 -->
    <div class="top-show">
      <div class="product-catShow">
        <ul>
          <li v-for="(cargood,i) in getSelGoodsList" :key="i">
            <div class="left">
              <!-- <input type="checkbox" v-model="cargood.check"> -->
              <div class="pic">
                <img :src="cargood.good.img" alt>
              </div>
            </div>
            <div class="right">
              <div class="title">{{cargood.good.title}}</div>
              <div class="buttom">
                <span class="price">{{cargood.good.price*cargood.count | currency("￥",2)}}</span>
                <div class="count">
                  <span class="reduce">数量:{{cargood.count}}</span>
                  <!-- <input type="number" v-model="cargood.count">
                  <span class="reduce" @click="countA(i,1)" :style="cargood.count==10?styleObj:''">+</span>-->
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="add-address" v-if="show">
      <van-button size="large" plain type="primary" to="/address" text="添加收货地址"></van-button>
    </div>
    <!-- 地址列表 -->
    <div class="address-info" v-else>
      <div class="content">
        <h4>
          <span>{{name}}</span>&nbsp;&nbsp;
          <span>{{tel}}</span>
        </h4>
        <p>{{addressDetail}}</p>
        <i class="van-icon van-icon-edit van-address-item__edit">
          <!---->
        </i>
      </div>
    </div>
    <!-- 提交订单底部导航 -->
    <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit"/>
    <div class="shadow" v-show="payFlag">
      <div>
        <span class="total-price"></span>
        <img src="../assets/images/wx.png" alt>
        <img src="../assets/images/zfb.png" alt>
      </div>
    </div>
    <Buttonkong></Buttonkong>
  </div>
</template>

<script>
import Topkong from "../components/top-kong.vue";
import Buttonkong from "../components/button-kong.vue";
import { MessageBox } from "mint-ui";
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
  components: {
    Topkong,
    Buttonkong
  },
  data() {
    return {
      getSelGoodsList: [],
      total: localStorage.total * 100,
      show: true,
      name: "",
      tel: "",
      addressDetail: "",
      payFlag:false
    };
  },
  mounted() {
    this.$axios.get("vue/getSelGoodsList").then(res => {
      // console.log(res.data.result);
      this.getSelGoodsList = res.data.result;
    });
    this.$axios
      .get("vue/getMyAddress", {
        params: {
          username: localStorage.username
        }
      })
      .then(res => {
        console.log(res.data.result);
        if (res.data.result) {
          var addressinfo = res.data.result.myaddress;
          this.name = addressinfo.name;
          this.tel = addressinfo.tel;
          this.addressDetail = `${addressinfo.province}${addressinfo.city}${
            addressinfo.county
          }${addressinfo.addressDetail}`;
          this.show = false;
        } else {
          MessageBox.alert("请添加收货地址");
          // this.$router.push({name:"address"});
        }
      });
  },
  methods: {
    onSubmit() {
      // console.log(this.$route.query.total);
      this.payFlag = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.shadow {
  width: 100%;
  height: 100%;
  background-color: rgba(133, 126, 126, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  div {
    width: 74%;
    position: absolute;
    left: 0;
    top: 1rem;
    right: 0;
    bottom: 0;
    margin: auto;
    img{
      width: 100%;
    }
  }
}
.address-info {
  width: 100%;
  height: 2rem;
  border-bottom: 1px solid #ebedf0;
  border-top: 1px solid #ebedf0;
  padding: 0.3rem;
  margin-top: 1px;

  .content {
    position: relative;
    padding-right: 0.68rem;
    padding-left: 0.2rem;
    color: #0e7c5b;
    text-align: left;
    font-size: 0.3rem;
    .van-address-item__edit {
      position: absolute;
      top: 50%;
      right: 0;
      font-size: 0.4rem;
    }
  }
}
.add-address {
  width: 100%;
  text-align: center;
}
.top-show {
  .product-catShow {
    width: 100%;
    height: auto;
  }
  ul {
    width: 100%;
    height: 7.5rem;
    overflow-y: scroll;
    li {
      width: 100%;
      height: 2.4rem;
      background-color: #fff;
      padding: 10px;
      .left {
        width: 35%;
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
        width: 65%;
        height: 2.4rem;
        float: right;
        .title {
          width: 100%;
          height: 50%;
          margin-top: 0.2rem;
          font-size: 0.28rem;
          color: #0e7c5b;
        }
        .buttom {
          width: 100%;
          overflow: hidden;
          margin-top: 10px;
          .price {
            width: 40%;
            float: left;
            color: red;
            font-size: 0.35rem;
          }
          .count {
            width: 60%;
            float: left;
            font-size: 0.35rem;
            text-align: center;
            color: red;
            span {
              width: 50%;
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>


