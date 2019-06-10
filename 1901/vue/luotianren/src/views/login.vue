<template>
  <div>
    <p></p>
    <mt-navbar v-model="selected">
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
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="registerInfo.pwd"></mt-field>
        <mt-button type="danger" size="large" @click="insertregister()" >注册</mt-button>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selected: "login",
      loginInfo: {},
      registerInfo: {}
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
    insertregister() {
    //   var name = document.getElementsByClassName("mint-field-core")[0].value;
    //   console.log("....................." + name);
      var reg = /^\d{6}$/;
        if (document.getElementsByClassName("mint-field-core")[2].value!="") {
          var pwd = document
            .getElementsByClassName("mint-field-core")[3]
            .value.trim();
          if (pwd.length < 6) {
            console.log(pwd.length);
            if (!reg.test(pwd)) {
              this.$dialog.alert({
                message: "请输入六位数密码"
              });
              return false;
            }
          }
          this.$axios.post("/vue/register", this.registerInfo).then(res => {
            if (res.data.type == 1) {
              this.$dialog.alert({
                message: res.data.msg
              });
              this.$router.push({ name: "login" });
            }
          });
        } else {
          this.$dialog.alert({
            message: "请输入用户名"
          });
          return false;
        }
    }
  }
};
</script>
 