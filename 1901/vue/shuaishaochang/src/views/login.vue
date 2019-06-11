<template>
    <div>
        <Head title="登录"
        ></Head>
        <div class="dl">
        <!-- <nut-textinput 
            v-if="users"
            placeholder="请输入用户名/手机号" 
            :v-model="users" 
            label="用户名：" 
            type="text"
        /> -->
        <nut-textinput 
            placeholder="请输入用户名/手机号" 
            v-model="val.username" 
            label="用户名：" 
            type="text"
        />
        <nut-textinput 
            placeholder="请输入密码"
            label="密码框：" 
            type="password"
            v-model="val.pwd"
        />
        <p class="word">忘记密码</p>
        <nut-button 
            block 
            shape="circle"
            @click="login"
            >
            登录
            </nut-button>
            <p style="margin:20px 0;font-weight:900;" @click="gotoZhuce">注册账号</p>
            <div class="san">
                <h3>第三方登录</h3>
                <ul class="qq">
                    <li>
                        <img src="../assets/images/weixin.png" alt=""> 
                        <span>微信</span>
                    </li>
                     <li>
                        <img src="../assets/images/qq1.png" alt="">
                        <span>qq</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data(){
            return {
                val:{},   
                //  users:this.$route.params.users,
            }
        },
        methods:{
            gotoZhuce(){
                this.$router.push({name:"zhuce"})
            },
            login(){
                // console.log(this.val);
                this.$axios.post("/vue/login",this.val)
                .then(res=>{
                    if(res.data.type==1){
                        window.sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                        this.$router.push({name:'home'});
                        localStorage.username = this.val.username;
                    }else{
                        alert("用户名或密码错误");
                    }
                })
            }
        },
        mounted(){
            
        },
        watch:{

        }
    }
 
</script>

<style scoped>
    .dl{
        margin-top:50px;
    }
    .word{
        float:right;
        margin:20px 20px 20px 0;
        color:crimson;
    }
    .san{
        width: 100%;
        margin:100px 0;
    }
    .qq{
        width: 100%;
        height: 50px;
    }
    li{
        float:left;
        width: 50%;
        margin-top:40px ;
        overflow: hidden;
    }
    img{
        vertical-align: top;
        width: 30%;
        height: 40px;
        margin-left:65px;
    }
</style>
