<template>
  <div>
    <Head title="登陆注册" :searchShow="false" :backShow="false"></Head>
    <nut-tab @tab-switch="tabSwitch" style="margin-top:30px;">
      <nut-tab-panel tabTitle="登陆" positionNav="bottom">
        <nut-textinput
          v-model="loginInfo.username"
          label="用户名："
          placeholder="请输入用户名"
          :clearBtn="true"
          :disabled="false"
        ></nut-textinput>
        <nut-textinput placeholder="请输入密码" v-model="loginInfo.userpwd" label="密码框：" type="password"></nut-textinput>
        <nut-button block shape="circle" @click="login()" style="margin-top:30px;">登录</nut-button>
      </nut-tab-panel>
      <nut-tab-panel tabTitle="注册">
        <nut-textinput
          v-model="zhuceInfo.username"
          label="用户名："
          placeholder="请输入用户名"
          :clearBtn="true"
          :disabled="false"
        ></nut-textinput>
        <nut-textinput
          v-model="zhuceInfo.usertel"
          label="手机号："
          placeholder="请输入手机号"
          type="tel"
          maxlength="11"
          :clearBtn="true"
          :disabled="false"
        ></nut-textinput>
        <nut-textinput placeholder="请输入密码" v-model="zhuceInfo.userpwd" label="密码框：" type="password"></nut-textinput>
        <nut-button block @click="zhuce()" style="margin-top:20px;">注册</nut-button>
      </nut-tab-panel>
    </nut-tab>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      loginInfo: {
        username: null,
        userpwd: null
      },
      zhuceInfo: {
        username: null,
        userpwd: null,
        usertel: null
      }
    };
  },
  methods: {
    tabSwitch: function(index, event) {
      console.log(index + "--" + event.target);
    },
    login() {
      // var reg = {
      //   // userid: /^[A-Za-z0-9]+$/, //邮箱正则验证
      //   phone: /^1(3|4|5|7|8)\d{9}$/, //手机号正则验证
      //   cards: /^[\u4e00-\u9fa5]{2,4}$/ //姓名汉字正则验证
      // };
      let str = /^[\u4e00-\u9fa5]{2,6}$/;
      let phone = /^1(3|4|5|7|8)\d{9}$/;
      console.log(this.loginInfo);
      if (str.test(this.loginInfo.username)) {
        this.$store.state.userName = this.loginInfo.username;
        localStorage.username = this.loginInfo.username;
        this.$axios.post("/vue/login", this.loginInfo).then(res => {
          console.log(res.data);
          if (!!res.data.type) {
            window.sessionStorage.userInfo = JSON.stringify({
              token: res.data.token
            });
            Toast.success("登陆成功");
            this.$router.push({ name: "home" });
          }
        });
      } else {
        Toast.fail("请输入正确用户名");
      }
    },
    zhuce() {
      let str = /^[\u4e00-\u9fa5]{2,4}$/;
      let phone = /^1(3|4|5|7|8)\d{9}$/;
      let pwd = /^[a-zA-Z]\w{5,17}$/;
      if (str.test(this.zhuceInfo.username)) {
        if (phone.test(this.zhuceInfo.usertel)) {
          if (pwd.test(this.zhuceInfo)) {
            console.log(this.zhuceInfo);
            this.$axios.post("/vue/zhuce", this.zhuceInfo).then(res => {
              console.log(res.data.type);
              if (res.data.type == 1) {
                Toast.success("登陆成功");
                this.$router.push({ name: "login" });
              }
            });
          } else {
            Toast.fail("密码以字母开头，长度在6~18之间，只能包含字符、数字和下划线");
          }
        } else {
          Toast.fail("请输入正确十一位手机号");
        }
      } else {
        Toast.fail("请输入正确姓名");
      }
    }
  }
};
</script>

