<template>
  <div class="loginBox">
    <van-nav-bar title="登录"/>
    <van-cell-group style=" overflow: hidden;">
      <van-field
        style="margin-top:1rem"
        v-model="logininfo.username"
        type="text"
        label="用户名"
        placeholder="请输入用户名"
        left-icon="contact"
        :error="flag"
        :clearable="flag"
      />
      <van-field
        v-model="logininfo.userpwd"
        type="password"
        label="密码"
        placeholder="请输入密码"
        left-icon="question-o"
        :error="flag"
        :clearable="flag"
      />
    </van-cell-group>
    <van-button round size="large" style="margin-top:4.2rem" @click="login">登录</van-button>
    <van-button round size="large" @click="showd">快速注册</van-button>
    <van-popup v-model="show" position="right" :overlay="false">
      <van-nav-bar style="color:black" title="注册" left-arrow>
        <div slot="left">
          <i class="van-icon van-icon-arrow-left" @click="showd"></i>
        </div>
      </van-nav-bar>
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
          right-icon="question-o"
          @click-right-icon="$toast('用户名由六到十位数组成,首字母需大写')"
          error
          @input="reName"
          :error-message="errorinfo.errname"
        />

        <van-field
          v-model="userpwd"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
          clearable
          error
          @input="rePwd"
          :error-message="errorinfo.errpwd"
        />
        <van-field
          v-model="usertel"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
          right-icon="question-o"
          @click-right-icon="$toast('请输入常用手机号')"
          error
          @input="reTel"
          :error-message="errorinfo.errtel"
        />
        <van-field
          v-model="usereml"
          required
          clearable
          label="邮箱"
          placeholder="请输入邮箱"
          right-icon="question-o"
          @click-right-icon="$toast('请输入常用邮箱')"
          error
          @input="reEml"
          :error-message="errorinfo.erreml"
        />
        <van-button round size="large" style="margin-top:4rem" @click="register">注册</van-button>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      flag: false,
      logininfo: {},

      show: false,
      inputVal: true,
      errorinfo: {}
    };
  },
  methods: {
    ...mapMutations(["Username", "Usereml", "Userpwd", "Usertel"]),
    login() {
      this.$axios.post("/vue/login", this.logininfo).then(res => {
        console.log(res.data);
        if (!!res.data.type) {
          window.sessionStorage.userInfo = JSON.stringify({
            token: res.data.token
          });
          console.log(res.data.token);
          this.$router.push({ name: "home" });
        }
      });
    },

    showd() {
      return (this.show = !this.show);
    },
    reName(val) {
      var usernameReg = /^[A-Z]{1}[A-z0-9_$]{5,10}$/g;
      if (usernameReg.test(val)) {
        this.errorinfo.errname = "√";
        this.inputVal = true;
      } else {
        this.errorinfo.errname = "用户名格式错误";
        this.inputVal = false;
      }
    },
    rePwd(val) {
      var userpwdReg = /^[A-Za-z0-9_$]{5,10}/;
      if (userpwdReg.test(val)) {
        this.errorinfo.errpwd = "√";
        this.inputVal = true;
      } else {
        this.errorinfo.errpwd = "密码格式错误";
        this.inputVal = false;
      }
    },
    reTel(val) {
      var usertelReg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (usertelReg.test(val)) {
        this.errorinfo.errtel = "√";
        this.inputVal = true;
      } else {
        this.errorinfo.errtel = "请输入常用手机号";
        return (this.inputVal = false);
      }
    },
    reEml(val) {
      var useremlReg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
      if (useremlReg.test(val)) {
        this.errorinfo.erreml = "√";
        this.inputVal = true;
      } else {
        this.errorinfo.erreml = "请输入常用邮箱";
        this.inputVal = false;
      }
    },
    register() {
      console.log(this.userpwd);
      if (this.userpwd && this.username && this.usertel && this.usereml) {
        if (this.inputVal === true) {
          this.$axios
            .post("/vue/register", {
              username: this.username,
              userpwd: this.userpwd,
              usertel: this.usertel,
              usereml: this.usereml
            })
            .then(res => {
              console.log(res.data);
              if (res.data.type == 0) {
                this.$toast.fail(res.data.msg);
              } else if (res.data.type == 1) {
                this.$toast.success("注册成功");
                // window.location.reload();
              }
            });
        } else {
          this.$toast.fail("查看红色提示");
        }
      } else {
        this.$toast.fail("请输入内容");
      }
    }
  },
  computed: {
    ...mapState(["userpwd", "usertel", "usereml", "username"]),
    username: {
      set(val) {
        this.$store.commit("Username", val);
      },
      get() {
        return this.$store.state.username;
      }
    },
    userpwd: {
      get() {
        return this.$store.state.userpwd;
      },
      set(val) {
        this.$store.commit("Userpwd", val);
      }
    },
    usertel: {
      get() {
        return this.$store.state.usertel;
      },
      set(val) {
        this.$store.commit("Usertel", val);
      }
    },
    usereml: {
      get() {
        return this.$store.state.usereml;
      },
      set(val) {
        this.$store.commit("Usereml", val);
      }
    }
  }
};
</script>


<style lang="css" scoped>
.loginBox {
  width: 100%;
  height: 100%;
  background-image: url(../assets/images/bizhi.gif);
  background-size: 100% 100%;
  text-align: center;
}
.van-button {
  width: 88%;
  background: linear-gradient(180deg, #00000081, #ace1f1, #00000005);
  margin-top: 10px;
}

.van-nav-bar,
.van-ellipsis,
.van-cell-group,
.van-field {
  background-color: transparent !important;
  color: #eee;
  font-size: 18px;
}

.van-cell {
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
}

.van-popup {
  width: 100%;
  height: 100%;
  background-image: url(../assets/images/beijing.jpg);
  background-size: 100% 100%;
}
</style>
