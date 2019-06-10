<template>
  <div>
     <Head title="购物车" class="lightSpeedIn" :show="true"></Head>
    <div class="main">
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item._id"
        :name="item._id"
      >
        <van-card
          :title="item.goodstitle" 
          :desc="item.desc"    
          :num="item.goodsnum"
          :price="item.goodsprice"
          :thumb="item.goodsimg"
        />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar   class="card-pay"  
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
     <!-- <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    /> -->
    </div>
  </div>
</template>

<script>
import store from "@/store";
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
      //id:this.goodsId,num:1,price:this.goods.price,title:this.goods.title,img:this.$route.params.img
      // goodsnum:this.$route.params.num,
      // goodsprice:this.$route.params.price,
      // goodstitle:this.$route.params.title,
      // goodsimg:this.$route.params.img,
      // goodsid:this.$route.params.id,
      checkedGoods: [],
      goods: []
    };
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
    // formatPrice(price) {
    //   return (price);
    // },
    onSubmit() {
      Toast('点击结算');
    }
  },
   mounted(){
  //    console.log(this.userInfo)
   this.$axios.get("/vue/getcartgoods",{

      // params:{
      //   username:window.sessionStorage.userInfo.value
      //   // goodsid:this.goodsId,
      // }    
   }).then(res=>{
     console.log(res);
      // alert(res.data.result[0].goodstitle);
      // this.goods=res.data.result
    //  id: '1',
    //     title: '进口香蕉',
    //     desc: '约250g，2根',
    //     price: 200,
    //     num: 1,
    //     thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
    // alert(res.data.result.length);
      this.goods=res.data.result;
      // this.goods.price=res.data.goodsprice;
      // this.goods.thumb=res.data.goodsimg;

    //  this.goods.thumb=res.data.goodsimg
     //this.goods=res.data.result;
       // console.log(this.goods)
        this.$store.dispatch("goodsnum",res.data.result.length);
   })
  },
};
</script>

<style lang="scss">
.main{
   .card-goods {
    margin-bottom: 50px;
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
.card-pay{
    left: 0;
    bottom: 46px;
    width: 100%;
    z-index: 100;
    position: fixed;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fff;
  }
}
 



</style>