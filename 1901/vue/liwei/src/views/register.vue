<template>
    <div class="login">
        <van-nav-bar
        title="注册"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        class="top"/>

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
                    <van-field
                        v-model="userpwdq"
                        type="password"
                        label="确认密码"
                        placeholder="请再次输入密码"
                        :error-message="pwdQErr"
                        right-icon="question-o"
                        @click-right-icon="$toast(userpwdguiQ)"
                    />
                    <van-field
                        v-model="userphone"
                        label="手机号"
                        placeholder="请输入手机号码"
                        :error-message="phoneErr"
                        right-icon="question-o"
                        @click-right-icon="$toast(userphonegui)"
                    />
                    <van-field
                        v-model="useryzm"
                        center
                        clearable
                        label="短信验证码"
                        placeholder="可以忽略此项"
                    >
                        <van-button slot="button" size="small" type="primary" @click="tishi">发送验证码</van-button>
                    </van-field>
                    <van-button type="danger" 
                    size="large"
                    class="anniu" @click="yonghulogin">注册</van-button>
            
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
            userpwdq:'',
            userphone:'',
            nameErr:'',
            pwdErr:'',
            pwdQErr:'',
            phoneErr:'',
            useryzm:'',
            usernamegui:'用户名规则,需要您输入1-6位汉字或英文',
            userpwdgui:'密码规则,需要您输入6-12位英文或数字',
            userpwdguiQ:'必须与上面的密码相同',
            userphonegui:'必须写入正确的手机号'
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
            var userPhoneReg = /^1[3-9][0-9]{9}$/g

            let userNameFlag = userNameReg.test(this.username)
            let userPwdFlag = userPwdReg.test(this.userpwd)
            let userPhoneFlag = userPhoneReg.test(this.userphone)

            var userPwdQ = this.userpwd==this.userpwdq?true:false



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

            //验证手机格式
            if(userPhoneFlag){
                this.phoneErr=""
            }else{
                this.phoneErr="手机号码格式不正确"
            }

            if(userPwdQ){
                this.pwdQErr=""
            }else{
                this.pwdQErr="两次输入的密码不同"
            }

            if(userNameFlag&&userPwdFlag&&userPhoneFlag&&userPwdQ){
        
                this.$axios.get("vue/lr/register",{
                    params:{
                        username:this.username,
                        userpwd:this.userpwd,
                        userphone:this.userphone
                    }
                }).then(res=>{
                    if(res.data.type==1){
                        that.$dialog.confirm({
                            title: '注册成功',
                            message: '是否立即去登录'
                            }).then(() => {
                               
                                    that.$router.push({name:'login'})
                                
                            }).catch(()=>{
                                
                            })
                    }else{
                        that.$toast.fail(res.data.msg);
                    }
                    
                })

             }
        },
        tishi(){
            this.$toast('正在测试bug,暂不开放快速登录接口,麻烦忽略此项呀,不影响注册')
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


