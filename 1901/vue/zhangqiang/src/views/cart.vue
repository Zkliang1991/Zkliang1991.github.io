<template>
  <div>
    <Head title="购物车" :show="true" class="caranimation"></Head>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="(item ,index) in goods"
        :key="index"
        :name="item.good._id"
      >
        <van-card
          :title="item.good.name"
          :desc="item.good.type.text"
          :num="item.count"
          :thumb="item.good.img"
          :price="formatPrice(item.good.price*item.count*100)"
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
import { Dialog } from "vant";
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
import { mapActions } from 'vuex';
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
      goods: {}
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
          (this.checkedGoods.indexOf(item.good._id) !== -1
            ? item.good.price * item.count
            : 0),
        0
      );
    }
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      // Toast("点击结算");
      this.$router.push({name:"payfor",params:{goodid:this.checkedGoods,goods:this.goods,totalPrice:this.totalPrice}})
    },
    ...mapActions(["showcarNum"])
  },
  mounted() {
    var loginusername = window.localStorage.getItem("loginName");
    if (loginusername) {
      // this.$router.push({ name: "cart" });
      this.$axios.get("/vue/myshoppingcar", {}).then(res => {
        this.goods = res.data;
        for (var i = 0; i < this.goods.length; i++) {
        // var obj = {};
        var id = this.goods[i].goodId;
        // obj._id = id;
        this.checkedGoods.push(id);
      }
      this.showcarNum(this.goods.length)
      // console.log(this.goods.length)
      console.log(this.checkedGoods);
        console.log(this.goods);
      });
    } else {
      Dialog.confirm({
        title: "提醒",
        message: "您还没有登录,是否马上登录"
      })
        .then(() => {
          window.sessionStorage.url = this.$route.name;
          this.$router.push({ name: "login" });
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style lang="scss">
.card-goods {
  padding: 0.8rem 0 0.1rem 0;
  // padding: 10px 0;
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
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
.van-submit-bar {
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 200 !important;
  position: fixed;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #fff;
}
</style>