<template>
    <div>
        <Head title="登录/注册" :show="true"></Head>
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
                        @click-right-icon="$toast('请输入正确的用户名')"
                        @blur="lname"
                       :error-message="errlname"
                    />

                    <van-field
                        v-model="loginInfo.pwd"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                         right-icon="question-o"
                        @click-right-icon="$toast('请输入正确的密码')"
                        @blur="lpwd"
                        :error-message="errlpwd"
                    />
                    <van-button type="primary" size="large" @click="login">登录</van-button>
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
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('请填写6~12位由字母数字组成的用户名')"
                        @blur="name"
                        :error-message="errname"
                    />
                     <van-field
                        v-model="rigisterInfo.usertel"
                        required
                        clearable
                        label="手机号"
                        right-icon="question-o"
                        placeholder="请输入手机号"
                        @click-right-icon="$toast('请输入常用的手机号')"
                        :error-message="errdel"
                        @blur="del"
                    />
                    <van-field
                        v-model="rigisterInfo.password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                         right-icon="question-o"
                        @click-right-icon="$toast('请输入6~12位由字母数字组成的密码')"
                         :error-message="errpwd"
                         @blur="pwd"

                    />
                     <van-field
                        v-model="rigisterInfo.password1"
                        type="password"
                        label="确认密码"
                        placeholder="请输入密码"
                        required
                         right-icon="question-o"
                        @click-right-icon="$toast('请再次输入密码')"
                        :error-message="errpwd1"
                        @blur="pwd1"

                    />
                     <van-button type="info" size="large" @click="zhuce">注册</van-button>
                     </van-cell-group>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import { Dialog } from 'vant';
import { Toast } from 'vant';

export default {
    data() {
    return {
      active: "登录",
    loginInfo:{},
    rigisterInfo:{},

      errname:'',
      errdel:'',
      errpwd:'',
      errpwd1:'',
      errlname:'',
      errlpwd:'',

    lnameFlag:false,
    lpwdFlag:false,
      nameFlag:false,
      delFlag:false,
      pwdFlag:false
    };
  },
  methods:{
      name(){
        if(this.rigisterInfo.username){
            const nameReg = /^[a-zA-Z][a-zA-Z0-9]{5,11}$/;
            if(nameReg.test(this.rigisterInfo.username)==false){
                this.errname="用户名不合法，请重填";
            }else{
                this.errname = "√";
                this.nameFlag=true
            }
        }else{
            this.errname="用户名不能为空，请重填";
            this.nameFlag = false;
        }
       
      },
      del(){
          if(this.rigisterInfo.usertel){
              const delReg = /^1[34578]\d{9}$/;
              if(delReg.test(this.rigisterInfo.usertel) == false){
                   this.errdel = "手机号码有误，请重填";
                   this.delFlag = false;
              }else{
                this.errdel = "√";
                this.delFlag=true
              }
          }else{
              this.errdel = "手机号不能为空，请重填"
               this.delFlag = false;
          }
      },
      pwd(){
          if(this.rigisterInfo.password){         
                  const pwdReg = /^[a-zA-Z0-9]{5,11}$/;
                  if(pwdReg.test(this.rigisterInfo.password)){
                     this.errpwd = "√" 
                  }else{
                     this.errpwd = "密码不合法，请重填" 
                  } 
          }else{
           this.errpwd = "密码不能为空，请重填"
          }
      },
      pwd1(){
          if(this.rigisterInfo.password1){
              if(this.rigisterInfo.password1 == this.rigisterInfo.password){
                  this.errpwd1 = "√" ;
                   this.pwdFlag=true
              }else{
                this.errpwd1 = "两次密码不一致，请重填";
                this.pwdFlag = false;
              }
          }else{
              this.errpwd1 = "密码不能为空，请重填";
               this.pwdFlag = false;
          }
      },
      lname(){
          if(this.loginInfo.username){
              this.errlname = "√";
              this.lnameFlag = true;
          }else{
             this.errlname="用户名不能为空，请重新输入";
             this.lnameFlag = false 
          }
      },
      lpwd(){
          if(this.loginInfo.pwd){
              this.errlpwd = "√";
              this.lpwdFlag = true;
          }else{
             this.errlpwd="密码不能为空，请重新输入";
             this.lpwdFlag = false 
          }
      },
      zhuce(){
          if(this.nameFlag==true &&  this.delFlag==true && this.pwdFlag==true){
              this.$axios.post("/vue/zhuce",this.rigisterInfo)
              .then(res=>{
                  console.log(res.data)
                  if(res.data.type == 1){
                      Toast.success(res.data.msg);
                      this.rigisterInfo={};
                        this.errname='';
                        this.errdel='';
                        this.errpwd='';
                        this.errpwd1='';
                        this.loginInfo.username = this.rigisterInfo.username;
                      this.active = "登录";
                      
                       
                  }else{
                    Toast.fail(res.data.msg)
                  }
              })
            }else{
                Dialog.alert({
                message: '请填写信息或查看报错的信息'
                }).then(() => {
                });
            }
         
      },
      login(){
          console.log(this.loginInfo);
          if(this.lnameFlag == true &&   this.lpwdFlag == true ){
                    this.$axios.post("/vue/login",this.loginInfo)
                .then(res=>{
                console.log(res.data)
                    if(!!res.data.type){
                        Toast.success(res.data.msg);
                        window.sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                        setTimeout( this.$router.push({name:'home'}),3000);
                       
                }else{
                     Toast.fail(res.data.msg)
                }
            })
          }else{
               Dialog.alert({
                message: '请填写信息或查看报错的信息'
                }).then(() => {
                });
          }
         
      }
  }
}
</script>

