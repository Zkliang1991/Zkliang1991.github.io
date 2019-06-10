<template>
    <div class="reg">
        <p><i @click="goback"></i></p>
        <div class="main">
            <div class="reg_title">
                <h2>注册会员</h2>
                <p>有账号？<a @click="goLogin">去登录</a></p>
            </div>
            <p class="phone">
                <input type="tel" placeholder="手机号" @change="checkphone" v-model="registerInfo.tel">
            </p>
            <p class="identify">
                <input type="text" @change="checkNum" placeholder="数字验证码">
                <span id="num" @click="updataNum">1111</span>
            </p>
            <p class="pwd">
                <input type="password" @change="checkPwd" placeholder="设置密码" v-model="registerInfo.pwd">
            </p>
            <a class="regBtn" @click="goRegister">注册</a>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            num1:0,
            num2:0,
            num3:0,
            registerInfo:{}
        }
    },
    mounted(){
       this.updataNum();
    },
    methods:{
        goLogin(){
            this.$router.push({name:"login"})
        },
        goback(){
            this.$router.go(-1);
        },
        updataNum(){
        var num = document.getElementById("num");
        var str = "";
        for(var i=0;i<4;i++){
        var randomN = Math.floor(Math.random()*9);
        str+=randomN;
        }
        num.innerHTML = str;
        },
        checkphone(e){
            var phone = e.target.value;
            var reg = /^1[3,5,7,8]\d{9}$/;
            if(reg.test(phone)){
                this.num1=1;
                return true;
            }
            else{
            Toast({
            message: '手机号格式不正确',
            position: 'center',
            duration: 800
                });
                this.num1=0;
                return false;
            }
            
        },
        checkNum(e){
            var num = e.target.value;
            var yanzhengma = document.getElementById("num").innerHTML;
            if(num==yanzhengma){
                this.num2=1;
                return true;
            }else{
                Toast({
            message: '验证码不正确',
            position: 'center',
            duration: 800
                });
                this.num2=0;
                return false;
            }
        },
        checkPwd(e){
            let num = e.target.value;
            let reg = /^[0-9a-zA-Z]{6,12}$/;
            if(reg.test(num)){
                this.num3 = 1;
            }
            else{
            Toast({
            message: '密码为6-12位字母数字',
            position: 'center',
            duration: 1000
                });
                this.num3 = 0;
            }
        },
        goRegister(){
            
            if(this.num1==this.num2==this.num3==1){
                this.$axios.post("/vue/register",this.registerInfo)
                .then((res)=>{
                    if(res.data.code==200){
                        Toast({
                        message: '注册成功',
                        position: 'center',
                        duration: 800
                            });
                    this.$router.push({name:"login"});
                    }
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.reg{
    background-color: #fff;
    >p{
        width: 100%;
        height: 44px;
        i{
                display: block;
                background-image: url(../assets/images/d1.png);
                background-position: -149px -131.5px;
                background-size: 330.5px;
                width: 44px;
                height: 44px;
        }
    }
    .main{
        padding: 0 7.5%;
        .reg_title{
            text-align: center;
            h2{
            margin: 25px 0 0;
            font-size: 24px;
            color: #666;
            font-weight: 700;
            }
            p{
            position: relative;
            margin-top: 22px;
            height: 44px;
            background: #fff;
            border-bottom: 1px solid #ededed;
            margin-bottom: 20px;
            font-size: 14px;
            color: #ccc;
            a{
            color: #999;
            text-decoration: underline;
            }
            }
        }
        >p{
        position: relative;
        margin-top: 22px;
        height: 44px;
        background: #fff;
        border-bottom: 1px solid #ededed;
        margin-bottom: 20px;
        font-size: 14px;
        color: #ccc;
        input{
        width: 100%;
        height: 100%;
        border: none;
        padding-left: 2.6%;
        outline: 0;
        }
        }
        .identify{
            span{
                display: inline-block;
                width: 90px;
                height: 41px;
                line-height: 41px;
                position: absolute;
                right: 0;
                bottom: 0;
                background-color: gray;
                color: black;
                font-size:18px;
            }
        }
        .regBtn{
            height: 44px;
            background: #ccc;
            width: 100%;
            display: block;
            margin: 40px auto 0;
            text-align: center;
            line-height: 44px;
            font-size: 16px;
            color: #ccaa7a;
            background-image: linear-gradient(-180deg,#3a3a3a 0,#1c1c1c 100%);
            box-shadow: 0 6px 4px 0 rgba(0,0,0,.1);
        }
    }
}
</style>
