<template>
    <div id="my">
        <Head title="个人中心" :show="true"></Head>
        <div id="bg">
            <div id="userInfo" v-if='flag'>
                <div id="userImg">
                    <div id="imgContent"></div>
                </div>
                <h3 >欢迎你:{{username}}</h3>
            </div>
           <ul id="reg-log-btn" v-if='!flag'>
               <li id="loginBtn">
                   <van-button type="primary" size='large' @click='goLogin'>登录</van-button>
               </li>
               <li id="register">
                    <van-button type="danger" size='large' @click="goRegister">注册</van-button>
               </li>
           </ul>
           <van-button v-if='flag' type="info" size='large' @click="logout" id="logout">退出登录</van-button>
        </div>
    </div>
</template>


<script>

export default {
    inject:['reload'],
    data(){
        return{
            flag:Boolean,
            username:'',
        }
    },
    methods:{
       goLogin(){
           this.$router.push({name:'login'});
       }, 
       goRegister(){
           this.$router.push({name:'register'});
       },
       logout(){
           localStorage.removeItem('username');
           var flag = false;
           this.reload();
        //    this.$router.go(0);       
           //    this.$router.push({name:'login'});
       }
    },
    mounted(){
        this.username = localStorage.getItem('username');
         if(this.username){
             this.flag = true;
         }else{
             this.flag = false;
         }
    }
}
</script>


<style lang="scss" scoped>
    #my{
        font-size:40px;
        h2{
            color:blue;
        }
        #bg{
            height: 11.7rem;
         
            background-image: url('../assets/images/loginbg.jpg');
            background-size: 100% 100%;
            #userInfo{
                position: absolute;
                top:1.5rem;
                left: 0;
                width: 100%;
                height: 2.5rem;
                h3{
                    color:wheat;
                    font-size: 28px;
                    text-align: center;
                }
                #userImg{
                    width: 2.5rem;
                    height: 2.5rem;
                    text-align: center;
                    #imgContent{
                        display: inline-block;
                        width: 2.5rem;
                        height: 2.5rem;
                        border-radius: 50%;
                    }
                }
            }
            #logout{
                position: absolute;
                left: 0;
                bottom: 1.5rem;
            }
            #reg-log-btn{
                position: absolute;
                bottom: 1.5rem;
                left: 0;
                width: 100%;
                height: 1.2rem;
                li{
                    float: left;
                    width: 46%;
                    text-align: center;
                    line-height: 0.6rem;
                    font-size: 24px;
                    color: wheat;
                    margin: 0.15rem;
                }
            }
            #gotoLogin{
            position: absolute;
            bottom: 2.3rem;
            left: 0;
            }
            #goLeave{
                position: absolute;
                bottom:1.2rem;
                left: 0;
            }
        }
        
    }
</style>

