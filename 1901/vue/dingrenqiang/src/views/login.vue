<template>
  <div>
    <Head title="登录" :show="true"></Head>
    <div class="info">
      <img src="@/assets/img/8.png" alt>
    </div>
    <div class="input">
      <van-cell-group>
        <van-field placeholder="请输入用户名" label="用户名" left-icon="contact" v-model="loginInfo.username"/>
      </van-cell-group>
      <van-cell-group>
        <van-field placeholder="请输入密码" type="password" label="密码" left-icon="browsing-history-o" v-model="loginInfo.pwd"/>
      </van-cell-group>
      <mt-button type="primary" size="large" @click="login()">登录</mt-button>
      <p @click="gotoRegister">立即注册</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "login",
      loginInfo: {}
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
          this.$router.push({ name: "home" });
        }
      });
    },
    gotoRegister() {
      this.$router.push({ name: "register" });
    }
  }
};
</script>


<style scoped>
.input {
  margin-top: 0.4rem;
}

.mint-button {
  margin-top: 0.5rem !important;
  display: inline-block;
}
p {
  float: right;
  margin-top: 10px;
}
.info {
  text-align: center;
  margin-top: 40px;
}
.info img {
  display: inline;
  height: 60px;
  margin-top: 40px;
}
</style>

