
<template>
  <div >
     <Header title='个人中心'></Header>
     <div class='content'>
      <div class='my-header'>
        
        <img  src="../assets/images/phone.png">
        <span></span>
      </div>
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
       待收货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        评价
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      
      <van-cell icon="points" title="地址管理" is-link @click="toAddress"/>
      
      <van-cell icon="gift-o" title="退出登录" is-link />
      <van-cell icon="gift-o" title="登录"  is-link  @click='toLogin'/>

      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
    </van-cell-group>
      </div>
  </div>
</template>


<script>
import  myhead from '../components/myHead';

export default {
  components: {
  myhead
  },
  methods: {
    toLogin(){
      this.$router.push({name:'login'})
    },
    toAddress(){
      console.log(1)
      this.$router.push({name:'address'})
    }
  },
  mounted() {
    
  },
};
</script>

<style lang="scss">
.my-header {
   background: #fff;
   margin-bottom: .2rem;
   text-align: center
    // clear: both;
    // height:2rem;
    
}
// .my-header img{
//     width:1rem;
//     height:1rem;
//     vertical-align: middle;
//     float: left;
    
// }
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
