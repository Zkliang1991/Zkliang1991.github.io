
<template>
  <div>
    <div class="img">
      <div class="c">
       <i class="iconfont icon-shezhi" @click="set"></i>
       <i class="iconfont icon-saoyisao"></i>
     </div>
      <div class="content">
        <img src="@/assets/images/17.jpg" alt class="content-img">
      </div>
      <p class="btn" v-if="checklogin" @click="gotoLogin">立即登录</p>
      <p class="btn"  v-else>{{username}} </p>
    </div>
    <van-row class="user-links">
      <van-col span="12">
        <van-icon name="pending-payment"/>电影订单
      </van-col>
      <van-col span="12">
        <van-icon name="records"/>商品订单
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="卖卡座" is-link/>
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="组合红包" is-link/>
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link/>
      <van-cell @click="set" icon="gift-o" title="设置" is-link/>
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";
export default {
  data(){
    return{
      username:"",
      checklogin:true
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login" });

    },
    set() {
      this.$router.push({ name: "address" });
    }
  },
  created(){
    if(sessionStorage.username){
      this.username = sessionStorage.username
      this.checklogin = false;
    }else{
      this.checklogin = true;
    }
    
  }
};
</script>

<style lang="less">
.img {
  width: 100%;
  height: 3rem;
  background: -webkit-linear-gradient(top, orange, lightyellow);
 
}
.c{
  float: right;
  margin-right: 10px;
  margin-top: 10px;
}
.iconfont{
 
  float: left;
  font-size: 26px !important; 
  margin-right: 5px;
}
.content {
  width: 1.5rem;
  height: 1.5rem;
  background-color: #fff;
  border: 1px solid red;
  border-radius: 50%;
  float: left;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}
.content-img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}
.btn {
  margin-top: 1rem;
  margin-left: 0.4rem;

  float: left;
}
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





  