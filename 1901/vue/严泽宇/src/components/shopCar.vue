<template>
  <div>
    <div v-if="showcar">
      <div v-for="(item,index) in shops" :key="index" class="bigbox">
        <van-checkbox-group class="card-goods" v-model="checkedGoods">
          <van-checkbox class="card-goods__item" :key="item._id" :name="item._id"></van-checkbox>
        </van-checkbox-group>
        <van-card
          v-if="item.good"
          :title="item.good.name"
          :desc="'尺码:'+item.shopsize"
          :num="item.count"
          :price="formatPrice(item.good.price)"
          :thumb="item.good.img"
        />
        <van-button size="mini" class="iconfont" @click="delshop(index,item._id)">&#xe679;</van-button>
      </div>
    </div>
    <div class="koncar" v-if="!showcar">
      <img src="../assets/images/shopcar.jpg" alt>
      <h3>购物车空空如也...</h3>
    </div>
    <van-submit-bar :price="totalPrice * 100" :disabled="!checkedGoods.length" button-text="结算"></van-submit-bar>

    <Foot></Foot>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      checkedGoods: [],
      shops: [{}],
      showcar: false
    };
  },
  computed: {
    totalPrice() {
      return this.shops.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item._id) !== -1
            ? item.good.price * item.count
            : 0),
        0
      );
    }
  },
  methods: {
    formatPrice(price) {
      return price.toFixed(2);
    },
    delshop(index, id) {
      Dialog.confirm({
        title: "是否要将宝贝删除"
      })
        .then(() => {
          this.shops.splice(index, 1);
          this.$axios.get("/vue/delshop", { params: { _id: id } }).then(res => {
            console.log(res);
            window.location.reload();
          });
        })
        .catch(() => {});
    }
  },
  mounted() {
    this.$axios.get("/vue/shopcar").then(res => {
      var resultArr = res.data.result;
      this.shops = resultArr;
      // var newArr = [];
      // for (var i = 0; i < resultArr.length; i++) {
      //   newArr.push(i);
      // }
      // this.checkedGoods = newArr;
      console.log(this.shops);
    });
  },
  updated() {
    if (this.shops.length <= 0) {
      console.log(this.shops.length);
      this.showcar = false;
    } else {
      this.showcar = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.koncar img {
  width: 50%;
  margin: 40px auto;
}
.koncar h3 {
  width: 65%;
  font-family: "楷体";
  font-size: 24px;
  color: rgb(248, 126, 126);
  margin: auto;
  text-align: center;
}
.spaceBox {
  height: 50px;
}
.bigbox {
  position: relative;
  background-color: #fafafa;
}
.iconfont {
  position: absolute;
  top: 40%;
  right: 5%;
  background-color: #fafafa;
  border: 0;
}
.van-card {
  padding: 10px 10%;
}
.van-card__title {
  width: 80%;
}
.van-card__desc {
  margin: 10px 0;
}
.van-checkbox-group {
  position: absolute;
  top: 30%;
  left: 0;
  z-index: 1;
  background-color: #eee;
}
.card-goods {
  padding: 10px 0;
  background-color: #fafafa;

  .van-button {
    min-width: 30px;
  }
  .van-checkbox {
    padding-left: 10px;
  }
  .van-card__num {
    margin-right: 10%;
  }

  .van-checkbox__icon--round {
    position: absolute;
    top: 40%;
    right: 4%;
  }
}
.van-submit-bar {
  position: fixed;
  bottom: 50px;
  left: 0;
  background-color: #fafafa;
}
</style>