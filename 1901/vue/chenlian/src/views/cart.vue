

<template>
  <div class="cart">
    <div class="header-top">
      <Head title="购物车" :show="true" :searchShow="true" v-if="true"></Head>
    </div>

    <div v-if="!cartif">
       <!-- :cartlast="cartlast" -->
      <div>
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
              <span class="goodspan">{{good.price}}</span>
            </ul>
          </router-link>
        </div>
      </div>
    </div>
    
    <div v-else>
      <div  v-if="nocartlast" class="cartnull">
        <!-- <li>购物车空空如也~</li> -->
        <span class="cartnothing" >购物车空空如也~</span>
        <router-link to="/classify">
          <span class="toclassify">去选购商品</span>
        </router-link> 
      </div>
      <div class="cartinfo" v-for="(goods,i) in cartinfo.cartgood" :key="i">
        <input
          class="check-one check"
          v-model="checkedCode[i]"
          type="checkbox"   
          @change="checkone"         
        >      
        <!-- @click="check" -->
        <van-card
          style="padding: 5px 10px;"
          :price="goods.good.price.substring(1,goods.good.price.length)"
          :desc="goods.good.saelsinfo"
          :title="goods.good.title"
          :thumb="goods.good.img"
        />
        <div class="goodnums">
          <span class="cgn">×</span>
          <span class="goodn" v-on:click="des(goods.goodId,goods.count)">-</span>
          <span class="numcount">{{goods.count}}</span>
          <span class="goodn" v-on:click="add(goods.goodId,goods.count)">+</span>
          <span class="delcargood" @click="delcargood(goods.goodId)">删除</span>
        </div>        
        <van-submit-bar button-text="提交订单" @submit="Submit">
          <div class="checkbox">
            <input v-model="isAllChecked" class="check-all" @click="chooseAll" type="checkbox">全选
            已选0
          </div>
          <span slot="tip">
            更多
            <span @click="gotoclassify">产品正陆续推出,海外大牌入驻精选商品</span>
          </span>
        </van-submit-bar>
        
      </div>
    </div>
    
        <div>
          <li>我是checked {{checkedCode}}</li>
          <li>我是全选 {{isAllChecked}}</li>
          <input type="text" v-model="checkcount">
        </div>
    <!-- <keep-alive include="test-keep-alive"> -->
  </div>
</template>

<script>

import store from "@/store";
import { mapState, mapActions } from "vuex";
import { Dialog,Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
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
    // isAllChecked:{
    //   get(){   //取值
    //       var flag = true;
    //       this.checkedCode.forEach((item)=>{
    //           if(!item.check){
    //               flag = false;
    //           }
    //       })
    //       return flag;
    //   },
    //   set(val){   // 监听
    //       console.log(val);
    //       this.checkedCode = this.checkedCode.map((item)=>{
    //           item.check = val;
    //           return item;
    //       })
    //   }
    // },
  },
  /*
   watch:{
    checkedCode:{
        get(){   //取值
            var flag = true;
            this.goods.forEach((good)=>{
                if(!good.check){
                    flag = false;
                }
            })
            return flag;
        },
        set(val){   // 监听
            console.log(val);
            this.goods = this.goods.map((good)=>{
                good.check = val;
                return good;
            })
        }
    }
   },
   */
  data() {
    return {
      count:this.$store.state.cartinfo.cartgood.count,
      loginsrc:require("@/assets/images/logo.jpg"),
      cartif: false,
      cartlast:true,
      nocartlast:false,
      // nocartlast:this.$store.state.cartinfo.cartgood.title?false:true,
      checkedCode: [], // 用于保存被选中的数据
      isAllChecked: false, // 正在进行中的数据是否被选中
      checkcount:0,
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
    // 初始化复选框
   this.cartinfo.cartgood.forEach(item => {
      this.checkedCode.push(false);
    });
    // 显示购物车商品
    var than = this;
    console.log(window.sessionStorage.userInfo);
    if(window.sessionStorage.userInfo){
        this.cartgoods({ url: "/vue/cartgoods",cb:()=>{}});
        this.cartif = true;        
    }else{
      console.log("--------------a----b----v-----b------------------");
      this.cartif = false;
      this.getAllGoods({ url: "/vue/getAllGoods",cb:()=>{} });
    };
    
    // this.isAllChecked = this.checkedCode.length;
    // this.isAllChecked= this.checkedCode.indexOf(false) !='-1'? false :true;
    console.log(this.checkedCode);
    console.log(this.isAllChecked);

  },
  methods: {
    ...mapActions([
      'getAllGoods',
      'cartgoods',
      // 'updatecart'
      ]),
      

    checkone() {
      this.checkedCode.forEach((item,i)=>{
        // if(item[i]==true){
        //   this.checkcount += 1;
        // }
        if(this.checkedCode.indexOf(false) !='-1' ){
          this.isAllChecked = true;
        }
        console.log(item + "item--------------item-------------");
    })
      // this.checkedCode[i] = true;
      // this.checkedCode[i] = !this.checkedCode[i];  // -1 不存在   ！=-1存在
      // this.isAllCheckded= this.checkedCode.indexOf(false) !='-1'? false :true;
      // console.log(this.checkedCode);
      // console.log(this.checkedCode.indexOf(false) !='-1');
      console.log(this.checkedCode);
    },

    chooseAll() { },

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
      // this.$state.store.cartinfo.cartgood['acount'] = 1;
    // this.updatecart({url:"/vue/updatecart",cb:()=>{ }});
      this.$axios
        .post("/vue/updatecart", {
          agoodId: goodId,
          acount: 1
        })
        .then(res => {
          Toast(res.data.msg);
          window.location.reload();
        });
    },
    des(goodId, count) {
      // count = goods.count;
      console.log("减" + count);
      if (count > 1) {
      // this.$state.store.cartinfo.cartgood['acount'] = -1;
      // this.updatecart({url:"/vue/updatecart",cb:()=>{ }});
        this.$axios
          .post("/vue/updatecart", {
            agoodId: goodId,
            acount: -1
          })
          .then(res => {
            Toast(res.data.msg);
            window.location.reload();
          });
      } else {
        Toast("商品数量不可以小于1件");
      }
    },

    delcargood(goodId){
      // console.log("删除" + goodId);
      Dialog.confirm({
        title: '删除商品',
        message: '你确定要删除该商品吗？'
      }).then(() => {
        
        this.$axios
        .post("/vue/deletecart", {
          agoodId: goodId
        })
        .then(res => {
          Toast(res.data.msg);
          window.location.reload();
        });

      }).catch(() => {
        // on cancel
      });
      
    },

    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    Submit() {
      Toast("点击结算");
    }
  },
  mounted() {
    if(this.$store.state.cartinfo.cartgood.length == 0){              
      console.log("没有商品");              
      this.nocartlast = true;
    };
   

    console.log("mounted*----------cartinfo.cartgood------");
    console.log(this.$store.state.cartinfo.cartgood);//0

    console.log("翻转 cartgoods");
      // console.log(this.$store.state.cartinfo.cartgood);
      this.$store.state.cartinfo.cartgood  = this.$store.state.cartinfo.cartgood.reverse();
        if(this.$store.state.cartinfo.cartgood.length == 0){              
          console.log("没有商品");              
          this.nocartlast = true;
        }else {
          this.nocartlast = false;
        }
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

span.delcargood {
    font-size: 0.6rem;
    padding: 0 0 0 0.5rem;
    color: #848484;
}
.cart {
    margin-bottom: 5.2rem;
}

// -----------------------------------
.cartnull {
    font-size: 0.9rem;
    color: #666;
    text-align: center;
    line-height: 3rem;
    // background: yellow;
}
span.cartnothing {
    display: block;
}
span.toclassify{
    color: #737373;
    display: block;
    width: 30%;
    height: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
    border-radius: 0.1rem;
    margin: 0.2rem auto;
    border: 1px solid #dfdfdf;
    background: #efefef;
}
</style>