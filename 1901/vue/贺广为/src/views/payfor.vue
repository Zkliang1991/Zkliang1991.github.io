
<template>
  <div>
    <CartHead title="结算" :show="true"></CartHead>
    <van-steps class="steps" :active="active" active-icon="success" active-color="green">
      <van-step>结算商品</van-step>
      <van-step>选择地址</van-step>
      <van-step>提交订单</van-step>
      <van-step>在线支付</van-step>
    </van-steps>
    <van-card
      v-if="show1"
      class="goodcard"
      v-for="(item,index) in goods"
      :num="item.count"
      tag="对的选择"
      :price="item.good.pice"
      :desc="item.good.shop_text"
      :title="item.good.name"
      :thumb="item.good.img"
      :key="index"
    >
      <div slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </div>
    </van-card>
    <Addresslist v-if="show2"></Addresslist>
    <Submission class="submission" v-if="show3" active="active" @onSubmit="onSubmit"></Submission>
    <el-row class="btnbox">
      <el-button type="danger" size="normal" @click="back" v-if="show4">上一步</el-button>
      <el-button type="success" size="normal" @click="goon" v-if="show5">下一步</el-button>
    </el-row>
  </div>
</template>
<script>
import Addresslist from "../components/PayAddresslist.vue";
import CartHead from "../components/payhead.vue";
import Submission from "../components/submission.vue";
export default {
  data() {
    return {
      active: 0,
      checkedGoods1: [],
      goods:[],
      show1: true,
      show2: false,
      show3: false,
      show4: true,
      show5: true
    };
  },
  components: {
    Addresslist,
    CartHead,
    Submission
  },
  methods: {
    onSubmit(data) {
      this.active = data;
    },
    back() {
      if (this.active == 0) {
        this.active = 0;
        // this.show1 = true;
        // this.show2 = false;
        // this.show3 = false;
        // this.show4 = true;
        // this.show5 = true;
      } else if (this.active == 1) {
        this.active--;
        this.show1 = true;
        this.show2 = false;
        this.show3 = false;
        this.show4 = true;
        this.show5 = true;
      } else if (this.active == 2) {
        this.active--;
        this.show1 = false;
        this.show2 = true;
        this.show3 = false;
        this.show4 = true;
        this.show5 = true;
      } else if (this.active == 3) {
        this.active--;
        this.show1 = true;
        this.show2 = false;
        this.show3 = true;
        this.show4 = true;
        this.show5 = false;
      }
    },
    goon() {
      if (this.active == 0) {
        this.active++;
        this.show1 = false;
        this.show2 = true;
        this.show3 = false;
      } else if (this.active == 1) {
        this.active++;
        this.show1 = true;
        this.show2 = false;
        this.show3 = true;
        this.show4 = true;
        this.show5 = false;
      } else if (this.active == 2) {
        this.active++;
        this.show1 = false;
        this.show2 = false;
        this.show3 = false;
        this.show4 = true;
        this.show5 = false;
      } else if (this.active == 3) {
        this.active = 3;
      }
    }
  },
  mounted() {
    // var goodsidlist = this.$route.params.goodid;
    // var goods = this.$route.params.goods;
    console.log("22222222222")
    // console.log(goods)
    // window.localStorage.setItem("goods",JSON.stringify(goods))
    var goodsidlist = JSON.parse(localStorage.getItem('goodsid'));
     var goodslist = JSON.parse(localStorage.getItem('goods'));
    if (this.$route.params.active) {
      this.active = this.$route.params.active;
    }
    if (this.active == 1) {
      this.show1 = false;
      this.show2 = true;
    }
console.log("0000000000000000000");
      console.log(this.active);
    if (this.active == 3) {
      
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = true;
      this.show5 = false;
    }
    
    for (var i = 0; i < goodslist.length; i++) {
      for (var j = 0; j < goodsidlist.length; j++) {
        if (goodslist[i].goodId == goodsidlist[j]) {
          this.checkedGoods1.push(goodslist[i].goodId);
        }
      }
    }
    console.log("44444444444")
    console.log(this.checkedGoods)
    window.localStorage.setItem("goodid",JSON.stringify(this.checkedGoods1))
    var goodsidlist1 = JSON.parse(localStorage.getItem('goodid'));
    this.$axios.get("/vue/getPayGoods",{params:{array:goodsidlist1}}).then(res=>{
      console.log("88888888888")
      console.log(res.data.result)
      this.goods=res.data.result
    })
  }
};
</script>
<style lang="scss">
.steps {
  padding-top: 1rem !important;
}
.btnbox {
  text-align: right;
  padding-bottom: 1rem;
}
</style>