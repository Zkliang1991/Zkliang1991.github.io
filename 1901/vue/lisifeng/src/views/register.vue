<template>
  <div>
    <Head title="注册" back="返回" :show="true"></Head>
    <div class="img move">
      <img src="@/assets/images/timg2.jpg" alt>
    </div>
    <van-cell-group class="move">
      <van-field
        v-model="rigisterInfo.username"
        required
        label="用户名"
        left-icon="contact"
        placeholder="请输入用户名"
        name="username"
        v-validate="'required|name'"
        :error="errors.has('username')"
        :error-message="errors.first('username')"
      />
      <van-field
        v-model="rigisterInfo.userpwd"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        left-icon="records"
        name="password"
        v-validate="'required|pwd'"
        :error="errors.has('password')"
        :error-message="errors.first('password')"
      />
      <van-field
        v-model="rigisterInfo.usertel"
        type="tel"
        label="手机号"
        placeholder="请输入手机号"
        required
        left-icon="phone-o"
        name="phone"
        v-validate="'required|mobile'"
        :error="errors.has('phone')"
        :error-message="errors.first('phone')"
      />
    </van-cell-group>
    <div class="register move">
      <i class="iconfont icon-shouye" @click="home()"></i>
      <span @click="login()">立即登录</span>
    </div>
    <van-button round type="primary" size="large" class="move" @click="register">立即注册</van-button>
  </div>
</template>

<script>
import { Validator } from "vee-validate";
export default {
  data() {
    return {
      rigisterInfo: {}
    };
  },
  methods: {
    login() {
      this.$router.push({ name: "login" });
    },
    home() {
      this.$router.push({ name: "home" });
    },
    register() {
      this.$validator.validateAll().then(required => {
        if (required) {
          this.$axios.post("/vue/register", this.rigisterInfo).then(res => {
            if (!!res.data.type) {
              this.$router.push({
                name: "login",
                params: { username: res.data.username }
              });
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.img {
  text-align: center;
}
.img img {
  width: 40%;
  // border-radius: 50%;
  display: inline;
  padding: 1rem 0;
}
.move {
  margin: 0.4rem 0;
}
.register {
  text-align: right;
  padding-top: 0.1rem;
  padding-right: 0.3rem;
  color: #0091de;
}
.iconfont {
  padding-right: 0.2rem;
}
</style>
