<template>
    <div>
        <van-nav-bar title="登录&注册" left-arrow @click-left="onClickLeft"></van-nav-bar>
        <van-tabs class="login_van">
            <van-tab title="登录">
                <br>
                <van-cell-group>
                    <van-field  placeholder="请输入用户名" label="用户名" v-model="keyname"/>
                </van-cell-group>
                <br>
                <van-cell-group>
                    <van-field  placeholder="请输入密码" label="密码" v-model="keypwd" type="password"/>
                </van-cell-group>
                <br>
                <van-button type="primary" size="large" class="deng" @click="login()">登录</van-button>
            </van-tab>
            
            <van-tab title="注册">
                <br>
                <van-cell-group>
                    <van-field  placeholder="请输入用户名" label="用户名" v-model="keyname"/>
                </van-cell-group>
                <br>
                <van-cell-group>
                    <van-field  placeholder="请输入密码" label="密码" v-model="keypwd"/>
                </van-cell-group>
                <br>
                <van-button type="primary" size="large" class="deng" @click="zhuce()">注册</van-button>
            </van-tab>
        </van-tabs>
        
    </div>
</template>

<script>
import {Toast} from "vant"
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState([
            "nLogin",
            "nHui"
        ]),
        keyname:{
            get(){
                return this.nLogin.username;
            },
            set(val){
                console.log(val);
                this.$store.commit("getKeyname",val); 
            }
        },
        keypwd:{
            get(){
                return this.nLogin.userpwd;
            },
            set(val){
                console.log(val);
                this.$store.commit("getKeypwd",val); 
            }
        }
    },
    mounted(){
        console.log(this.nHui.hui);
    },
    methods: {
        ...mapActions(["getName"]),
        onClickLeft() {
        // Toast('返回');
            this.$router.go(-1);
        },
        zhuce(){
            var reg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
            var reg1=/^[a-zA-Z0-9]{4,10}$/;
            if(this.nLogin.username!=""){
                if(this.nLogin.userpwd!=""){
                    if(reg.test(this.nLogin.username)==false){
                        Toast('用户名格式输入有误');
                    }else{
                        if(reg1.test(this.nLogin.userpwd)==false){
                            Toast('密码不能含有非法字符，长度在4-10之间');
                        }else{
                            console.log(this.nLogin)
                            this.getName({url:"/vue/register",params:this.nLogin});
                        }
                    }
                }else{
                    Toast('密码不能为空');
                }
            }else{
                Toast('用户名不能为空');
            }
        },
        login(){
            this.$axios.post("/vue/login",this.nLogin)
            .then(res=>{
                console.log(res.data);
                if(!!res.data.type){
                    window.sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                    if(this.nHui.hui==""){
                        this.$router.push({name:'home'});
                    }else{
                        this.$router.push({name:this.nHui.hui});
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
    .deng{
        background: #ff4444;
        border: 1px solid #ff4444;
    }
    .login_van{
        margin-top: 6%;
    }
</style>



