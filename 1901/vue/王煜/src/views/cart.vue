    
<template>
  <div>
    <van-nav-bar :fixed="true" title="购物车" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item._id"
        :name="item._id"
      >
        <van-card
          :title="item.goodsName"
          :desc="item.footnote"
          :num="item.count"
          :price="item.price"
          :thumb="item.img"
        />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
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
      goods: [],
      true: true,
      token: JSON.parse(window.sessionStorage.userInfo).token,
      checkedGoods: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit() {
      Toast("点击结算");
    }
  },
  mounted() {
    if (window.sessionStorage.userInfo) {
      this.$axios
        .get("/vue/getData", {
          params: {
            Utoken: this.token
          }
        })
        .then(res => {
          console.log(res);
          this.goods = res.data.result;
        });
    } else {
      Toast("请先登录");
    }
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
          (this.checkedGoods.indexOf(item._id) !== -1 ? (item.price*100) : 0),
        0
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  margin-top: 1rem;
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
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>