<template>
    <div>
        <h2>哈凡</h2>
        <group class="groupa">
            <x-input 
            title="用户名" 
            class="inputx" 
            placeholder="请输入用户名" 
            v-model="loginInfo.username"
            required
            ></x-input>
            <x-input 
            title="密码"  
            class="inputx" 
            type="password"  
            placeholder="请输入正确的密码" 
            required
            v-model="loginInfo.pwd"></x-input>
             <flexbox> 
                    <flexbox-item>
                         <x-button class="xbutton" @click.native="godl" :disabled="!loginInfo.username || !loginInfo.pwd">登陆</x-button> 
                    </flexbox-item>
                  <flexbox-item>
                            <x-button class="xbutton" @click.native="goRegister">注册</x-button>
                  </flexbox-item>
           
             </flexbox>
        </group>
    </div>
</template>

<script>
    import {
        Group,
        XInput,
        XButton, 
        Flexbox, FlexboxItem,
    } from 'vux';
    export default {
        name: 'guide',
        data(){
            return{
                loginInfo:{}
            }
        },
        components: {
            XInput,
            XButton,
            Group,
            Flexbox, FlexboxItem,
           },
        methods:{
            godl(){//登陆跳转
                console.log(this.loginInfo); //要注释
                this.$axios.post("/vue/login",this.loginInfo).then(res=>{
                    console.log(res.data);   //要注释
                    if(!!res.data.type){
                        window.sessionStorage.userInfo=JSON.stringify({token:res.data.token});
                        this.$router.push({name:'home'})
                    }
                })
            },
            goRegister(){//跳转到登陆界面
              this.$router.push({name:'register'})
            } 
        }

    }
</script>

<style scoped>
    h2{
        width: 100%;
        background: #111;
        height: 45px;
        color: #ffffff;
        font-size: 18px;
        line-height:45px;
        text-align: center;
        }
    div{
      
        margin: 0 auto;
        text-align: left;
  
 
    }
    .groupa{
        margin-top: 250px;
        background-color:rgba(255,255,255,0.9)
    }
    .inputx {
        width: 70%;
        border: 1px solid #111;
        margin-top: 15px;
        border-radius:5px;
        font-size: 14px;
          
    }
    .xbutton{
        width: 42%;
        margin-top: 15px;
        font-size: 14px;
    }
</style>