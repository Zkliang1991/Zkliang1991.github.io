<template>
    <div>
        <Head title="登录/注册" :show="true"></Head>
        <mt-navbar v-model="selected">
            <mt-tab-item id="login">登录</mt-tab-item>
            <mt-tab-item id="register">注册</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="login">
                 <mt-field label="用户名" placeholder="请输入用户名" v-model="loginInfo.username"></mt-field>
                 <mt-field label="密码" placeholder="请输入密码" type="password" v-model="loginInfo.pwd"></mt-field>
                 <mt-button type="primary" size="large" @click="login()">登录</mt-button>
            </mt-tab-container-item>
            <mt-tab-container-item id="register">
                 <mt-field label="用户名" placeholder="请输入用户名" v-model="rigisterInfo.username"></mt-field>
                 <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="rigisterInfo.mobile"></mt-field>
                 <mt-field label="密码" placeholder="请输入密码" type="password" v-model="rigisterInfo.pwd"></mt-field>
                 <mt-button type="danger" size="large" @click="zhuce()">注册</mt-button>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import {http} from "../utils"
export default {
    data(){
        return {
            selected:"login",
            loginInfo:{
                username:"",
                pwd:""
            },
            rigisterInfo:{}
        }
    },
    methods:{
        login(){
            console.log(this.loginInfo)
            http.post("/vue/login",{loginInfo:this.loginInfo})
            .then(res=>{
                // console.log(res.data);
                var data = res.data
                console.log(data)
                if(data.code==200){
                    alert("登录成功")
                    window.sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                    this.$router.push({name:'home'})
                }else{
                    alert("登录失败")
                }
            })
        },
        zhuce(){
            http.post("/vue/zhuce",{loginInfo:this.loginInfo})
            .then(res=>{
                // console.log(res.data);
                var data = res.data
                console.log(data)
                if(data.code==200){
                    alert("注册成功")
                    window.sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                    this.$router.push({name:'login'})
                }else{
                    alert("注册失败")
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #2bd3c2;
    color: #2bd3c2;
    margin-bottom: -3px;
}
.mint-button--primary {
    background-color: #2bd3c2;
}
.mint-button--danger {
    background-color: #2bd3c2;
}
</style>
