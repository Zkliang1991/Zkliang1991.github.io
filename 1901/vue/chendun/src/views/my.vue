<template>
  <div>
    <Head title="个人中心"></Head>
    <div class="color">
      <span class="name">{{name}}</span>
    </div>
    <div>
      <van-row class="user-links">
        <van-col span="6">
          <van-icon name="pending-payment"/>待付款
        </van-col>
        <van-col span="6">
          <van-icon name="records"/>待接单
        </van-col>
        <van-col span="6">
          <van-icon name="tosend"/>待发货
        </van-col>
        <van-col span="6">
          <van-icon name="logistics"/>已发货
        </van-col>
      </van-row>

      <van-cell-group class="user-group">
        <van-cell icon="records" title="全部订单" is-link/>
      </van-cell-group>

      <van-cell-group>
        <van-cell icon="points" title="我的积分" is-link/>
        <van-cell icon="gold-coin-o" title="我的优惠券" is-link/>
        <van-cell icon="gift-o" title="我收到的礼物" is-link />
        <van-cell icon="friends-o" title="用户中心" is-link  @click="gotouserInfo"/>
        <van-cell icon="location-o" title="收货地址" @click="gotoAddr" is-link/>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";
export default {
  data() {
    return {
      fromName: "123",
      name: "",
      img: require("@/assets/images/O1CN01J-0-lubanu.jpg")
    };
  },
  methods: {
    gotouserInfo(){
      this.$router.push({ name: "userinfo" });
    },
  
    gotoAddr() {
      this.$router.push({ name: "addressList" });

    },
    gotoInfo(){
      this.$router.push({ name: "info" });
    }
  },
  created() {
    var loginname = window.localStorage.getItem("loginname");
    this.name = loginname;
    if (loginname == null) {
      this.$router.push({ name: "login" });
    }
  },

  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>
<style scoped>
.color {
  width: 100%;
  height: 2rem;
  background-color: red;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
}
.name {
  padding: 8px;
  font-size: 22px;
  margin-left: 1.5rem;
  color: #fff;
  /* margin-top: 43.2rem; */
  /* margin: 0.1rem 0px 0px 1.5rem; */
}
.user-links {
  padding: 15px 0;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
}
.van-icon {
  display: block;
  font-size: 24px;
}
</style>


