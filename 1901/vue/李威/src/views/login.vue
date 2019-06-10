<template>
  <div>
    <Header title="用户登录" :show="true"></Header>
    <Topkong></Topkong>
    <div class="container">
      <div class="login-logo">
        <div class="logo-box">
          <img src="@/assets/images/logo.png" alt>
        </div>
      </div>
      <form action name="login_form" method="post">
        <div class="hu_denglu">
          <div class="hu_denglu_one">账号登录</div>
          <div class="hu_denglu_two">手机登录</div>
          <span></span>
        </div>
        <div class="login-content">
          <div class="input-div">
            <div class="input-icon">
              <img src="@/assets/images/M-login.png" alt>
            </div>
            <input type="text" name="username" v-model="username" placeholder="请输入用户名/手机号">
          </div>
          <div class="input-div">
            <div class="input-icon">
              <img src="@/assets/images/M-pass.png" alt>
            </div>
            <input type="password" name="password" v-model="password" placeholder="输入密码">
          </div>
          <!-- 提示错误 -->
          <div class="error-box">
            <div class="error-title"></div>
          </div>
          <div class="other-style">
            <a class="register-now" @click="goRegister">还没有账号? 点击立即注册</a>
          </div>
          <div class="login-btn">
            <button type="button" class="btm" @click="goToMy">登录</button>
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
export default {
  components: {
    Topkong,
    Buttonkong
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    goRegister() {
      this.$router.push({ name: "register" });
    },
    goToMy() {
      this.$axios
        .post("vue/login", {
          username: this.username,
          userpwd: this.password
        })
        .then(res => {
          console.log(res);
          if (res.data.type == 1) {
            MessageBox.alert("登录成功").then(action => {
              localStorage.username = res.data.result.username;
              if (localStorage.username) {
                this.$router.push({ name: "mine" });
              }
            });
          } else {
            MessageBox.alert(res.data.msg);
          }
        });
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
      .input-div {
        width: 90%;
        margin: 0 auto;
        height: 1rem;
        position: relative;
        border-bottom: 1px solid #98989f;
        .input-icon {
          width: 13%;
          height: 50%;
          margin: 0 auto;
          float: left;
          border-right: 1px solid #98989f;
          position: absolute;
          top: 34%;
          img {
            width: 50%;
            height: auto;
            margin: 5% 4% 4% 28%;
          }
        }
        input {
          width: 85%;
          position: absolute;
          left: 13%;
          height: 0.56rem;
          margin-top: 0.3rem;
          padding-left: 0.2rem;
          font-family: "华文细黑", Arial, sans-serif;
          color: #232326;
          border: none;
          font-size: 0.3rem;
          background: none;
          box-shadow: 0 0 0 10rem white inset;
        }
      }
      .error-box {
        width: 100%;
        height: 0.36rem;
        .error-title {
          width: 100%;
          height: auto;
          background: #fdf9de;
        }
      }
      .other-style {
        width: 90%;
        height: auto;
        margin: 0 auto 0.4rem;
        overflow: hidden;
        a {
          font-size: 0.3rem;
          color: #ff5752;
        }
        a.register-now {
          float: left;
        }
        a.forget-password {
          float: right;
        }
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
