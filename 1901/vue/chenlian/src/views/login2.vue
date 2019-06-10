<template>
  <div>
    <div class="header-top">
    <Head title="登陆" :show="true" :searchShow="false" v-if="true"></Head>
    </div>
    <div class="users"></div>
  
    <div class="login">
      <van-cell-group>
        <van-field
          clearable
          label="用户名"
          left-icon="flower-o"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast(question)"
          v-model="loginInfo.username"
        />
        <!-- v-model="username" -->
        <!-- v-model="loginInfo.username" -->
        <van-field
          type="password"
          label="密码"
          placeholder="请输入6-12位密码"
          left-icon="star-o"
          v-model="loginInfo.password"
        />
        <!-- v-model="password" -->
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
      <van-button plain hairline type="primary" @click="login" class="login" ref="login" size="large">用户登陆</van-button>
      <!-- <van-button loading type="primary" loading-type="spinner" loading-text="登陆中..."/> -->
     <van-button plain hairline type="primary" @click="gotoregister" class="register" ref="register" size="large">没有账户，先去注册</van-button>
    </div>
    
    <p>0</p><p>1</p><p>2</p>
    <!-- {{loginInfo}} -->
  </div>
</template>

<script>
import store from "@/store";
import { mapState,mapActions } from "vuex";
import { Toast } from 'vant';
var that = this;
export default {
  
  data() {
    return {
      question:
        "用户名为中英文和数字的组合或手机号码，不能以下划线开头，密码不能为中文",
      sms: "",
      // username:'',
      // password:'',
      loginInfo: {
        username:'',
        password:'',
      },
      rigisterInfo: {},
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
      msg: "",
      newmsg: "",
      nxetlogin:false,      
    };
  },
  computed: {
    ...mapState(["loginInfo"]),
  },
  watch: {
    // sms:{
    // handler(newVal, oldVal) {
    // this.newsms = newVal;
    // },
    // }
  },
  mounted() {
    // console.log("refs", this.$refs.code);
    for (var y = 0; y < 4; y++) {
      var wzindex = parseInt(Math.random() * (this.yzmzf.length - 1));
      this.msg += this.yzmzf[wzindex];
    }  
    console.log( this.$store.state.loginInfo.username +"---1111---$store.username" );
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
          Toast('验证码错误！');
        }
      } else {
        console.log("请输入验证码");
        this.nxetlogin = false;
        Toast('请输入验证码');
      }
    },

    // 登陆
    login() {
      var that = this;
      var obj = this.loginInfo;
       if(this.loginInfo.username && this.loginInfo.password && this.nxetlogin ) { 
         
         

         this.$store.dispatch("userlogin",{obj,cb:()=>{
           this.$router.push({name:'cart'});
           const username = window.localStorage.getItem.usrename;
         } });
         
         

         console.log(this.loginInfo);  // password: "123456" ,username: "chenlian"         
        // this.$store.dispatch("userlogin",this.loginInfo );
        // this.$store.dispatch("userlogin",{this.loginInfo,cb:()=>{} });
        // {cb:()=>{ const username = sessionStorage.setItem("username", that.loginInfo.username);}}
      } else {
        console.log("用户名密码不可以为空");
        Toast('请检查用户名密码');
      }
    },

    gotoregister(){
        this.$router.push({ name: "register" });
    },
    ...mapActions(["userlogin"]),
  }
};
</script>

<style scoped>
.smg,
.btn {
  margin-top: 15px;
}
.header-top{
  margin-bottom: 45px;
}
</style>

