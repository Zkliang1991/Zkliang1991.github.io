<template>
    <div>
        <Head title="个人中心"></Head>
        <van-row>
          <div class="touxiang" @click="gomy">
          <img contain src="@/assets/boy.png" alt="">
          </div>
        </van-row>
        <van-row type="flex" justify="center" v-if="flag" class="username">
             <p @click="gologin"> 请登录</p>    
        </van-row>
         <van-row type="flex" justify="center" v-else class="username">
                 <p @click="gomy"> XXX</p>
        </van-row>
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
      <van-cell icon="setting-o" title="个人设置" is-link  @click="gomy"/>
      <van-cell icon="points" title="我的积分" is-link />
      <van-coupon-cell
          icon="gold-coin-o"
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          @click="showList = true"
      />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>
  <van-popup v-model="showList" position="bottom">
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>
       
    </div>
</template>

<script>

const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
};
import { CouponCell, CouponList } from 'vant';
export default {
    data(){
        return{
            flag:true,
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon],
            showList:false
        }
    },
    methods:{
      gologin(){
        this.$router.push({name:"login"})
      },
      onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    gomy(){
      this.$router.push({name:"mymine"})
    }
  
    }
}
</script>
<style scoped>
  .username{
      text-align: center;

  }
  .username p{
    line-height: 40px;
    color: rgb(32, 176, 243);
    font-weight:bold;
  }

  .user-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
 .user-group {
    margin-bottom: 15px;
  }
  .user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;}
    .van-icon {
      display: block;
      font-size: 24px;
    }
  .touxiang{
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
  }
.touxiang img{
  width: 100%;
}
</style>


