<template>
  <div>

    
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in nCar.goods"
        :key="item.id"
        :name="item._id"
      >
        <van-card
          :title="item.title"
          :desc="item.size"
          :num="item.count" 
          :price="formatPrice(item.price)"
          :thumb="item.img"
          :color="item.color"
        >
         <div slot="footer" class='changeNum'>
           <!-- <van-stepper v-model="value" /> -->
            <van-button size="mini" class='addNum' @click.stop='addNum(item)'>+</van-button>
            <input type="text" size="mini" v-model='item.count' class='inputChange'>
            <van-button size="mini" class='reduce' @click.stop='reduceNum'>-</van-button>
        </div>
        
        </van-card>
      </van-checkbox>
    </van-checkbox-group>
   
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
     :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
       checkedGoods:[] ,  //[id1,id2,id3]
      // goods:[]
      // goods: [
      //   {
      //     id: "1",
      //     title: "进口香蕉",
      //     desc: "约250g，2根",
      //     price: 200,
      //     num: 1,
      //     thumb:
      //       "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
      //   },
      //   {
      //     id: "2",
      //     title: "陕西蜜梨",
      //     desc: "约600g",
      //     price: 690,
      //     num: 1,
      //     thumb:
      //       "https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"
      //   },
      //   {
      //     id: "3",
      //     title: "美国伽力果",
      //     desc: "约680g/3个",
      //     price: 2680,
      //     num: 1,
      //     thumb:
      //       "https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
      //   }
      // ]
    };
  },

  methods: {
    ...mapActions(["getCarList"]),
    addNum(item) {
      var inputChange=document.getElementsByClassName('inputChange')[0];
      this.$axios.post('/vue/addCart',{
       body: {
        // '_id':item._id,
        'count':inputChange.value,
        'userid':item.userid,
        'color':item.color,
        'size:':item.size,
        'goodId':item._id
        }
   
      }).then(res=>{
         this.getCarList({
          url: "/vue/getCarList",
          params: { userid: sessionStorage.getItem("userid") }
        });
        console.log(res)
      })
    },
    reduceNum() {},
    formatPrice(price) {
      return (price / 1).toFixed(2);
    },
    onSubmit() {
      Toast("点击结算");
    }
  },
  created() {
    this.getCarList({
      url: "/vue/getCarList",
      params: { userid: sessionStorage.getItem("userid") }
    });
    //  console.log(this.nCar);
  },
  updated(){
  
  },
  mounted() {
    var arr = [];
    if (this.nCar.goods.length > 0) {
      this.nCar.goods.map((item, index) => {
        for (var i in item) {
          if (i == "_id") {
            arr[arr.length] = item[i];
          }
        }
      });
    }
 //   this.$store.commit("changeChecked", arr);
  },
  computed: {
    ...mapState(["nCar"]),
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
     totalPrice() {
      console.log(this.goods);
      return this.nCar.goods.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item) !== -1
            ? item.price * item.count * 100
            : 0),
        0
      );
    },
    // totalPrice() {
    //   console.log(this.nCar.goods.length)
    //   if (this.nCar.goods.length > 0) {
    //     return this.nCar.goods.reduce(
    //       (total, item) =>
    //         total +
    //         (this.nCar.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
    //       0
    //     );
    //   }
    // }
  }
};
</script>
<style lang="scss" scoped>
.van-card__footer .van-button {
  margin-left: 0;
}
.inputChange {
  width: 0.4rem;
  background: none;
  border: none;
  text-align: center;
}
.changeNum {
  margin-left: 3rem;
}

.van-submit-bar {
  display: fixed;
  left: 0;
  bottom: 0.9rem;
}
.card-goods {
  margin-top: 1.2rem;
  padding: 10px 0;
  background-color: #fff;
  .card-goods__item {
    margin-top: 0.1rem;
  }
  &__item {
    position: relative;
    background-color: #fafafa;
    // .van-checkbox__label {
    //   width: 100%;
    //   height: auto; // temp
    //   padding: 0 10px 0 15px;
    //   box-sizing: border-box;
    // }
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
    .van-card__title {
      width: 3rem;
    }
  }
}
</style>