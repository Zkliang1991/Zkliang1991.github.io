<template>
  <div class="registerbox">
    <detailsHead title="用户注册"></detailsHead>
    <p class="loginbg">
      <img :src="img" alt>
    </p>
    <van-cell-group class="registerbox">
      <van-field
        v-model="registerInfo.username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('请输入6到10位并且首位为字母的用户名')"
        @blur="testUsername"
        class="usernameinput"
      ></van-field>
      <van-field
        v-model="registerInfo.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        right-icon="question-o"
        class="passwordinput"
        @click-right-icon="$toast('请输入6到12位由数字和字母组成的密码')"
        @blur="testUserpassword"
      ></van-field>
      <van-field
        v-model="registerInfo.passwordtest"
        type="password"
        label="确认密码"
        placeholder="两次密码请输入一致"
        required
        class="passwordinput"
        @blur="testTwice"
      ></van-field>
      <van-field
        v-model="registerInfo.usertel"
        required
        clearable
        label="电话号码"
        right-icon="question-o"
        placeholder="请输入手机号码"
        @click-right-icon="$toast('请输入手机号码')"
        class="usernameinput"
        @blur="testTel"
      ></van-field>
    </van-cell-group>
    <div class="registerbtn">
      <van-button type="danger" size="large" @click="register">注册</van-button>
    </div>
  </div>
</template>
<script>
import detailsHead from "@/components/detailsHead.vue";
export default {
  name: "register",
  components: {
    detailsHead
  },
  data() {
    return {
      registerInfo: {},
      img: require("../assets/images/register.jpg"),
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false
    };
  },
  methods: {
    register() {
      if (this.flag1 && this.flag2 && this.flag3 && this.flag4) {
        this.$axios.post("/vue/register", this.registerInfo).then(res => {
          if (!!res.data.type) {
            this.$router.push({ name: "mine" });
          } else {
            this.$router.push({ name: "register" });
          }
        });
      }
    },
    testUsername() {
      var userReg = /^[a-z][0-9a-z_$]{5,9}$/gi;
      if (userReg.test(this.registerInfo.username) == true) {
        this.flag1 = true;
      } else {
        this.$notify("用户名格式不合法,请输入6到10位并且首位为字母的用户名");
        this.registerInfo.username = "";
      }
    },
    testUserpassword() {
      var passReg = /^[a-zA-Z0-9]{6,12}$/gi;
      if (passReg.test(this.registerInfo.password) == true) {
        this.flag2 = true;
      } else {
        this.$notify("密码格式不合法,请输入6到12位由数字和字母组成的密码");
        this.registerInfo.password = "";
      }
    },
    testTwice() {
      if (this.registerInfo.password == this.registerInfo.passwordtest) {
        this.flag3 = true;
      } else {
        this.$notify("两次输入的密码不一致");
        this.registerInfo.passwordtest = "";
      }
    },
    testTel() {
      var telReg = /^1[3456789][0-9]{9}$/g;
      if (telReg.test(this.registerInfo.usertel) == true) {
        this.flag4 = true;
      } else {
        this.$notify("手机号格式不合法,请输入11位电话号码");
        this.registerInfo.usertel = "";
      }
    }
  }
};
</script>

<style lang="scss">
.registerbox {
  .loginbg {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .passwordinput {
    font-size: 18px;
  }
  .usernameinput {
    font-size: 18px;
  }
  .registerbtn {
    width: 100%;
    margin-top: 0.2rem;
  }
}
</style>