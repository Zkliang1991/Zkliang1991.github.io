<template>
  <div>
    <van-nav-bar
      title="登陆"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="logo">
      <img src="https://7n.w3cschool.cn/statics/images/w3c/index-logo.png?t=20190423" alt>
    </div>
    <van-cell-group>
      <van-field
        v-model="logininfo.username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('用户名合法')"
      />
      <van-field
        v-model="logininfo.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <div class="btn-box">
      <van-button type="danger" size="large" class="login-btn" @click="btnGoLogin">立即登录</van-button>
      <div class="goregister">
        <p>没有账号请点右上注册进行注册</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      logininfo: {}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({ name: "register" });
    },
    btnGoLogin() {
      this.$axios.post("/vue/login", this.logininfo).then(res => {
        // console.log(res.data);
        if (!!res.data.type) {
          window.sessionStorage.userInfo = JSON.stringify({
            token: res.data.token
          });
          window.sessionStorage.userName = JSON.stringify({
            username: res.data.username
          });
          window.sessionStorage.userTX = JSON.stringify({
            usertx: res.data.avatar
          });
          this.$router.push({ name: "home" });
        } else {
          const toast = Toast.loading({
            duration: 1500, // 持续展示 toast
            forbidClick: true, // 禁用背景点击
            type: "fail",
            message: "登陆失败"
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  background-color: #fff;
  height: 4rem;
  overflow: hidden;
  img {
    margin: 1.5rem auto;
  }
}
.btn-box {
  background-color: #fff;
  .login-btn {
    width: 94%;
    margin-left: 3%;
    margin-top: 3%;
  }
  .goregister {
    width: 100%;
    text-align: center;
    margin-top: 3%;
  }
}
</style>

