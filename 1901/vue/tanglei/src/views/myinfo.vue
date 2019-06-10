<template>
    <div>
        <Myheader title="设置个人资料"></Myheader>
        
        <div class="page">
                <div class="title">
                <div class="headimg">
                     <img src="@/assets/images/1.jpg" alt="">
                </div>
                
                <p class="usern"><input type="text" v-model="userinfo.username"></p>
            </div>
            <div class="sex">
                <p>性别</p>
               <van-radio-group v-model="radiosex" >
                    <van-radio name="boy" checked-color="#999">男</van-radio>
                    <van-radio name="girl" checked-color="#999">女</van-radio>
                </van-radio-group>
            </div>
            <div class="state">
                <p>当前状态</p>
                <van-radio-group v-model="rediostate">
                <van-radio name="parent" checked-color="#999">&nbsp;&nbsp;&nbsp;为人 父母</van-radio>
                <van-radio name="love" checked-color="#999">恋爱中/已婚</van-radio>
                <van-radio name="single" checked-color="#999">&nbsp;&nbsp;&nbsp;单身 生活</van-radio>
                </van-radio-group>
            </div>
            <van-button type="primary" size="small" @click="baocun">保存</van-button>
        </div>
    </div>
</template>
<script>
// Notify
import {mapState} from "vuex";
export default {
      data() {
    return {
      radiosex: '',
      rediostate:"",
        oldUrl:"",
        url:"",
        // username:""
    }
  },
  beforeRouteEnter(tp,from,next){
       next(vm=>{
          vm.oldUrl=from.path
      })
  },
  computed:{
        ...mapState([
            'userinfo'
        ])
    },
    mounted(){
        this.$nextTick(()=>{
            // console.log(this.oldUrl),
            this.url=this.oldUrl
        })
        // console.log(this.userinfo.dlstate)
        if(this.userinfo.dlstate){//已经登录，连接数据库，判断是否有填写信息
            this.$axios.get("/vue/userinfo").then(res=>{
                // console.log(res)
                if(res.data.type==1){
                    this.radiosex=res.data.sex;
                    this.rediostate=res.data.state;
                }else{
                    this.radiosex="";
                    this.rediostate="";
                }
            })

           
         }else{             
            this.$router.push({name:"login"})
         }
    },
    wacth:{
        url(newval){
            this.url=newval;
        }
    },
    methods:{
        baocun(){
            // alert(this.url)
            if(this.radiosex==""|| this.rediostate==""){
                // alert('请填写内容');

            }else{
                 this.$axios.get("/vue/updateuser",{params:{username:this.userinfo.username,sex:this.radiosex,state:this.rediostate}}).then(res=>{
                    // console.log(res)
                    if(res.data.type==1){
                        var urlstr=this.url;
                        if(urlstr.indexOf("my")==-1){
                            //从注册界面进入的，下一步
                            this.$router.push({name:'xq'})
                        }else{
                            //个人中心界面进入，成功：返回
                            this.$router.push({name:"my"})
                        }
                    }else if(res.data.type==0){
                        this.$router.push({name:"login"})
                    }
                 })
            }
        
        }
    }
}
</script>
<style lang="scss" scoped>
.page{
       margin-top: .8rem;
}
.title{
    height:5rem;
    // background:rgb(32, 32, 32);
    position: relative;
}
.headimg{
    height: 1.5rem;
    width:1.5rem;
    background:rgb(199, 230, 218);
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
    // color:#fff;
    position: absolute;
    bottom: 1rem;
    left:0;
    right:0;
    margin: auto;
    input{
        border:0;
        width:1.5rem;
        text-align: center;
    }
}
.sex{
    .van-radio{
        display:inline-block;
        margin:.2rem;
    }
    p{
        color:#999;
    }
}
.state{
    margin-top:.2rem;
    .van-radio{
     margin:.3rem;
    }
    p{
        color:#999;
    }
}


</style>

