<template>
  <div>
    <Head title="我的购物车"></Head>
    <div class="kong"></div>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <!-- label-disabled="true" -->
      <van-checkbox
        class="card-goods__item"
        v-for="(item,i) in goods"
        :key="i"
        :name="item"
        abel-disabled="true"
      >
        <van-card
          :title="item.good.title"
          :num="item.count"
          :price="formatPrice(item.good.price*1)"
          :thumb="item.good.img"
        >
          <!-- <div slot="footer">
            <van-button size="mini" type="danger" @click="delCar">删除</van-button>
         
          </div> -->
        </van-card>
      </van-checkbox>
    </van-checkbox-group>
    <!-- <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />-->
    <van-submit-bar
      :button-text="submitBarText"
      @submit="onSubmit"
      :price="totalPrice"
      :disabled="!checkedGoods.length"
    >
      <!-- <van-checkbox v-model="checked" @click="checked=true" @change="allchecked">全选</van-checkbox> -->
    </van-submit-bar>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
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
      checkedGoods: [],
      goods: [],
      checked: false,
      dchecked: true,
    };
  },
  computed: {
    ...mapState(["loginInfo"]),
    submitBarText() {
      var jisuenNum = 0;
      for (var i = 0; i < this.checkedGoods.length; i++) {
        jisuenNum += this.checkedGoods[i].count * 1;
        //console.log(jisuenNum);
      }
      return "结算" + (jisuenNum > 0 ? `(${jisuenNum})` : "");
    },
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item) !== -1
            ? item.good.price * 100 * item.count
            : 0),
        0
      );
      // if(this.checkedGoods.indexOf(name) !==-1){
      //   console.log("1121323132")
      //   console.log(this.name);
      //  // name.good.price=0;
      // }else{
      //    console.log("66666")
      // }
      //return name.good.price*name.count
    }
  },
  methods: {
    formatPrice(price) {
      return (price * 1).toFixed(2);
    },
    onSubmit() {
      var checkgood  =this.checkedGoods
      console.log(checkgood);
      //Toast("点击结算");
      this.$router.push({ name: "jiesuan", params: {checkgood:JSON.stringify(checkgood)} })
    },
    allchecked() {
      if (this.checked == true) {
        // console.log(this.goods[0])
        // this.checkedGoods.push(this.goods[0]);
        // console.log(this.checked);
        for (var i = 0; i < this.goods.length; i++) {
          this.checkedGoods.push(this.goods[i]);
        }
      } else {
        this.checkedGoods = [];
        //console.log(this.checked);
      }
    },
    // delCar() {
    //   this.$axios
    //     .get("/vue/delcar", {
    //       params: { goods }
    //     })
    //     .then(res => {
    //       console.log("666");
    //     });
    // }
  },
  mounted() {
    // var token = JSON.parse(window.sessionStorage.userInfo).token;
    // console.log(token);
    // this.good = this.$route.params.good;
    // console.log(this.good)
    this.$axios
      .get("./vue/getcar", {
        //params: {token}
      })
      .then(res => {
        console.log(res.data);
        this.goods = res.data.result;
        //this.checkedGoods = res.data.result;
      });
    // setTimeout(()=>{
    //   console.log(document.getElementsByClassName('van-card__header'))
    // },0)
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
.kong {
  height: 38px;
  width: 100%;
}
</style>
