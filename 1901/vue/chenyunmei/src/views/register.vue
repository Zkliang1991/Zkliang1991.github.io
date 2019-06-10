<template>
  <div class="beijing">
    <Head title="注册"></Head>
    <van-cell-group class="login">
      <van-field
        v-model="registerInfo.username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="6-10不以数字开头的用户名"
        :error="usernameFlag"
      />
      <van-field
        v-model="registerInfo.usertel"
        required
        clearable
        label="电话号码"
        right-icon="question-o"
        placeholder="请输入电话号码"
        :error="usertelFlag"
      />
      <van-field
        v-model="registerInfo.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :error="passwordFlag"
        required
      />
      <van-field
        v-model="registerInfo.dbpassword"
        type="password"
        label="确认密码"
        :error-message="pwd"
        placeholder="确认密码"
        :error="passwordFlag"
        required
      />
    </van-cell-group>

    <van-button type="primary" @click="yanzheng" class="register">注册</van-button>
    <van-button type="warning" @click="login">登陆</van-button>
    <!-- <van-popup v-model="show">请检查红色区域</van-popup> -->
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      show: true,
      pwd: "",
      usernameFlag: false,
      passwordFlag: false,
      usertelFlag: false,
      registerInfo: {}
    };
  },
  methods: {
    login() {
      this.$router.push({ name: "login" });
    },

    yanzheng() {
      //用户名验证
      var username = this.registerInfo.username;
      var usernameReg = /^[a-z_$][0-9a-z_$]{5,9}$/gi;
      if (usernameReg.test(username)) {
        this.usernameFlag = false;
      } else {
        this.usernameFlag = true;
      }
      //电话验证
      var usertel = this.registerInfo.usertel;
      var usertelReg = /^1[3456789][0-9]{9}$/g;
      if (usertelReg.test(usertel)) {
        this.usertelFlag = false;
      } else {
        this.usertelFlag = true;
      }

      var password = this.registerInfo.password;
      var dbpassword = this.registerInfo.dbpassword;

      if (password == dbpassword) {
        this.pwd = "";
        var userpwdReg = /^[0-9a-z]{6,12}$/gi;
        if (userpwdReg.test(password)) {
          this.passwordFlag = false;
        } else {
          this.passwordFlag = true;
        }
      } else {
        this.pwd = "两次密码输入不一致";
      }
      if (!this.usertelFlag && !this.usernameFlag && !this.passwordFlag) {
        this.$axios.post("/bu/register", this.registerInfo).then(res => {
          console.log(res);
          if (res.data.type == 1) {
            this.$router.push({
              name: "login",
              params: { username: res.data.username }
            });
          } else {
            this.$router.push({ name: "register" });
            Dialog.alert({
              message: "该用户名或电话号码已存在"
            }).then(() => {});
          }
        });
      } else {
        Dialog.alert({
          message: "请检查红色区域"
        }).then(() => {});
      }
    }
  }
};
</script>
<style scoped>
.register {
  margin-top: 1rem;
  margin-right: 1rem;
}
.login {
  padding-top: 1rem;
}
</style>


