<template>
  <div>
    <van-nav-bar title="注册" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <div class="logo">
      <img src="https://7n.w3cschool.cn/statics/images/w3c/index-logo.png?t=20190423" alt>
    </div>
    <van-cell-group>
      <van-field
        v-model="register.username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('用户名合法')"
      />
      <van-field
        v-model="register.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <div class="btn-box">
      <van-button type="danger" size="large" class="register-btn" @click="btnGoRegister()">立即注册</van-button>
      <div @click="goregister" class="btn-register">
        <p>已经有账号?去登陆</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      register: {}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    goregister() {
      this.$router.push({ name: "login" });
    },
    btnGoRegister() {
      this.$axios.post("/vue/register", this.register).then(res => {
        console.log(res.data.type)
        if (res.data.type == 0) {
          Toast("注册失败");
        } else {
          const toast = Toast.loading({
            duration: 1500, // 持续展示 toast
            forbidClick: true, // 禁用背景点击
            type: "success",
            message: "注册成功"
          });
          this.$router.push({ name: "login" });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  background-color: #fff;
  height: 4rem;
  overflow: hidden;
  img {
    margin: 1.5rem auto;
  }
}
.btn-box {
  background-color: #fff;
  .register-btn {
    width: 94%;
    margin-left: 3%;
    margin-top: 3%;
  }
  .btn-register {
    width: 100%;
    text-align: center;
    margin-top: 0.05rem;
  }
}
</style>

