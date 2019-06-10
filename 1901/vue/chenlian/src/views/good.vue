<template>
  <div>
    <Head :title="$route.query.title" :show="true" :searchShow="true" :v-if="true"></Head>

    <div class="van-tabs-top goods">
      <!-- 商品图片，商品信息 -->
      <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item>
          <img :src="good.img">
        </van-swipe-item>
      </van-swipe>

      <van-cell-group>
        <van-cell>
          <div class="goods-title" ref="rtitle">{{ good.title }}</div>
          <div class="goods-price" ref="rprice">{{ good.price }}</div>

          <div class="goodnums" style="position: absolute; right: 1rem; bottom: .2rem;">
            <span class="goodn" v-on:click="des">-</span>
            <span class="numcount">{{count}}</span>
            <span class="goodn" v-on:click="add">+</span>
          </div>
        </van-cell>
        <van-cell value="品牌商入驻" icon="shop-o" is-link>
          <template slot="title">
            <span class="van-cell-text">{{good.case}}</span>
            <van-tag class="goods-tag" type="danger">官方</van-tag>
          </template>
        </van-cell>
        <van-cell class="goods-express">
          <van-col span="10">关税：{{ good.saelsinfo }}</van-col>
          <van-col span="14">{{good.saelsinfo2}} | {{ good.saelsinfo1 }}</van-col>
        </van-cell>
        <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true"/>
        <van-popup v-model="showList" position="bottom">
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @exchange="onExchange"
          />
        </van-popup>
        <van-cell value="品牌商入驻" is-link>
          <span class="van-cell-text">运费：10.00元起，店铺实付满10元免运费</span>
        </van-cell>
        <van-cell value="说 明：" is-link>
          <span class="van-cell-text">
            说明：
            <span class="textcl">假一赔十</span>
            <span class="textcl">7天无忧退货</span>
            <span class="textcl">旗舰店发货</span>
          </span>
        </van-cell>
      </van-cell-group>

      <!-- 优惠券 -->
    </div>

    <p>详情页内容</p>
    

    <!-- 底部购买 -->
    <van-goods-action>
      <van-goods-action-mini-btn name="a" icon="chat-o">客服</van-goods-action-mini-btn>
      <van-goods-action-mini-btn name="b" icon="cart-o" @click="gotoCart">购物车</van-goods-action-mini-btn>
      <van-goods-action-big-btn name="v" @click="addcart">加入购物车</van-goods-action-big-btn>
      <van-goods-action-big-btn name="d" primary @click="nowbuy">立即购买</van-goods-action-big-btn>
    </van-goods-action>
  </div>
</template>

<script>
import Vue from "vue";
import { Dialog } from 'vant';
// 复制
import {
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

const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
let that = this;
//  复制 结束
export default {
  // 复制
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
  // 复制结束

  data() {
    return {
      count: 1,

      showList: false,
      good: {},
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      goodId: this.$route.params.goodId,

      //---------------------------

    };
  },
  mounted() {
    // this.getGoodOne({ url: "/vue/getGoodOne",cb:()=>{} });

    this.$axios
      .get("/vue/getGoodOne", {
        params: {
          goodId: this.goodId
        }
      })
      .then(res => {
        this.good = res.data.result;
        console.log(res.data.result);
      });
  },
  
  methods: {

    des(){
        if(this.count>1){
          this.count--
        }
    },
    add(){
        this.count++
    },
    
    gotoCart() {
      this.$router.push({ name: "cart" });
    },

    addcart() {
      if(window.sessionStorage.token){
        this.$axios
        .post("/vue/addcart", {
          goodId: this.goodId,
          count: this.count,
          good: JSON.stringify(this.good)
        })
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            // console.log("-----加入购物车成功  ---- status == 200 --")
            Dialog.confirm({
              title: "购物车",
              message: "加入购物车成功"
            })
              .then(() => {
                this.$router.push({ name: "cart" });
              })
              .catch(() => {
                // on cancel
              });
          }
        });
      }else{
        Dialog.confirm({
              title: "提示",
              message: "未检测到您的登陆信息，是否前往登陆"
            })
              .then(() => {
                this.$router.push({ name: "login" });
              })
              .catch(() => {
                // on cancel
              });
      }
      
    },

    nowbuy() {
      console.log("nowbuy立即购买");
    },
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  }
  // 复制结束
};
</script>

<style lang="scss">
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
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}

.goods-price {
  color: #f44;
  font-weight: bold;
  line-height: 2rem;
  margin-top: 0.2rem;
}
.van-col.van-col--10 {
  width: 50%;
  padding: 0 3px;
}
.van-col.van-col--14 {
  text-align: right;
  width: 50%;
  float: right;
  white-space: nowrap;
  padding: 0 3px;
}
span.textcl {
  height: 24px;
  line-height: 24px;
  font-size: 0.8rem;
  color: #333;
  padding: 0 6px;
}
.van-cell__value--alone {
  color: #323233;
  text-align: left;
  font-size: 0.8rem;
}
.goods-title {
  font-size: 0.9rem;
  line-height: 1.4rem;
}
.goodnums {
  width: 50%;
  float: right;
  height: 2.2rem;
  line-height: 2.2rem;
  font-size: 1rem;
  // background: red;
}
span.goodn {
  width: 2rem;
  display: inline-block;
  text-align: center;
  font-size: 1rem;
}
.goods-price {
  color: #f44;
  font-weight: bold;
  line-height: 2rem;
  margin-top: 0.2rem;
  width: 50%;
  float: left;
}
span.numcount {
  width: 2rem;
  text-align: center;
  border: 1px solid #e5e5e5;
  display: inline-block;
  height: 1.98rem;
  border-left: 0;
  border-right: 0;
}
span.goodn {
  width: 2rem;
  display: inline-block;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #e5e5e5;
  height: 1.98rem;
}
.goodnums {
    width: auto;
    float: right;
    height: auto;
    line-height: 1.5rem;
    font-size: 0.9rem;
    position: absolute;
    right: 1rem;
    bottom: 0.2rem;
}

// .goods-swipe img {
//     width: 90%;
//     display: block;
//     margin: 5px auto;
// }
.goods-title {
    font-size: 0.9rem;
    line-height: 1.4rem;
    height: 3rem;
    overflow: hidden;
}
</style>
