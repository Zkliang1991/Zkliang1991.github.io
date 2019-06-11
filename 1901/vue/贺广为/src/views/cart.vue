<template>
  <div>
    <Head :show="false" title="购物车"></Head>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.goodId"
        :name="item.goodId"
      >
        <van-card
          :title="item.good.name"
          :num="item.count"
          :price="item.good.pice"
          :thumb="item.good.img"
        />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice*100"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
      class="submit-bar"
    />
    <Footer></Footer>
  </div>
  
</template>

<script>
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
      goods: [],
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      // console.log(this.goods);
      return this.goods.reduce((total, item) =>total + (this.checkedGoods.indexOf(item.goodId) !== -1? item.good.pice*1: 0),0);
    },
  },
  methods: {
    onSubmit() {
      this.$router.push({name:"payfor",params:{goodid:this.checkedGoods,goods:this.goods,totalPrice:this.totalPrice}})
      window.localStorage.setItem("goods",JSON.stringify(this.goods));
      window.localStorage.setItem("goodsid",JSON.stringify(this.checkedGoods))
      window.localStorage.setItem("totalPrice",JSON.stringify(this.totalPrice))
    },
    ...mapActions(["showcarNum"])
  },
  mounted() {
    this.$axios.get("/vue/getGoodOne").then(res => {
      this.goods = res.data.result;
      for (var i = 0; i < this.goods.length; i++) {
        // var obj = {};
        var id = this.goods[i].goodId;
        // obj._id = id;
        this.checkedGoods.push(id);
      }
      this.showcarNum(this.goods.length)
      // console.log(this.goods.length)
      console.log(this.checkedGoods);
      
    //  var goodslist = JSON.parse(localStorage.getItem('goods'));
    });
    
  }
};
</script>

<style lang="scss">
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  padding-top: 0.8rem;
  &__item {
    position: relative;
    background-color: #fafafa;
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
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
.submit-bar{
  padding-bottom: 1rem;
}
</style>