<template>
  <div>
    <mt-header title="设置" style="backgroundColor:red;height:.8rem" :fixed="true">
    <mt-button icon="back" slot="left" @click="goback">返回</mt-button>
  </mt-header>
    <van-cell-group>
      <van-cell title="信息推送" value="内容"/>
      <van-cell title="清除缓存" value="6.23M"/>
      <van-cell title="检查更新" value="4.9.4" is-link/>
      <van-cell title="关于我们" is-link/>
      <van-cell title="意见反馈" is-link/>
      <van-button size="large" style="backgroundColor:red;color:white;position:fixed;bottom:0;left:0" @click="logoff">退出登录</van-button>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  methods: {
    goback() {
      this.$router.go(-1);
    },
    logoff(){
      window.sessionStorage.removeItem("username");
       this.$router.go(-1);
    }
  }
}
</script>
