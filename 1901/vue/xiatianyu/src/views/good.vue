<template>
  <div class="goods">
    <Head title="商品详情"></Head>
    <div class="kong"></div>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item>
        <img :src="good.img" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img :src="good.img1" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img :src="good.img2" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img :src="good.img3" alt>
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ good.title }}</div>
        <div class="goods-price">{{ formatPrice(good.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：免运费</van-col>
        <van-col span="14">剩余：{{ good.kucun }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry"/>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" @click="sorry">客服</van-goods-action-mini-btn>
      <van-goods-action-mini-btn info="5" icon="cart-o" @click="onClickCart">购物车</van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="showBase=true">加入购物车</van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="showBase=true">立即购买</van-goods-action-big-btn>
    </van-goods-action>
    <van-sku
      v-model="showBase"
      :sku="sku"
      :goods="goods"
      :hide-stock="sku.hide_stock"
      :quota="quota"
      :reset-stepper-on-hide="resetStepperOnHide"
      :reset-selected-sku-on-hide="resetSelectedSkuOnHide"
      :close-on-click-overlay="closeOnClickOverlay"
      :disable-stepper-input="disableStepperInput"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
      @stepper-change="change"
    />
  </div>
</template>

<script>
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
      goodId: "",
      showBase: false,
      good: {},
      quota: 15,
      resetStepperOnHide: true,
      resetSelectedSkuOnHide: false,
      closeOnClickOverlay: false,
      disableStepperInput: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "", // skuValueName：规格值名称
                imgUrl: "" // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: "1215",
                name: "",
                imgUrl: ""
              },
              {
                id: "1122",
                name: "",
                imgUrl: ""
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: "", // skuId，下单时后端需要
            price: 0, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "0", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: "", // skuId，下单时后端需要
            price: 0, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "0", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: "", // skuId，下单时后端需要
            price: 0, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "0", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: 0, // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        //none_sku: false, // 是否无规格商品
        // messages: [
        //   {
        //     // 商品留言
        //     datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
        //     multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
        //     name: "留言", // 留言名称
        //     type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
        //     required: "1" // 是否必填 '1' 表示必填
        //   }
        // ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 商品标题
        title: "",
        // 默认商品 sku 缩略图
        picture: ""
      }
    };
  },
  methods: {
    formatPrice() {
      return "¥" + (this.good.price * 1).toFixed(2);
    },
    onClickCart() {
      this.$router.push({ name: "car" });
    },
    sorry() {
      Toast("暂无后续逻辑~");
    },
    // addcar() {
    //   this.$router.push({ name: "car" });
    // },
    onBuyClicked(skuData) {
      //Toast("暂无后续逻辑~");
      this.$axios
        .post("/vue/addCart", {
          good: JSON.stringify(this.good),
          count: skuData.selectedNum
        })
        .then(res => {
          Toast("加入成功");
          //console.log(res.data);
        });
    },
    change(value) {
      if (value) {
        this.value = value;
      }else{
        value = 1;
      }
      console.log(this.value);
    },
    onAddCartClicked(skuData) {
      console.log(skuData.selectedNum)
      // if (loginInfo.username) {
        //"5cf38bcb758bad4eb796e401"
      this.$axios
        .post("/vue/addCart", {
          good: JSON.stringify(this.good),
          count: skuData.selectedNum
        })
        .then(res => {
          Toast("加入成功");
          //console.log(res.data);
          this.$router.push({ name: "car", params: { good: this.good } });
        });
      // }else{
      //   this.$router.push({name:'login'})
      // }
      //Toast("暂无后续逻辑~");
    }
  },
  // computed: {
  //   ...mapState(["loginInfo", "regInfo"])
  // },
  mounted() {
    console.log(this.$route.params)
    this.good = JSON.parse(this.$route.params.good);
    this.title = this.good.title;
    // console.log(this.good)
    this.sku.tree[0].v[0].name = this.good.color1;
    this.sku.tree[0].v[1].name = this.good.color2;
    this.sku.tree[0].v[2].name = this.good.color3;
    this.sku.tree[0].v[0].id = this.good._id + "1";
    this.sku.tree[0].v[1].id = this.good._id + "2";
    this.sku.tree[0].v[2].id = this.good._id + "3";
    // this.sku.tree[1].v[0].name = this.good.size1;
    // this.sku.tree[1].v[1].name = this.good.size2;
    // this.sku.tree[1].v[2].name = this.good.size3;

    //this.sku.tree[0].v[1].imgUrl=this.good.img;
    this.goods.picture = this.good.img;
    this.sku.price = this.good.price * 1;
    this.sku.stock_num = this.good.kucun * 1;

    this.sku.list[0].id = this.good._id;
    this.sku.list[1].id = this.good._id;
    this.sku.list[2].id = this.good._id;
    this.sku.list[0].s1 = this.good._id + "1";
    this.sku.list[1].s1 = this.good._id + "2";
    this.sku.list[2].s1 = this.good._id + "3";
    this.sku.list[0].price = this.good.price * 100;
    this.sku.list[1].price = this.good.price * 100;
    this.sku.list[2].price = this.good.price * 100;
    this.sku.list[0].stock_num = this.good.kucun * 1;
    this.sku.list[1].stock_num = this.good.kucun * 1;
    this.sku.list[2].stock_num = this.good.kucun * 1;
    // var ddd = document.getElementsByClassName("van-stepper__input")[0];
    // console.log(ddd.value);
    // this.$axios
    //   .get("/vue/getGoodList", {
    //     params: {
    //       goodId: this.goodId
    //     }
    //   })
    //   .then(res => {
    //     console.log(res.data);
    //     this.goods = res.data.result.filter(good => good._id == this.goodId);
    //     console.log(goods);
    //   });
  },
  // updated() {
  //   var ddd = document.getElementsByClassName("van-stepper__input")[0];
  //   if (ddd) {
  //     var count = ddd.value;
  //     console.log(count);
  //   }
  // }
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
.kong {
  width: 100%;
  height: 46px;
}
.buy {
  width: 100%;
  height: 100%;
  background-color: #f44;
}
</style>


