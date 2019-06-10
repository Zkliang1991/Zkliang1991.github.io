<template>
  <div>
    <Head title="注册" :show="true"></Head>
    <div class="info">
      <img src="@/assets/img/8.png" alt>
    </div>
    <div class="input">
      <van-cell-group>
        <van-field
          placeholder="请输入用户名"
          label="用户名"
          left-icon="contact"
          v-model="rigisterInfo.username"
          name="username"
          v-validate="'required|name'"
          :error="errors.has('username')"
          :error-message="errors.first('username')"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          placeholder="请输入密码"
          type="password"
          label="密码"
          left-icon="browsing-history-o"
          v-model="rigisterInfo.pwd"
          name="password"
          v-validate="'required|pwd'"
          :error="errors.has('password')"
          :error-message="errors.first('password')"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          placeholder="请输入手机号"
          label="手机号"
          left-icon="phone-o"
          v-model="rigisterInfo.tel"
          name="phone"
          v-validate="'required|mobile'"
          :error="errors.has('phone')"
          :error-message="errors.first('phone')"
        />
      </van-cell-group>

      <mt-button type="danger" size="large" @click="gotoRegister()">注册</mt-button>
    </div>
  </div>
</template>

<script>
import { Validator } from 'vee-validate';

export default {
  data() {
    return {
      selected: "",
      rigisterInfo: {}
    };
  },
  methods: {
    
    gotoRegister() {
      this.$validator.validateAll().then((required) => {
 if(required){
   this.$axios.post("/vue/register", this.rigisterInfo).then(res => {
        if (!!res.data.type) {
          this.$router.push({ name: "login" });
        }
      });
  // ...
 }
})
      
    }
  }
};
</script>



<style scoped>
.input {
  margin-top: 0.9rem;
}
.mint-button {
  margin-top: 0.5rem !important;
  display: inline-block;
}
.info {
  text-align: center;
  margin-top: 40px;
}
.info img {
  display: inline;
  height: 60px;
  margin-top: 40px;
}
</style>