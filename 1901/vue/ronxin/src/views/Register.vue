<template>
    <div>
        <Head title="注册" :show="true"></Head>

        <!-- 注册输入框 -->
        <van-cell-group>
            <van-field v-model="registerInfo.username" placeholder="请输入用户名"  error-message="" class="input1"/>
            <van-field v-model="registerInfo.mobile" placeholder="请输入手机号"/>
            <van-field v-model="registerInfo.pwd" placeholder="请输入密码" type="password"/>
            <van-field v-model="registerInfo.addpwd" placeholder="请确认密码" type="password"/>
            <van-button type="info" size="large" @click="register()">注册</van-button>
        </van-cell-group>
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
            var usermobile=document.getElementsByClassName("van-field__control")[1].value;
            var userpwd=document.getElementsByClassName("van-field__control")[2].value;
            var useraddpwd=document.getElementsByClassName("van-field__control")[3].value;
            if(username!==""){
                var usernameReg=/^[0-9a-z_]{6,12}$/gi;
                if(usernameReg.test(username)){
                    var mobileReg=/^[1][3-9][0-9]{9}$/gi;
                    if(mobileReg.test(usermobile)){
                        var pwdReg=/^[0-9a-z]{6,12}$/gi;
                        if(pwdReg.test(userpwd)){
                            if(useraddpwd==userpwd){
                                //全部正确可以注册
                                console.log(this.registerInfo)
                                this.$axios.post("/vue/register",this.registerInfo).then(res=>{
                                    console.log(res.data);
                                    if(!!res.data.type){
                                        this.$router.push({name:'login'})
                                    }
                                })

                            }else{
                                Toast('两次密码输入不一致'); 
                            }
                        }else{
                            Toast('密码应为6-12的字母和数字组合'); 
                        }
                    }else{
                        Toast('手机号不合法'); 
                    }
                }else{
                   Toast('用户名应为6-12位字符或数字'); 
                }
            }else{
                Toast('请输入用户名');
            }
        }
    }
}
</script>