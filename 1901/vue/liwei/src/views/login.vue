<template>
    <div class="login">
        <van-nav-bar
        title="登录"
        left-text="返回"
        right-text="注册"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        class="top"/>
        <van-tabs v-model="active" animated swipeable>
            <van-tab title="账号密码登录">
                <van-field
                        v-model="username"
                        label="用户名"
                        placeholder="请输入用户名"
                        :error-message="nameErr"
                        right-icon="question-o"
                        @click-right-icon="$toast(usernamegui)"
                        class="nametop"
                    />
                    <van-field
                        v-model="userpwd"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        :error-message="pwdErr"
                        right-icon="question-o"
                        @click-right-icon="$toast(userpwdgui)"
                    />
                    <van-button type="danger" 
                    size="large"
                    class="anniu" @click="yonghulogin">登录</van-button>
                   
            </van-tab>
            <van-tab title="手机快速登录">
                    <van-field
                        v-model="userphone"
                        label="手机号"
                        placeholder="请输入手机号"
                        right-icon="question-o"
                        @click-right-icon="tishi"
                        class="nametop"
                    />
                    <van-field
                        v-model="useryzm"
                        center
                        clearable
                        label="短信验证码"
                        placeholder="请输入短信验证码"
                    >
                        <van-button slot="button" size="small" type="primary" @click="tishi">发送验证码</van-button>
                    </van-field>
                    <van-button type="danger" 
                    size="large"
                    class="anniu" @click="tishi">登录</van-button>
            </van-tab>
        </van-tabs>  
    </div>
</template>

<script>

import Vue from 'vue'

import { NavBar } from 'vant';
Vue.use(NavBar);
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

import { Field } from 'vant';
Vue.use(Field);

import { Dialog } from 'vant';
Vue.use(Dialog)


export default {
    data(){
        return {
            active:0,
            username:'',
            userpwd:'',
            phone:'',
            nameErr:'',
            pwdErr:'',
            userphone:'',
            useryzm:'',
            usernamegui:'用户名规则,需要您输入1-6位汉字或英文',
            userpwdgui:'密码规则,需要您输入6-12位英文或数字'
        }
    },
     methods: {
        onClickLeft() {
            this.$router.back()
        },
        onClickRight() {
            this.$router.push({name:'register'})
        },
        yonghulogin(){
            let that =this
            //正则验证
            var userNameReg = /^[\u4E00-\u9FA5a-z]{1,6}$/gi
            var userPwdReg = /^[0-9a-z]{6,12}$/gi

            let userNameFlag = userNameReg.test(this.username)
            let userPwdFlag = userPwdReg.test(this.userpwd)

             //验证用户名格式
            if(userNameFlag){
                this.nameErr = ''
            }else{
                this.nameErr = '用户名格式不正确'
            }
            
            //验证用户密码格式
            if(userPwdFlag){
                this.pwdErr = ''
            }else{
                this.pwdErr = '密码格式不正确'
            }

            if(userNameFlag&&userPwdFlag){
                this.$axios.get("/vue/lr/login",{
                    params:{
                        username:this.username,
                        userpwd:this.userpwd
                    }
                }).then(res=>{
                    if(res.data.type==1){
                        let userinfo={}
                        userinfo.token = res.data.token;
                        userinfo.username= this.username
                        userinfo= JSON.stringify(userinfo)
                        sessionStorage.userinfo = userinfo
                        this.$store.dispatch('getUserCar') //请求购物车,底部footer显示购物车数量
                        that.$dialog.confirm({
                            title: '登录成功',
                            message: '是否立即开始体验'
                            }).then(() => {
                                if(localStorage.routename){
                                    that.$router.push({name:localStorage.routename})
                                }else{
                                    that.$router.push({name:'home'})
                                }
                            }).catch(()=>{
                                
                            })
                    }else{
                        that.$toast.fail(res.data.msg);
                    }
                    
                })

            }
        },
        tishi(){
            this.$toast('正在测试bug,暂不开放快速登录接口,麻烦亲使用账号密码登录呀')
        }
    }
}
</script>

<style lang="scss" scoped>
.top{
    background: linear-gradient(150deg,#ff5a61 50%,#fd631c);
    .van-nav-bar__text{
        color:white;
    }
    .van-icon-arrow-left {
    color: #ffffff !important;
    vertical-align: middle;
    }
    .van-nav-bar__title{
        color:white;
    }
}
.nametop{
    margin-top: .2rem;
}
.anniu{
    margin-left: 5%;
    width: 90%;
    background-color: #ff464e;
    margin-top: .5rem;
}

</style>


