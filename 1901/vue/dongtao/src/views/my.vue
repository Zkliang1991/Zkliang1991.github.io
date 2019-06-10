<template>
    <div>
        <Head title="个人中心" ></Head>
        <img class="user-poster" src="../assets/images/login.jpg">
        <p>
            <mt-button type="danger" @click="gotoLogin" v-if="flag" > 立即登录</mt-button>
            <van-button type="default" v-else>XXX</van-button>
        </p>
        <van-row class="user-links">
            <van-col span="6">
                全部
            </van-col>
            <van-col span="6">
                代付款
            </van-col>
            <van-col span="6">
                待发货
            </van-col>
            <van-col span="6">
                已发货
            </van-col>
        </van-row>
        <van-cell-group class="user-group">
        </van-cell-group>


        <van-row class="user-links">
            <van-col span="6">
                <van-icon name="chat-o" />
                我的消息
            </van-col>
            <van-col span="6">
                <van-icon name="vip-card-o" />
                我的会员卡
            </van-col>
            <van-col span="6">
                <van-icon name="points" />
                我的积分
            </van-col>
            
            <van-col span="6">
                <van-icon name="gold-coin-o" />
                我的优惠券
            </van-col>
        </van-row>
        <van-row class="user-links">
            <van-col span="6">
                <van-icon name="coupon-o" />
                我的优惠码
            </van-col>
            <van-col span="6">
                <van-icon name="location-o" />
                收货地址
            </van-col>
            <van-col span="6">
                <van-icon name="notes-o" />
                常见问题
            </van-col>
            <van-col span="6">
                <van-icon name="cash-back-record" />
                我的返现
            </van-col>
        </van-row>
    </div>
</template>


<script>
export default {
    data(){
        return{
            flag:true
        }
    },
    methods:{
        gotoLogin(){
            this.$router.push({name:'login'})
        }
    }
}
</script>

<style lang="scss">
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
p{
    text-align: center;
}
.user-links{
    font-size: 16px;
    padding: 20px 0;
}
.van-icon{
    font-size: 32px !important;
}

</style>