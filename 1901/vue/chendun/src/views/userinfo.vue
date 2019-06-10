<template>
  <div>
    <Head title="用户中心" :show="true"></Head>
    <van-cell-group>
      <van-cell icon="friends-o" title="立马登录" is-link @click="gotoLogin"/>
      <van-cell icon="friends-o" title="注册" is-link @click="goRegister"/>
      <van-cell icon="friends-o" title="退出登录" is-link @click="exitLogin"/>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login" });
    },
    goRegister() {
      this.$router.push({ name: "register" });
    },
    exitLogin() {
      window.localStorage.removeItem("loginname");
      this.$dialog.alert({
        message: "成功退出"
      });
      this.$router.push({ name: "home" });
    }
  }
};
</script>

