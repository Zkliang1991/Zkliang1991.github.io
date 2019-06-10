<template>
    <div class="loginpage">
        <van-swipe :autoplay="3000" indicator-color="white" >
            <van-swipe-item v-for="(img,i) in imgslist" :key="i" @click="notshow" >
                <img :src="img.url" alt="">
                <p>
                    <span>{{img.title}}</span><br>
                    <span>{{img.msg}}</span>
                </p>
            </van-swipe-item>
        </van-swipe>
        <div class="btns">
            <div class="page" v-if="dlshow || regshow">
                <div class="login" v-if="dlshow">
                    <van-cell-group>
                        <van-field
                            v-model="userlogin.email"
                            required
                            clearable
                            label="邮箱"                           
                            placeholder="请输入邮箱"
                            @blur="emailreg(userlogin.email)"
                        />

                        <van-field
                        v-model="userlogin.password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码：字母数字 $_"
                        @blur="pwdreg(userlogin.password)"                        
                        required
                    />
                    </van-cell-group>
                    <van-button type="primary" style="width:100%;" @click="loginon">登录</van-button>
                </div>
                <div class="register" v-if="regshow" >
                    <van-cell-group>
                        <van-field
                            v-model="userregis.email"
                            required
                            clearable
                            label="邮箱"                           
                            placeholder="请输入邮箱"
                            @blur="emailreg(userregis.email)"
                        />
                        <van-field
                            v-model="userregis.username"
                            required
                            clearable
                            label="用户名"                           
                            placeholder="请输入用户名"
                            @blur="namelreg"
                        />

                        <van-field
                        v-model="userregis.password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                        @blur="pwdreg(userregis.password)"
                    />
                     <van-field
                        v-model="userregis.passwordok"
                        type="password"
                        label="确认密码"
                        placeholder="请确认密码"
                        required
                    />
                    </van-cell-group>
                    <van-button type="warning" style="width:100%;" @click="registeron">注册</van-button>
                    
                </div>
            </div>
            <p class="loginbtn" @click="loginbtn">登录</p>
            <p @click="regisbtn">注册</p>
            <h4 @click="goindex">暂不登录，随便逛逛</h4>
        </div>
    </div>
</template>
<script>
// import { Swipe, SwipeItem,Toast } from 'vant';
import {Toast} from 'vant'
export default {
    data(){
        return {
            oldUrl:"",
             url:"",
            dlshow:false,
            regshow:false,
            userlogin:{},
            userregis:{},
            imgslist:[
                {title:"闭目",msg:"难掩喜悦与期待",url:require("../assets/images/1.jpg"),comp:false},
                {title:"睁眼",msg:"为你为心所动",url:require("../assets/images/2.jpg"),comp:false},
                {title:"启程",msg:"只因追寻你所爱",url:require("../assets/images/3.jpg"),comp:false},
                {title:"我们",msg:"做最了解你的人",url:require("../assets/images/4.jpg"),comp:false}
            ],
            regs:{
                
            },
            reminder:"sssss"
        }
        
    },computed:{
        
    },
     beforeRouteEnter(tp,from,next){
       next(vm=>{
          vm.oldUrl=from.path
      })
  },
    methods:{
        emailreg(val){//邮箱表单验证
            let reg=new RegExp("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$");
            if(reg.test(val)){
                
                this.regs.email=true;
            }else{
                this.regs.email=false;
                Toast('邮箱格式不正确');
            }
            // console.log(this.regs.email)
        },
        namelreg(){//用户名
            let reg=new RegExp("^[a-zA-Z0-9][a-zA-Z0-9$_]{1,9}$");
             if(reg.test(this.userregis.username)){
                
                this.regs.name=true;
            }else{
                this.regs.name=false;
                Toast('用户名不正确');
            }
            // console.log(this.regs.name)
        },
        pwdreg(val){//密码格式验证
            let reg=new RegExp("^[a-zA-Z0-9][a-zA-Z0-9$_]{5,}$");
             if(reg.test(val)){
                
                this.regs.pwd=true;
            }else{
                this.regs.pwd=false;
                Toast('密码格式不正确（字母数字 $  _）最少6位');
            }
            // console.log(this.regs.pwd)
        },
        notshow(){
            this.regshow=false;
            this.dlshow=false;  
        },
        loginbtn(){
           if(!this.dlshow){
                this.regshow=this.dlshow;
                this.dlshow=!this.dlshow;  
            }
        },
        regisbtn(){
            if(!this.regshow){
                this.dlshow=this.regshow;
                this.regshow=!this.regshow;
                
            }
           
        },
        registeron(){ //注册
        if(this.userregis.passwordok&&this.userregis.password&&this.userregis.username&&this.userregis.email){
            if(this.regs.email&&this.regs.name&&this.regs.pwd){
                if(this.userregis.password==this.userregis.passwordok){
                    // 验证成功，链接数据库注册
                    var userinfo={
                        email:this.userregis.email,
                        username:this.userregis.username,
                        password:this.userregis.password
                    }
                    this.$axios.get("/vue/register",{
                        params:{userinfo}
                    }).then(res=>{
                        // console.log(res)
                        if(res.data.type==1){
                            localStorage.token=res.data.token;
                            this.$store.dispatch("changeusername",userinfo.username);
                            this.$router.push({name:"info"})
                        }
                    })

                }else{
                    Toast("两次密码不一致")
                }
            }else{
                //  console.log(this.userregis.password)
                Toast("请检查输入信息的格式")
            }
        }else{
           
            Toast("请填写正确的信息")
        }
            
        },
        loginon(){//登录
            if(this.userlogin.email&&this.userlogin.password){
                // Toast("cehnggg")
                 this.$axios.post("/vue/login",this.userlogin)
                 .then(res=>{
                    if(res.data.type==1){
                        // console.log(res)
                        localStorage.token=res.data.token;
                        this.$store.dispatch("changeusername",res.data.username);
                        // if(localStorage.backurl){
                        //     location.href=localStorage.backurl;
                        // }else{
                        //     this.$router.push({name:"home"})
                        // }
                         var urlstr=this.url;
                         console.log(urlstr)
                         if(urlstr=="/"){
                            this.$router.push({name:'home'})
                         }else if(urlstr.indexOf("my")!=-1){                          
                            this.$router.push({name:'my'})
                        }else if(urlstr.indexOf("goodsinfo"!=-1)){
                            location.href=localStorage.backurl;
                            // this.$router.push({name:"goodsinfo"})
                        }else{
                            this.$router.push({name:"home"})
                        }



                    }else{
                        Toast(res.data.msg)
                    }
                })
            }else{
                Toast("用户名密码不能为空")
            }
        },
        goindex(){//不登录进入主页
            this.$router.push({name:"home"})
        }
    },
    wacth:{
   
    },
    mounted(){
        this.$nextTick(()=>{
            // console.log(this.oldUrl),
            this.url=this.oldUrl
        })
    }
}
</script>
<style lang="scss" scoped>
.loginpage{
    // font-size: 12px;
}
  .van-swipe{
      div{
          height:100%;
          width:100%;
          position: relative;
          img{
               height:100%;
                width:100%;
          }
          p{
              position:absolute;
              text-align:left; 
              top:2.8rem;
              left:.5rem;
              margin:auto;
          }
          

      }
    .van-swipe__indicators{
      display: none;
    }
  }
  .loginpage{
      position: absolute;
      width:100%;
      overflow: hidden;
  }
  .btns{
    //   height:5rem;
      width:100%;
      position: absolute;
      bottom: 0;
      left:0;
      p{
          width:50%;
          height:1rem;
          line-height:1rem;
          float:left;
          color:#fff;
          background: rgba(0,0,0,.8);
      }
      .loginbtn{
          width:49%;
        border-right:1px solid #fff;      
     }
      h4{
          line-height:1rem;
          height:1rem;
          margin-top:1rem;
          background:#999;
      }
      .page{
          height: 7.5rem;
          width:100%;
        
          position: absolute;
          bottom:2rem;
          color:#fff;
          .login,.register{
              width:100%;
              height:100%;
              background:rgba(0,0,0,.7);
              .van-cell-group{
                  
              }
          }
      }
  }
 
</style>

