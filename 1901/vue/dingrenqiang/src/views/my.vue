<template>
  <div>
    <Head title="个人中心"></Head>
    <div class="my-xin">
      <!-- <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"> -->
      <div class="login" style="width:100%;height:150px;" >
        <!-- <van-button type="info" @click="gotoLogin">立即登录</van-button> -->
          <img src="../assets/img/1.png" alt="">
          <p v-if="username[0]">欢迎{{username[0].username}}</p>
          <h3 @click="log">注销</h3>
      </div>
      <!-- <van-row class="user-links">
        <van-col span="6">
          <van-icon name="pending-payment"/>待付款
        </van-col>
        <van-col span="6">
          <van-icon name="records"/>待接单
        </van-col>
        <van-col span="6">
          <van-icon name="tosend"/>待发货
        </van-col>
        <van-col span="6">
          <van-icon name="logistics"/>已发货
        </van-col>
      </van-row> -->

      <van-cell-group class="user-group">
        <van-cell icon="records" title="全部订单" is-link/>
      </van-cell-group>

      <van-cell-group>
        <van-cell icon="points" title="我的积分" is-link/>
        <van-cell icon="gold-coin-o" title="我的优惠券" is-link/>
        <van-cell icon="gift-o" title="我收到的礼物" is-link/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
export default {
  data(){
    return {
      username:{}
    }
  },
  created(){
    this.$axios.get("/vue/getCart").then(res => {
      this.username= res.data.result;
      console.log(this.username)
    })
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  mounted(){
    var userInfo=window.sessionStorage.userInfo;
    // console.log(userInfo)
    if(userInfo){

    }else{
      this.$router.push({ name: "login" });
    } 
  },
  methods:{
    log(){
      sessionStorage.removeItem("userInfo");   
      var userInfo=window.sessionStorage.userInfo;
      if(userInfo){

      }else{
        this.$router.push({ name: "login" });
      }
}
    }
  
};
</script>

<style lang="less">
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
.my-xin {
  left: 0;
  top: 40px !important;
  width: 100%;
  z-index: 100;
  position: fixed;
}
.login {
  text-align: center;
  //background-img:url("@/assets/img/7.png");
  // background-size:cover;
  background: url(../assets/img/7.png);
  line-height: 2rem;
  position: relative;
}
.login img{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #fff;
  position: absolute;
  left: 40px;
  top: 50px;
}
.login p{
  position: absolute;
  left: 120px;
  top: 30px;
}
.login h3{
  position: absolute;
  left: 200px;
  top: 30px;
  text-decoration:underline;
  color: #fff;
}
</style>