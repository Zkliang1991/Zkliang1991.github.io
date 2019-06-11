<template>
  <div>
    <Head title="登录&&注册" :show="true"></Head>
    <mt-navbar class="loginnav" v-model="selected">
      <mt-tab-item id="login">登录</mt-tab-item>
      <mt-tab-item id="register">注册</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="login">
        <div class="loginicon">
          <i class="icon el-icon-trophy"></i>
        </div>
        <mt-field label="用户名:" placeholder="请输入用户名/手机号码" v-model="loginInfo.username"></mt-field>
        <mt-field
          class="pwd"
          label="密码:"
          placeholder="请输入密码"
          type="password"
          v-model="loginInfo.pwd"
        ></mt-field>
        <mt-button class="loginbtn" type="danger" size="large" @click="login()">立即登录</mt-button>
        <div class="loginbottom">
          <div class="loginbottom-top">
            <div class="line"></div>
            <span class="party">第三方登录</span>
            <div class="line"></div>
          </div>
          <ul class="cl">
            <li v-for="(item,index) in party" :key="index">
              <i class="iconfont threelogin" v-html="item.icon" slot="icon"></i>
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="register">
        <div class="loginicon">
          <i class="icon el-icon-trophy"></i>
        </div>
        <mt-field
          @change="userfouce"
          label="用户名:"
          placeholder="请输入用户名"
          v-model="registerInfo.username"
        ></mt-field>
        <mt-field
          @change="mobilefouce"
          label="手机号:"
          placeholder="请输入手机号"
          type="tel"
          v-model="registerInfo.mobile"
        ></mt-field>
        <mt-field
          @change="pwdfouce"
          label="密码:"
          placeholder="请输入密码"
          type="password"
          v-model="registerInfo.pwd"
        ></mt-field>
        <mt-field
          @change="dbpwdfouce()"
          class="pwd"
          label="确认密码:"
          placeholder="请再次输入密码"
          type="password"
          v-model="registerInfo.dbpwd"
        ></mt-field>
        <mt-button class="registerbtn" type="danger" size="large" @click="register()">快速注册</mt-button>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "login",
      loginInfo: {},
      registerInfo: {},
      userflag: {
        usernameflag: false,
        usermobileflag: false,
        userpwdflag: false,
        userdbpwdflag: false
      },
      party: [
        { name: "QQ", icon: "&#xe614;" },
        {
          name: "微信",
          icon: "&#xe619;"
        },
        { name: "新浪微博", icon: "&#xe6e5;" },
        { name: "支付宝", icon: "&#xe665;" }
      ]
    };
  },
  methods: {
    login() {
      if(this.loginInfo.username&&this.loginInfo.pwd){
      this.$axios.post("/vue/login", this.loginInfo).then(res => {
        if (!!res.data.type) {
          window.sessionStorage.userInfo = JSON.stringify({
            token: res.data.token
          });
          window.localStorage.setItem("loginname", this.loginInfo.username);
          this.$router.push({ name: "home" });
        }
      });
      }else{
        this.$toast("账号或密码不正确")
      }
    },
    userfouce() {
      var userReg = /^[a-z_$][0-9a-z_$]{5,9}$/gi;
      if (userReg.test(this.registerInfo.username) == true) {
        this.userflag.usernameflag = true;
      } else {
        this.$toast("请输入由数字,字母_$组成的6-10位用户名,且首位为字母或_或$");
      }
    },
    mobilefouce() {
      var phoneReg = /^1[3456789][0-9]{9}$/g;
      if (phoneReg.test(this.registerInfo.mobile) == true) {
        this.userflag.usermobileflag = true;
      } else {
        this.$toast("请输入常见的手机号");
      }
    },
    pwdfouce() {
      var pwdReg = /^[0-9a-z]{6,12}$/gi;
      if (pwdReg.test(this.registerInfo.pwd) == true) {
        this.userflag.userpwdflag = true;
      } else {
        this.$toast("请输入由6-12位数字和字母组成的密码");
      }
    },
    dbpwdfouce() {
      if (this.registerInfo.pwd == this.registerInfo.dbpwd) {
        this.userflag.userdbpwdflag = true;
      } else {
        this.$toast("密码不相符");
      }
    },
    register() {
      if (this.userflag.usernameflag && this.userflag.usermobileflag && this.userflag.userpwdflag && this.userflag.userdbpwdflag) {
        this.$axios.post("/vue/register", this.registerInfo).then(res => {
          if (res.data.type == 1) {
            this.selected = "login";
          } else {
            this.selected = "register";
          }
          this.registerInfo = {};
        });
      }
    }
  }
};
</script>
<style scoped lang="scss">
.loginnav {
  padding-top: 0.8rem;
}
.mint-tab-container {
  background: #fff;
}
.loginicon {
  width: 2rem;
  height: 2rem;
  border: 3px solid red;
  border-radius: 50%;
  margin: 0.8rem auto;
  .icon {
    display: block;
    text-align: center;
    line-height: 2rem;
    color: red;
    font-size: 1rem;
  }
}
.pwd {
  border-bottom: 1px solid #e1e1e1;
}
.loginbtn {
  margin-top: 0.4rem;
}
.loginbottom {
  margin-top: 2rem;
  .loginbottom-top {
    .line {
      width: 36%;
      border-bottom: 1px solid #e1e1e1;
      float: left;
      margin: 0.18rem 0.2rem;
    }
    .party {
      font-size: 0.24rem;
      float: left;
      color: #aaa;
    }
  }
  ul {
    text-align: center;
    padding-bottom: 0.9rem;
    background-color: #fff;
    li {
      margin-top: 0.4rem;
      float: left;
      width: 25%;
      color: #aaa;
      .threelogin {
        font-size: 0.8rem;
      }
    }
  }
}
.registerbtn {
  margin-top: 0.4rem;
}
</style>
