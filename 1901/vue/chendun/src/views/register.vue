<template>
  <div>
    <Head title="注册" :show="true"></Head>
    <van-cell-group>
      <van-field
        v-model="registerInfo.username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toas('question')"
      />
      <van-field
        v-model="registerInfo.pwd"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <van-field v-model="registerInfo.usertel" type="tel" label="电话号码" placeholder="请输入电话号码"/>
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
    register() {
      var reg = /^\d{6}$/;
      if (document.getElementsByClassName("van-field__control")[0].value) {
        var pwd = document
          .getElementsByClassName("van-field__control")[1]
          .value.trim();
        if (pwd.length < 6) {
          console.log(pwd.length);
          if (!reg.test(pwd)) {
            this.$dialog.alert({
              message: "请输入六位数密码"
            });
            return false;
          }
        }
        var tel = document.getElementsByClassName("van-field__control")[2]
          .value;
        if (tel == null) {
          this.$dialog.alert({
            message: "请输入手机号码"
          });
          return false;
        } else if (!/^1[34578]\d{9}$/.test(tel)) {
          this.$dialog.alert({
            message: "请输入正确的手机号"
          });
          return false;
        }
        this.$axios.post("/vue/register", this.registerInfo).then(res => {
          if (res.data.type == 1) {
            this.$dialog.alert({
              message: res.data.msg
            });
            this.$router.push({ name: "login" });
          }
        });
      } else {
        this.$dialog.alert({
          message: "请输入用户名"
        });
        return false;
      }
    }
  }
};
</script>

