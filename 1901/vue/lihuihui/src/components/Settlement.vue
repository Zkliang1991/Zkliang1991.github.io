<template>
  <div class='content'>

    <div class='defaltAddres'>
    <van-checkbox-group  v-model="checkedGoods"  class="card-goods" v-for="(item,i) in  goods" :key="i" :name="item">
 
        <van-card
          :title="item.title"
          :desc="item.size"
          :num="item.count" 
          :price="formatPrice(item.price)"
          :thumb="item.img"
          :color="item.color"       
        >      
        </van-card>
       
        <div class="foo">
     <span class='v-cart_color'>{{item.color}}</span>
    <!-- <van-button size="mini" @click.stop="addNum(item)"  >+</van-button>
     <input type="text" size="mini" v-model='item.count' class='inputChange'>
    <van-button size="mini" @click.stop="reduceNum(item)">-</van-button> -->
  </div>

    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      button-text="结算"
      @submit="onSubmit"
    />
   </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      value: 1,
      checkedGoods: this.$route.query.getNewId,
    //  totalPrice:'',
      goods: [
        {
          id: "1",
          goodname: "进口香蕉",
          desc: "约250g，2根",
          goodprice: 200,
          count: 1,
          goodimg:
            "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        }
      ]
    };
  },
  computed: {
    submitBarText() {
      return 110;
      //   const count = this.checkedGoods.length;
      //   return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      //return 100;
      var total=0;
     this.goods.map((item,i)=>{
      total+=item.price * item.count * 100
     })
      return total
    },

  },
  methods: {


    formatPrice(price) {
      return (price / 100 * 100).toFixed(2);
    },
    onSubmit() {
      Toast("点击结算");
    }
  },

  mounted() {

    this.$axios
      .get("/vue/jieSuan", {
        params: {
          'ids': this.$route.query.getNewId
        }
      })
      .then(res => {
        this.checkedGoods=this.$route.query.getNewId
        this.goods=res.data.result;

      });
    console.log(this.$route.query.getNewId);
    console.log(this.goods)

    // this.goods = this.shoppinginfo;
    // console.log(123333);
    // console.log(this.goods);
  }
};
</script>

<style lang="scss" scoped>
.defaltAddres {
  //width: 100%;
  color: #323233;
  font-size: 14px;

  background-color: #fff;
  //padding: 10px 15px;;
  margin: 0.8rem 0.2rem 0.1rem 0.2rem;
  box-sizing: border-box;
  border-radius: 0.1rem;
  text-align: left;
  padding: 0.2rem;
}
input {
  width: 0.3rem;
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
  //top: 1.55rem;
  right: 0.1rem;
}
.inputChange {
  width: 0.4rem;
  background: none;
  border: none;
  text-align: center;
  font-size: 12px;
}
.v-cart_color {
  color: #7d7e80;
  max-height: 20px;
  font-size: 12px;
  width: 2rem;
  position: absolute;
  top: -1rem;
  right: 0rem;
  color: #7d7e80;

  font-size: 12px;
  width: 2rem;
  line-height: 16px;
  max-height: 32px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-right: 0.2rem;
}
.van-card__desc .van-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.van-card__desc {
  width: 2rem !important;
  color: #7d7e80;
  max-height: 20px;
}
.van-card__content {
  width: 4rem;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  min-height: 90px;
}
</style>

