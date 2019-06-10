<template>
  <div>

    <Head
      title="个人中心"
      :show="true"
    ></Head>
    <div
      class="header_con"
      id="myHeader"
    >
      <div class="user_info">
        <div class="avatar_wrap">
          <div class="image_info"></div>
        </div>
        <h2 @click="gotoLogin">{{loginname}}</h2>
        <mt-button
          v-show="flag"
          type="primary"
          class="existLogin"
          size="small"
          @click="existLogin"
        >注销</mt-button>
      </div>
    </div>
    <img
      class="user-poster"
      src="https://img4.yesmyimg.com/2019/4/22/20190522101541148.jpg"
    >
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell
        icon="records"
        title="全部订单"
        @click="gotomycar"
        is-link
      />
    </van-cell-group>

    <van-cell-group>
      <van-cell
        icon="points"
        title="我的积分"
        is-link
      />
      <!-- <van-cell icon="gold-coin-o" title="我的优惠券" is-link/> -->
      <van-coupon-cell
        icon="gold-coin-o"
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />

      <van-popup
        v-model="showList"
        position="bottom"
      >
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>

      <van-cell
        icon="gift-o"
        title="地址管理"
        @click="gotoaddress"
        is-link
      />
    </van-cell-group>
  </div>
</template>


<script>
import { Row, Col, Icon, Cell, CellGroup, Dialog } from "vant";
import { Indicator, Toast } from "mint-ui";
export default {
  i18n: {
    "zh-CN": {
      coupon: {
        name: "优惠券名称",
        reason: "优惠券不可用原因",
        description: "描述信息"
      },
      exchange: "兑换成功"
    },
    "en-US": {
      coupon: {
        name: "Coupon name",
        reason: "Coupon unavailable reason",
        description: "Description"
      },
      exchange: "Success"
    }
  },
  data() {
    return {
      flag: false,

      showList: false,
      chosenCoupon: -1,
      exchangedCoupons: []
    };
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  computed: {
    loginname() {
      if (window.localStorage.getItem("loginName")) {
        this.flag = true;
        return "您好:" + window.localStorage.getItem("loginName");
      } else {
        return "未登录,请登录";
      }
    },
    coupons() {
      return [this.coupon, this.discountCoupon, ...this.exchangedCoupons];
    },
    disabledCoupons() {
      return [this.disabledCoupon, this.disabledDiscountCoupon];
    },
    coupon() {
      return {
        id: 1,
        condition: "无使用门槛\n最多优惠12元",
        reason: "",
        value: 150,
        // name: this.$t('coupon.name'),
        // description: this.$t('coupon.description'),
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: "1.5",
        unitDesc: "元"
      };
    },
    discountCoupon() {
      return {
        ...this.coupon,
        id: 2,
        value: 12,
        valueDesc: "8.8",
        unitDesc: "折"
      };
    },
    disabledCoupon() {
      return {
        ...this.coupon,
        id: 3
        // reason: this.$t('coupon.reason')
      };
    },
    disabledDiscountCoupon() {
      return {
        ...this.discountCoupon,
        valueDesc: "1",
        unitDesc: "折",
        id: 4
        // reason: this.$t('coupon.reason')
      };
    }
  },
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login" });
    },
    existLogin() {
      Dialog.confirm({
        title: "提醒",
        message: "你确定要注销吗?"
      }).then(() => {
        window.localStorage.removeItem("loginName");
        this.gotoLogin();
      }).catch(()=>{

      });
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange() {
      // this.$toast(this.$t('exchange'));
      this.exchangedCoupons.push({
        ...this.coupon,
        id: this.randomId()
      });
    },
    randomId(max = 999999) {
      return Math.floor(Math.random() * max) + 1;
    },
    gotoaddress() {
      this.$router.push({ name: "addresslist" });
    },
    gotomycar() {
      this.$router.push({ name: "cart" });
    }
  },
  mounted() {}
};
</script>


<style lang="scss">
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.header_con {
  padding-top: 0.8rem;
  width: 100%;
  height: 1.6rem;
}
.user_info {
  padding: 0 0.3rem;
  background: #f55;
  overflow: hidden;
  position: relative;
}
.existLogin {
  position: absolute !important;
  right: 0.5rem;
  top: 0.4rem;
}
.avatar_wrap {
  line-height: 1.2rem;
  width: 1.2rem;
  height: 1.2rem;
  padding: 0.2rem 0.2rem;
  float: left;
}
.image_info {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #000;
}
h2 {
  float: left;
  line-height: 1.6rem;
}
mt-button {
  line-height: 1.6rem;
}

.demo-coupon-list {
  .van-popup {
    height: 100%;
  }
}
</style>
