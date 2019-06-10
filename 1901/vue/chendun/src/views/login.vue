<template>
  <div>
    <Head title="登录" :show="true"></Head>
    <van-cell-group>
      <van-field
        v-model="loginInfo.username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />
      <van-field v-model="loginInfo.pwd" type="password" label="密码" placeholder="请输入密码" required/>
    </van-cell-group>
    <van-button type="danger" size="large" @click="login()">登录</van-button>
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
      // van-field__control
      if (document.getElementsByClassName("van-field__control")[0].value) {
        if (document.getElementsByClassName("van-field__control")[1].value) {
          this.$axios.post("/vue/login", this.loginInfo).then(res => {
            if (!!res.data.type) {
              window.sessionStorage.userInfo = JSON.stringify({
                token: res.data.token
              });
              window.localStorage.setItem("loginname", this.loginInfo.username);
              this.$dialog.alert({
                message: res.data.msg
              });
              this.$router.push({ name: "home" });
            }else{
              this.$dialog.alert({
                message: res.data.msg
              });
            }
          });
        } else {
          this.$dialog.alert({
            message: "请输入密码"
          });
          return false;
        }
      } else {
        this.$dialog.alert({
          message: "请输入用户名"
        });
        return false;
      }

      // if (window.sessionStorage.userInfo) {

      // }
    }
    // register() {
    //   this.$axios.post("/vue/register", this.registerInfo).then(res => {
    //     if (res.data.type == 1) {
    //       this.$dialog.alert({
    //         message: res.data.msg
    //       });
    //     }
    //   });
    // }
  }
};
</script>

