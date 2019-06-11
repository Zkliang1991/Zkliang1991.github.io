<template>
  <div class="mine">
    <detailsHead title="用户登录" :backshow="true" :moreshow="true"></detailsHead>

    <!-- <mt-navbar v-model="selected">
      <mt-tab-item id="login">登录</mt-tab-item>
      <mt-tab-item id="register">注册</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="login">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="loginInfo.username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="loginInfo.password"></mt-field>
        <mt-button type="primary" size="large" @click="login">登录</mt-button>
      </mt-tab-container-item>
      <mt-tab-container-item id="register">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="registerInfo.username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="registerInfo.email"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="registerInfo.password"></mt-field>
        <mt-button type="danger" size="large">注册</mt-button>
      </mt-tab-container-item>
    </mt-tab-container>-->
    <p class="loginbg">
      <img :src="img" alt>
    </p>
    <van-cell-group class="loginbox">
      <van-field
        v-model="loginInfo.username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('请输入已注册的用户名')"
        class="usernameinput"
      ></van-field>
      <van-field
        v-model="loginInfo.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        class="passwordinput"
      ></van-field>
    </van-cell-group>
    <div class="loginbtn">
      <van-button type="primary" size="large" @click="login">登录</van-button>
    </div>
    <div class="tore">
      <van-button plain hairline type="danger" size="large" @click="gotoregister">用户注册</van-button>
    </div>
  </div>
</template>


<script>
import detailsHead from "@/components/detailsHead.vue";
export default {
  name: "mine",
  components: {
    detailsHead
  },
  data() {
    return {
      loginInfo: {},
      img: require("../assets/images/loginbg.jpg")
    };
  },
  methods: {
    login() {
      console.log(this.loginInfo);
      this.$axios.post("/vue/login", this.loginInfo).then(res => {
        console.log(res.data);
        if (!!res.data.type) {
          window.sessionStorage.userInfo = JSON.stringify({
            token: res.data.token
          });
          window.localStorage.setItem("loginname", this.loginInfo.username);
          this.$router.push({ name: "home" });
        } else {
          this.$router.push({ name: "mine" });
        }
      });
    },
    gotoregister() {
      this.$dialog
        .confirm({
          title: "用户注册",
          message: "确认放弃登录,跳转到注册页面"
        })
        .then(() => {
          this.$router.push({ name: "register" });
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style lang="scss">
.loginbg {
  width: 100%;
  img {
    width: 100%;
  }
}
.loginbox {
  .passwordinput {
    font-size: 18px;
  }
  .usernameinput {
    font-size: 18px;
  }
  .loginbtn {
    width: 100%;
    margin-top: 0.2rem;
  }
  .tore {
    text-align: center !important;
    margin-top: 0.4rem;
  }
}
</style>