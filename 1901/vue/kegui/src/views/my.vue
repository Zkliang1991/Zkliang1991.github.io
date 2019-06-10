<template>
  <div>
    <div class="aa" :style ="note">
        <van-button type="danger" @click="gotoLogin" class="login" >登录</van-button>
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
      <van-cell icon="gift-o" title="我收到的礼物" is-link @click="shabi"/>
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
export default {
    data(){
       return{
          note: {
            backgroundImage: "url(" + require("../assets/images/img5.jpg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          },
       }
    },
    methods:{
      gotoLogin(){
          this.$router.push({name:"login"})
      },
      shabi(){
        console.log(window.sessionStorage.userInfo)
      }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
  
};
</script>

<style scoped>
.aa{
    width:100%;
    height:9rem;
    line-height:9rem;
    text-align: center;
}
.user-group{
    margin-bottom:1rem;
}
.user-links{
    padding:1rem 0;
    font-size:12px;
    text-align:center;
    background-color:#fff;
}
.van-icon{
    display:block;
    font-size:24px;
}
.login{
    width:5rem;
}
</style>