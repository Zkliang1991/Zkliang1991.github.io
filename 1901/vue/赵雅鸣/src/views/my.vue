<template>
  <div>
    <Head title="个人中心" :flag="false"></Head>
    
      <van-button type="primary" round size="large" @click="login">登录</van-button>
      <van-button type="info" round size="large" @click="register">注册</van-button>

  </div>
</template>
<script>
export default {
    methods:{
        login(){
            this.$router.push({name:'login',params:{active:0}})
        },
        register(){
            this.$router.push({name:'login',params:{active:1}})
        }
    }
}
</script>

