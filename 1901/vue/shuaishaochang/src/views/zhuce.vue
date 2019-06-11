<template>
    <div>
        <Head title="注册用户"></Head>
        <div class="zc">
        <nut-textinput 
            placeholder="请输入用户名/手机号" 
            v-model="val.username" 
            label="用户名：" 
            type="text"
        />
        <nut-textinput 
            placeholder="请输入手机号"
            label="手机号："
            type="tel"
            v-model="val.tel"
        />
        <nut-textinput 
            placeholder="请输入密码"
            label="密码框：" 
            type="password"
            v-model="val.pwd"
        />
        <input type="text" class="input-phone" placeholder="短信验证码"><span>获取</span>
        <nut-button class="resigter"
            block 
            shape="circle"
            @click="zhuce"
            >
            立即注册
        </nut-button>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            val:{
                username:null,
                tel:null,
                pwd:null
            }
        }
    },
    methods:{
        zhuce(){
            // console.log(this.val);
            this.$axios.post("/vue/zhuce",this.val)
            .then(res=>{
                if(res.data.type==1){
                    var users = this.val.username;
                    // console.log(users);
                    this.$router.push({name:'login'});
                    // localStorage. = this.val.username;
                }else{
                    alert("666")
                }
            })
        }
    },
    props:{
        users:String
    }
}
</script>


<style scoped>
    .zc{
    margin-top:50px;
}
.resigter{
    margin:20px 0;
}
.input-phone{
    border:ghostwhite 1px solid;
    width: 55%;
    height: 30px;
    margin-top:10px;
}
</style>
