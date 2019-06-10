<template>
  <div>
    <img
      class="user-poster"
      src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"
    >
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
    </van-cell-group>
    <div v-if="checkname">
      <van-button type="primary" size="large" @click="goLogin">登录</van-button>
    </div>
    <div v-else>
      <van-cell icon="friends-o" :title="loginInfo.username" is-link/>
      <van-button type="danger" size="large" @click="gozhuxiao">注销</van-button>
    </div>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      checkname: false
    };
  },
  computed: {
    ...mapState(["loginInfo"]),
    username: {
      get() {
        return this.$store.state.loginInfo.username;
      },
      set(val) {
        this.$store.commit("Username", val);
      }
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  methods: {
    goLogin(){
       this.$router.push({ name: "login" });
    },
    gozhuxiao(){
      this.loginInfo.username="";
     sessionStorage.clear("userInfo");
     this.$router.push({name:'home'})
    }
  },
  mounted() {
    // var token = window.sessionStorage.userInfo.token;
    // console.log(toekn);
    if (this.loginInfo.username) {
      this.checkname = false;
    } else {
      this.checkname = true;
      this.$router.push({ name: "mine" });
    }
  }
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
</style>