<template>
  <div class="newcar">
    <detailsHead title="购物车"></detailsHead>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox class="card-goods__item" v-for="item in goods" :key="item._id" :name="item._id">
        <van-card
          :title="item.good.shoptext"
          :desc="item.good.goodstitle"
          :num="item.count"
          :price="item.good.goodsprice"
          :thumb="item.good.goodsimg"
        >
          <div slot="footer" class="more">
            <van-button size="mini" @click.stop="goodsmore">更多</van-button>
            <van-button size="mini" @click.stop="goodsdel">删除</van-button>
          </div>
        </van-card>
      </van-checkbox>
    </van-checkbox-group>

    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
      class="submitbar"
    />
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from "@/components/Foot.vue";
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup,
    Foot
  },
  data() {
    return {
      checkedGoods: [],
      goods: [],
      payGoods: []
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
          (this.checkedGoods.indexOf(item._id) !== -1
            ? item.good.goodsprice * 100
            : 0),
        0
      );
    },
    carNum() {
      const count = this.goods.length;
      return count ? count : 0;
    }
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      this.$router.push({
        name: "paypage",
        params: { list: this.checkedGoods ,carGoods:this.goods}
      });
      console.log(this.checkedGoods);
    },
    goodsmore() {
      Toast("更多");
    },
    goodsdel() {
      Toast("删除");
    },
    ...mapActions(["showCarNum"])
  },
  mounted() {
    var loginname = window.localStorage.getItem("loginname");
    console.log(loginname);
    this.$axios.get("/vue/showcar").then(res => {
      this.goods = res.data.result;
      for (var i = 0; i < this.goods.length; i++) {
        var id = this.goods[i]._id;
        this.checkedGoods.push(id);
      }
      this.showCarNum(this.goods.length);
      console.log(this.checkedGoods)
    });
  }
};
</script>

<style lang="scss">
.card-goods {
  padding-top: 1rem;
  padding-bottom: 2.2rem;
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
  .more {
    width: 100%;
  }
}
.submitbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 1rem !important;
}
</style>