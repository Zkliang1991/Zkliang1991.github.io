<template>
  <div>
    <van-nav-bar class="head" left-arrow @click-left="onClickLeft"/>
    <p class="regist">欢迎注册</p>
    <van-cell-group>
      <van-field
        v-model="registerInfo.username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
        class="aa"
      />
      <van-field
        v-model="registerInfo.pwd"
        class="aa"
        type="password"
        label="密码"
        placeholder="请设置密码"
        required
      />
      <van-field v-model="registerInfo.phone" class="aa" label="手机号" placeholder="请输入手机号" required/>
    </van-cell-group>
    <van-button type="danger" size="large" @click="register">注册</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registerInfo: {}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    register() {
      if (this.registerInfo.username && this.registerInfo.pwd && this.registerInfo.phone) {
        this.$axios.post("/vue/register", this.registerInfo)
        .then(res => {
          this.$router.push({ name: "login" ,params:{username:this.registerInfo.username}});
        });
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.regist {
  text-align: center;
  line-height: 4rem;
  font-size: 2rem;
  border: 0;
}
.head {
  border: 0;
}
.aa {
  height: 4rem;
  line-height: 4rem;
  padding: 0;
  padding-left: 1rem;
}
</style>


