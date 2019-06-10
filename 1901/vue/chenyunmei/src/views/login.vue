<template>
  <div class="beijing">
    <Head title="登陆"></Head>
    <van-cell-group class="login">
      <van-field
        v-model="loginInfo.username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名/电话号码"
        :value="username"
      />
      <van-field
        v-model="loginInfo.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>

    <van-button type="primary" class="register" @click="login">登陆</van-button>
    <van-button type="warning" @click="register">注册</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {},
      username: ""
    };
  },
  methods: {
    login() {
      console.log(this.loginInfo);
      this.$axios.post("/vue/login", this.loginInfo).then(res => {
        window.sessionStorage.userInfo = JSON.stringify({
          token: res.data.token
        });
        var url = window.sessionStorage.url;
        var goodId = window.sessionStorage.goodId;
        var goodname = window.sessionStorage.goodname;
        console.log(goodname);
        if (url) {
          this.$router.push({
            name: url,
            params: {
              goodId
            },
            query: {
              goodname
            }
          });
        } else {
          this.$router.push({ name: "index" });
        }
      });
    },
    register() {
      this.$router.push({ name: "register" });
    }
  },
  created() {
    this.username = this.$route.params.username;
    console.log(this.$route);
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


