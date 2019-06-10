<template>
  <div class="cart">
    <div class="header-top">
      <Head title="购物车" :show="true" :searchShow="true" v-if="true"></Head>
    </div>
    <!-- {{$store.state.cartinfo.cartgood}} -->

    <div v-if="!cartif">
      <div class="cartiftop">
        <img class="cariflogo" :src="loginsrc" alt="">
        <p class="carttip">登陆后查看购物车</p>
        <van-button class="cartlogin login" plain hairline type="primary" size="large" to="/login" 
        style="color:#fff"
        >前往&nbsp;&nbsp;登陆&nbsp;/&nbsp;注册</van-button>
        <p class="cartmore">更多精彩商品</p>
      </div>
      
      
      
      <div class="goodlist"
        v-for="(good,i) in goodInfo.allgoods" :key="i">
        <router-link :to="{name:'good',params:{goodId:good._id},query:{title:good.title}}">
          <img :src="good.img" alt class="goodimg">
          <ul class="goodinfo">
            <p class="goodtitle">{{good.title}}</p>
            <!-- <span class="goodspan">{{good.price}}</span> -->
          </ul>
        </router-link>
      </div>
    </div>
    <div v-else>
      <div class="cartinfo" v-for="(goods,i) in cartinfo.cartgood" :key="i">
        <!-- <input class="check-one check" :checked="checkedCode[i]" type="checkbox" @change="singleChecked(i)"> -->
        <input
          class="check-one check"
          v-model="checkedCode.value"
          type="checkbox"
          @change="singleChecked(i)"
        >
        <!-- <span>{{i}}---{{checkedCode}}</span> -->
        <!-- v-model="checkedCode" -->
        <!-- :price="goods.good.price.substring(1,goods.good.price.length)" -->
        <van-card
          style="padding: 5px 10px;"
          
          :desc="goods.good.saelsinfo"
          :title="goods.good.title"
          :thumb="goods.good.img"
        />
        <div class="goodnums">
          <span class="cgn">×</span>
          <span class="goodn" v-on:click="des(goods.goodId,goods.count)">-</span>
          <span class="numcount">{{goods.count}}</span>
          <span class="goodn" v-on:click="add(goods.goodId,goods.count)">+</span>
        </div>
        <span>删除</span>
 <!-- :price="0" -->
        <van-submit-bar button-text="提交订单" @submit="Submit">
          <div class="checkbox">
            <input v-model="isAllChecked" class="check-all" @click="chooseAll" type="checkbox">全选
            已选0
          </div>
          <span slot="tip">
            更多产品正陆续推出,海外大牌入驻
            <span @click="gotoclassify">精选商品</span>
          </span>
        </van-submit-bar>
      </div>
    </div>

    <input type="text" v-model="mm">
    {{mm}}
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
  </div>
</template>

<script>
import store from "@/store";
import { mapState, mapActions } from "vuex";
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
import { Dialog } from "vant";
export default {
  name: "cart",
  computed: {
    ...mapState([
      'cartinfo', 
      'goodInfo'
      ]),

    // count:{
    //   get(){
    //     return this.$store.state.cartinfo.cartgood['acount'];
    //   },
    //   set(val){
    //     this.$store.commit("upcount",val); 
    //   }
    // }

  // totalPrice() {
    //   return this.goods.reduce(
    //     (total, item) =>
    //       total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
    //     0
    //   );
    // }
  },
  data() {
    return {
      loginsrc:"http://img.5lux.com.cn/vendor/images/v30/logo.jpg",
      cartif: false,
      // cartif:this.$store.state.cartinfo.cartgood,
      checkedCode: [], // 用于保存被选中的数据
      isAllChecked: false, // 正在进行中的数据是否被选中

      mm: 0,
      checkedcount: 0,
      checkedGoods: ["1", "2", "3"],
      goods: [
        {
          id: "",
          title: "",
          desc: "",
          price: "",
          num: "",
          thumb: ""
        }
      ]
    };
  },
  created() {
    this.cartgoods({ url: "/vue/cartgoods" });
    // if(this.$store.state.cartinfo.cartgood){
    //   this.cartif = false;
    // }
    if (window.sessionStorage.userInfo) {
      this.cartif = true;
    }else{
      this.getAllGoods({ url: "/vue/getAllGoods",cb:()=>{} });
    }
  },
  methods: {
    ...mapActions([
      'getAllGoods',
      'cartgoods',
      'updatecart'
      ]),
    // ...mapActions(["cartgoods"]),
    singleChecked(i) {
      // this.checkedCode[i] = true;
      // this.checkedCode[i] = !this.checkedCode[i];  // -1 不存在   ！=-1存在
      // this.isAllCheckded= this.checkedCode.indexOf(false) !='-1'? false :true;
      // console.log(this.checkedCode);
      // console.log(this.checkedCode.indexOf(false) !='-1');
      console.log(this.checkedCode);
    },

    chooseAll() {},
    goodcheckall() {},
    goodcheck() {},

    gotoclassify() {
      Dialog.confirm({
        title: "更多产品正陆续推出",
        message: "海量精选商品，自营正品保障,承诺国内退货售后无忧"
      })
        .then(() => {
          this.$router.push({ name: "classify" });
        })
        .catch(() => {});
    },
    add(goodId, count) {      
      this.$state.store.cartinfo.cartgood['acount'] = 1;
    this.updatecart({url:"/vue/updatecart",cb:()=>{ }});
      // this.$axios
      //   .post("/vue/updatecart", {
      //     agoodId: goodId,
      //     acount: 1
      //   })
      //   .then(res => {
      //     Toast(res.data.msg);
      //     window.location.reload();
      //   });
    },
    des(goodId, count) {
      // count = goods.count;
      console.log("减" + count);
      if (count > 1) {
      this.$state.store.cartinfo.cartgood['acount'] = -1;
      this.updatecart({url:"/vue/updatecart",cb:()=>{ }});
        // this.$axios
        //   .post("/vue/updatecart", {
        //     agoodId: goodId,
        //     acount: -1
        //   })
        //   .then(res => {
        //     Toast(res.data.msg);
        //     window.location.reload();
        //   });
      } else {
        Toast("商品数量不可以小于1件");
      }
    },
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    Submit() {
      Toast("点击结算");
    }
  },
  mounted() {
    // if(window.sessionStorage.username){
    //   flag = false;
    //   console.log("1 - -- wincunzai");
    // }else{
    //   console.log("2 - -- 不存在");
    // };

    this.cartinfo.cartgood.forEach(item => {
      this.checkedCode.push(false);
    });
    console.log(this.checkedCode);
  },
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  }
};
</script>


<style lang="scss" scoped>

// --------------------------------
p.cartmore {
    color: #666;
    font-size: .9rem;
    margin-top: 2rem;
}
.cartiftop {
    width: 100%;
    height: auto;
    text-align: center;
    margin: 0 auto;
}
img.cariflogo {
    width: 60%;
    padding-top:5rem;
}
p.goodtitle {
    padding: 0;
    margin: 0;
    line-height: 1.5rem;
    color: #696969;
    white-space: nowrap;
    font-size: .7rem;
}
span.goodspan {
    padding: 0;
    margin: 0;
    line-height: 1rem;
    color: #909090;
    font-size: 0.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
}
p.carttip {
    font-family: Aria;
    font-size: 13px;
    padding: 10px 0 5px;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-family: Aria;
    font-size: 12px;
    color: #999;
}
.van-button--plain.van-button--primary {
    color: #fff;
    width: 90%;
    height: 2.6rem;
    font-size: 0.8rem;
    line-height: 2.6rem;
    background: #1c1c1c;
    border: none;
}

// ----------------------------

.card-goods {
  padding: 10px 0;
  background-color: #fff;
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
      width: 0.9rem;
      height: 0.9rem;
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

.van-card__title {
  line-height: 18px;
  max-height: 40px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 0.5rem;
}
.card-goods__item .van-card__price {
  color: #f44;
  font-weight: bold;
  margin-top: 0.2rem;
}
.van-card__desc {
  color: #7d7e80;
  max-height: 20px;
  font-size: 0.5rem;
  margin-top: 0.3rem;
}
.van-card__thumb img {
  // border: 0;
  max-width: 100%;
  max-height: 100%;
  border-radius: 5%;
  border: 1px solid #f6f6f6;
}
.van-card {
  position: relative;
  color: #323233;
  padding: 5px 12px 5px 11px;
  font-size: 12px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fafafa;
  position: relative;
}

// -------------------------

.goods-price {
  color: #f44;
  font-weight: bold;
  line-height: 2rem;
  margin-top: 0.2rem;
  width: 50%;
  float: left;
}
span.numcount {
  width: 1.8rem;
  display: inline-block;
  text-align: center;
  font-size: 0.8rem;
  border: 1px solid #e5e5e5;
  height: 1.4rem;
}
span.goodn {
  width: 1.3rem;
  display: inline-block;
  text-align: center;
  font-size: 0.8rem;
  border: 1px solid #e5e5e5;
  height: 1.4rem;
}
.goodnums {
  width: auto;
  float: right;
  height: auto;
  line-height: 1.5rem;
  font-size: 0.9rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}
.cgn {
  margin-right: 0.2rem;
}
.card-goods__item {
  position: relative;
  background-color: #fafafa;
  padding: 0.2rem 0rem;
}
.cartinfo {
  position: relative;
  background: #fafafa;
  padding: 0.2rem 0rem;
  border-bottom: 1px solid #eeeeee;
  width: 100%;
  height: 7.5rem;
}
input.check-one.check {
  float: left;
  width: 0.9rem;
  height: 0.9rem;
  background: red;
  display: inline-block;
  border-radius: 100%;
  position: relative;
  margin-top: 3.4rem;
  margin-left: 0.5rem;
}
.van-card {
  float: right;
  width: 92%;
  position: relative;
  color: #323233;
  padding: 5px 10px;
  font-size: 12px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fafafa;
}
.van-submit-bar .van-button {
  width: 32%;
}
.van-submit-bar__price {
  color: #f44;
  font-size: 1rem;
  font-weight: bold;
}
.van-submit-bar__text {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-weight: 500;
  text-align: right;
  color: #323233;
  padding-right: 0.3rem;
}


</style>