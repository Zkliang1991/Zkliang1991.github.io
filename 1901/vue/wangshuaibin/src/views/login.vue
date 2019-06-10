<template>
  <div>
    <Header title="登录-注册" :show="true" :searchShow="true"></Header>
    <mt-navbar v-model="selected" style="marginTop:.8rem">
      <mt-tab-item id="login">登录</mt-tab-item>
      <mt-tab-item id="register">注册</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" style="marginTop:.06rem">
      <mt-tab-container-item id="login">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="loginInfo.username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="loginInfo.pwd"></mt-field>
        <mt-button type="primary" size="large" @click="login()" style="backgroundColor:red">登录</mt-button>
      </mt-tab-container-item>
      <mt-tab-container-item id="register">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="registerInfo.username"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="registerInfo.usertel"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="registerInfo.pwd"></mt-field>
        <mt-button type="danger" size="large" @click="register()" style="backgroundColor:red">注册</mt-button>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { Toast } from "vant";
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
      if (this.loginInfo.username) {
        if (this.loginInfo.pwd) {
          this.$axios.post("/vue/login", this.loginInfo).then(res => {
            console.log(res.data);
            if (!!res.data.type) {
              window.sessionStorage.userInfo = JSON.stringify({
                token: res.data.token
              });
              window.sessionStorage.username = res.data.username;
              this.$router.go(-1);
            } else {
              Toast(res.data.msg);
            }
          });
        } else {
          Toast("密码不能为空");
        }
      } else {
        Toast("用户名不能为空");
      }
    },
    register() {
      console.log(this.registerInfo);
      if (this.registerInfo.username) {
        if (
          this.registerInfo.username.length >= 6 &&
          this.registerInfo.username.length <= 12
        ) {
         
          if (this.registerInfo.usertel) {
            if (this.registerInfo.usertel.length == 11) {
              if (this.registerInfo.pwd) {
                if (this.registerInfo.pwd.length >= 6 && this.registerInfo.pwd.length <= 12) {
                   console.log(this.registerInfo.pwd.length);
                  this.$axios
                    .post("/vue/register", this.registerInfo)
                    .then(res => {
                      console.log(res.data);
                      if (!!res.data.type) {
                        this.selected = "login";
                        Toast(res.data.msg);
                      } else {
                        Toast(res.data.msg);
                      }
                    });
                } else {
                  Toast("请输入6-12位的密码");
                }
              } else {
                Toast("请填写密码");
              }
            } else {
              Toast("请输入11位的常用手机号");
            }
          } else {
            Toast("请填写手机号");
          }
        } else {
          Toast("请输入6-12位的用户名");
        }
      } else {
        Toast("请填写用户名");
      }
    }
  }
};
</script>
<style>
.is-selected {
  border-bottom: 2px solid red !important;
  background-color: #eee;
}
</style>
