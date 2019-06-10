<template>
<div>
 <Head title="注册" back="返回" ></Head>
    <div class="banner">
        <img src="https://pic.keede.com//app/images/login_topimg@2x.png" style="width:100%" alt="">
    </div>
    <div class="loginwaytab">
         <span><label >快速注册</label></span>
        <span @click="gologin"><a href=""></a>密码登录</span>
       
        
    </div>
    <van-cell-group>
  <van-field
    v-model="registerInfo.username"
   
    clearable
    label="用户名"
    
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />
<van-field
    v-model="registerInfo.usertel"
   
    clearable
    label="手机号"
    
    placeholder="请输入手机号"
    @click-right-icon="$toast('question')"
  />
  <van-field
    v-model="registerInfo.password"
    type="password"
    label="密码"
    placeholder="请输入密码"
  />
</van-cell-group>

<van-button round class="lgbtn" type="primary" size="large" @click="register()">注册</van-button>

</div>

</template>
<script>
import { Toast } from 'vant';

import Head from "@/components/head.vue";
export default {
    data(){
        return {
            registerInfo:{},
            
        }
    },
components:{
        Head,
    },
    methods:{
        gologin(){
            this.$router.push({name:"login"})
            
        },
        register(){
            console.log(this.registerInfo)
            this.$axios.post("/vue/register",this.registerInfo)
            .then(res=>{
                console.log(JSON.parse(res.config.data).username)
                
                if(res.data=="注册成功"){
                    Toast.success('注册成功');
                    this.$router.push({name:"login"}) 
                }else{
                    Toast.fail(res.data);
                }
                if(!!res.data.type){
                    
                 
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

