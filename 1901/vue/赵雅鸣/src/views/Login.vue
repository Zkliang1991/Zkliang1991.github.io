<template>
  <div>
    <Head title="登入&&注册" :flag="true"></Head>
    <van-tabs v-model="active">
      <van-tab title="登录">
        <van-cell-group>
          <van-field
            v-model="loginInfo.username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名或者手机号"
            @click-right-icon="$toast('没有请注册')"
          />

          <van-field
            v-model="loginInfo.Password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
          <van-button type="primary" size="large" @click="login">登入</van-button>
        </van-cell-group>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field
            v-model="rigisterInfo.username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名或者手机号"
          />
          <van-field
            v-model="rigisterInfo.nickname"
            type="tel"
            label="你的昵称"
            placeholder="请输入昵称"
            required
          />
          <van-field
            v-model="rigisterInfo.usertel"
            type="tel"
            label="手机号"
            placeholder="请输入手机号"
            required
          />
          <van-field
            v-model="rigisterInfo.Password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
          <van-button type="primary" size="large" @click="register">注册</van-button>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      active: 0,
      loginInfo: {},
      rigisterInfo: {}
    };
  },
  watch: {
    active(newVal) {}
  },
  mounted() {
    this.active = this.$route.params.active;
  },
  methods: {
    register() {
      this.$axios.post("/vue/register",this.rigisterInfo).then(res=>{
        console.log(res.data)
        if(res.data.type=="1"){
          this.active=0
        }
      })
    },
    login() {
      this.$axios.post("/vue/login", this.loginInfo).then(res => {
        console.log(res.data);
        if (!!res.data.type) {
          window.sessionStorage.userInfo = JSON.stringify({
            token: res.data.token
          });
          window.sessionStorage.username= res.data.username
          this.$router.go(-1)
        }
      });
    }
  }
};
</script>
