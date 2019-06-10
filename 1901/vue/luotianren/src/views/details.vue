<template>
  <div class="goods">
    <img :src="goods.img">

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.name }}</div>
        <div class="goods-price">{{ goods.price }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ express }}</van-col>
        <van-col span="14">折扣：{{ goods.discount }}</van-col>
      </van-cell>
    </van-cell-group>
    <Head title="交易步骤"></Head>
    <van-steps :active="active">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
      <van-button type="primary" @click="ads" size="large">保存地址</van-button>
      <van-button type="primary" @click="addcol" size="large">点击收藏</van-button>
    <van-goods-action>
      <van-goods-action-button @click="addshoppingcar">加入购物车</van-goods-action-button>
    </van-goods-action>
    <Foot></Foot>
  </div>
</template>

<script>
import store from "@/store";
import { mapState, mapActions, mapMutations } from "vuex";
import Foot from "@/components/foot.vue";




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
  GoodsActionButton,
  CouponCell,
  CouponList,
} from "vant";
import { constants } from "crypto";
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
    [GoodsActionButton.name]: GoodsActionButton,
    Foot,

    // City
  },
  data() {
    return {
      express: "免运费",
      goods: {},
      list: [],
      arr: [],
      active: 1,
      show: false
    };
  },
  methods: {
    ...mapActions(["carNumAdd"]),
    addshoppingcar() {
      this.carNumAdd(1),
        this.$axios
          .post("vue/addCart", {
            goodsId: this.goods.id,
            goods: JSON.stringify(this.goods)
          })
          .then(res => {
            this.list = res.data.result;
            // console.log(res.data.result)
            console.log(this.list);
            this.$store.commit("test", this.list);
            //  this.$router.push({ name: "cart" });
          });
    },
    addcol(){
      this.$axios
          .post("vue/addCol", {
            goodsId: this.goods.id,
            goods: JSON.stringify(this.goods)
          })
          .then(res => {
            this.list = res.data.result;
            // console.log(res.data.result)
            console.log(this.list);
            this.$store.commit("test", this.list);
            //  this.$router.push({ name: "cart" });
          });
    },
    ads() {
      this.$router.push({name:'xinzeng'})
    },
    ...mapMutations(["test"])
  },
  mounted() {
    // console.log(this.$route.params.detailsId);
    this.$axios
      .get("/vue/getGoodOne", {
        params: {
          itemId: this.$route.params.detailsId
        }
      })
      .then(res => {
        this.goods = res.data.result;
        console.log(res.data.result);
        // goods: JSON.stringify(this.goods)
        // console.log(res.data.result.price);
        // console.log(this.goods.price)
      });
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
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
.van-goods-action {
  margin-bottom: 50px;
}
.overlay80vh{
  height:80vh;
  
}
.van-cell van-field{
  height: 100%;
}
</style>