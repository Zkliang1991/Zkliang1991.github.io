<template>
    <div id="login">
      <van-nav-bar title="登录" left-text="返回" right-text="注册" left-arrow @click-left="onClickLeft" @click-right="onClickRight"/>
            <van-cell-group class="cell">
                <van-field v-model="loginInfo.username" placeholder="请输入用户名" label="用户名" left-icon="contact"/>
                <van-field v-model="loginInfo.pwd"  placeholder="请输入密码" label="密码" left-icon="records"/>
                <van-button type="info" size="large" @click="login">登录</van-button>
            </van-cell-group>
    </div>
</template>

<script>
export default {
    data(){
        return{
            loginInfo:{
                username:"",
                pwd:""
            },

        }
    },
    methods:{
        onClickLeft(){
             this.$router.go(-1)
        },
        onClickRight(){
            this.$router.push({name:'register'})
        },
        login(){
            this.$axios.post("/vue/login",this.loginInfo)
                .then(res=>{
                        if(!!res.data.type){
                        console.log(111111)
                        sessionStorage.setItem("username",res.data.username );//在后端传username 在此接收放到session中
                        window.sessionStorage.userInfo = JSON.stringify({token:res.data.token}); 
                        this.$toast(res.data.msg)                                         
                        this.$router.push({name:'home'})
                        
                    }
                    this.$toast(res.data.msg)   
                    
                })
        }
    },
        


}
</script>

<style scoped>
    #login{
        background-color: #000;
    }

</style>





