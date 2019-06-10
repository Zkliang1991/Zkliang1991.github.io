<template>
  <div>
    <Head></Head>
    <div class="kong"></div>
    <van-tabs v-model="active">
      <van-tab title="登录">
        <van-cell-group>
          <van-field
            v-model="loginInfo.username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
          />

          <van-field
            v-model="loginInfo.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
          <van-button type="primary" size="large" @click="goLogin">登录</van-button>
        </van-cell-group>
      </van-tab>
      <van-tab title="注册">
        <van-field v-model="regInfo.username1" label="用户名" placeholder="请输入用户名" required/>
        <van-field
          v-model="regInfo.password1"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
        <van-field
          v-model="regInfo.password2"
          type="password"
          label="密码"
          placeholder="请再次输入密码"
          required
        />
        <van-button type="danger" size="large" @click="goRegister">注册</van-button>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Toast } from "vant";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      active: 0
    };
  },
  computed: {
    ...mapState(["loginInfo", "regInfo"]),
    username: {
      get() {
        return this.$store.state.loginInfo.username;
      },
      set(val) {
        this.$store.commit("Username", val);
      }
    },
    password: {
      get() {
        return this.$store.state.password;
      },
      set(val) {
        this.$store.commit("Password", val);
      }
    },
    username1: {
      get() {
        return this.$store.state.regInfo.username1;
      },
      set(val) {
        this.$store.commit("Username1", val);
      }
    },
    password1: {
      get() {
        return this.$store.state.password1;
      },
      set(val) {
        this.$store.commit("Password1", val);
      }
    },
    password2: {
      get() {
        return this.$store.state.password2;
      },
      set(val) {
        this.$store.commit("Password2", val);
      }
    }
  },
  methods: {
    goLogin() {
      console.log(this.loginInfo);
      this.$axios.post("/vue/login", this.loginInfo).then(res => {
        //console.log(res);
        if (!!res.data.type) {
          window.sessionStorage.userInfo = JSON.stringify({token:res.data.token});
          this.$router.push({ name: "home" });
        } else {
          Toast("用户名或密码错误请重新登陆~");
        }
      });
    },
    goRegister() {
      var usernameReg = /^[a-zA-Z]{3,8}$/;
      var passwordReg = /^[a-zA-Z0-9]{4,12}$/;
      // this.$axios.post("/vue/register", this.regInfo).then(res => {})
      //console.log(res.data);
      if (usernameReg.test(this.regInfo.username1)) {
        if (passwordReg.test(this.regInfo.password1)) {
          if (this.regInfo.password1 == this.regInfo.password2) {
            this.$axios.post("/vue/register", this.regInfo).then(res => {
              if (res.data.code == 100) {
                Toast("用户名已存在");
              } else {
                Toast("注册成功");
                this.active = 0;
               // console.log(res.data);
              }
            });

            //console.log(res.data)
          } else {
            Toast("两次输入密码不一致");
          }
        } else {
          Toast("密码不合法");
        }
      } else {
        Toast("用户名不合法");
      }
    }
  }
};
</script>

<style>
.kong {
  width: 100%;
  height: 46px;
}
</style>
