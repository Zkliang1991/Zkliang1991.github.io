<template>
  <div v-if="show">
    <Head :title="$route.query.name" :show="true"></Head>
    <div class="text">
      <van-cell-group>
        <img :src="good.img" alt width="100%" height="300px">
        <van-cell>
          <div class="goods-title">{{good.name}}</div>
          <div
            class="goods-price"
            style="color:red;"
          >￥{{number*good.price}} / {{good.discount}} 折扣优惠</div>
        </van-cell>
        <van-cell class="goods-express">
          <van-col class="yun" span="10">运费：{{ express }}</van-col>
          <van-col span="14">剩余：{{ good.count }}</van-col>
          <van-stepper v-model="number" async-change @change="onChange"/>
        </van-cell>
      </van-cell-group>
      <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon"/>
      <van-popup
        v-model="showList"
        position="bottom"
      ><van-coupon-list:coupons="coupons" :chosen-coupon="chosenCoupon" :disabled-coupons="disabledCoupons" @change="onChange" @exchange="onExchange"/></van-popup>
      <van-cell-group class="goods-cell-group" style="margin-bottom: 0.48rem;">
        <van-cell title="查看商品详情" is-link @click="sorry"/>
      </van-cell-group>
      <van-cell-group class="goods-cell-group">
        <van-cell value="进入店铺" icon="shop-o" is-link>
          <template slot="title">
            <span class="van-cell-text">有赞的店</span>
            <van-tag class="goods-tag" type="danger">官方</van-tag>
          </template>
        </van-cell>
        <van-cell title="线下门店" icon="location-o" is-link/>
      </van-cell-group>
    </div>
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服"/>
        <van-goods-action-icon :info="shuliang" icon="cart-o" text="购物车"  @click="onClickIcon"/>
        <van-goods-action-button type="warning" text="加入购物车" @click="buyGood"/>
        <van-goods-action-button type="danger" text="立即购买" @click="showBase"/>
        <!-- <van-sku
          v-model="showBase"
          :sku="sku"
          :goods="goods"
          :hide-stock="sku.hide_stock"
          :quota="quota"
          :reset-stepper-on-hide="resetStepperOnHide"
          :reset-selected-sku-on-hide="resetSelectedSkuOnHide"
          :close-on-click-overlay="closeOnClickOverlay"
          :disable-stepper-input="disableStepperInput"
        /> -->
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
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
export default {
  data() {
    return {
      // goodId: "",
      // good: {},
      quota: 15,
      resetStepperOnHide: true,
      resetSelectedSkuOnHide: false,
      closeOnClickOverlay: false,
      disableStepperInput: false,
      // sku: {
      //   // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
      //   // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
      //   tree: [
      //     {
      //       k: "颜色", // skuKeyName：规格类目名称
      //       v: [
      //         {
      //           id: "30349", // skuValueId：规格值 id
      //           name: "红色", // skuValueName：规格值名称
      //           imgUrl: "https://img.yzcdn.cn/1.jpg" // 规格类目图片，只有第一个规格类目可以定义图片
      //         },
      //         {
      //           id: "1215",
      //           name: "蓝色",
      //           imgUrl: "https://img.yzcdn.cn/2.jpg"
      //         }
      //       ],
      //       k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      //     }
      //   ],
      //   // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
      //   list: [
      //     {
      //       id: 2259, // skuId，下单时后端需要
      //       price: 100, // 价格（单位分）
      //       s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
      //       s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
      //       s3: "0", // 最多包含3个规格值，为0表示不存在该规格
      //       stock_num: 110 // 当前 sku 组合对应的库存
      //     }
      //   ],
      //   price: "1.00", // 默认价格（单位元）
      //   stock_num: 227, // 商品总库存
      //   collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
      //   none_sku: false, // 是否无规格商品
      //   messages: [
      //     {
      //       // 商品留言
      //       datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
      //       multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
      //       name: "留言", // 留言名称
      //       type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
      //       required: "1" // 是否必填 '1' 表示必填
      //     }
      //   ],
      //   hide_stock: false // 是否隐藏剩余库存
      // },
      goods: {
        // 商品标题
        title: "测试商品",
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/1.jpg"
      },

      goodId: this.$route.params.goodId,
      good: {},
      show: false,
      value: 1,
      express: 20,
      remain: 10,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      number: 1,
      shul:0,
    };
  },
   computed: {
    ...mapState(["shuliang"])
  },
  methods: {
    showBase(){
         this.$router.push({ name: "now",params:{good:this.good,number:this.number} });
    },
    gotoCart() {
      this.$router.push({ name: "cart" });
    },
    buyGood() {
      // 数量
      // goodId
      // username  ==>  token
      this.$axios
        .post("/vue/addCart", {
          goodId: this.goodId,
          count: this.number,
          good: JSON.stringify(this.good)
        })
        .then(res => {
          console.log(res.data);
        });
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    onChange(value) {
      if (this.changing) {
        return;
      }
      this.changing = true;
      setTimeout(() => {
        this.value = value;
        this.changing = false;
      }, 500);
    },
    // buyGood() {
    //   // 数量
    //   // goodId
    //   // username  ==>  token
    //   this.$axios
    //     .post("/vue/addCart", {
    //       goodId: this.goodId,
    //       count: this.number,
    //       good: JSON.stringify(this.good)
    //     })
    //     .then(res => {
    //       console.log(res.data);
    //     });
    // },
    onClickIcon() {
      this.$router.push({ name: "cart" });
    }
  },
  mounted() {
    this.$axios
      .get("/vue/goodOne", {
        params: { goodId: this.goodId }
      })
      .then(res => {
        this.good = res.data.result;
        this.show = true;
      });
  },
};
</script>
<style scoped>
.goods-title {
  font-size: 17px;
}
.text {
  padding: 10px;
}
.price {
  font-size: 15px;
}
.yun {
  color: darkred;
}
/* .cell-group {
  margin: 15px 0;
}
.van-cell__value {
  color: #999;
} */
</style>


