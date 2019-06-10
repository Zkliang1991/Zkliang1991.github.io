

<template>
  <div class="box">
    <Head title="登陆" :show="true"></Head>
    <div class="login">
      <van-cell-group>
        <van-field v-model="loginInfo.username" label="用户名" placeholder="请输入用户名/手机号" error-message/>
        <van-field
          v-model="loginInfo.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          error-message
        />
      </van-cell-group>
      <van-row type="flex" justify="center">
        <span class="col">忘记密码?</span>
        <span class="col" @click="gotoregister">极速注册></span>
      </van-row>
      <van-button type="danger" round size="large" class="btn" @click="login()">登录</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      loginInfo: {}
    };
  },
  methods: {
    gotoregister() {
      this.$router.push({ name: "register" });
    },
    login() {
      console.log(this.loginInfo);

      if (this.loginInfo.username) {
        if (this.loginInfo.password) {
          this.$axios.post("/vue/login", this.loginInfo).then(res => {
            console.log(111);
            console.log(res.data);
            if (!!res.data.type) {
              window.sessionStorage.userInfo = JSON.stringify({
                token: res.data.token
              });
              console.log(res.data.token);
              localStorage.username = this.loginInfo.username;
              this.$store.state.username = this.loginInfo.username;
              console.log(this.$store.state.username);
              this.$router.push({ name: "home" });
            }
          });
        } else {
          Toast("请输入密码");
        }
      } else {
        Toast("请输入用户名");
      }
    }
  }
};
</script>

<style  scoped>
.login {
  background-color: #ffffff;
  width: 100%;
  height: 90%;
  position: absolute;
  left: 0;
  top: 1rem;
  right: 0;
  bottom: 0;
}
.col {
  line-height: 0.8rem;
  color: red;
  width: 50%;
  text-align: center;
}
</style>
