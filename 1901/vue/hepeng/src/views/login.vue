<template>
    <div>
        <Head title="登录" :show="!!1" ></Head>

                <mt-field class="form username" label="用户名" placeholder="请输入用户名" type='text' v-model="loginInfo.username" id="username"></mt-field>
                <mt-field class="form userpwd" label="密码" placeholder="请输入密码" type="password" v-model="loginInfo.pwd"></mt-field>
                <mt-button class="form loginBtn" type="primary" size="large" @click="login()">登录</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selected:"login",
            loginInfo:{},
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
                    localStorage.username = this.loginInfo.username;
                    this.$router.push({name:'mine'});
                }
            })
        }
    }
}
</script>

<style scoped >
    #username{
        margin-top: 0.25rem;
    }
    .form{
        margin: 0.15rem 0;
    }
</style>

