<template>
  <div>
    <Head title="购物车"></Head>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox class="card-goods__item" v-for="(item,i) in goods" :key="i" :name="item.name">
        <van-card
          :title="item.name"
          :desc="item.where"
          :price="item.price"
          :thumb="item.img"
          :num="item.count"
        >
          <div slot="footer" class="changeNum">
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
      num: 1,
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
          total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
        0
      );
    }
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      Toast("点击结算");
    },
    add(id, i, e, count) {
      e.path[0].parentNode.children[1].removeAttribute("disabled");
      this.goods[i].count++;
      this.$axios.post("/vue/count", this.goods[i]).then(res => {
        console.log(res.data);
      });
    },
     reduce(id, i, e, count) {
      if (this.goods[i].count <= 2) {
        e.path[0].setAttribute("disabled", "disabled");
      }
      this.goods[i].count--;
      this.$axios.post("/vue/count", this.goods[i]).then(res => {
        console.log(res.data);
      });
    },

  },
  mounted() {
    this.$axios.post("/vue/cart").then(res => {
      this.goods = res.data.result;
    });
  }
};
</script>

<style scoped>
.card-goods {
  padding: 10px 0;
  background-color: #fdfdfd;
  position: relative;
}
.card-goods__item {
  position: relative;
  background-color: #fdfdfd;
  margin-left: 2px;
  position: relative;
}
.van-checkbox__label {
  width: 100%;
  height: auto;
  padding: 0 10px 0 15px;
  box-sizing: border-box;
}
.van-checkbox__icon {
  top: 50%;
  left: 10px;
  z-index: 1;
  margin-top: -10px;
}
.van-card__price {
  color: #f44;
  width: 50%;
}
.van-card__num {
  float: right;
  display: block;
}
.van-card {
  padding: 0;
  margin: 5px 15px;
}
.van-card__title {
  width: 15rem;
}
.changeNum {
  position: absolute;
  margin-left: 14rem;
  margin-top: -3.56rem;
}
.van-card__bottom {
  width: 50%;
}
</style>