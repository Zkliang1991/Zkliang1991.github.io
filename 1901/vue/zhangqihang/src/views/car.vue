
<template>
  <div>
      <Head title="提交订单" :show = "true"></Head>  
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox class="card-goods__item" v-for="(item ,i) in goods" :key="i" :name="item.name">
        <van-card :title="item.good.name"  :num="item.count" :price="item.good.price" :thumb="item.good.img"/>
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar :price="totalPrice" :disabled="!checkedGoods.length" :button-text="submitBarText" @submit="onSubmit"/>
  </div>
</template>

<script>
import {http} from "../utils"
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';
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
    created(){
      http.get("./vue/getCars",{
        params:{
           _id:this.$route.params.goodId
        }
      }).then(res=>{
        this.goods = res.data.result;
        console.log(this.goods[0].good.img)
      })
    },
    computed: {
      submitBarText() {
        const count = this.checkedGoods.length;
        return '结算' + (count ? `(${count})` : '');
      },
      totalPrice() {
        return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
      }
    },
    methods: {
      
      onSubmit() {
        Toast('点击结算');
      }
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
.van-submit-bar{
    bottom: .9rem !important;
}
</style>
