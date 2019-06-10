<template>
    <div>
        <Head title="个人中心"></Head>
        <div class="user-poster">
            <p id="user-p">
            <span class="user-img" >
                
            </span>
            <p class="user-span" @click="gotoLogin" >
                <em v-show="flag">登录/注册</em>
                <em v-show="!flag">欢迎{{username}}</em>
            </p>
            
        </div>
        <van-row class="user-links">
        <van-col span="6">
            <van-icon name="pending-payment" />
            待付款
        </van-col>
        <van-col span="6">
            <van-icon name="records" />
            待接单
        </van-col>
        <van-col span="6">
            <van-icon name="tosend" />
            待发货
        </van-col>
        <van-col span="6">
            <van-icon name="logistics" />
            已发货
        </van-col>
        </van-row>

        <van-cell-group class="user-group">
        <van-cell icon="records" title="全部订单" is-link />
        </van-cell-group>

        <van-cell-group>
        <van-cell icon="points" title="我的积分" is-link />
        <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
        <van-cell icon="gift-o" title="我收到的礼物" is-link />
        </van-cell-group>
        <Foot></Foot>    
    </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
export default {
    data(){
        return{
            
            username:"",
            flag:false
        }
    },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  methods:{
      gotoLogin(){
          this.$router.push({name:"login"})
      }
  },
  mounted(){
     this.username = sessionStorage.getItem("username");
     if(this.username){
         this.flag = false
     }else{
          this.flag = true
     }
  }
};
</script>


<style lang="less" scoped>

  .user-poster {
    width: 100%;
    height: 53vw;
    background:url("http://img0.wbiao.com.cn/article/201902/28/1551316396290200953.png");
    display: block;
  }
  .user-group {
    margin-bottom: 15px;
  }
  .user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    
  }
  van-icon {
      display: block;
      font-size: 24px;
    }
    .user-span{
        // display: inline-block;
        color: #fff;
        margin-top: -46vw;
        margin-left: 25vw;
        font-size: 20px;
       
    }
    .user-img{
        display: inline-block;
        width: 20vw;
        height: 20vw;
        background-color: #fff;
        border-radius: 50%;
    }
    #user-p{
        height: 63vw;
        line-height: 63vw;  
        margin-left: 2vw; 
    }

</style>




