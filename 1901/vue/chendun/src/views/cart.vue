<template>
  <div>
    <Head title="购物车" :show="true"></Head>
    <div>
      <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox
          class="card-goods__item"
          v-for="item in goods"
          :key="item._id"
          :name="item._id"
          v-model="checked"
        >
          <van-card
            v-if="item.good"
            :title="item.good.name"
            :num="item.count"
            :price="item.good.price"
            :thumb="item.good.img"
          />
          <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </div>
        </van-checkbox>
      </van-checkbox-group>
      <van-submit-bar
        :price="totalPrice*100"
        :disabled="!checkedGoods.length"
        :button-text="submitBarText"
        @submit="onSubmit"
      />
    </div>
  </div>
</template>
<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
import store from "@/store";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checked: true,
      checkedGoods: [],
      goods: [],
      arr: [],
      arrer: []
    };
  },
  created() {
    
  },
  mounted() {
    this.$axios.get("/vue/cartList").then(res => {
      this.goods = res.data.result;
      this.$store.state.shuliang = this.goods.length;
      var list = this.goods;
      for (var i = 0; i < list.length; i++) {
        var itme = list[i];
        this.checkedGoods.push(itme._id);
      }
      var arr = [];
      this.goods.map((item, index) => {
        for (var i in item) {
          if (this.checkedGoods.indexOf(item["_id"]) !== -1) {
            arr.push(item);
          }
        }
      });
    });
  
  },
  methods: {
    formatPrice(price) {
      return price.toFexid(2);
    },
    onSubmit() {
      console.log(this.checkedGoods);
      var ids = this.checkedGoods;
      for (var i = 0; i < this.goods.length; i++) {
        var itme = this.goods[i];
        this.arr.push(itme);
      }
      for (var i = 0; i < this.checkedGoods.length; i++) {
        var id = this.checkedGoods[i];
        for (var k = 0; k < this.arr.length; k++) {
          var kid = this.arr[k]._id;
          if (kid == id) {
            this.arrer.push(this.arr[k]);
          }
        }
      }
      // this.$axios.post("/vue/deleteIdforCart",ids).then(res=>{

      // })
      this.$store.commit("checkedList", this.arrer);
      // console.log(this.arrer);

      this.$router.push({  name: "jiesuan",params:{totalPrice:this.totalPrice}});
    },
    getChange() {
      this.change(this.$refs.one.value);
    },
    ...mapMutations(["shuliang", "checkedList"])
  },
  computed: {
    
    submitBarText() {
      // var jisuenNum = 0;
      // for (var i = 0; i < this.checkedGoods.length; i++) {
      //   jisuenNum += this.checkedGoods[i].count * 1;
      //   //console.log(jisuenNum);
      // }
      // return "结算" + (jisuenNum > 0 ? `(${jisuenNum})` : "");

      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total +  (this.checkedGoods.indexOf(item._id) !== -1 ? item.good.price*item.count: 0), 0 
          );
    },
    
  }
};
</script>
<style lang="scss">
.card-goods {
  background-color: #fff;
  padding-bottom: 1.2rem;
  // padding-top: 1rem;
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
</style>