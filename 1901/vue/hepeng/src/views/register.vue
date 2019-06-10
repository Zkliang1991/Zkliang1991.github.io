<template>
    <div>
        <Head title="注册" :show="!!1" ></Head>

        <mt-field class="form username" label="用户名" placeholder="请输入用户名"  type='text' v-model="registerInfo.username" @change="checkUserName" ></mt-field>
        <mt-field class="form userpwd" label="密码" placeholder="请输入密码" type="password" v-model="registerInfo.pwd" @change="checkUserPwd"></mt-field>
        <mt-field class="form repwd" label="确认密码" placeholder="请再次输入密码" type="password"  @change="checkRePwd"></mt-field>
        <mt-field class="form tel" label="手机号" placeholder="请输入手机号" type="tel" v-model="registerInfo.tel" @change="checkTel"></mt-field>
        <mt-field class="form email" label="邮箱" placeholder="请输入邮箱" type="email" v-model="registerInfo.email" @change="checkEmail"></mt-field>

        <mt-button type="primary" size="large" class=" form registerBtn" @click="registerBtn">提交注册信息</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            selected:"login",
            loginInfo:{},
            registerInfo:{}
        }
    },
    methods:{
        data(){
            return{
                usernameInput:document.querySelector('.username .mint-field-core'),
                userpwdInput: document.querySelector('.userpwd .mint-field-core'),
                repwdInput:document.querySelector('.repwd .mint-field-core'),
                telInput:document.querySelector('.tel .mint-field-core'),
                emailInput:document.querySelector('.email .mint-field-core'),

            }

        },
        checkUserName:function(){
            var check = false;
            var usernameInput = document.querySelector('.username .mint-field-core');
            var username = usernameInput.value;
            var regUsername = /^[a-zA-Z]([$_a-zA-Z0-9]{3,9})$/;
            if (!regUsername.test(username)) {
                Toast({
                    message: '用户名长度为4-10位且不能以数字开头.',
                    position: 'center',
                    duration: 3000
                });
                check = false;
            } else {

                check = true;
            }
            return check;
           
        },
        checkUserPwd(){
            var check = false;
            var userpwdInput = document.querySelector('.userpwd .mint-field-core');
            var userpwd = userpwdInput.value;
            var regUserPwd = /^[a-zA-Z]([$_a-zA-Z0-9]{3,9})$/;
             if (!regUserPwd.test(userpwd)) {
                 Toast({
                    message: '密码长度为4-10位由字母/数字组成且不能以数字开头.',
                    position: 'center',
                    duration: 3000
                });
                check = false;
            } else {
                check = true;
            }
            return check;
        },
        checkRePwd(){
            var check = false;
            var repwdInput = document.querySelector('.repwd .mint-field-core');
            var userpwdInput = document.querySelector('.userpwd .mint-field-core');
            var repwd = repwdInput.value;
            var userpwd = userpwdInput.value;
            if (userpwd != repwd) {
                Toast({
                    message: '两次密码输入不一致,请重新输入.',
                    position: 'center',
                    duration: 3000
                });
                check = false;
            } else {
                check = true;
            }
            return check;
        },
        checkTel(){
            var check = false;
            var telInput = document.querySelector('.tel .mint-field-core');
            var usertel = telInput.value;
            var regUserTel = /^1[34578]\d{9}$/;
            if (!regUserTel.test(usertel)) {
                Toast({
                    message: '电话号码格式错误,请输入常用的电话号码.',
                    position: 'center',
                    duration: 3000
                });
                check = false;
            } else {
                check = true;
            }
            return check;
        },
        checkEmail(){
            var check = false;
            var emailInput = document.querySelector('.email .mint-field-core');
            var email = emailInput.value;
            var regUserEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
            if (!regUserEmail.test(email)) {
                Toast({
                    message: '邮箱格式错误,请输入常用邮箱',
                    position: 'center',
                    duration: 3000
                });
                check = false;
            } else {
                check = true;
            }
            return check;
        },
        registerBtn(){
             var check = this.checkUserName() && this.checkUserPwd() && this.checkRePwd() && this.checkTel() && this.checkEmail();
                if (check == true) {
                    console.log(this.registerInfo);
                    this.$axios.post("/vue/register",this.registerInfo)
                    .then(res=>{
                        let result = res.data;
                        console.log(res.data);
                        if(result.code==200){
                            Toast({
                                message: result.msg,
                                position: 'center',
                                duration: 1000
                            }); 
                            this.$router.push({name:'login'});
                        }else{
                           Toast({
                                message: result.msg,
                                position: 'center',
                                duration: 3000
                            }); 
                        }
                    })
                }else{
                    Toast({
                        message: '以上信息填写有误,重新填写之后点击注册.',
                        position: 'center',
                        duration: 3000
                    });
                }
        },       
    }
}
</script>

<style scoped >
    .form{
        margin:0.15rem 0;
    }
</style>

