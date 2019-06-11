<template>
  <div class="minecenter">
    <div class="mine-top">
      <p class="imgmine" @click="gotologin">
        <img :src="imgMine" alt>
      </p>
      <p class="minename">{{loginname}}</p>
    </div>
    <div class="hr"></div>
    <ul class="mine-nav">
      <li>
        <p class="mine-nav-num">0</p>
        <h4>关注商家</h4>
      </li>
      <li @click="gotoLovely">
        <p>0</p>
        <h4>收藏宝贝</h4>
      </li>
      <li>
        <p>0</p>
        <h4>上传记录</h4>
      </li>
      <li>
        <p>0</p>
        <h4>浏览记录</h4>
      </li>
    </ul>
    <div class="hr"></div>
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
    <div class="hr"></div>
    <van-steps :active="active">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
    <div class="hr"></div>
    <van-steps direction="vertical" :active="step">
      <van-step>
        <h3>【快递】暂无物流状态</h3>
        <p>{{time}}</p>
      </van-step>
    </van-steps>
    <Foot></Foot>
  </div>
</template>
<script>
import Foot from "@/components/Foot.vue";
export default {
  name: "minecenter",
  components: {
    Foot
  },
  data() {
    return {
      imgMine: require("../assets/images/nologin.jpg"),
      active: 1,
      step: 0,
      time: new Date().toLocaleString()
    };
  },
  computed: {
    loginname() {
      if (window.localStorage.getItem("loginname")) {
        return window.localStorage.getItem("loginname")+",点击注销";
      } else {
        return "未登录,点击登录";
      }
    }
  },
  methods: {
    gotologin() {
      var loginname = window.localStorage.getItem("loginname");
      if (loginname) {
        this.$dialog
          .confirm({
            title: "用户注销",
            message: "确认注销当前账户吗?"
          })
          .then(() => {
            window.localStorage.removeItem("loginname")
            this.$router.push({ name: "mine" });
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.$router.push({ name: "mine" });
      }
    },
    gotoLovely(){
      this.$router.push({name:"lovely"})
    }
  }
};
</script>
<style lang="scss">
.mine-top {
  width: 100%;
  height: 2rem;
  overflow: hidden;
  .imgmine {
    float: left;
    height: 1rem;
    margin-top: 0.4rem;
    margin-left: 0.5rem;
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  .minename {
    float: left;
    height: 1rem;
    margin-top: 0.5rem;
    line-height: 1rem;
    font-size: 24px;
    margin-left: 0.3rem;
  }
}
.hr {
  width: 100%;
  height: 0.2rem;
  background-color: #ccc;
}
.mine-nav {
  width: 100%;
  height: 2rem;
  overflow: hidden;
  li {
    float: left;
    width: 25%;
    text-align: center;
    p {
      height: 1rem;
      line-height: 1rem;
      font-size: 24px;
    }
    h4 {
      line-height: 0.6rem;
      font-size: 16px;
    }
  }
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
</style>
