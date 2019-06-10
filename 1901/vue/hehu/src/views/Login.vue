<template>
  <div class="bg-img">
    <mt-header title="登录/注册">
      <mt-button icon="back" slot="left" @click="goback">返回</mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">登录</mt-tab-item>
      <mt-tab-item id="2">注册</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="2">
        <el-row>
          <el-form
            :label-position="labelPosition"
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="1.5rem"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名:" prop="user">
              <el-input v-model="ruleForm.user"></el-input>
            </el-form-item>
            <el-form-item label="手机号:" prop="tel">
              <el-input v-model.number="ruleForm.tel"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button-group>
                <el-button type="primary" @click="submitForm('ruleForm')" icon="el-icon-thumb">注册</el-button>
                <el-button @click="resetForm('ruleForm')" icon="el-icon-refresh" type="warning ">重置</el-button>
              </el-button-group>
            </el-form-item>
          </el-form>
        </el-row>
      </mt-tab-container-item>
      <mt-tab-container-item id="1">
        <el-row>
          <el-form
            :label-position="labelPosition"
            :model="loginFrom"
            status-icon
            :rules="loginRules"
            ref="loginFrom"
            label-width="1.5rem"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名:" prop="user">
              <el-input v-model="loginFrom.user"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="pass">
              <el-input type="password" v-model="loginFrom.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item style="text-align: center;">
              <el-button-group>
                <el-button type="primary" @click="loginSubmit('loginFrom')" icon="el-icon-thumb">登录</el-button>
                <el-button @click="resetLogin('loginFrom')" icon="el-icon-refresh" type="warning">重置</el-button>
              </el-button-group>
            </el-form-item>
          </el-form>
        </el-row>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    var checkUser = (rule, value, callback) => {
      var nameReg = /[\u4e00-\u9fa5]/g;
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        if (!nameReg.test(value)) {
          callback(new Error("请输入中文"));
        } else {
          if (value.length > 8 || value.length < 2) {
            callback(new Error("用户名须2-8位"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      var pwdReg = /[0-9a-zA-Z]/g;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (!pwdReg.test(value)) {
          callback(new Error("请输入数字或字母"));
        } else {
          if (value.length > 12 || value.length < 8) {
            callback(new Error("请输入8-12位密码"));
          } else {
            callback();
          }
        }
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkTel = (rule, value, callback) => {
      var telReg = /^[1][3,5,7,8,9][0-9]{9}$/g;
      if (value === "") {
        callback(new Error("请输入手机号"));
      }
      setTimeout(() => {
        if (!telReg.test(value)) {
          callback(new Error("请输入正确的手机号"));
        } else {
          callback();
        }
      }, 1000);
    };
    var loginUser = (rule, value, callback) => {
      var nameReg = /[\u4e00-\u9fa5]/g;
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        if (!nameReg.test(value)) {
          callback(new Error("请输入中文"));
        } else {
          if (value.length > 8 || value.length < 2) {
            callback(new Error("用户名须2-8位"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var loginPwd = (rule, value, callback) => {
      var pwdReg = /[0-9a-zA-Z]/g;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (!pwdReg.test(value)) {
          callback(new Error("请输入数字或字母"));
        } else {
          if (value.length > 12 || value.length < 8) {
            callback(new Error("请输入8-12位密码"));
          } else {
            callback();
          }
        }
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        user: "",
        tel: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        user: [{ validator: checkUser, trigger: "blur" }],
        tel: [{ validator: checkTel, trigger: "blur" }]
      },
      selected: "1",
      loginFrom: {
        user: "",
        pass: ""
      },
      loginRules: {
        user: [{ validator: loginUser, trigger: "blur" }],
        pass: [{ validator: loginPwd, trigger: "blur" }]
      },
      labelPosition: "right"
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.post("/vue/register", this.ruleForm).then(res => {
            if (res.data.type == 1) {
              (this.selected = "1"), (this.loginFrom.user = this.ruleForm.user);
            } else {
              Toast({
                message: res.data.msg,
                position: "center",
                duration: 3000
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goback() {
      this.$router.go(-1);
    },
    loginSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.post("/vue/login", this.loginFrom).then(res => {
            if (res.data.type == 1) {
              //console.log(res.data.token);
              window.sessionStorage.userInfo = JSON.stringify({
                token: res.data.token
              });
              this.$store.state.username = this.loginFrom.user;
              window.localStorage.username = this.loginFrom.user;
              this.$router.push({ name: "person" });
              Toast({
                message: res.data.msg,
                position: "center",
                duration: 3000
              });
            } else {
              Toast({
                message: res.data.msg,
                position: "center",
                duration: 3000
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetLogin(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.demo-ruleForm {
  width: 90%;
  margin: 0.2rem 0;
  text-align: center;
}
.bg-img {
  background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559401434887&di=d4a37c425c42adb1881c83cbf2af1442&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10%2F133%2Fw640h1093%2F20180604%2F43dd-hcmurvh3048459.jpg);
  background-size: 100%;
}
</style>
