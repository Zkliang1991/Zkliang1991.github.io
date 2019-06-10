
<template>
  <div>
    <Head title="购物车"></Head>
    <div class="show" v-if="show">
      <h2>
        购物车还没有商品,请前往
        <router-link :to="{name:'search'}">添加商品</router-link>
      </h2>
    </div>
    <div class="card-goods">
      <van-panel v-for="(item,i) in goods" :key="i" :id="item._id">
        <van-card
          tag="优惠"
          :title="item.title"
          :desc="item.grayB"
          :num="item.count"
          :price="formatPrice(item.price)"
          :thumb="item.img"
          :origin-price="100.00"
          class="card"
        />
        <ul slot="footer" class="foot">
          <li class="checkbox">
            <van-checkbox v-model="checked[i]" checked-color="red" @click="isChecked(i)"></van-checkbox>
          </li>
          <li class="stepper">
            <van-stepper
              v-model="item.count"
              disable-input
              integer
              :min="1"
              :max="40"
              :step="1"
              @plus="add(i)"
              @minus="reduce(i)"
            />
          </li>
          <li class="button">
            <van-button size="small" type="info" @click="gotodetail(i)">详情</van-button>
          </li>
          <li class="button">
            <van-button size="small" type="danger" @click="deleteGood(i)">删除</van-button>
          </li>
        </ul>
      </van-panel>
    </div>

    <van-submit-bar class="bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit()">
      <span>
        已选择
        <span style="color:red">{{num}}</span>件商品
      </span>
      <span slot="tip">
        你的收货地址不支持同城送,
        <span style="color:blue">
          <router-link :to="{name:'addresslist'}">修改地址</router-link>
        </span>
      </span>
    </van-submit-bar>
  </div>
</template>

<script>
import { Dialog, Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
export default {
  data() {
    return {
      show: false,
      goods: [],
      checked: [],
      value: 1,
      num: 0,
      totalPrice: 0
    };
  },
  computed: {},
  methods: {
    formatPrice(price) {
      return (price * 1).toFixed(2);
    },
    onSubmit() {
      if (this.totalPrice) {
        //得到 提交商品的所有数据
        this.$axios
          .get("/vue/getshopcar", {
            params: { username: this.$store.state.username, flag: 1 }
          })
          .then(res => {
            //将得到的数据 插入到 结算表中
            this.$axios
              .post("/vue/addpayment", res.data.result)
              .then(res => {});

            console.log(res.data.result);

            // 删除购物车 已经提交的商品
            this.$axios.get("/vue/deleteFlag").then(res => {});

            this.$router.push({
              name: "payment",
              params: { result: res.data.result, totalPrice: this.totalPrice }
            });
          });

        Toast("订单提交成功");
        this.totalPrice = 0;
      } else {
        Toast("请选择商品");
      }
    },
    isChecked(i) {
      console.log(i);
      console.log(this.checked[i]);
      if (this.checked[i]) {
        this.num--;
        this.totalPrice -= this.goods[i].count * this.goods[i].price * 1;
        this.$axios
          .get("/vue/updateGood", {
            params: { id: this.goods[i]._id, flag: 0 }
          })
          .then(res => {});
        console.log(this.goods[i].flag);
      } else {
        this.num++;
        this.totalPrice += this.goods[i].count * this.goods[i].price * 100;
        this.$axios
          .get("/vue/updateGood", {
            params: { id: this.goods[i]._id, flag: 1 }
          })
          .then(res => {});
        console.log(this.goods[i].flag);
      }
    },
    add(i) {
      console.log(i);
      console.log(this.goods[i]);
      console.log(this.goods[i].count);
      this.$axios
        .get("/vue/updateGood", {
          params: { id: this.goods[i]._id, count: this.goods[i].count + 1 }
        })
        .then(res => {});
      if (this.checked[i]) {
        this.totalPrice += this.goods[i].price * 1 * 100;
      }
    },
    reduce(i) {
      this.$axios
        .get("/vue/updateGood", {
          params: { id: this.goods[i]._id, count: this.goods[i].count - 1 }
        })
        .then(res => {});
      if (this.checked[i]) {
        this.totalPrice -= this.goods[i].price * 1 * 100;
      }
    },

    deleteGood(i) {
      Dialog.confirm({
        message: "确定要删除该商品吗?"
      })
        .then(res => {
          console.log(i);
          console.log(this.goods[i]);
          this.$axios
            .get("/vue/deleteGood", {
              params: { id: this.goods[i]._id }
            })
            .then(res => {
              location.reload();
            });
        })
        .catch(() => {});
    },
    gotodetail(i) {
      console.log(i);
      console.log(this.goods[i]);
      console.log(this.goods[i].gID);
      this.$router.push({
        name: "gooddetail",
        params: { id: this.goods[i].gID }
      });
    }
  },
  mounted() {
    this.$axios
      .get("/vue/getshopcar/", {
        params: { username: this.$store.state.username }
      })
      .then(res => {
        if (res.data.result.length != 0) {
          this.goods = res.data.result;
          this.$store.state.carNum = this.goods.length;
          console.log(this.goods);
        } else {
          this.show = true;
        }
      });
  }
};
</script>

<style lang="scss" scoped>
.show {
  width: 100%;
  height: 5rem;
  line-height: 3rem;
  margin-top: 15px;
  padding: 10px 0;
  padding-bottom: 300px;
  background-color: #fff;
}
.card-goods {
  width: 100%;
  margin-top: 15px;
  padding: 10px 0;
  padding-bottom: 300px;
  background-color: #fff;
  text-align: left;
}
.bar {
  position: fixed;
  bottom: 45px;
  left: 0;
  right: 0;
}
.foot {
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  .checkbox {
    width: 10%;
    float: left;
    text-align: center;
    margin-left: 20px;
    margin-top: 5px;
  }
  .stepper {
    width: 40%;
    float: left;
    text-align: center;
  }
  .button {
    width: 20%;
    float: left;
    text-align: center;
  }
}
</style>