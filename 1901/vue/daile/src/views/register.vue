<template>
    <div id="loginbox">
        <Head title="注册" :show="true"></Head>

   <div id="aqq">
            <van-field label="用户名" required placeholder="请输入用户名" v-model="registerInfo.username" />
            <van-field label="手机号" required  placeholder="请输入手机号" v-model="registerInfo.usertel" />
            <van-field label="密码" required placeholder="请输入密码" type="password" v-model="registerInfo.pwd" />  
            <van-field label="确认密码" required placeholder="请确认密码" type="password" v-model="registerInfo.passwordpwd" />                
  </div>

    <van-button id="add"  @click="register()" >注册</van-button>
       
    </div>
</template>

<script>
import { Toast } from 'vant';
export default{
    data(){
        return {
            registerInfo:{}
        }
    },
    methods:{
        register(){
            //表单验证
            var username=document.getElementsByClassName("van-field__control")[0].value;
            var usertel=document.getElementsByClassName("van-field__control")[1].value;
            var pwd=document.getElementsByClassName("van-field__control")[2].value;
            var passwordpwd=document.getElementsByClassName("van-field__control")[3].value;
            if(username!==""){
                var usernameReg=/^[0-9a-z_]{2,4}$/gi;
                if(usernameReg.test(username)){
                    var usertelReg=/^[1][3-9][0-9]{9}$/gi;
                    if(usertelReg.test(usertel)){
                        var pwdReg=/^[0-9a-z]{6,12}$/gi;
                        if(pwdReg.test(pwd)){
                            if(passwordpwd==pwd){
                                //全部正确可以注册
                                console.log(this.registerInfo)
                                this.$axios.post("/vue/register",this.registerInfo).then(res=>{
                                    console.log(res.data);
                                    if(!!res.data.type){
                                        this.$router.push({name:'login'})
                                    }
                                })

                            }else{
                                Toast.fail('两次密码不一致'); 
                            }
                        }else{
                            Toast.fail('密码6-12的字母和数字组合'); 
                        }
                    }else{
                        Toast.fail('手机号不合法'); 
                    }
                }else{
                   Toast.fail('用户名2-4位字符或数字'); 
                }
            }else{
                Toast.fail('请输入用户名');
            }
        }
    }
}
</script>
<style scoped>
    #but{
        width: 100%;
        height: 1rem;
        background-color: #999;
        line-height: 1rem;
        border:0;
        
    }
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
        margin-left: 12%;
        border-radius: .2rem;
        margin-top: 0.5rem; 
        background-color: rgba(243, 82, 109, 0.2);    
   }
  
    #add{
        margin-top: 1.5rem;
        width: 30%;
        line-height: 1rem; 
        margin-left: 30%;
        background-color: rgba(83, 216, 138, 0.3);
        border-radius: .5rem; 
        color:rgb(26, 34, 34); 
    }

</style>
