<template>
  <div>
    <Head title="登录&&注册" :show="true" z-index="9999"></Head>

    <div id="container_demo">
      <a class="hiddenanchor" id="toregister"></a>
      <a class="hiddenanchor" id="tologin"></a>
      <div id="wrapper">
        <div id="login" class="animate form">
          <h1>Log in</h1>
          <p>
            <label for="username" class="uname">用户名</label>
            <input id="username" v-model="loginInfo.username" type="text" placeholder="请输入用户名">
          </p>
          <p>
            <label for="password" class="youpasswd">密码</label>
            <input id="password" v-model="loginInfo.pwd" type="password" placeholder="请输入密码">
          </p>

          <p class="login button">
            <input type="submit" value="登录" @click="login()">
          </p>
          <p class="change_link">
            是不是没有用户名 ?
            <a href="#toregister" class="to_register">马上注册</a>
          </p>
        </div>

        <div id="register" class="animate form">
          <h1>Sign up</h1>
          <p>
            <label for="usernamesignup" class="uname">用户名</label>
            <input
              id="usernamesignup"
              v-model="rigisterInfo.username"
              type="text"
              placeholder="6-10位不能以数字开头"
            >
          </p>
          <p>
            <label for="emailsignup" class="yourtel">手机号</label>
            <input
              type="tel"
              class="inputN"
              v-model="rigisterInfo.mobile"
              oninput="if(value.length>11) value=value.slice(0,11)"
              placeholder="常见的11位常见手机号"
            >
          </p>
          <p>
            <label for="passwordsignup" class="youpasswd">密码</label>
            <input
              id="passwordsignup"
              v-model="rigisterInfo.pwd"
              type="password"
              placeholder="长度6到12位数字和字母组成"
            >
          </p>
          <p>
            <label for="passwordsignup_confirm" class="youpasswd">确认密码</label>
            <input
              id="passwordsignup_confirm"
              type="password"
              placeholder="确认密码"
              v-model="rigisterInfo.dbpwd"
            >
          </p>
          <p class="keeplogin">
            <input
              type="checkbox"
              name="loginkeeping"
              v-model="flag"
              id="loginkeeping"
              value="loginkeeping"
              @click="a()"
            >
            <label for="loginkeeping">请点击我们的服务条款协议</label>
          </p>
          <p class="signin button">
            <input type="submit" value="注册" @click="register()">
          </p>
          <p class="change_link">
            已经有用户名 ?
            <a href="#tologin" class="to_register">马上登陆</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      zt1: "error",
      zt2: "error",
      zt3: "error",
      zt4: "error",
      loginInfo: {},
      rigisterInfo: {},
      flag: false,
      title: "提示"
    };
  },
  methods: {
    a() {
      console.log(this.flag);
    },
    login() {
      console.log(this.loginInfo);
      this.$axios.post("/vue/login", this.loginInfo).then(res => {
        this.rigisterInfo = {};
        console.log(res.data);
        if (!!res.data.type) {
          window.sessionStorage.userInfo = JSON.stringify({
            token: res.data.token
          });
          localStorage.setItem("loginName", this.loginInfo.username);
          var url=window.sessionStorage.url;
          if (url) {
              this.$router.push({ name:url});
              sessionStorage.removeItem("url")
          } else {
            this.$router.push({ name: "my" });
          }
        }
      });
    },
    // register() {
    //   this.$axios.post("/vue/register", this.rigisterInfo).then(res => {
    //     this.rigisterInfo = {};
    //     console.log(res.data);
    //     if (res.data.type == 1) {
    //       window.location.href = "#tologin";
    //     } else {
    //       window.location.href = "#toregister";
    //     }
    //   });
    // }
    register() {
      console.log(132);
      var userReg = /^[a-z_$][0-9a-z_$]{5,9}$/gi;
      var phoneReg = /^1[3456789][0-9]{9}$/g;
      var pwdReg = /^[0-9a-z]{6,12}$/gi;
      if (userReg.test(this.rigisterInfo.username) == true) {
        this.zt1 = "success";
        if (phoneReg.test(this.rigisterInfo.mobile) == true) {
          this.zt2 = "success";
          if (pwdReg.test(this.rigisterInfo.pwd) == true) {
            this.zt3 = "success";
            console.log(666666);
            if (this.rigisterInfo.pwd == this.rigisterInfo.dbpwd) {
              this.zt4 = "success";
              if (this.flag == true) {
                this.$axios
                  .post("/vue/register", this.rigisterInfo)
                  .then(res => {
                    this.rigisterInfo = {};
                    console.log(res.data);
                    if (res.data.type == 1) {
                      window.location.href = "#tologin";
                    } else {
                      window.location.href = "#toregister";
                    }
                  });
              } else {
                Dialog.alert({
                  title: "提醒",
                  message: "请勾选我们的服务协议"
                });
              }
            } else {
              Dialog.alert({
                title: "提醒",
                message: "两次的密码不一致"
              });
            }
          } else {
            Dialog.alert({
              title: "提醒",
              message: "密码不合法"
            });
          }
        } else {
          Dialog.alert({
            title: "提醒",
            message: "手机号不合法"
          });
        }
      } else {
        Dialog.alert({
          title: "提醒",
          message: "用户名不合法"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#subscribe,
#login {
  position: absolute;
  top: 0.8rem;
  width: 88%;
  padding: 18px 6% 60px 6%;
  margin: 0 0 35px 0;
  background: rgb(247, 247, 247);
  border-radius: 5px;
}
#login {
  z-index: 22;
}
#subscribe,
#register {
  position: absolute;
  top: 0.8rem;
  width: 88%;
  padding: 18px 6% 60px 6%;
  margin: 0 0 35px 0;
  background: rgb(247, 247, 247);
  border-radius: 5px;
}
#register {
  z-index: 22;
}

/**** general text styling ****/
#wrapper h1 {
  font-size: 48px;
  color: rgb(6, 106, 117);
  padding: 2px 0 10px 0;
  font-family: "FranchiseRegular", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
  text-align: center;
  padding-bottom: 30px;
}

/** For the moment only webkit supports the background-clip:text; */
#wrapper h1 {
  background: -webkit-repeating-linear-gradient(
    -45deg,
    rgb(18, 83, 93),
    rgb(18, 83, 93) 20px,
    rgb(64, 111, 118) 20px,
    rgb(64, 111, 118) 40px,
    rgb(18, 83, 93) 40px
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

#wrapper h1:after {
  content: " ";
  display: block;
  width: 100%;
  height: 2px;
  margin-top: 10px;
  background: linear-gradient(
    left,
    rgba(147, 184, 189, 0) 0%,
    rgba(147, 184, 189, 0.8) 20%,
    rgba(147, 184, 189, 1) 53%,
    rgba(147, 184, 189, 0.8) 79%,
    rgba(147, 184, 189, 0) 100%
  );
}

/**** advanced input styling ****/
/* placeholder */
::-webkit-input-placeholder {
  color: rgb(190, 188, 188);
  font-style: italic;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  color: rgb(190, 188, 188);
  font-style: italic;
}
input {
  outline: none;
}

/* all the input except submit and checkbox */
#wrapper input:not([type="checkbox"]) {
  width: 92%;
  margin-top: 4px;
  padding: 10px 5px 10px 32px;
  border: 1px solid rgb(178, 178, 178);
  box-sizing: content-box;
  border-radius: 3px;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  transition: all 0.2s linear;
}
#wrapper input:not([type="checkbox"]):active,
#wrapper input:not([type="checkbox"]):focus {
  border: 1px solid rgba(91, 90, 90, 0.7);
  background: rgba(238, 236, 240, 0.2);
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.9) inset;
}

/** the magic icon trick ! **/
[data-icon]:after {
  content: attr(data-icon);
  font-family: "FontomasCustomRegular";
  color: rgb(106, 159, 171);
  position: absolute;
  left: 10px;
  top: 35px;
  width: 30px;
}

/*styling both submit buttons */
#wrapper p.button input {
  width: 30%;
  cursor: pointer;
  background: rgb(61, 157, 179);
  padding: 8px 5px;
  font-family: "BebasNeueRegular", "Arial Narrow", Arial, sans-serif;
  color: #fff;
  font-size: 24px;
  border: 1px solid rgb(28, 108, 122);
  margin-bottom: 10px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  box-shadow: 0px 1px 6px 4px rgba(0, 0, 0, 0.07) inset,
    0px 0px 0px 3px rgb(254, 254, 254), 0px 5px 3px 3px rgb(210, 210, 210);
  transition: all 0.2s linear;
}
#wrapper p.button input:hover {
  background: rgb(74, 179, 198);
}
#wrapper p.button input:active,
#wrapper p.button input:focus {
  background: rgb(40, 137, 154);
  position: relative;
  top: 1px;
  border: 1px solid rgb(12, 76, 87);
  box-shadow: 0px 1px 6px 4px rgba(0, 0, 0, 0.2) inset;
}
p.login.button,
p.signin.button {
  text-align: right;
  margin: 5px 0;
}

/* styling the checkbox "keep me logged in"*/
.keeplogin {
  margin-top: -5px;
}
.keeplogin input,
.keeplogin label {
  display: inline-block;
  font-size: 12px;
  font-style: italic;
}
.keeplogin input#loginkeeping {
  margin-right: 5px;
  margin-top: 20px;
}
.keeplogin label {
  width: 80%;
  font-size: 16px;
  color: red;
}

p.change_link {
  position: absolute;
  color: rgb(127, 124, 124);
  left: 40px;
  height: 20px;
  /* width: 373px; */
  padding: 17px 30px 20px 30px;
  font-size: 16px;
  text-align: center;
  border-top: 1px solid rgb(219, 229, 232);
  border-radius: 0 0 5px 5px;
  /* background: rgb(225, 234, 235); */
  /* background: repeating-linear-gradient(-45deg, 
	rgb(247, 247, 247) , 
	rgb(247, 247, 247) 15px, 
	rgb(225, 234, 235) 15px, 
	rgb(225, 234, 235) 30px, 
	rgb(247, 247, 247) 30px
	); */
}
#wrapper p.change_link a {
  display: inline-block;
  font-weight: bold;
  background: rgb(247, 248, 241);
  padding: 2px 6px;
  color: rgb(29, 162, 193);
  margin-left: 10px;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid rgb(203, 213, 214);
  transition: all 0.4s linear;
}
#wrapper p.change_link a:hover {
  color: rgb(57, 191, 215);
  background: rgb(247, 247, 247);
  border: 1px solid rgb(74, 179, 198);
}
#wrapper p.change_link a:active {
  position: relative;
  top: 1px;
}

#register {
  z-index: 21;
  opacity: 0;
}

#toregister:target ~ #wrapper #register,
#tologin:target ~ #wrapper #login {
  z-index: 22;
  animation-name: fadeInLeft;
  animation-delay: 0.1s;
}

.animate {
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

#toregister:target ~ #wrapper #login,
#tologin:target ~ #wrapper #register {
  animation-name: fadeOutLeftBig;
}

@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    transform: translateX(-20px);
  }
}
</style>




