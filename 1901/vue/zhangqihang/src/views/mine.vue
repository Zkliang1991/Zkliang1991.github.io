   
<template>
  <div>
        <Head title="个人中心" :show="true" class="head" ></Head>
        <div class="usermainbody">
            <img class="user-poster" src="../assets/images/main_bg_top.jpg">
            <div class="mainbody">
                <img class="Touxiang" onclick="" src="../assets/images/main_body.png" alt="头像">
                <div class="user_txt">
                    <button class="lo" @click="goLogin">登录/注册</button>
                </div>
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
                <van-cell icon="question-o" title="帮助中心" is-link />
                <van-cell icon="chat-o" title="鲜花百科" is-link />
                <van-cell icon="apps-o" title="更多" is-link />
                <van-cell icon="setting-o" title="安全设置" is-link />
            </van-cell-group>
        </div>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  methods:{
    goLogin(){
      this.$router.push({name:'login'})
    }
  }
};
</script>

<style lang="scss">
.head{
      position: fixed;
      top: 0; 
      left: 0;
      width: 100%;
      z-index: 2;
    }
.usermainbody{
    position: relative;
    .mainbody {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 10% 0;
            .Touxiang {
                width: 22%;
                min-height: 1.375rem;
                border: 3px solid rgba(255,255,255,0.3);
                border-radius: 50%;
                overflow: hidden;
                display: block;
                margin: auto;
            }
            .user_txt{
                margin-top: 2%;
                text-align: center;
                .lo {
                    border: 1px solid #666;
                    padding: 3px 8px;
                    margin: .2rem;
                    border-radius: 10%;
                    font-size: .3rem;
                    color: black;
                    background-color: white;
                }
            }
    }
}
.van-cell-group{
  margin-bottom: 1rem;
}
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
    margin-top: 40px;
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
.van-cell{
    line-height: 30px !important;
    border-bottom: 1px solid #eee;
}
</style>