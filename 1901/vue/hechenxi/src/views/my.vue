<template>
  <div>
    <Head title="个人中心"></Head>
    <van-button round type="danger" size="large" @click="gotoLogin" v-if="flag">登录</van-button>
    <van-notice-bar :text="'欢迎登录'+username" left-icon="volume-o" v-else/>
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
      <van-cell icon="gift-o" title="我收到的礼物" is-link/>
      <van-cell icon="location" title="地址管理" @click='gotoAddressList' is-link />
      <van-cell icon="fail" title="注销" is-link @click="zhuxiao"/>
    </van-cell-group>
  </div>
</template>

<script>
// import { Row, Col, Icon, Cell, CellGroup } from "vant";
export default {
  // components: {
  //   [Row.name]: Row,
  //   [Col.name]: Col,
  //   [Icon.name]: Icon,
  //   [Cell.name]: Cell,
  //   [CellGroup.name]: CellGroup
  // },
  data() {
    return {
      token: "",
      username: "",
      flag: true
    };
  },
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login" });
    },
    zhuxiao(){
      window.sessionStorage.userInfo='';
      this.$router.push({ name: "login" });
    },
    gotoAddressList(){
      this.$router.push({ name: "addresslist" });
    }
  },
  created() {
    let userInfo = window.sessionStorage.userInfo;
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      this.token = userInfo.token;
      this.flag = false;
      this.username = localStorage.getItem("username");
    }
    // if (this.token) {
    //   this.flag = false;
    //   this.$axios
    //   .get("/vue/getOneUser")
    //   .then(res => {
    //     console.log(res.result);
    //   });
    // }
  }
};
</script>

<style scoped>
.user-poster {
  width: 100%;
  height: 53vw;
  display: block;
}
.user-group {
  margin-bottom: 15px;
}
.user-links {
  padding: 15px 0;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
}
.user-links .van-icon {
  display: block;
  font-size: 24px;
}
</style>