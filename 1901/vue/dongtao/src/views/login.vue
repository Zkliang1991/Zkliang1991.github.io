<template>
    <div>
        <Head title="登录/注册" :show="true"></Head>

        <van-tabs  animated>
            <van-tab title="登录">
                <van-cell-group>
                    <van-field
                        v-model="loginInfo.username"
                        required
                        clearable
                        label="用户名"
                        right-icon="question-o"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('请输入4到10位用户名')"
                        @blur="loginName"
                        :error-message="loginNameMsg"
                    />

                    <van-field
                        v-model="loginInfo.pwd"
                        type="password"
                        label="密码"
                        right-icon="question-o"
                        placeholder="请输入密码"
                        @click-right-icon="$toast('请输入6到10位密码')"
                        required
                        @blur="loginPwd"
                        :error-message="loginPwdMsg"
                    />
                </van-cell-group>
                <van-cell-group class="user-group">
                </van-cell-group>
                <van-button type="danger" size="large" @click="login()">登录</van-button>
                <p><a>没有账户?立即注册</a></p>
            </van-tab>
            <van-tab title="注册">
                <van-cell-group>
                    <van-field
                        v-model="registerInfo.username"
                        required
                        clearable
                        label="用户名"
                        right-icon="question-o"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('请输入4到10位用户名')"
                        @blur="name"
                        :error-message="nameMsg"
                    />

                     <van-field
                        v-model="registerInfo.tel"
                        label="手机号"
                        right-icon="question-o"
                        placeholder="请输入手机号"
                        @click-right-icon="$toast('请输入常用手机号')"
                        required
                        @blur="tel"
                        :error-message="telMsg"
                    />

                    <van-field
                        v-model="registerInfo.pwd"
                        type="password"
                        label="密码"
                        right-icon="question-o"
                        placeholder="请输入密码"
                        @click-right-icon="$toast('请输入6到10位密码')"
                        required
                        @blur="pwd"
                        :error-message="pwdMsg"
                    />

                    <van-field
                        v-model="registerInfo.repwd"
                        type="password"
                        label="确认密码"
                        right-icon="question-o"
                        placeholder="请输入密码"
                        @click-right-icon="$toast('请输入6到10位密码')"
                        required
                        @blur="repwd"
                        :error-message="repwdMsg"
                    />
                </van-cell-group>
                <van-cell-group class="user-group">
                </van-cell-group>
                <van-button type="primary" size="large" @click="register()">注册</van-button>
            </van-tab>
        </van-tabs>

        <!-- <mt-navbar v-model="selected">
            <mt-tab-item id="login">登录</mt-tab-item>
            <mt-tab-item id="register">注册</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="login">
                 <mt-field label="用户名" placeholder="请输入用户名" v-model="loginInfo.username"></mt-field>
                 <mt-field label="密码" placeholder="请输入密码" type="password" v-model="loginInfo.pwd"></mt-field>
                 <mt-button type="danger" size="large">登录</mt-button>
            </mt-tab-container-item>
            <mt-tab-container-item id="register">
                 <mt-field label="用户名" placeholder="请输入用户名" v-model="rigisterInfo.username"></mt-field>
                 <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="rigisterInfo.mobile"></mt-field>
                 <mt-field label="密码" placeholder="请输入密码" type="password" v-model="rigisterInfo.pwd"></mt-field>
                 <mt-button type="primary" size="large">注册</mt-button>
            </mt-tab-container-item>
        </mt-tab-container> -->
    </div>
</template>


<script>
import { Toast } from 'vant';
export default {
    data(){
        return {
            loginInfo:{},
            registerInfo:{},
            nameMsg:"",
            telMsg:"",
            pwdMsg:"",
            repwdMsg:"",
            loginNameMsg:"",
            loginPwdMsg:"",

            nameFlag:false,
            telFlag:false,
            pwdFlag:false,
            repwdFlag:false,
            loginNameFlag:false,
            loginPwdFlag:false,
        }
    },
    methods:{
        name(){
            // this.nameMsg="用户名不能为空";
            if(this.registerInfo.username){
                const nameReg = /^[a-zA-Z0-9]{4,10}$/;
                if(nameReg.test(this.registerInfo.username)){
                    this.nameFlag=true;
                    this.nameMsg="";
                }else{
                    this.nameMsg="用户名格式不正确";
                    this.nameFlag=false;
                }
            }else{
                this.nameMsg="用户名不能为空";
                this.nameFlag=false;
            }
        },
        tel(){
            if(this.registerInfo.tel){
                const telReg = /^1(3|4|5|7|8)[0-9]{9}$/;
                if(telReg.test(this.registerInfo.tel)){
                    this.telFlag=true;
                    this.telMsg="";
                }else{
                    this.telMsg="手机号格式不正确";
                    this.telFlag=false;
                }
            }else{
                this.telMsg="手机号不能为空";
                this.telFlag=false;
            }
        },
        pwd(){
            if(this.registerInfo.pwd){
                const pwdReg = /^[0-9A-Za-z]{6,10}$/;
                if(pwdReg.test(this.registerInfo.pwd)){
                    this.pwdFlag=true;
                    this.pwdMsg="";
                }else{
                    this.pwdMsg="密码格式不正确";
                    this.pwdFlag=false;
                }
            }else{
                this.pwdMsg="密码不能为空";
                this.pwdFlag=false;
            }
        },
        repwd(){
            if(this.registerInfo.repwd==this.registerInfo.pwd){
                this.repwdFlag=true;
                this.repwdMsg = "";
            }else{
                this.repwdMsg = "两次输入密码不匹配";
                this.repwdFlag=false;
            }
        },
        register(){
            if(this.nameFlag==true && this.telFlag==true && this.repwdFlag==true ){
                Toast.success('注册成功');
                this.$axios.post("/vue/register",this.registerInfo)
                .then(res=>{
                    console.log(res);
                    if(res.data.type == 1){
                        this.registerInfo={};
                    }
                })
            }else{
                Toast.fail('注册失败');
            }
        },


        loginName(){
            if(this.loginInfo.username){
                this.loginNameFlag=true;
                this.loginNameMsg="";
            }else{
                this.loginNameMsg = "用户名不存在";
                this.loginNameFlag=false;
            }
        },
        loginPwd(){
            if(this.loginInfo.pwd){
                this.loginPwdFlag=true;
                this.loginPwdMsg="";
            }else{
                this.loginPwdMsg = "密码不存在";
                this.loginPwdFlag=false;
            }
        },
        login(){
            console.log(this.loginInfo)
            if(this.loginNameFlag==true && this.loginPwdFlag==true){
                // Toast.success('登录成功');
                this.$axios.post("/vue/login",this.loginInfo)
                .then(res=>{
                    console.log(res.data);
                    if(!!res.data.type){
                        window.sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                        this.$router.push({name:'home'})
                    }
                })
            }
        },
    }
}
</script>


<style lang="scss" scoped>
.van-icon{
    font-size: 14px !important;
}
.van-cell{
    line-height: 26px;
}
</style>

