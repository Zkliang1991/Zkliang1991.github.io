<template>
  <div>
    <van-nav-bar
      title="用户名登录"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="img">
      <img src="@/img/1.png" alt class="tupian">
    </div>
    
      <div class="form-group">
        <label for="uesrname"></label>
        <input
          type="text"
          class="form-control"
          id="uesrname"
          placeholder="请输入用户名"
          name="username"
          v-model="loginInfo.username"
        >
      </div>
      <div class="form-group">
        <label for="password"></label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="请输入密码"
          name="pwd"
          v-model="loginInfo.pwd"
        >
      </div>
      <van-button type="danger" size="large" class="login" @click="login">登录</van-button>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:this.$route.params.username,
      active: 0,
      loginInfo: {}
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({name:"register"})
    },
    login() {
      if (this.loginInfo.username && this.loginInfo.pwd) {
        this.$axios.post("/vue/login", this.loginInfo)
        .then(res => {
          if (!!res.data.type) {
            window.sessionStorage.userInfo =JSON.stringify({'token': res.data.token});
            this.$router.push({ name: "home" });
          }
        });
      }
     
    }
  }
  
};
</script>

<style scoped>
.img {
  width: 100%;
  height: 7rem;
}
.tupian {
  width: 100%;
  height: 100%;
}
.form-group {
  width: 100%;
}
.form-group {
  width: 89%;
  height: 3rem;
  margin-left: 4%;
  line-height: 3rem;
  padding-left: 3%;
  border-bottom: 1px solid #ccc;
}
input {
  width: 100%;
  height: 2rem;
  border: 0;
}
.login {
  margin-top: 2rem;
}
</style>


