<template>
    <div>
        <Head title="登录" :show="true"></Head>

        <!-- 登录输入框 -->
        <van-cell-group>
            <van-field v-model="loginInfo.username" placeholder="请输入用户名"/>
            <van-field v-model="loginInfo.pwd" placeholder="请输入密码" type="password"/>
            <van-button type="info" size="large" @click="login()">登录</van-button>
        </van-cell-group>
    </div>
</template>

<script>
export default{
    data(){
        return {
            loginInfo:{}
        }
    },
    methods:{
        login(){
            console.log(this.loginInfo)
            this.$axios.post("/vue/login",this.loginInfo).then(res=>{
                console.log(res.data);
                if(!!res.data.type){
                    window.sessionStorage.userInfo=JSON.stringify({token:res.data.token});
                    this.$router.push({name:'mine'});
                    localStorage.username=this.loginInfo.username;
                }
            })
        }
    }
}
</script>