<template>
    <div class="login_box">
        <header>
            <h1>欢迎注册</h1>
        </header>
        <div class="close">
            <van-icon name="cross" size="0.5rem" />
        </div>
        <van-cell-group>
            <van-field
                v-model="registerInfo.username"
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"
            />
            <van-field
                v-model="registerInfo.userpwd"
                type="password"
                label="密码"
                placeholder="请输入密码"
            />
            <van-field
                v-model="registerInfo.usertel"
                type="tel"
                label="手机号"
                placeholder="请输入手机号"
            />
        </van-cell-group>
        <van-button round @click="register">注册
        </van-button>
        <van-popup v-model="show" >
            <h1>请完成安全验证</h1>
        </van-popup>
        <p>注册即表示同意<span>《我在家用户注册协议》</span></p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show:false,
            registerInfo:{}
        }
    },
    methods:{
        register(){
            // this.show=true
            this.$axios.post("/vue/register",this.registerInfo)
            .then(res=>{
                // console.log(res)后台传过来的数据
                console.log(res)
                if(!!res.data.type){//如果传的type1,注册成功
                    window.sessionStorage.userinfo=res.config.data
                    //  console.log( window.sessionStorage.userinfo)  {"username":"4","userpwd":"4","usertel":"4"}
                     this.$toast.success("注册成功,跳转登录...") 
                     this.$router.push({name:"login"})
                }else{
                    this.$toast.fail("用户名或手机号已存在")
                }
            })
        }
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
    }
    .van-popup{
        width: 90%; height: 5.8rem; top:5.5rem;
        h1{
            padding:0 0.3rem; height: 1rem;
            border-bottom: 1px solid gray;
            text-align: left; line-height: 1rem;
        } 
    }
    p{
            position: absolute;
            bottom: 5%;
            left: 0;
            width: 100%;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #92969c;
            line-height: 12px;
    }
}
</style>