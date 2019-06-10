<template>
  <div>
    <Head title="结算" :flag="true"></Head>
      <van-card
      v-for="(item,i) in buygoods"
      :key="i"
      :name="item"
        :title="item.goodname"
        :desc="item.desc"
        :num="item.count"
        :price="formatPrice(item.goodprice)"
        :thumb="item.goodimg"
      ></van-card>
        <div class="dz">
            <h2>请选择地址</h2>
            <Dz></Dz>
        </div>
        
    <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit"/>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast, Dialog } from "vant";
import Dz from "@/components/dz.vue";

export default {
  components: {
    Dz
  },
  data() {
    return {
      value: 1,
    price:0,
      goods: []
    };
  },
  computed: {
   ...mapState([
            'buygoods',
            'buytotal'
        ])
  },
  methods: {
    formatPrice(price) {
      return ((price / 100) * 100).toFixed(2);
    },
    onSubmit() {
      // this.$router.push({name:"dizhilist"})
      console.log(this.goods);
    },
    ...mapActions(["getshoppingcar", "changecount", "delgoods"])
  },
  created() {
    this.getshoppingcar({ url: "/vue/getshoppingcar" });
  },
  mounted() {
      // console.log(!!this.$route.params.goods)
      // if(!!this.$route.params.goods){
      //     this.goods=this.$route.params.goods
      // }else{
      //     this.$router.push({name:"shoppingcar"})
      // }
      console.log(this.buygoods)
      console.log(this.buytotal)
      this.price=this.buytotal
    // this.goods = this.shoppinginfo;
    // console.log(123333);
    // console.log(this.goods);
  }
};
</script>

<style lang="less" >
input {
  width: 30px;
  border: none;
  outline: none;
  -webkit-appearance: none;
}
.card-goods {
  padding: 10px 0;
  margin-bottom: 50px;
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
.foo {
  position: absolute;
  top: 70px;
  right: 12px;
}
.vansubmitbar {
  position: absolute !important;
  bottom: 50px !important;
}
.dz{
    border: 2px red dashed;
    margin-top: 20px;
}
.van-address-list .van-button--square{
    margin-bottom: 50px;
}
.van-submit-bar__bar .van-button--large{
    background-color: coral !important;
    border: 1px solid coral !important;
}
</style>
