<template>
  <div class="box">
    <Header title="主页" :shows="true" :searchShow="true"></Header>
    <van-swipe :autoplay="3000" indicator-color="white" style="marginTop:.8rem">
      <van-swipe-item>
        <img src="../assets/images/home11.jpg" alt class="img">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/home21.jpg" alt class="img">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/home31.jpg" alt class="img">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/home41.jpg" alt class="img">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/home51.jpg" alt class="img">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/home61.jpg" alt class="img">
      </van-swipe-item>
    </van-swipe>
    <van-row type="flex" justify="space-around" style="marginTop:.1rem;backgroundColor:#fff">
      <van-col span="12" style="padding:.3rem;border:1px solid #eee;borderRight:0">
        <div style="float:left">
          <h2 style="fontSize:.3rem;lineHeight:.5rem;width:1.5rem">限时秒杀</h2>
          <p style="fontSize:.15rem;color:#aaa">手机专享好礼</p>
        </div>
        <img src="../assets/images/l1.jpg" alt class="l-img" style="float:right;marginRight:.2rem">
      </van-col>
      <van-col span="12" style="padding:.3rem;border:1px solid #eee">
        <div style="float:left">
          <h2 style="fontSize:.3rem;lineHeight:.5rem;width:1.5rem;color:royalblue">每周上新</h2>
          <p style="fontSize:.15rem;color:#aaa">最夯好物指南</p>
        </div>
        <img src="../assets/images/l2.jpg" alt class="l-img" style="float:right;marginRight:.2rem">
      </van-col>
    </van-row>
    <van-row
      type="flex"
      justify="space-around"
      style="textAlign:center;fontSize:.2rem;lineHeight:.5rem;backgroundColor:#fff"
    >
      <van-col span="6" style="border:1px solid #eee;paddingBottom:.2rem;borderRight:0">
        <p>品牌</p>
        <img src="../assets/images/l3.jpg" alt class="l-img" style="marginLeft:.43rem;">
      </van-col>
      <van-col span="6" style="border:1px solid #eee;borderRight:0">
        <p>领券中心</p>
        <img src="../assets/images/l4.jpg" alt class="l-img" style="marginLeft:.43rem">
      </van-col>
      <van-col span="6" style="border:1px solid #eee;borderRight:0">
        <p>微信福利</p>
        <img src="../assets/images/l5.jpg" alt class="l-img" style="marginLeft:.45rem">
      </van-col>
      <van-col span="6" style="border:1px solid #eee">
        <p>全球购</p>
        <img src="../assets/images/l6.jpg" alt class="l-img" style="marginLeft:.43rem">
      </van-col>
    </van-row>
    <van-row style="marginTop:.13rem;backgroundColor:#fff" type="flex" justify="space-around">
      <van-col
        span="8"
        class="qingcang"
        style="height:5.2rem;backgroundColor:red;margin:.1rem;float"
      >
        <img src="../assets/images/left3.jpg" alt style="width:100%;height:5.2rem;">
      </van-col>

      <van-col span="8" class="top" style="height:2.55rem;marginTop:.1rem">
        <img src="../assets/images/r1.jpg" alt style="width:100%;height:2.55rem">
        <img src="../assets/images/r3.jpg" alt style="width:100%;height:2.55rem;marginTop:.1rem">
      </van-col>
      <van-col span="8" class="top1" style="height:2.55rem;margin:.1rem">
        <img src="../assets/images/r2.jpg" alt style="width:100%;height:2.55rem;">
        <img src="../assets/images/r4.jpg" alt style="width:100%;height:2.55rem;marginTop:.1rem">
      </van-col>
    </van-row>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">精选</mt-tab-item>
      <mt-tab-item id="2">运动</mt-tab-item>
      <mt-tab-item id="3">服饰</mt-tab-item>
      <mt-tab-item id="4">鞋靴</mt-tab-item>
      <mt-tab-item id="5">全球购</mt-tab-item>
      <mt-tab-item id="6">儿童</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected" style="marginBottom:1rem">
      <mt-tab-container-item id="1">
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/jx1.jpg" alt>
            <p class="zhekou">6.5折封顶</p>
            <p class="word">解锁运动激发潜能</p>
          </div>
        </mt-cell>
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/jx2.jpg" alt>
            <p class="zhekou">5.9折封顶</p>
            <p class="word">鞋服型搭清凉一夏</p>
          </div>
        </mt-cell>
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/jx3.jpg" alt>
            <p class="zhekou">49元起</p>
            <p class="word">热销盘点鞋品top</p>
          </div>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
       <mt-cell>
          <div class="classify">
            <img src="../assets/images/yd1.jpg" alt>
            <p class="zhekou">5.9折封顶</p>
            <p class="word">鞋服型搭清凉一夏</p>
          </div>
        </mt-cell>
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/yd2.jpg" alt>
            <p class="zhekou">6.5折封顶</p>
            <p class="word">解锁运动激发潜能</p>
          </div>
        </mt-cell>
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/yd3.jpg" alt>
            <p class="zhekou">119元起</p>
            <p class="word">生来好动元气穿搭</p>
          </div>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/fs1.jpg" alt>
            <p class="zhekou">断码抄底捡漏</p>
            <p class="word">SALE</p>
          </div>
        </mt-cell>
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/fs2.jpg" alt>
            <p class="zhekou">随时更新 低价尝鲜</p>
            <p class="word">NEW</p>
          </div>
        </mt-cell>
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/fs3.jpg" alt>
            <p class="zhekou">满99减30</p>
            <p class="word">新品陆续上架</p>
          </div>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/xx1.jpg" alt>
            <p class="zhekou">99元封顶</p>
            <p class="word">木林森 应季好鞋</p>
          </div>
        </mt-cell>
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/xx2.jpg" alt>
            <p class="zhekou">特价89元起</p>
            <p class="word">富贵鸟 春夏优选</p>
          </div>
        </mt-cell>
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/xx3.jpg" alt>
            <p class="zhekou">两件5折</p>
            <p class="word">骆驼牌&策乐 特价折扣</p>
          </div>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/qqg1.jpg" alt>
            <p class="zhekou">1000款</p>
            <p class="word">上新好货</p>
          </div>
        </mt-cell>
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/qqg2.jpg" alt>
            <p class="zhekou">潮牌值得买</p>
            <p class="word">PUMA全线上新</p>
          </div>
        </mt-cell>
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/qqg3.jpg" alt>
            <p class="zhekou">什么值得买</p>
            <p class="word">冠军特辑</p>
          </div>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="6">
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/et1.jpg" alt>
            <p class="zhekou">两双减200</p>
            <p class="word">卡骆驰儿童 六一嗨购</p>
          </div>
        </mt-cell>
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/et2.jpg" alt>
            <p class="zhekou">79元起</p>
            <p class="word">儿童运动特惠</p>
          </div>
        </mt-cell>
        <mt-cell>
          <div class="classify">
            <img src="../assets/images/et3.jpg" alt>
            <p class="zhekou">39元起</p>
            <p class="word">缤纷童鞋</p>
          </div>
        </mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      selected: "1"
    };
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  .van-swipe {
    width: 100%;
    height: 10%;
    .van-swipe-item {
      width: 100%;
      height: 10%;
      img {
        width: 100%;
        height: 10%;
      }
    }
  }
  .l-img {
    width: 1rem;
    height: 0.92rem;
  }
  .is-selected {
    color: #d70039 !important;
    font-weight: 600;
    background-color: #eee;
  }
  .mint-navbar{
    width: 100%;
    height: .8rem;
    .is-selected{
      border-bottom: 2px #d70039 solid;
    }
  }
  .mint-cell {
    margin-top: 0.15rem;
    .mint-cell-wrapper {
      padding: 0;
      .classify {
        width: 100%;
        height: 3.8rem;
        background-color: #fff;
        img {
          width: 100%;
          height: 3.3rem;
        }
        p {
          line-height: 0.6rem;
          float: left;
          margin-left: 0.4rem;
          font-size: 0.24rem;
        }
        .zhekou {
          color: #d70057;
        }
        .word {
          color: #000;
        }
      }
    }
  }
}
</style>
