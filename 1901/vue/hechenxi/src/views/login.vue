<template>
  <div>
    <Head title="登录"></Head>
    <div class="loginimg">
      <img src="../assets/login.jpg" alt>
    </div>

    <van-tabs v-model="active">
      <van-tab title="登录">
        <van-cell-group>
          <van-field v-model="loginInfo.username" label="用户名" placeholder="请输入用户名" />
          <van-field
            v-model="loginInfo.userpwd"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
        </van-cell-group>
        <van-button type="primary" size="large" @click="login">登录</van-button>
      </van-tab>
      <van-tab title="注册">
        <van-field v-model="registerInfo.username" label="用户名" placeholder="请输入用户名" required/>
        <van-field
          v-model="registerInfo.userpwd"
          type="password"
          label="密码"
          placeholder="请设置密码"
          required
        />
        <van-field v-model="registerInfo.usertel" label="手机号" placeholder="请输入手机号" required/>
        <van-button type="primary" size="large" @click="register">注册</van-button>
      </van-tab>
    </van-tabs>
    <Foot></Foot>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      loginInfo: {},
      registerInfo: {},
      active:0,
    };
  },
  methods: {
    login() {
      console.log(this.loginInfo);
      if (this.loginInfo.username && this.loginInfo.userpwd) {
        this.$axios.post("/vue/login", this.loginInfo).then(res => {
          console.log(res.data);
          if (!!res.data.type) {
            window.sessionStorage.userInfo = JSON.stringify({
              token: res.data.token
            });
            window.localStorage.setItem('username',res.data.result.username)
            Toast.success("登录成功 即将跳转");
            this.$router.push({ name: "home" });
          }
        });
      } else {
        Toast.fail("登录失败");
      }
    },
    register() {
      if (
        this.registerInfo.username &&
        this.registerInfo.userpwd &&
        this.registerInfo.usertel
      ) {
        this.$axios.post("/vue/register", this.registerInfo).then(res => {
          console.log(res.data);
          this.loginInfo.username = this.registerInfo.username
          this.active=0
        });
      }
    }
  },
  watch:{
    
  }
};
</script>
<style scoped>
.loginimg img {
  width: 100%;
}
</style>
