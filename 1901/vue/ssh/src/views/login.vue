<template>
<div>
 <Head title="登录" back="返回" ></Head>
    <div class="banner">
        <img src="https://pic.keede.com//app/images/login_topimg@2x.png" style="width:100%" alt="">
    </div>
    <div class="loginwaytab">
        <span @click="goregister"><a href="/register"></a>快速注册</span>
        <span><label >密码登录</label></span>
        
    </div>
    <van-cell-group>
  <van-field
    v-model="loginInfo.username"
   
    clearable
    label="手机号"
    
    placeholder="请输入手机号"
    @click-right-icon="$toast('question')"
  />

  <van-field
    v-model="loginInfo.password"
    type="password"
    label="密码"
    placeholder="请输入密码"
  />
</van-cell-group>

<van-button round class="lgbtn" type="primary" size="large" @click="login()">登录</van-button>

</div>
</template>
<script>
import { Toast } from 'vant';
import Head from "@/components/head.vue";
export default {
    data(){
        return {
            loginInfo:{},
            
        }
    },
    components:{
        Head,
    },
    methods:{
        goregister(){
            this.$router.push({name:"register"})

        },
        login(){
            console.log(this.loginInfo)
            this.$axios.post("/vue/login",this.loginInfo)
            .then(res=>{
                console.log(res.data);
                    Toast.fail('登录失败');
                if(!!res.data.type){
                    window.sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                    this.$router.push({name:"home1"})
                    Toast.success('登录成功');
                }
            })
        }
    }
}
</script>
<style scoped>
.loginwaytab {
    height: 46px;
    line-height: 46px;
    text-align: center;
    margin: 10px 20px;
}
.loginwaytab > span {
    width: 49%;
    display: inline-block;
}
.loginwaytab > span label {
    font-size: 18px;
    font-weight: bold;
    color: #333333;
    letter-spacing: 2px;
    border-bottom: 2px solid #cab894;
    padding-bottom: 10px;
}
.loginwaytab > span a {
    font-size: 15px;
}
.lgbtn{
    margin-top: .7rem;
    background-color: #000;
    border: none;
    width: 90%;
}
</style>

