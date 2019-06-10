<template>
  <div class="goods">
    <Head :headTitle="good.name" :flag="true"></Head>
    <van-swipe class="goods-swipe">
      <van-swipe-item v-for="thumb in 4" :key="thumb">
        <img :src="good.img">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <h2 class="goods-price">
          ￥{{good.price*50}}
          <s style="color:#666">￥{{good.price*100}}</s>
          <span class="iconfont" style="float:right;">&#xe6ac;</span>
        </h2>
        <h2 class="goods-title">
          <van-tag mark type="success">正品</van-tag>
          {{ good.name }}
        </h2>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ (good.discount*100).toFixed(0)}}件</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link>
        <template slot="title">
          <span class="van-cell-text" v-if="good.type">{{good.type.text}}官方旗舰店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell is-link @click="sorry">
        <div class="detail_coupons" style id="couponListDiv" ptag="7001.1.180">
          <span class="title">领券</span>
          <van-tag plain type="danger">满100减20</van-tag>
          <van-tag plain type="danger">新用户专享</van-tag>
        </div>
      </van-cell>
      <van-cell is-link @click="sorry">
        <span class="title">促销</span>
        <van-tag plain type="danger">满送</van-tag>
        <span>满100元即赠热销商品，赠完即止</span>
        <div class="de_row prom_item">
          <van-tag plain type="danger">满额返券</van-tag>
          <span>满1元返宝洁149-50优惠券</span>
        </div>
        <div class="de_row prom_item">
          <van-tag plain type="danger">免费领</van-tag>
          <van-tag plain type="danger">优惠套装</van-tag>
        </div>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="选择商品规格" is-link @click="showd"/>
    </van-cell-group>
    <van-popup v-model="show" position="bottom" :overlay="true" :duration="0.5">
      <van-cell class="guige">
        <img :src="good.img" class="guigeimg">
        <van-icon name="close" class="chacha" @click="chacha"/>
        <div class="mingzi">
          <van-tag mark type="success">正品</van-tag>
          <h3>￥{{good.price*50}}</h3>
          <s style="color:#666">￥{{good.price*100}}</s>
          <p>库存{{ (good.discount*100).toFixed(0)}}件</p>
        </div>
      </van-cell>
      <van-cell class="goods-express">
        <p class="chimaname">尺码</p>
        <van-button
          style="color:black"
          type="default"
          size="small"
          round
          @click="gaibian1('S')"
          :style="i==1?'color:red':''"
        >S</van-button>
        <van-button
          style="color:black"
          type="default"
          size="small"
          round
          @click="gaibian2('M')"
          :style="i==2?'color:red':''"
        >M</van-button>
        <van-button
          style="color:black"
          type="default"
          size="small"
          round
          @click="gaibian3('L')"
          :style="i==3?'color:red':''"
        >L</van-button>
        <van-button
          style="color:black"
          type="default"
          size="small"
          round
          @click="gaibian4('XL')"
          :style="i==4?'color:red':''"
        >XL</van-button>
        <van-button
          style="color:black"
          type="default"
          size="small"
          round
          @click="gaibian5('XXL')"
          :style="i==5?'color:red':''"
        >XXL</van-button>
      </van-cell>
      <van-cell style="margin-bottom:20px">
        <p>
          <span>购买数量</span>
          <van-button type="default" style="margin-left:35%" @click="count++">+</van-button>
          <input type="text" placeholder="1" v-model="count">
          <van-button type="default" @click="count>1?count--:count">-</van-button>
        </p>
      </van-cell>
      <van-button
        style="margin-left:5%;margin-right:10%;margin-bottom:20px;width:40%"
        round
        type="danger"
        @click="addcar"
      >加入购物车</van-button>
      <van-button style="width:40%" round type="danger">立即购买</van-button>
    </van-popup>
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o">客服</van-goods-action-mini-btn>
      <van-goods-action-mini-btn
        icon="star"
        @click="change"
        :style="xing?'color:red':'color:#7d7e80'"
      >
        <span class="sss">收藏</span>
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="addcar">加入购物车</van-goods-action-big-btn>
      <van-goods-action-big-btn primary>立即购买</van-goods-action-big-btn>
    </van-goods-action>
  </div>
</template>

<script>
import {
  Dialog,
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from "vant";
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  data() {
    return {
      goods: {
        title: "美国伽力果（约680g/3个）",
        price: 2680,
        express: "免运费",
        remain: 19,
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      },
      goodId: this.$route.params.goodId,
      good: {},
      flag: true,
      show: false,
      count: 1,
      i: 0,
      size: "",
      xing: false
    };
  },
  methods: {
    change() {
      if (!this.xing) {
        Dialog.confirm({
          title: "是否把宝贝加入收藏夹"
        }).then(() => {
          this.$axios
            .post("/vue/addcar", {
              shopid: this.goodId,
              good: this.good,
              type: 1
            })
            .then(res => {
              this.xing = true;
              console.log(this.xing);
              console.log(res);
            });
        });
      }
      if (this.xing) {
        console.log(this.xing);
        Dialog.confirm({
          title: "是否取消收藏"
        }).then(() => {
          Dialog.alert({
            message: "就不让你取消"
          }).then(() => {
            // on close
          });
        });
      }
    },
    gaibian1(val) {
      this.i = 1;
      this.size = val;
    },
    gaibian2(val) {
      this.i = 2;
      this.size = val;
    },
    gaibian3(val) {
      this.i = 3;
      this.size = val;
    },
    gaibian4(val) {
      this.i = 4;
      this.size = val;
    },
    gaibian5(val) {
      this.i = 5;
      this.size = val;
    },
    sorry() {
      Toast("oh~已经被抢光了哟");
    },
    showd() {
      return (this.show = !this.show);
    },
    chacha() {
      this.show = !this.show;
    },
    addcar() {
      if (this.size) {
        this.$axios
          .post("/vue/addcar", {
            shopid: this.goodId,
            count: this.count,
            shopsize: this.size,
            good: this.good,
            type: 0
          })
          .then(res => {
            this.$router.push({
              name: "shopcar",
              query: { shopid: this.goodId, shopsize: this.size }
            });
          });
      } else {
        this.$toast.fail("请选择商品尺码");
      }
    }
  },

  mounted() {
    console.log(this.$route.params);
    this.$axios
      .get("/vue/getGoodOne", {
        params: {
          goodId: this.goodId
        }
      })
      .then(res => {
        this.good = res.data.result;
        console.log(this.good);
      });
  },
  updated() {
    console.log(this.size);
  }
};
</script>

<style lang="scss" scoped>
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
.van-tag,
.title {
  margin-right: 8px;
}
.title {
  color: #999;
}
.de_row {
  margin-left: 36px;
  margin-top: 4px;
}
.goods-price {
  font-size: 24px;
  line-height: 40px;
}
s {
  font-size: 16px;
}
.guige {
  position: relative;
}
.chacha {
  position: absolute;
  right: 5px;
  top: 5px;
}
.mingzi {
  width: 50%;
  position: absolute;
  bottom: 5px;
  left: 45%;
}
.mingzi h3 {
  color: #f44;
  font-size: 16px;
}
.guigeimg {
  width: 40%;
}
input {
  text-align: center;
  border: 0;
  width: 50px;
}
.chimaname {
  margin: 20px 0;
  font-size: 14px;
}
.van-goods-action-mini-btn {
  font-size: 14px;
}
.shoucang {
  font-size: 20px;
  margin: 0 auto 5px;
}
.sss {
  color: #7d7e80 !important;
}
</style>