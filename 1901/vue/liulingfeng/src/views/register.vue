<template>
    <div class="register">
      <van-nav-bar title="注册" left-text="返回" left-arrow @click-left="onClickLeft" />
            <van-cell-group class="cell">
                <van-field v-model="registerInfo.username" placeholder="请输入用户名" label="用户名" left-icon="contact"/>
                <van-field v-model="registerInfo.pwd"  placeholder="请输入密码" label="密码" left-icon="records"/>
                <van-field v-model="registerInfo.mobile"  placeholder="请输入手机号" label="手机" left-icon="records"/>
                <van-button type="primary" size="large" @click="register">注册</van-button>
            </van-cell-group>
    </div>
</template>

<script>
export default {
    data(){
        return{
            registerInfo:{
                username:"",
                pwd:"",
                mobile:"",
            }
        }
    },
    methods:{
        onClickLeft(){
             this.$router.go(-1)
        },
        register(){
            this.$axios.post("/vue/register",{data:this.registerInfo}).then(res=>{
                var data = res.data
                if(data.code ==200){                    
                   this.$toast(data.msg)
                    this.$router.push({name:"login"})
                }
                this.$toast(data.msg)
            })
        },
       
    }
}
</script>
