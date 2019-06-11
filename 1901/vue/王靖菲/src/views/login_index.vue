<template>
    <div class="login_box">
        <router-link to="/mine">
        <div class="close">
            <van-icon name="cross" size="0.5rem" />
        </div>
        </router-link>
        <header>
            <h1>欢迎使用</h1>
        </header>
        
        <van-cell-group>
            <van-field
                v-model="loginInfo.username"
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名/手机号"
                @click-right-icon="$toast('question')"
            />
            <van-field
                v-model="loginInfo.userpwd"
                type="password"
                label="密码"
                placeholder="请输入密码"
            />
        </van-cell-group>
        <van-button round @click="login">登录
            <div class="btn-reg" @click="gotoRegister">还没有账号?点击注册</div>
        </van-button>
        <van-popup v-model="show" >
            <h1>请完成安全验证</h1>
        </van-popup>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show:false,
            loginInfo:{}
        }
    },
    methods:{
        login(){
            // this.show=true
            this.$axios.post("/vue/login",this.loginInfo)
            .then(res=>{
                console.log(res.data)
                if(!!res.data.type){//登录成功,token存到本地会话字符串
                    window.sessionStorage.userInfo=JSON.stringify({token:res.data.token});
                    this.$router.push({name:"mine"})
                }
            })
        },
        gotoRegister(){
            this.$router.push({name:"register"})
        }
    },
    mounted(){
        // var data=window.sessionStorage.userinfo
        // console.log(data)
        // document.getElementsByClassName(".van-field__body input").value=data.username
        
    }
}


</script>

<style lang="scss" scoped>
.login_box{
    padding:0.6rem; height:90%; text-align: center;
    position: relative;
    .close{
        position: absolute;
        right:0.2rem; top:0.2rem;
    }
    
    header{
        padding:0.4rem 0 1rem 0;
        h1{
            font-weight: 700;
            font-size: 24px;
            font-family:PingFangSC-Medium;
        }
    }
    .van-cell-group{
        font-family: Arial;
        .van-field{
            background-color: rgb(248, 248, 248);
            margin-bottom:0.4rem;
        }
    }
    .van-button{
        background-color:rgb(190, 76, 75);
        width: 100%; position: relative;
        font-size: 17px;
        color: hsla(0,0%,100%,.5);
        margin-top: 0.5rem;
        .btn-reg{
            position: absolute;
            right: 0; top: -0.9rem; 
            color:rgb(190, 76, 75);
            font-family:Arial; font-size:14px;
        }
    }
    .van-popup{
        width: 90%; height: 5.8rem; top:5.5rem;
        h1{
            padding:0 0.3rem; height: 1rem;
            border-bottom: 1px solid gray;
            text-align: left; line-height: 1rem;
        } 
    }
}
</style>

