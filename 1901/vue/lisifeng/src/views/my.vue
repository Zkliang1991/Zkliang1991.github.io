<template>
  <div>
    <div v-if="show" class="move">
      <Head title="个人中心" :show="true" back="返回"></Head>
      <div class="my">
        <p @click="login()">登录</p>
        <p>登录后实时同步进度</p>
      </div>
    </div>

    <transition name="fade">
      <div class="quanbu" v-if="show2">
        <div class="centerinfo">
          <img
            class="userimg"
            src
            onerror="this.src = 'https://pic.keede.com//app/images/login_img.png'"
          >
          <div class="userinfo">
            <p>{{name}}</p>
          </div>
        </div>

        <img class="user-poster" src="../assets/images/timg5.jpeg">
        <van-row class="user-links">
          <van-col span="12">
            <van-button round type="primary" size="small" @click="mybook">我的书架</van-button>
          </van-col>
          <van-col span="12">
            <van-button round type="danger" size="small" @click="destroy">注销</van-button>
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
      </div>
    </transition>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";
import { mapState, mapActions, mapMutations } from "vuex";
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
      show: true,
      show2: false,
      name:"立即登录"
    };
  },
  methods: {
    login() {
      this.$router.push({ name: "login" });
    },
    destroy() {
      window.sessionStorage.clear();
      this.$axios.get("/vue/loginout").then(res=>{
        console.log(res.data)
        this.show = true;
        this.show2 = false;
      })
      this.$store.commit("qingchu")

    },
    mybook(){
      this.$router.push({name:"cart"})
    }
  },
  mounted() {
    var userInfo = window.sessionStorage.userInfo;
    // console.log(userInfo);
    if (userInfo) {
      this.show = false;
      this.show2 = true;
      this.name = window.sessionStorage.username
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.my {
  position: absolute;
  top: 50%;
  left: 0;
  text-align: center;
  margin-top: -1rem;
  width: 100%;
}
.my p:nth-child(1) {
  line-height: 0.8rem;
  display: inline-block;
  width: 6rem;
  background-color: #ed424b;
  border-radius: 99px;
  color: #fff;
  font-size: 16px;
}
.my p:nth-child(2) {
  padding: 0.3rem;
  font-size: 14px;
  color: #969ba3;
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
.quanbu {
  position: relative;
}
.centerinfo {
  position: absolute;
  top: 0;
  width: 100%;
  padding-top: 100px;
}
.centerinfo .userimg {
  border-radius: 50%;
  display: block;
  width: 80px;
  height: 80px;
  overflow: hidden;
  float: left;
  margin-left: 15px;
}
.centerinfo .userinfo {
  float: left;
  margin: 20px;
  color: #fff !important;
}
.centerinfo p {
  font-size: 15px;
  color: #000;
  line-height: 30px;
}
.userinfo .member-lev {
  background: linear-gradient(to right, #343434, #141414);
  color: #ffffff;
  height: 14px;
  line-height: 14px;
  min-width: 60px;
  text-indent: 4px;
  overflow: hidden;
  vertical-align: baseline;
  font-size: 12px;
  font-weight: 500;
  display: inline-flex;
}
.userinfo .member-lev > em {
  background: url() no-repeat;
  background-size: 100%;
  display: inline-block;
  height: 14px;
  width: 14px;
  margin-right: 4px;
}
.userinfo .member-lev {
  background: linear-gradient(to right, #343434, #141414);
  color: #ffffff;
  height: 14px;
  line-height: 14px;
  min-width: 60px;
  text-indent: 4px;
  overflow: hidden;
  vertical-align: baseline;
  font-size: 12px;
  font-weight: 500;
  display: inline-flex;
}
</style>
