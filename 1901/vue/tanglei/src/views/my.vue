<template>
    <div class="mypage">
        <div class="title">
            <p class="icon">
                <i class="iconfont icon-icon-test"></i>
                <i class="iconfont icon-shezhi-"></i>
            </p>
            <div class="headimg" @click="loginbtn">
                <img src="@/assets/images/1.jpg" alt="">
            </div>
            <p class="usern" @click="loginbtn">{{userinfo.username}}</p>
        </div>
        <div class="infos">
            <dl>
                <router-link :to="{name:'mydinddan'}"><dt>我的订单</dt></router-link>
                <dd><i class="iconfont icon-shouye1"></i> 待付款</dd>
                <dd><i class="iconfont icon-shangdian"></i> 待消费</dd>
                <dd><i class="iconfont icon-tuikuan"></i> 退款</dd>
            </dl>
            <ul>
                 <router-link :to="{name:'myzan'}"><li>我的收藏 <i>></i></li></router-link>
                <router-link :to="{name:'xq'}"><li class="mar">我的兴趣标签<i>></i></li></router-link>
               <li>分享给好友<i>></i></li>
                <li>商家版下载<i>></i></li>
                <li>联系我们<i>></i></li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex";
export default {
    computed:{
        ...mapState([
            'userinfo'

        ])
    },
    methods:{
        loginbtn(){
            //  console.log(this.userinfo.username)
            // console.log(this.userinfo.dlstate)
            if(this.userinfo.dlstate){//已登录  ：设置个人信息 资料
               this.$router.push({name:"info"})
            }else{//未登录
                this.$router.push({name:"login"})               
            }
        }
    },
    mounted(){
        // var token=localStorage.token;
        //   this.$axios.get("/vue/islogin",{
        //       params:{token}
        //   }).then(res=>{
        //        if(res.data.type==1){
        //         // this.$store.dispatch("changeusername",res.data.username).then(res=>{

        //         // })
        //        }
        //   })
    }
}
</script>
<style lang="scss" scoped>
$linheight: .24rem;
$size:12px;
$padding:.3rem;
 a{
  color:inherit;
 }
.title{
    height:5rem;
    background:rgb(32, 32, 32);
    position: relative;
}
.icon{
    text-align: right;
    color:#fff;
    padding:.3rem .2rem;
    .iconfont{
     margin:0 .2rem;
    }
}
.headimg{
    height: 1.5rem;
    width:1.5rem;
    background:#fff;
    position: absolute;
    top:0;
    bottom: 0;
    left:0;
    right:0;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;
    img{
        width:100%;
    }
}
.usern{
    width:100%;
    text-align: center;
    line-height:.4rem;
    font-size: 24px; 
    color:#fff;
    position: absolute;
    bottom: 1rem;
    left:0;
    right:0;
    margin: auto;
}
.infos{
    line-height: $linheight;
    font-size: $size;
    dl{
        width:100%;
        // height: $linheight * 2;
        overflow: hidden;
        dt{
            // width:100%;
            font-size: 16px;
            padding:.4rem;
            text-align: left;
            border-bottom: 1px solid #666;
        }
        dd{
            width:33%;
            padding:.4rem 0;
            
            height:$linheight;
            float: left;
            border-bottom: 1px solid #666;
        }
       
    }
     ul{
         font-size: 16px;
         text-align: left;
         background: #eee;
         margin-top: .2rem;
        
        li{
            line-height: .8rem;
            // height: $linheight;
            height:.8rem;
            padding:0 $padding;
            border-bottom:0.001rem solid #999;
            background: #fff;
            i{
                float: right;
            }
            
        }
        .mar{
            margin-bottom: .2rem;
        }
    }
}
</style>


