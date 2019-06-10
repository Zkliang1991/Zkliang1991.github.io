<template>
  <div>
    <Head title="登录" back="返回" :show="true"></Head>
    <div class="img move">
        <img src="@/assets/images/timg2.jpg" alt="">
    </div>
    <van-cell-group class="move">
      <van-field
        v-model="loginInfo.username"
        required
        label="用户名"
        left-icon="contact"
        placeholder="请输入用户名"
      />
      <van-field v-model="loginInfo.userpwd" type="password" label="密码" placeholder="请输入密码" required left-icon="records"/>
    </van-cell-group>
    <div class="register move">
        <i class="iconfont icon-shouye" @click="home()"></i>
        <span @click="register()">立即注册</span>
    </div>
    <van-button round type="primary" size="large" class="move" @click="login">登录</van-button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            loginInfo:{}
        }
    },
    methods:{
        register(){
            this.$router.push({name:"register"})
        },
        home(){
            this.$router.push({name:"home"})
        },
        login(){
            this.$axios.post("/vue/login",this.loginInfo).then(res=>{
                if(!!res.data.type){
                window.sessionStorage.userInfo = JSON.stringify({token:res.data.token})
                window.sessionStorage.username = res.data.username
                this.$router.push({name:"home"})
            }
        })
      }
    },
    created() {
        this.loginInfo.username = this.$route.params.username
    },
}
</script>

<style lang="scss" scoped>
    .img{
        text-align: center;
    }
    .img img{
        width: 40%;
        // border-radius: 50%;
        display: inline-block;
        padding: 1rem 0;
    }
    .move{
        margin:.4rem 0;
    }
    .register{
        text-align: right;
        padding-top: .1rem;
        padding-right: .3rem;
        color: #0091DE;
    }
    .iconfont{
        padding-right: .2rem;
    }
</style>
