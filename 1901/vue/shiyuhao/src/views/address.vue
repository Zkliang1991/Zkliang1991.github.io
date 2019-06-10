<template>
  <!--三级联动-->
  <div>
    <Head title="设置中心" :show="true"></Head>
    <van-cell-group class="top">
      <van-cell title="登录密码" value="修改" is-link/>
      <van-cell title="安全密码" value="修改" is-link/>
    </van-cell-group>
      <van-cell-group class="top">
      <van-cell title="软件版本" value="" is-link/>
      <van-cell title="意见反馈" value="" is-link/>
    </van-cell-group>
     <van-cell-group class="top">
      <van-cell title="清除缓存" value="" is-link/>
    </van-cell-group>

    <van-button type="danger" class="foot" @click="notLogin">退出登录</van-button>
  </div>
</template>

<script>
export default {
  methods:{
    notLogin(){
      this.$router.push({name:"my"})
    }
  }
};
</script>


<style scoped>
    .top{
      margin: 15px 0;
    }
    .foot{
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
    }
</style>


 