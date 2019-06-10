<template>
    <div id="loginbox">
        <Head title="登录" :show="true"></Head>
        <!-- <van-cell-group id="login"> -->
            <div id="aqq">
            <van-field id="azz" label="用户名" placeholder="请输入用户名" v-model="loginInfo.username" autosize required />
            <van-field  label="密码" placeholder="请输入密码" type="password" v-model="loginInfo.pwd" required  autosize />  
        <!-- </van-cell-group> -->
        <button id="add" @click="login()">登录</button> 
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            loginInfo:{}, 
        }
    },
    methods:{
        login(){
            console.log(this.loginInfo)
            this.$axios.post("/vue/login",this.loginInfo).then(res=>{
                console.log(res.data);
                if(!!res.data.type){
                    localStorage.username=this.loginInfo.username;

                    window.sessionStorage.userInfo=JSON.stringify({token:res.data.token});
                    this.$router.push({name:'home'});
                }
            })
        }
    }
}
</script>
<style scoped>
    #loginbox{
        width: 100%;
        overflow: hidden;
        background-color:  rgba(0,0,0,.1);
        background-image: url(../assets/imgs/bg.jpg);
        background-size:100% 100%;
    }
    #aqq{
        width: 80%;
    }
    .van-field{
        width: 100%;
        margin-left: 10%;
        border-radius: .5rem;
        margin-top: 0.5rem;     
   }
  
    #add{
        margin-top: 0.5rem;
        width: 100%;
        line-height: 1rem; 
        margin-left: 10%;
        background-color: rgba(170, 68, 109,.3);
        border-radius: .5rem; 
        color:azure; 
    }

</style>


