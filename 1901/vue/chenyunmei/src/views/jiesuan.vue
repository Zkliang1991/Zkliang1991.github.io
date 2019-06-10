
<template>
  <div class="jiesuan">
    <Head title="结算"></Head>
    <div class="xinxi">
      <router-link :to="{name:'addresslist'}">
        <span>收货人:</span>
        <span class="username">zhangqiang</span>
        <span>15862813837</span>
        <p>
          <span>收货地址:</span>
          <span class="userzhuzi">浙江省杭州市滨江区江南大道 15 号</span>
        </p>
      </router-link>
    </div>

    <div v-for="(item ,index) in goods" :key="index">
      <van-card
        :num="item.count" e4
        :price="item.good.goodsprice"
        :title="item.good.goodname"
        :thumb="item.good.goodimg"
      />
    </div>
    <van-cell title="配送方式" is-link value="快递 免邮"/>
    <van-cell title="配送方式" is-link value="快递 免邮"/>
    <van-cell title="运费险" is-link value="确认收获前退货可赔"/>
    <van-submit-bar button-text="提交订单" @submit="getshop"/>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
import { Dialog } from "vant";
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checkedGoods: [],
      goods: [],
      chosenAddressId: "1",
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ],
      checked: true,
      goodId: this.$route.params.shop_id
    };
  },
  methods: {
    formatPrice(price) {
      return price.toFixed(2);
    },
    onSubmit() {
      console.log(this.checkedGoods);
      this.$router.push({
        name: "jiesuan",
        params: { shop_id: this.checkedGoods }
      });
    },
    getshop() {},
    onClickButton() {},
    onClickLink() {},
    onAdd() {
      // this.$toast(this.$t("add"));
    },
    onSubmit() {},
    onEdit(item, index) {
      // this.$toast(`${this.$t("edit")}:${index}`);
    }
  },
  created() {
    var username = window.sessionStorage.userInfo;
    var array = [];
    for (var i in this.$route.params.shop_id) {
      array.push(this.$route.params.shop_id[i]);
    }
    console.log(array);
    if (array.length) {
      this.$axios
        .get("/vue/cars", {
          params: { array }
        })
        .then(res => {
          this.goods = res.data.result;
          // console.log(this.goods);
        });
    } else {
      Dialog.alert({
        title: "提醒",
        message: "亲，您还未未选择需要购买的商品呢，即将返回上一级"
      }).then(() => {
        this.$router.go(-1);
      });
    }
  }
};
</script>

<style lang="scss">
.jiesuan {
  padding-bottom: 2rem;
}
.demo-submit-bar {
  .van-submit-bar {
    position: relative;
  }
  .edit-address {
    color: blue;
  }
  .van-checkbox {
    margin-left: 15px;
  }
}
.van-submit-bar__tip {
  background-color: rgba(0, 0, 0, 0) !important;
}
.van-checkbox__icon {
  margin-left: 20px !important;
}
.van-submit-bar__bar {
  background-color: aliceblue;
}
.top {
  padding-top: 1rem;
  color: black !important;
}

.xinxi {
  padding-top: 1.1rem;
  text-align: left;
  padding-left: 0.2rem;
  background-color: rgb(241, 241, 238);
  padding-bottom: 0.3rem;
}
.xinxi span {
  margin: 0.2rem;
}
.xinxi span.username {
  margin-left: 0;
}
.xinxi span.userzhuzi {
  margin-left: 0;
}
.xinxi p {
  margin-top: 0.1rem;
}
.van-cell__title {
  text-align: left;
}
</style>