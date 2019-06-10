<template>
  <div>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <div v-for="item in good" :key="item.goods.id">
        <van-checkbox class="card-goods__item" :name="item.goods.id" v-if="item.goods">
          <van-card  :title="item.goods.name"
            :price="formatPrice(item.goods.price)"
            :thumb="item.goods.img">
          
          </van-card>
        </van-checkbox>
      </div>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice * 100"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
    <van-popup v-model="show">
      <h2 class="jiage">价格: {{(price=totalPrice).toFixed(2)}}</h2>
      <img src="../assets/images/weixin.jpg" alt>
      <img src="../assets/images/zhifubao.jpg" alt>
    </van-popup>

    <Foot></Foot>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
import Foot from "@/components/foot.vue";
// import Ads from "@/components/ads.vue";
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup,
    Foot,
    // Ads
  },
  data() {
    return {
      show: false,
      checkedGoods: [],
      good: [
        {}
        // {
        //   id: "1",
        //   title: "进口香蕉",
        //   desc: "约250g，2根",
        //   price: 200,
        //   num: 1,
        //   thumb:
        //     "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        // },
        // {
        //   id: "2",
        //   title: "陕西蜜梨",
        //   desc: "约600g",
        //   price: 690,
        //   num: 1,
        //   thumb:
        //     "https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"
        // },
        // {
        //   id: "3",
        //   title: "美国伽力果",
        //   desc: "约680g/3个",
        //   price: 2680,
        //   num: 1,
        //   thumb:
        //     "https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
        // }
      ]
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      return this.good.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item.goods.id) !== -1
            ? item.goods.price
            : 0),
        0
      );
    }
  },
  methods: {
    formatPrice(price) {
      return price.toFixed(2);
    },
    onSubmit() {
      this.show = true;
    }
  },
  mounted() {
    this.$axios.get("vue/cart").then(res => {
      this.good = res.data.result;
      console.log(this.good);
    });
  }
};
</script>

<style lang="scss">
.card-goods {
  padding: 10px 0;
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
.jiage {
  font-size: 30px;
}
.van-submit-bar {
  margin-bottom: 45px;
}
.bbb{
  max-width: 100%;
}

</style>