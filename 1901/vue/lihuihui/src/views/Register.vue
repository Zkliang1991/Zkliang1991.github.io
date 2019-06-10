<template class='loginBox '>
    <div >
          <Header :title="title"></Header>
          <div v-if='quickLoginShow'>
              <div class='lognInnerBox content'>
                  <div class='boxOuter'>
                    <p> <span> 用户名:</span><input id="username" v-model='loginInfo.username' placeholder="请输入用户名" @blur="leaveusername"><br /></p>
                    <div class='tishi' v-show='flagusername'>用户名已存在</div>
                  </div>
                  <div class='boxOuter'>
                    <p><span> 手机号:</span><input id="usertel" type='tel' v-model='loginInfo.tel' placeholder="请输入手机号" @blur='leavetel'></p>
                    <div class='tishi' v-show='flagtel'>请输入正确的手机号</div>
                  </div>
                  <div class='boxOuter'>
                   <p> <span> 密码:</span><input id="userpwd1" type='text' v-model='loginInfo.pwd' placeholder="最少6位（必须包含数字字母特殊字符）" @blur='leavepwd'></p> 
                    <div class='tishi' v-show='flagpwd'>密码格式错误</div>
                  </div>
                  <div class='boxOuter'>
                   <p> <span> 确认密码:</span> <input id="userpwd2" type='text' v-model='userpwd2'  @blur='leavepwd2' placeholder="请确认密码"></p>
                    <div class='tishi' v-show='flagpwd2' >密码不一致</div>
                  </div>

                <mt-button  @click="register" size="large" type="primary" style='margin-top:.2rem'>注册</mt-button>
                
              </div>
              <van-tabbar>
                <van-tabbar-item @click='toLogin'>去登录</van-tabbar-item>
   
              </van-tabbar>
          </div>  
          <div id='tishi'></div>      
    </div>
</template>
<script>
export default {
  data() {
    return {
      title: "注册",
      quickLoginShow: true,
      loginInfo: {},
      userpwd2: "",
      flagusername: false,
      flagpwd: false,
      flagtel: false,
      flagpwd2: false,
      flag: false
    };
  },

  methods: {
    leaveusername() {
      this.$axios
        .get("/vue/userRegister", {
          params: {
            username: this.loginInfo.username
          }
        })
        .then(res => {
          if (res.data.type == 1) {
            //buketong
            this.flagusername = true;
            this.flag = false;
            return false;
          } else {
            this.flagusername = false;
            this.flag = true;
          }
          console.log(res);
        });
    },
    leavetel() {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.loginInfo.tel)) {
        this.flagtel = true;
        return false;
      } else {
        this.flagtel = false;
        return true;
      }
    },
    leavepwd() {
      var myreg = /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{8,}/;
      if (!myreg.test(this.loginInfo.pwd)) {
        this.flagpwd = true;
        return false;
      } else {
        this.flagpwd = false;
        return true;
      }
    },
    leavepwd2() {
      if (this.userpwd2 == this.loginInfo.pwd) {
        this.flagpwd2 = false;
        return true;
      } else {
        console.log("此次哦");
        this.flagpwd2 = true;
        return false;
      }
    },
    register() {
      console.log("dnjkvdjkfjkdfjk");
      console.log(this.loginInfo);
      if (this.flag && this.leavepwd && this.leavetel && this.leavepwd2) {
        this.$axios
          .post("/vue/register", {
            data: this.loginInfo
          })
          .then(res => {
            console.log("success");
            console.log(res);
          });
      }
    },
    toLogin() {
      this.title = "登录";
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style lang='scss' scoped>
.loginBox {
  background: #fff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.lognInnerBox {
  background-color: #fff;
  font-size: 14px;
  padding: 0.2rem 0 0.5rem 0;
  .boxOuter {
    margin: 0.1rem;
    height: 0.9rem;
    //   border:.8px solid #cccccc;
    line-height: 0.8rem;
    div {
      width: 5rem;
      height: 0.5rem;
      text-align: center;
      line-height: 0.5rem;
      color: #f44;
      margin-left: 0.1rem;
    }
    span {
      display: inline-block;
      // border:1px solid red;
      width: 1.2rem;
      text-align: left;
    }
    input {
      text-align: left;
      width: 5.5rem;
      font-size: 8px;
      //   border: 1px solid #ccc;
    }
  }
}
.swiper-container {
  width: 300px;
  height: 300px;
  padding: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}
.van-tabbar--fixed {
  position: relative;
  margin-top: 0.2rem;
}
.van-tabbar-item--active {
  color: #7d7e80;
}
mint-button .mint-button--large {
}
.van-tabbar--fixed {
  position: relative;
  position: fixed;
  bottom: 4.3rem;
  margin-top: 0.2rem;
}
.mint-button--primary {
  background: #f44;
  position: absolute;
  bottom: -1.5rem;
}
.tishi {
  position: fixed;
}
</style>

