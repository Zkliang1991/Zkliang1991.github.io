<template>
  <div>
    <Head title="购物车" :show="true"></Head>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox class="card-goods__item" v-for="(item,i) in goods" :key="i" :name="item">
        <van-card
          :title="item.name"
          :desc="item.deal"
          :num="item.count"
          :price="item.price | getprice"
          :thumb="item.images"
        >
          <div slot="footer" class="changeNum">
            <!-- <van-stepper v-model="value" /> -->
            <van-button
              size="mini"
              class="addNum"
              @click.stop="add(item.goodId,i,$event,item.count)"
            >+</van-button>
            <van-button
              size="mini"
              class="reduce"
              @click.stop="reduce(item.goodId,i,$event,item.count)"
            >-</van-button>
          </div>
        </van-card>
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
// Vue.filter('getprice', function (price) {
//   if (!price) return ''
//   price = price.replace(/[^0-9]/ig,"");
//   return price
// })

import { Toast } from "vant";
export default {
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
      console.log(this.goods);
      return this.goods.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item) !== -1
            ? (item.price.replace(/[^0-9]/gi, "") / 100) * item.count * 100
            : 0),
        0
      );
    }
  },
  methods: {
    add(id, i, e, count) {
      console.log(id);
      e.path[0].parentNode.children[1].removeAttribute("disabled");
      this.goods[i].count++;
      console.log(this.goods[i].count);
      this.$axios.post("/vue/cartcount", this.goods[i]).then(res => {
        console.log(res.data);
      });
    },
    reduce(id, i, e, count) {
      console.log(this.goods[i].count);
      if (this.goods[i].count <= 2) {
        e.path[0].setAttribute("disabled", "disabled");
      }
      this.goods[i].count--;
      this.$axios.post("/vue/cartcount", this.goods[i]).then(res => {
        console.log(res.data);
      });
    },
    onSubmit() {
      Toast("点击结算");
    }
  },
  created() {
    this.$axios.get("/vue/mycart").then(res => {
      this.goods = res.data.result;
    });
  },
  filters: {
    getprice: function(price) {
      if (!price) return "";
      price = price.replace(/[^0-9]/gi, "");
      price = parseInt(price);
      return (price / 100).toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
.van-card__footer .van-button {
  margin-left: 0;
}
.inputChange {
  width: 0.4rem;
  background: none;
  border: none;
  text-align: center;
}
.changeNum {
  margin-left: 3rem;
}
.van-submit-bar {
  display: fixed;
  left: 0;
  bottom: 0.9rem;
}
.card-goods {
  // margin-top: 1.2rem;
  // padding: 10px 0;
  background-color: #fff;
  margin-bottom: 2rem;
  .card-goods__item {
    margin-top: 0.1rem;
  }
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