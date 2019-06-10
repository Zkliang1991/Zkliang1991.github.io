<template>
  <div class="goods">
    <Head :title="$route.query.name" :show="true"></Head>
    <div class="goods-swipe" :autoplay="3000">
      <!-- <van-swipe-item v-for="thumb in goods.thumb" :key="thumb"> -->
      <img :src="good.img" alt>
      <!-- </van-swipe-item> -->
    </div>
    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ good.name}}</div>
        <div class="goods-price">{{ formatPrice(good.price)}}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="9">折扣：{{ good.discount}}折</van-col>
        <van-col span="8">类型：{{ good.type.text}}</van-col>
        <van-stepper v-model="value"/>
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

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry"/>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" @click="sorry">客服</van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">购物车</van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="carNumAdd(value)">加入购物车</van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="buyGood">立即购买</van-goods-action-big-btn>
    </van-goods-action>
  </div>
</template>

<script>
import store from "@/store";
import { mapState, mapActions, mapMutations } from "vuex";
import { Dialog } from "vant";
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
      goodId: this.$route.params.goodId,
      good: {},
      show: false,
      xxxxx: 18,
      value: ""
    };
  },
  methods: {
    formatPrice() {
      return "¥" + (this.good.price * this.value).toFixed(2);
    },
    onClickCart() {
      // this.$router.push({ name: "cart" });
      var loginusername = window.localStorage.getItem("loginName");
      if (loginusername) {
        Dialog.confirm({
          title: "提醒",
          message: "是否进入购物车"
        })
          .then(() => {
            this.$router.push({ name: "cart" });
          })
          .catch(() => {
            // on cancel
          });
      } else {
        Dialog.confirm({
          title: "提醒",
          message: "您还没有登录,是否立即马上登录"
        })
          .then(() => {
            window.sessionStorage.url = this.$route.name;
            this.$router.push({ name: "login" });
          })
          .catch(() => {});
      }
    },
    sorry() {
      Toast("暂无后续逻辑~");
    },
    buyGood() {
      // Dialog.confirm({
      //   title: "提醒",
      //   message: "加入成功,是否进入购物车"
      // })
      //   .then(() => {
      //     this.$axios
      //       .post("/vue/addCart", {
      //         goodId: this.goodId,
      //         count: this.value,
      //         good: JSON.stringify(this.good)
      //       })
      //       .then(res => {
      //         console.log(res.data);
      //         this.$router.push({ name: "cart" });
      //       });
      //   })
      //   .catch(() => {
      //     // on cancel
      //   });
      var loginusername = window.localStorage.getItem("loginName");
      if (loginusername) {
        this.$axios
          .post("/vue/addCart", {
            goodId: this.goodId,
            count: this.value,
            good: JSON.stringify(this.good)
          })
          .then(res => {
            console.log(res.data);
          });
        Dialog.confirm({
          title: "提醒",
          message: "加入成功 是否进入购物车"
        })
          .then(() => {
            this.$router.push({ name: "cart" });
          })
          .catch(() => {
            // on cancel
          });
      } else {
        Dialog.confirm({
          title: "提醒",
          message: "您还没有登录,是否立即马上登录"
        })
          .then(() => {
            window.sessionStorage.url = this.$route.name;
            this.$router.push({ name: "login" });
          })
          .catch(() => {});
      }
    },
    ...mapActions(["carNumAdd"])
  },
  mounted() {
    this.$axios
      .get("/vue/getGoodOne", {
        params: {
          goodId: this.goodId
        }
      })
      .then(res => {
        this.good = res.data.result;
        this.show = true;
      });
  }
};
</script>

<style lang="scss">
.goods {
  padding-bottom: 50px;
  padding-top: 0.8rem;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 18px;
    color: darkblue;
  }
  &-price {
    color: #f44;
    font-size: 20px;
    font-style: italic;
  }
  &-express {
    color: #999;
    font-size: 18px;
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
</style>

