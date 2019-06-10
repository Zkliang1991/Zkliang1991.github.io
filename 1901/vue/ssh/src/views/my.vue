<template>
  <div class="quanbu">
<div class="centerinfo">
                <img @click="denglu"  class="userimg" src="https://pic.keede.com/?v=b4106d3e-9537-485f-b1fd-eeda02d8261d" onerror="this.src = 'https://pic.keede.com//app/images/login_img.png'" />
                <div  class="userinfo">
                    <p>{{user}}</p>
                    <span class="member-lev memberLever_1" @click="zhuxiao" ><em></em>{{zx}}</span>
                </div>
            </div>

      <Head title="个人中心" back="返回" show="true"></Head>
    <img class="user-poster" src="https://pic.keede.com//app/images/member_bg.png">
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment"  />
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

    
  </div>
</template>

<script>
// import { Dialog } from 'vant';
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
export default {
  data(){
    return {
      user:"请登录",
      zx:"会员",
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    
  },
  created(){
        this.$axios.get("/vue/my",{
        }).then(res=>{
                console.log(res.data.username);
                  this.user = res.data.username;
                   this.zx="注销"    
            })
    },
  methods:{
    zhuxiao(){
      console.log("注销")
      window.sessionStorage.clear();
      this.user = "请登录"
      this.zx = "会员"
    },
    denglu(){
      this.$router.push({name:"login"})
      console.log("66666")
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
.quanbu{
  position: relative;
}
.centerinfo {
    position: absolute;
    top: 0;
    width: 100%;
    padding-top: 100px;
}
.centerinfo .userimg {
    border-radius: 50%;
    display: block;
    width: 80px;
    height: 80px;
    overflow: hidden;
    float: left;
    margin-left: 15px;
}
.centerinfo .userinfo {
    float: left;
    margin: 15px;
}
.centerinfo p {
    font-size: 15px;
    color: #000;
    line-height: 30px;
}
.userinfo .member-lev {
    background: linear-gradient(to right, #343434, #141414);
    color: #ffffff;
    height: 14px;
    line-height: 14px;
    min-width: 60px;
    text-indent: 4px;
    overflow: hidden;
    vertical-align: baseline;
    font-size: 12px;
    font-weight: 500;
    display: inline-flex;
}
.userinfo .member-lev > em {
    background: url() no-repeat;
    background-size: 100%;
    display: inline-block;
    height: 14px;
    width: 14px;
    margin-right: 4px;
}
.userinfo .member-lev {
    background: linear-gradient(to right, #343434, #141414);
    color: #ffffff;
    height: 14px;
    line-height: 14px;
    min-width: 60px;
    text-indent: 4px;
    overflow: hidden;
    vertical-align: baseline;
    font-size: 12px;
    font-weight: 500;
    display: inline-flex;
}
</style>
