<template >
    <div id="index">
          <p class="peoples">个人中心</p> 
         <!-- <Head title="gerenzhongxin"></Head> -->
         <div class="show1" v-if="show">
             <p class="img1"><img src="../assets/images/touxiang2.png" alt="" ></p>
             <router-link :to="{name:'login'}"><p><h3>登陆</h3></p></router-link>
              <router-link :to="{name:'register'}"><p><h3>注册</h3></p></router-link>
             <p></p>
         </div>
         <div class="user" v-if="showuser">
           <p>道阻且长，然而值得期待</p>
           <!-- <van-button plain hairline type="primary">道阻且长，然而值得期待</van-button> -->
           欢迎你：
           <!-- <van-button loading type="danger" loading-text= {{userinfo}}/> -->
       {{userinfo}}
        
           <img src="@/assets/images/4.jpg" id="imgmine">
           <p @click="relogin">重新登录</p>
           </div>
          
        <!-- <mt-button type="success">default</mt-button> -->
        <!-- <van-skeleton
        title
        avatar
        :row="5"
        :loading="loading"
        >
        </van-skeleton> -->
         <hr>
    </div>
</template>
<script>
//  import { Button ,Swipe, SwipeItem} from 'mint-ui';
//  import { Skeleton } from 'vant';


export default {
data() {
    return {
      loading: true,
      userinfo:"",
      show:Boolean,
      showuser:Boolean
    }
  },
  // components:{
  //    Skeleton
  // },
  mounted() {
    this.loading = false;
    this.userinfo = sessionStorage.getItem('username');
     if(this.userinfo){
          this.show=false,
          this.showuser=true
    }else{
      this.show=true,
      this.showuser=false
    }
  },
  methods:{
    relogin(){
       sessionStorage.removeItem('username');
       this.$router.push({name:"login"})
    }
  },

}
</script>
<style  scoped>

.peoples{
    background-color: rgba(65, 28, 199, 0.4);
    color:white;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
}
#index{
    background-image: url(../assets/images/bgc.png);
    height:100%; 
    background-size:100% 100%;
     /* opacity: .5; */
}
.user{
    background-color: rgba(65, 28, 199, 0.2);
    color:white;
    font-size: 22px;
    height: 40px;
    font-size:700;
    line-height: 40px;
}
.img1{
     margin: auto;
    margin-left: 0;
    margin-top: 0;
    vertical-align: center;
     /* border:1px solid silver;
       border-radius:30px;
     background-color: grey; */
     /* opacity: .5; */
}
.img1 img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  
}
#imgmine{
  width: 100%;
  height: 200px;
}
p{
    text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        
        
}
h3{
color:white;
height: 40px;
line-height: 40px;
border:1px solid silver;
       border-radius:30px;
       width: 50%;
       margin:auto;
       /* margin:5px ; */
}
.show1{
    width: 100%;
    height: 200px;
    /* opacity: .8; */
}

</style>
