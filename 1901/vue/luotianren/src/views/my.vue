<template>
  <div>
    <Head title="个人中心"></Head>
    <div class="head">
      <div class="head-portrait"></div>
    </div>
    <van-row justify="space-between" class="one">
      <van-col span="8" v-for="(list,i) in lists" :key="i" type="flex" justify="space-around">
        <i class="iconfont" v-html="list.icon"></i>
        <p>{{list.txt}}</p>
      </van-col>
    </van-row>
    <van-nav-bar left-text="我的服务" class="tag"/>
    <van-row justify="space-between" class="two">
      <van-col span="8" v-for="(list1,i) in lists1" :key="i" type="flex" justify="space-around">
        <i class="iconfont" v-html="list1.icon" @click="goto(list1,i)"></i>
        <p>{{list1.txt}}</p>
      </van-col>
    </van-row>
    <div class="banner" @click="gotoLogin">
      <h2>点我登录</h2>
      <img src="../assets/images/jiantou.png" class="right">
    </div>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from "@/components/foot.vue";

export default {
  components: {
    Foot
  },
  data() {
    return {
      lists: [
        { txt: "我的订单", icon: "&#xe73e;" },
        { txt: "退货退款", icon: "&#xe66d;" },
        { txt: "我的换货", icon: "&#xe63a;" },
        { txt: "提货凭证", icon: "&#xe679;" },
        { txt: "订单回收", icon: "&#xe63b;" },
        { txt: "更多敬请期待", icon: "&#xe600;" }
      ],
      lists1: [
        { txt: "优惠券", icon: "&#xe73e;" },
        { txt: "收藏夹", icon: "&#xe66d;" },
        { txt: "站内信", icon: "&#xe63a;" },
        { txt: "个人资料", icon: "&#xe679;" },
        { txt: "地址簿", icon: "&#xe63b;" },
        { txt: "更多敬请期待", icon: "&#xe600;" }
      ],

    };
  },
  methods: {
    gotoLogin(){
            this.$router.push({name:'login'})
        },
        goto(list1,i){
          if(i==0){
            this.$router.push({name:"home"})
            // console.log(1)
          }
          if(i==1){
            this.$router.push({name:"col"})
          }
        }
  },
 
}

</script>
<style lang="scss">
.box {
  background-color: rgb(248, 238, 238);
}
.iconfont {
  display: inline-block;
}
.van-col {
  text-align: center;
}
.van-nav-bar__left {
  margin-top: 10px;
  font-size: 18px !important;
}
.one {
  background-color: #fff;
  margin-bottom: 10px;
}
p {
  font-size: 18px;
}
.iconfont {
  font-size: 21px;
}
.two {
  background-color: #fff;
  margin-bottom: 10px;
}
.head {
  width: 100%;
  height: 20%;
    background-image: url(../assets/images/39173.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
}
.banner {
  width: 100%;
  height: 40%;
  background-image: url(../assets/images/4.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  h2{
    font-size: 20px;
  }
}
.head-portrait {
  width: 30%;
  height: 60%;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 25px;
  left: 20px;
  background-image: url(../assets/images/4.jpg);
  background-size: 100%;
  background-repeat: no-repeat; 
  background-position: 0 center;
}
.right{
  width: 25%;
  height: 25%;
}
</style>
