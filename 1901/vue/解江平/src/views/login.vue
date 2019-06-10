<template>
  <div class="login">
    <header>
      <ul>
        <li class="fl">
          <a class="a1" @click="goback"></a>
        </li>
        <li class="ri">
          <a class="a2" @click="goRegis">注册</a>
        </li>
      </ul>
    </header>
    <div class="tab_nav">
      <p :class="c1" @click="showT">手机登录</p>
      <p :class="c2" @click="showF">账号登录</p>
    </div>
    <div class="contents">
      <div class="content1" v-if="show">
        <div class="box">
          <p class="phone">
            <input type="tel" maxlength="11" @change="checkphone" placeholder="手机号" v-model="mobile">
          </p>
          <p class="note">
            <input type="tel" maxlength="4" placeholder="短信验证码" v-model="code" >
            
            <mt-button class="button" @click="sendCode" :disabled="disabled"  v-html="txt" type="danger"></mt-button>
          </p>
        </div>
        <a class="login1" @click="gologin2">登录</a>
      </div>
      <div class="content2" v-else>
        <div class="box2">
          <p class="phone">
            <input type="tel" maxlength="11" placeholder="用户名" v-model="loginInfo1.tel">
          </p>
          <p class="pwd">
            <input :type="type2" placeholder="请输入密码" v-model="loginInfo1.password">
            <i @click="showpwd"></i>
          </p>
        </div>
        <a class="login1" @click="gologin1">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast,Button } from 'mint-ui';
export default {
  data() {
    return {
      show: true,
      c1: ["p1", "active"],
      c2: ["p2"],
      type: true,
      type2: "password",
      loginInfo1: {},
      num1: 0,
      txt:"获取验证码",
      count:60,
      disabled:false,
      timer:null,
      mobile:"",
      code:""
    };
  },
  methods: {
    showT() {
      this.show = true;
      this.c1 = ["p1", "active"];
      this.c2 = ["p2"];
    },
    showF() {
      this.show = false;
      this.c1 = ["p1"];
      this.c2 = ["p2", "active"];
    },
    goback() {
      this.$router.go(-1);
    },
    showpwd() {
      this.type = !this.type;
      this.type == true ? (this.type2 = "password") : (this.type2 = "text");
    },
    goRegis() {
      this.$router.push({ name: "register" });
    },
    checkphone(e) {
      var phone = e.target.value;
      var reg = /^1[3,5,7,8]\d{9}$/;
      if (reg.test(phone)) {
        this.num1 = 1;
        console.log("num====1")
        return true;
      } else {
        Toast({
          message: "手机号格式不正确",
          position: "center",
          duration: 800
        });
        this.num1 = 0;
        return false;
      }
    },
    calcTime(){
        if(!this.timer){
            this.timer = setInterval(()=>{
                if(this.count>0){
                    this.count--;
                    this.txt='倒计时 ' + this.count + ' s';
                    this.disabled=true   ;
   
                }else{
                    clearInterval(this.timer);
                    this.timer = null;
                   this.txt = "获取验证码";
                   this.count=60;
                   this.disabled = false   
                }
            },1000)
        }
    },
    gologin1() {
      this.$axios.post("/vue/login", this.loginInfo1).then(res => {
        // console.log(res);
        if (!!res.data.type) {
          window.sessionStorage.userInfo = JSON.stringify({
            token: res.data.token
          });
          window.sessionStorage.user = this.loginInfo1.tel;
          this.$router.push({name:"home"});
        }
      });
    },
    sendCode() {
      if (this.num1 == 1) {
        this.$axios
          .post("/vue/sendCode", {
            mobile: this.mobile
          })
          .then(res => {
            // console.log(res);
            this.calcTime();
          });
      }
    },
    gologin2() {
      if (this.num1 == 1) {
        this.$axios
          .post("/vue/testCode", {
            mobile: this.mobile,
            code: this.code
          })
          .then(res => {
              console.log(res)
            if (res.data.type == "1") {
              // var data = $.md5(this.refs.mobile.state.value+new Date());
              // console.log(data);
              // window.sessionStorage.mobile=this.mobile;
              // window.sessionStorage.username="this.mobile";
              window.sessionStorage.user = this.mobile;
              window.sessionStorage.userInfo = JSON.stringify({
            token: res.data.token
          });
              this.$router.push({name:"home"});
              // 加密
            } 
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  background: white;
  header {
    width: 100%;
    height: 44px;
    ul {
      li {
        display: block;
        width: 44px;
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        text-align: center;
        color: #444;
        .a1 {
          display: block;
          background-image: url(../assets/images/d1.png);
          background-position: -149px -131.5px;
          background-size: 330.5px;
          width: 44px;
          height: 44px;
        }
        .a2 {
          font-size: 14px;
          color: #999;
        }
      }
      .fl {
        float: left;
      }
      .ri {
        float: right;
      }
    }
  }
  .tab_nav {
    overflow: hidden;
    margin: 80px 0 50px;
    > p {
      overflow: hidden;
      display: inline-block;
      width: 50%;
      font-size: 24px;
      color: #ccc;
      box-sizing: border-box;
    }
    .p2 {
      position: relative;
    }
    .p2::before {
      content: "";
      position: absolute;
      left: 0;
      top: 7px;
      width: 1px;
      height: 20px;
      background: #d8d8d8;
    }
    .active {
      color: #666;
      font-weight: 700;
    }
  }
  .contents {
    padding: 0 7.5%;
    .content1 {
      .box {
        p {
          height: 44px;
          border-bottom: 1px solid #ededed;
          position: relative;
          margin-bottom: 25px;
          input {
            width: 82%;
            font-size: 14px;
            height: 44px;
            border: none;
            outline: 0;
            float: left;
          }
        }
        .note {
          position: relative;
          .button{
            display: inline-block;
            width: 90px;
            height: 44px;
            line-height: 44px;
            position: absolute;
            right: 0;
            font-size: 12px;
            color: #999;
          }
        }
      }
      .login1 {
        width: 100%;
        margin: 45px auto 0;
        line-height: 44px;
        background: #aaa;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        text-align: center;
        display: block;
        height: 44px;
        color: #ccaa7a;
        background-image: linear-gradient(-180deg, #3a3a3a 0, #1c1c1c 100%);
      }
    }
    .content2 {
      .box2 {
        p {
          height: 44px;
          border-bottom: 1px solid #ededed;
          position: relative;
          margin-bottom: 25px;
          input {
            width: 82%;
            font-size: 14px;
            height: 44px;
            border: none;
            outline: 0;
            float: left;
          }
        }
        .pwd {
          i {
            position: absolute;
            right: 2.67%;
            top: 16px;
            display: block;
            background-image: url(../assets/images/a.png);
            background-position: -119px -349px;
            background-size: 443px;
            width: 16px;
            height: 11.5px;
          }
        }
      }
      .login1 {
        width: 100%;
        margin: 45px auto 0;
        line-height: 44px;
        background: #aaa;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        text-align: center;
        display: block;
        height: 44px;
        color: #ccaa7a;
        background-image: linear-gradient(-180deg, #3a3a3a 0, #1c1c1c 100%);
      }
    }
  }
}
</style>
