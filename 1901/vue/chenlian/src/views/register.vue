<template>
  <div>
    <div class="header-top">
    <Head title="注册" :show="true" :searchShow="true" v-if="true"></Head>
    </div>
    
    <div class="users"></div>

    <div class="login">
      <van-cell-group>
        <van-field
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="中文/英文/手机号/邮箱"
          @click-right-icon="$toast(question)"
          v-model="rigisterInfo.username"
          @blur="sname"
        />
        <van-field
          clearable
          type="password"
          label="密码"
          placeholder="请输入6-12位密码"
          v-model="rigisterInfo.password"
          @blur="cpwd"
        />
        <van-field
          clearable
          type="password"
          label="确认密码"
          placeholder="请输入6-12位密码"
          v-model="rigisterInfotwo.twopassword"
        />
      </van-cell-group>
    </div>
    <div class="smg">
      <van-cell-group>
        <van-field
          id="psms"
          ref="psms"
          v-model="sms"
          center
          clearable
          label="验证码"
          placeholder="请输入验证码"
          @blur="csms"
        >
          <van-button
            slot="button"
            size="small"
            type="primary"
            class="smgnum"
            ref="code"
            @click="umsg"
          >{{msg}}</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <div class="btn">
      <van-button
        plain
        hairline
        type="primary"
        @click="register"
        class="register"
        ref="register"
        size="large"
      >用户注册</van-button>
      <van-button
        plain
        hairline
        type="primary"
        @click="gotologin"
        class="login"
        ref="login"
        size="large"
      >已有账户，直接登陆</van-button>
    </div>


  </div>
</template>

<script>

import { Toast } from "vant";
export default {
  data() {
    return {
      question:
        "用户名为中英文和数字的组合或手机号码，不能以下划线开头，密码不能为中文",
      sms: "",
      loginInfo: {},
      rigisterInfo: {},
      rigisterInfotwo:{},
      yzmzf: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
      ],
      usersim: /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/, //中英文
      usersemil: /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})$/, //邮箱
      userstel: /^(((13|14|15|18|17)\d{9}))$/, //手机号
    //   userstelemil: /(^[w.-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*.)+[a-z]{2,3}$)|(^1[3|4|5|8]d{9}$)/, //邮箱手机号
      msg: "",
      newmsg: "",
      nxetlogin: false,
      registernext: false
    };
  },
  computed: {
  },
  watch: {
  },
  mounted() {
    // console.log("refs", this.$refs.code);
    for (var y = 0; y < 4; y++) {
      var wzindex = parseInt(Math.random() * (this.yzmzf.length - 1));
      this.msg += this.yzmzf[wzindex];
    }
    // console.log(this.msg);
  },
  methods: {
    // 生成验证码
    umsg() {
      for (var y = 0; y < 4; y++) {
        var wzindex = parseInt(Math.random() * (this.yzmzf.length - 1));
        this.newmsg += this.yzmzf[wzindex];
      }
      this.msg = "";
      this.msg = this.newmsg;
      this.newmsg = "";
      console.log(this.msg);
    },
    // 校验验证码
    csms() {
      console.log(this.$refs.psms.value);
      if (this.$refs.psms.value !== "") {
        if (this.$refs.psms.value == this.msg) {
          console.log("验证码正确");
          // 验证码正确可以点击登陆
          this.nxetlogin = true;
        } else {
          // 输入不正确清空输入内容，新生成验证码
          this.sms = "";
          for (var y = 0; y < 4; y++) {
            var wzindex = parseInt(Math.random() * (this.yzmzf.length - 1));
            this.newmsg += this.yzmzf[wzindex];
          }
          this.msg = "";
          this.msg = this.newmsg;
          this.newmsg = "";
          console.log("验证码错误！");
          this.nxetlogin = false;
          Toast("验证码错误！");
        }
      } else {
        console.log("请输入验证码");
        this.nxetlogin = false;
        Toast("请输入验证码");
      }
    },
    //用户名校验
    sname() {
      // 用户名格式 中文/英文/手机号/邮箱
      if(this.usersim.test(this.rigisterInfo.username) || this.userstel.test(this.rigisterInfo.username) || this.usersemil.test(this.rigisterInfo.username) ){
        this.registernext = true;
      } else {
        console.log("用户名不标准");
        Toast("用户名不标准");
        this.registernext = false;
      }
    },
    // 密码校验
    cpwd() {
      // 密码长度 校验
      if (
        this.rigisterInfo.password.length>=6 &&
        this.rigisterInfo.password.length<=12
      ) {
        this.registernext = true;
      } else {
          console.log(this.rigisterInfo.password.length);
        console.log("密码长度不标准");
        Toast("密码长度不标准");
        this.registernext = false;
      }
    },
    // 注册
    register() {
      // 用户名，密码，确认密码，验证码 都不为空
      if (
        !!this.rigisterInfo.username &&
        !!this.rigisterInfo.password &&
        !!this.rigisterInfotwo.twopassword &&
        this.nxetlogin
      ) {
        // 两次密码输入一致 校验
        if (this.registernext) {
          if (this.rigisterInfo.password === this.rigisterInfotwo.twopassword) {
              console.log(this.rigisterInfo);
            this.$axios.post("/vue/rigister", this.rigisterInfo).then(res => {

              console.log("******注册****res*************");
              console.log(res);
              console.log("******注册****res.config.data*************");
              console.log(JSON.parse(res.config.data).username);

              window.sessionStorage.username = JSON.parse(res.config.data).username;
              
              console.log(res.data.msg);
              console.log(res.data.code);
              console.log(res.data.type);
              if (res.data.code == "200" && res.data.type == "1") {
                console.log("*********注册成功后**************");
                if (this.registernext) {
                  this.$router.push({ name: "login" });
                }
              } else {
                Toast("注册失败");
              }
            });
          } else {
            this.registernext = false;
            console.log("两次输入密码不一致");
            Toast("两次输入密码不一致");
          }
        }
      } else {
        this.registernext = false;
        console.log("用户名密码不可以为空");
        Toast("请检查用户名密码");
      }
    },

    gotologin() {
      this.$router.push({ name: "login" });
    }

    // ...mapMutations([
    //   // 可以不走action，直接走这里
    //   "carNumReduce"
    // ]),
  }
};
</script>

<style scoped>
.smg,
.btn {
  margin-top: 15px;
}
</style>

