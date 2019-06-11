<template>
    <div>
        <h2>哈凡</h2>
        <group class="groupa">
            <x-input  
            title="用户名" 
            v-model="rigisterInfo.username" class="inputx" 
            placeholder="6-12位数字和字母组成"  
            required
            :is-type="checkName"
            ></x-input>
            <x-input  
            title="手机号"  
            v-model="rigisterInfo.mobile"  
            class="inputx" 
            placeholder="请输入手机号" 
            required  
            is-type="china-mobile"></x-input>
            <x-input  
            type="password" 
            title="密码" 
            v-model="rigisterInfo.pwd" 
            class="inputx"  
            placeholder="请输入6-10位数字密码"  
            required
            :is-type="checkPwd"></x-input>
            <!-- <x-button  class="xbutton"  @click.native="goLogin" :disabled="!rigisterInfo.username || !rigisterInfo.mobile || !rigisterInfo.pwd">注册</x-button> -->
               
                   <flexbox>
        <flexbox-item>
          <x-button class="xbutton"  @click.native="goLogin" :disabled="!rigisterInfo.username || !rigisterInfo.mobile || !rigisterInfo.pwd" >注册</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button  class="xbutton" @click.native="goLoginto">登陆</x-button>
        </flexbox-item>
      </flexbox> 
        </group>
    </div>
</template>

<script>
//用户注册界面
    import {
        Group,
        XInput,
        XButton,
         Flexbox,
         FlexboxItem
    } from 'vux';
import { close } from 'fs';

    export default {
        name: 'register',
        data(){
            return{
        
                rigisterInfo:{}
            }
        },
        components: {
            XInput,
            XButton,
            Group,
            Flexbox,
         FlexboxItem
           },
        methods:{
            checkName(value){ //验证用户名是否符合条件
                var reg = /^[\da-z]{6,12}$/i;
                if(reg.test(value)){
                    return {value:true}
                }else{
                    return {
                        value:true,
                        msg:'手机号码格式有误'
                    }
                }
            },
            checkPwd(value){ //验证密码是否符合条件
                if(value.length >=6 && value.length<=10){
                      return {value:true}
                }else{
                     return {
                        value:true,
                        msg:'密码长度不合法'
                    }
                }
            },
            goLogin(){ //点击注册跟数据库产生交互
                console.log(this.rigisterInfo);
                this.$axios.post("/vue/register",this.rigisterInfo).then(res=>{
                    console.log(res.data);
                    if(res.data.type==1){
                         this.$router.push({name:'guide'})
                    }else{
                         this.$router.push({name:'register'})
                    }
                })

            },
            goLoginto(){ //点击登陆直接跳转到登陆页面
             this.$router.push({name:'guide'})
            }
        }
    }
</script>

<style scoped>
    h2{
        width: 100%;
        background: #111;
        height:46px;
        color: #ffffff;
        font-size: 18px;
        line-height: 46px;
        text-align: center;
        }
    div{
        margin: 0 auto;
        text-align: left;
       
    }
    .groupa{
        margin-top: 250px;
    }
    .inputx {
        width: 70%;
        border: 1px solid #111;
        margin-top: 15px;
        border-radius: 5px;
        font-size: 14px;
    }
    .xbutton{
  
        width:50%;
        margin:14px auto;
        font-size: 14px;
    }
</style>