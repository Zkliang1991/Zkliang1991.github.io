<template>
  <div>
    <Head title="购物车" :flag="true"></Head>
    <div class='content'>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox class="card-goods__item" v-for="(item,i) in  nCar.goods" :key="i" :name="item._id">
        <van-card
          :title="item.title"
          :desc="item.size"
          :num="item.count" 
          :price="formatPrice(item.price)"
          :thumb="item.img"
          :color="item.color"       
        >      
        </van-card>
          <span class='v-cart_color'>{{item.color}}</span>
        <div class="foo">
  
    <van-button size="mini" @click.stop="addNum(item)"  >+</van-button>
     <input type="text" size="mini" v-model='item.count' class='inputChange'>
    <van-button size="mini" @click.stop="reduceNum(item)">-</van-button>
  </div>
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
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
      checkedGoods: [],
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
    ...mapState(["nCar"]),
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
  
      return this.nCar.goods.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item) !== -1
            ? item.price * item.count * 100
            : 0),
        0
      );
    },
    ...mapState(["nCar"])
  },
  methods: {
    ...mapActions(["getCarList"]),

    addNum(item) {
     // var inputChange = document.getElementsByClassName("inputChange")[0];
      this.$axios
        .post("/vue/addCart", {
          body: {
            // '_id':item._id,
            count: item.count* 1 + 1,
            userid: item.userid,
            color: item.color,
            size: item.size,
            id: item.id
          }
        })
        .then(res => {
             if(res.data.type==0){
              this.$store.commit('countAdd')
          }
          this.getCarList({
            url: "/vue/getCarList",
            params: { userid: sessionStorage.getItem("userid") }
          });   
        });
    },

    reduceNum(item) {
      var inputChange = document.getElementsByClassName("inputChange")[0];
      this.$axios
        .post("/vue/addCart", {
          body: {
            // '_id':item._id,
           count: item.count* 1 -1,
            userid: item.userid,
            color: item.color,
            size: item.size,
            id: item.id
          }
        })
        .then(res => {
          if(res.data.type==0){
              this.$store.commit('countReduce')
          }
          console.log(res)
          this.getCarList({
            url: "/vue/getCarList",
            params: { userid: sessionStorage.getItem("userid") }
          })
          
        });
    },
    formatPrice(price) {
      return (price / 100 * 100).toFixed(2);
    },
    onSubmit() {
        this.$router.push({ name: "pay", query: { getNewId: this.checkedGoods } });

    }
   
  },
  
  created() {
    this.getCarList({
      url: "/vue/getCarList",
      params: { userid: sessionStorage.getItem("userid") }
    });
  },
  mounted() {

    // this.goods = this.shoppinginfo;
    // console.log(123333);
    // console.log(this.goods);
  }
};
</script>

<style lang="scss" scoped>
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
.van-submit-bar {
  bottom: 0.8rem !important;
}

.foo {
  position: absolute;
  top: 1.55rem;
  right: 0.1rem;
}
.inputChange {
  width: 0.4rem;
  background: none;
  border: none;
  text-align: center;
  font-size:12px;
}
.v-cart_color {
  color: #7d7e80;
  max-height: 20px;
  font-size: 12px;
  width: 2rem;
  position: absolute;
  top: 1.2rem;
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
  margin-right: .2rem;
}
.van-card__desc .van-ellipsis{
 
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
