<template class='loginBox '>
    <div >
          <Header :title="title"></Header>
          <div v-if='quickLoginShow'>
              <div class='lognInnerBox content'>
              <mt-field label="用户名" placeholder="请输入用户名" v-model="loginInfo.username"></mt-field>
                <mt-field label="密码" placeholder="请输入密码" type="password" v-model="loginInfo.pwd"></mt-field>
                <mt-button  @click="login" size="large" type="primary" style='margin-top:.2rem'>登录</mt-button>
              </div>

              <van-tabbar>
                <van-tabbar-item @click='quickLogin'>快速登录</van-tabbar-item>
                <van-tabbar-item @click='toRegister'>注册</van-tabbar-item>     
              </van-tabbar>
          </div>
          <div v-else class='lognInnerBox content'>
               <mt-field label="手机号" placeholder="请输入手机号" v-model="loginInfo.tel"></mt-field>
                <mt-field label="验证码" placeholder="请输入验证码" type="password" v-model="loginInfo.code"></mt-field>
                <mt-button  @click="login" size="large" type="primary" style='margin-top:.2rem'>登录</mt-button>
              
              <van-tabbar>
                <van-tabbar-item >账号登录</van-tabbar-item>     
                <van-tabbar-item   @click='toRegister'>注册</van-tabbar-item>     
              </van-tabbar>
          </div>
         
             
    </div>
</template>
<script>
export default {
  data() {
    return {
      title:'登录',
      quickLoginShow:true,
      loginInfo: {}
      // active: 0
    };
  },
  methods: {
    login() {
      this.$axios.post("/vue/login", this.loginInfo).then(res => {
        if (res.data.type == 1) {
          window.sessionStorage.userInfo = JSON.stringify({
            token: res.data.token
          });
          window.sessionStorage.username=JSON.stringify({
            username: res.data.result.username
          });
            window.sessionStorage.userid=res.data.result._id;

            //var oldPath=localStorage.getItem('oldPath');
            // if(oldPath){
            // this.$router.push({ name: oldPath });
            // }else{
            this.$router.push({ name: "index" });
           // }
      
        }
        console.log(res);
      });
    },
    quickLogin(){

      this.title='快速登录'
      this.quickLoginShow=false;
    },
    toRegister(){
      this.$router.push({name:'register'})
    }
  }
};
</script>
<style lang='scss' scope>
.loginBox {
  background: #fff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.lognInnerBox {
  background-color: #fff;
}
.swiper-container {
  width: 300px;
  height: 300px;
  padding: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}
.van-tabbar--fixed {
  position: relative;
  margin-top: 0.2rem;
}
.van-tabbar-item--active {
  color: #7d7e80;
}
.van-tabbar--fixed {
    position: relative;
    position: fixed;
    bottom: 8rem;
    margin-top: 0.2rem;
}
.mint-button--primary{
  background: #f44
}
</style>

