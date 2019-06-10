<template>
  <div>
    <Header title="用户注册" :show="true"></Header>
    <Topkong></Topkong>
    <div class="container">
      <div class="login-logo">
        <div class="logo-box">
          <img src="@/assets/images/logo.png" alt>
        </div>
      </div>
      <form action name="login_form" method="post">
        <div class="hu_denglu">
          <div class="hu_denglu_one">用户注册</div>
        </div>
        <div class="login-content">
          <mt-field label="输入用户名" :state="zt1" v-model="username" placeholder="4到10位字母"></mt-field>
          <mt-field label="输入手机号" :state="zt2" v-model="userphone" placeholder="请输入11位手机号"></mt-field>
          <mt-field
            label="输入密码"
            :state="zt3"
            v-model="userpwd"
            type="password"
            placeholder="4到12位字母，数字"
          ></mt-field>
          <mt-field
            label="确认密码"
            :state="zt4"
            v-model="userpwd2"
            type="password"
            placeholder="与上面密码保持一致"
          ></mt-field>
          <div class="login-btn">
            <button type="button" class="btm" @click="register">注册</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Topkong from "../components/top-kong.vue";
import Buttonkong from "../components/button-kong.vue";
import { MessageBox } from "mint-ui";

var userReg = /^[a-zA-Z]{4,10}$/;
var phoneReg = /^1[3-8][0-9]{9}$/g;
var pwdReg = /^[a-zA-Z0-9]{4,12}$/;
export default {
  components: {
    Topkong,
    Buttonkong
  },
  data() {
    return {
      zt1: "error",
      zt2: "error",
      zt3: "error",
      zt4: "error",
      username: "",
      userphone: "",
      userpwd: "",
      userpwd2: "",
      title: "提示"
    };
  },
  methods: {
    register() {
      if (userReg.test(this.username) == true) {
        this.zt1 = "success";
        if (phoneReg.test(this.userphone) == true) {
          this.zt2 = "success";
          if (pwdReg.test(this.userpwd) == true) {
            this.zt3 = "success";
            if (this.userpwd == this.userpwd2) {
              this.zt4 = "success";
              //   ajax请求
              this.$axios
                .post("vue/register", {
                  username: this.username,
                  userphone: this.userphone,
                  userpwd: this.userpwd
                })
                .then(res => {
                  console.log(res);
                  if (res.data.type == 1) {
                    MessageBox.alert("注册成功", this.title).then(action => {
                      this.$router.push({ name: "login" });
                    });
                  }else{
                      MessageBox.alert(res.data.msg, this.title);
                  }
                });
            } else {
              MessageBox.alert("两次密码输入不一致", this.title);
              this.zt4 = "error";
            }
          } else {
            MessageBox.alert("密码不合法", this.title);
            this.zt3 = "error";
          }
        } else {
          MessageBox.alert("手机号不合法", this.title);
          this.zt2 = "error";
        }
      } else {
        MessageBox.alert("用户名不合法", this.title);
        this.zt1 = "error";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-size: 100% auto;
  .login-logo {
    width: 100%;
    height: 2.56rem;
    .logo-box {
      width: 40%;
      height: auto;
      margin: 0 auto;
      padding-top: 12%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  form {
    padding-top: 0.5rem;
    .hu_denglu {
      margin-bottom: 0.2rem;
      position: relative;
      line-height: 0.9rem;
      display: flex;
      width: 100%;
      text-align: center;
      padding: 0 0.16rem;
      box-sizing: border-box;
      .hu_denglu_one {
        font-size: 0.34rem;
        font-weight: 500;
        flex: 1 1 0%;
      }
      .hu_denglu_two {
        font-size: 0.34rem;
        font-weight: 500;
        flex: 1 1 0%;
      }
      span {
        height: 0.6rem;
        width: 1px;
        position: absolute;
        right: 50%;
        background: #d1d1d1;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .login-content {
      width: 100%;
      height: auto;
      .other-style {
        width: 90%;
        height: auto;
        margin: 0 auto 0.4rem;
        overflow: hidden;
      }
      .login-btn {
        width: 90%;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
        border-radius: 0.1rem;
        button {
          width: 100%;
          height: 0.88rem;
          border-radius: 0.1rem;
          background: #41a584;
          color: #fff;
          border: none;
          font-size: 0.4rem;
          margin-bottom: 0.4rem;
        }
      }
    }
  }
}
</style>
