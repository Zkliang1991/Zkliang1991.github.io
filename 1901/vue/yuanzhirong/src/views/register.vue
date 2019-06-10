



<template>
  <div>
    <Head title="注册" :show="true"></Head>
    <div class="register">
      <van-cell-group>
        <van-field v-model="registerInfo.username" label="用户名" placeholder="请输入用户名"/>
        <van-field v-model="registerInfo.phone" label="手机号" placeholder="请输入手机号" name="phone"/>
        <van-field
          v-model="registerInfo.password"
          type="password"
          label="密码"
          placeholder="请输入6位数密码"
          name="password"
          v-validate="{ required: true, min: 6 }"
          :error="errors.has('password')"
          :error-message="errors.first('password')"
        />
      </van-cell-group>
      <van-button type="danger" round size="large" class="btn" @click="register()">注册</van-button>
    </div>
  </div>
</template>

<script>
import { Validator } from "vee-validate";
import { Toast } from "vant";
export default {
  data() {
    return {
      registerInfo: {}
    };
  },
  methods: {
    register() {
      if (this.registerInfo.username) {
        if (this.registerInfo.password) {
          this.$axios.post("/vue/register", this.registerInfo).then(res => {
            console.log(res.data);
            if (!!res.data.type) {
              window.sessionStorage.userInfo = JSON.stringify({
                token: res.data.token
              });
            }
          });
          this.$router.push({ name: "login" });
          this.$store.state.username = this.registerInfo.username;
          localStorage.username = this.registerInfo.username;
        } else {
          Toast("请输入密码");
        }
      } else {
        Toast("请输入用户名");
      }
    }
  }
};
</script>

<style scoped>
.register {
  background-color: #ffffff;
  width: 100%;
  height: 90%;
  position: absolute;
  left: 0;
  top: 1rem;
  right: 0;
  bottom: 0;
}
.col {
  line-height: 0.8rem;
  color: red;
}
</style>
