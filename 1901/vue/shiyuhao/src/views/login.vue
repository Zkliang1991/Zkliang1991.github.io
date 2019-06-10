<template>
  <div>
    <Head title="登录--注册" :show="true"></Head>
    <!-- <mt-navbar v-model="selected" class="is-selected">
      <mt-tab-item id="login">登录</mt-tab-item>
      <mt-tab-item id="register">注册</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="login">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="loginInfo.username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="loginInfo.pwd"></mt-field>
        <mt-button type="primary" size="large" @click="login()">登录</mt-button>
      </mt-tab-container-item>
      <mt-tab-container-item id="register">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="registerInfo.username"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="registerInfo.mobile"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="registerInfo.pwd"></mt-field>
        <mt-button type="danger" size="large" @click="register()">注册</mt-button>
      </mt-tab-container-item>
    </mt-tab-container> -->
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
      loginInfo: {},
      // registerInfo: {}
    };
  },
  methods: {
    login() {
      this.$axios.post("/vue/login", this.loginInfo).then(res => {
        console.log(res.data);
        if (!!res.data.type) {
          window.sessionStorage.userInfo = JSON.stringify({
            token: res.data.token
          });
          window.sessionStorage.username = res.data.username;
          this.$router.push({ name: "home" });
        }
      });
    },
    // register() {
    //   this.$axios.post("/vue/register", this.registerInfo).then(res => {
    //     if (!!res.data.type) {
    //       this.selected = "login";
    //     }
    //   });
    // }
    gotoRegister(){
      this.$router.push({ name:"register"});
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
</style>
