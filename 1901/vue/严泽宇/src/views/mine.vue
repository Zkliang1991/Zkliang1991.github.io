
<template>
  <div class="box">
    <Head headTitle="个人中心" :flag="true"></Head>
    <div class="userbgc">
      <img class="userimg" src="../assets/images/Pikachu.jpg" alt>
      <p>{{username}}</p>
    </div>
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
      <router-link :to="{name:'shoucang'}">
        <van-cell icon="star-o" title="我的收藏" is-link/>
      </router-link>
      <router-link :to="{name:'xinzeng'}">
        <van-cell icon="star-o" title="我的地址簿" is-link/>
      </router-link>
      <van-cell icon="points" title="我的积分" is-link/>
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link/>
      <van-cell icon="gift-o" title="我收到的礼物" is-link/>
    </van-cell-group>
    <van-button type="danger" size="large" @click="loginout" v-if="flag">退出登录</van-button>
    <van-button type="danger" size="large" @click="loginout" v-if="!flag">登录</van-button>
    <Foot></Foot>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      imgs: [],
      flag: true,
      username: ""
    };
  },
  methods: {
    onRead(file) {
      console.log(file);
    },
    loginout() {
      if (this.flag) {
        sessionStorage.clear("userInfo");
        this.$router.push({ name: "home" });
      } else {
        this.$router.push({ name: "login" });
      }
    }
  },
  mounted() {
    if (sessionStorage.userInfo) {
      this.flag = true;
    } else {
      this.flag = false;
    }
    console.log(this.flag);
    this.username = this.$route.params.username;
  }
};
</script>

<style lang="scss" scoped>
.userbgc {
  width: 100%;
  height: 4rem;
  background-image: url(../assets/images/bgc1.jpg);
  background-size: 100% 100%;
  position: relative;
}
.userbgc p {
  width: 50%;
  text-align: center;
  font-size: 26px;
  position: absolute;
  top: 60%;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}
.userimg {
  border-radius: 50%;
  position: absolute;
  top: -30%;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}
.box {
  position: relative;
}
.van-button {
  position: absolute;
  width: 94%;
  bottom: -30px;
  right: 0;
  left: 0;
  margin: auto;
}
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
.van-uploader {
  width: 100%;
  height: 100%;
}
</style>