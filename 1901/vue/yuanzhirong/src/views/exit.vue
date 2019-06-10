

<template>
  <div>
    <Head title="设置" :show="true" style="background-color:red"></Head>
    <div class="exit">
      <van-cell title="推送消息"  is-link />
      <van-cell title="修改密码" is-link />
      <van-cell title="关于我们"   is-link />
      <van-cell title="清理缓存"   is-link />
      <van-cell title="版本更新"  is-link />
    </div>
    <van-button type="danger" size="large" @click="exit">退出当前账户</van-button>
  </div>
</template>

<script>
export default {
    methods:{
      exit(){
        localStorage.username = "";
        sessionStorage.userInfo = "";
        this.$store.state.username = "";
         this.$store.state.carNum = 0;

        this.$router.push({name:"login"});

      }
    }
};
</script>

<style lang="scss" scoped>
.exit {
  width: 100%;
  margin-top: 45px;
  text-align: left;
}
</style>
