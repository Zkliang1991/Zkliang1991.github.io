<template>
  <div class="shopping">
    <Head title="购物车"></Head>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="(item ,index) in goods"
        :key="index"
        :name="item.good.goodid"
      >
        <van-card
          :title="item.good.goodname"
          :num="item.count"
          :price="formatPrice(item.good.goodsprice)"
          :thumb="item.good.goodimg"
        />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice*100"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>


<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checkedGoods: [],
      goods: []
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item.good.goodid) !== -1
            ? item.good.goodsprice * item.count
            : 0),
        0
      );
    }
  },
  created() {
    var username = window.sessionStorage.userInfo;
    this.$axios.post("/vue/shoppingcar", { parmas: username }).then(res => {
      this.goods = res.data.result;
      console.log(this.goods);
    });
  },
  methods: {
    formatPrice(price) {
      return price.toFixed(2);
    },
    onSubmit() {
      console.log(this.checkedGoods);
      this.$router.push({
        name: "jiesuan",
        params: { shop_id: this.checkedGoods }
      });
    }
  }
};
</script>

<style lang="scss">
.card-goods {
  padding: 1rem 0 0.1rem 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px !important;
    }
    .van-card__price {
      color: #f44;
    }
  }
}

.card-goods__item .van-checkbox__icon {
  margin-left: 0 !important;
}
</style>