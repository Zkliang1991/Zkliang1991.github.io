<template>
    <div>
        <Head title="登录&&注册" :show="true"></Head>
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
                 <mt-button type="danger" size="large">注册</mt-button>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>


<script>
export default {
    data(){
        return {
            selected:"login",
            loginInfo:{},
            rigisterInfo:{}
        }
    },
    methods:{
        login(){
            console.log(this.loginInfo)
            this.$axios.post("/vue/login",this.loginInfo)
            .then(res=>{
                console.log(res.data);
                if(!!res.data.type){
                    window.sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                    this.$router.push({name:'home'})
                }
            })
        }
    }
}
</script>



