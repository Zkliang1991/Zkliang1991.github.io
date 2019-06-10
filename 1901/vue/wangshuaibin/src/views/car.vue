
<template>
  <div>
    <mt-header title="购物车" style="backgroundColor:red;height:.8rem"></mt-header>
    <div v-if="checkLogin">
      <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox class="card-goods__item" v-for="(item,i) in goods" :key="i" :name="item">
          <van-card
            tag="特价"
            :title="item.title"
            :desc="item.desc"
            :num="item.num"
            :price="formatPrice(item.price)"
            :thumb="item.img"
            origin-price="888.00"
          >
            <div slot="footer">
              <van-button size="mini" @click="deleteOne(item.goodId,item.username,goods,i)">删除</van-button>
            </div>
          </van-card>
        </van-checkbox>
      </van-checkbox-group>
      <van-submit-bar
        style="bottom: 1rem !important"
        :price="totalPrice"
        :disabled="!checkedGoods.length"
        :button-text="submitBarText"
        @submit="onSubmit"
      />
     
    </div>
    <div v-else class="nologin">您还没有登录,等登录后查看购物车</div>
    <div v-if="checkcar" class="nologin">购物车里空空如也...</div>
  </div>
</template> 

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
import { mapState, mapActions, mapGetters } from "vuex";
import { Dialog } from 'vant';
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      value: 1,
      checkedGoods: [],
      goods: [],
      checkLogin: false,
      checkcar:false
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      // console.log(this.goods);
      return this.goods.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item) !== -1
            ? item.price * item.num * 100
            : 0),
        0
      );
    }
  },
  methods: {
    formatPrice(price) {
      return ((price / 100) * 100).toFixed(2);
    },
    onSubmit() {
      // Toast("点击结算");
      var  goods = this.checkedGoods;

      this.$router.push({name:"buy",params:{goods:goods,totalPrice:this.totalPrice}})
    },
    

    deleteOne(goodId, username, goods, index) {
      Dialog.confirm({
        message: "是否删除这件商品"
      })
        .then(() => {
          this.$axios
          .get("/vue/deleteOne", {
            params: {
              goodId,
              username
            }
          })
          .then(res => {
            // console.log(res.data.type);
            if (res.data.type == 1) {
              this.goods.splice(index, 1);
              Toast(res.data.msg);
            }
          });
        })
        .catch(() => {
          // on cancel
        });
      
    }
  },
  created() {
    if (window.sessionStorage.username) {
      this.$axios
        .get("/vue/mycar", {
          params: {
            username: window.sessionStorage.username
          }
        })
        .then(res => {
          if(res.data.result.length>0){
            this.checkcar = false
             this.goods = res.data.result;
          }else{
            this.checkcar = true
          }
        });
      
      this.checkLogin = true;
    } else {
      this.checkLogin = false;
    }
  },
  mounted() {
    // this.goods = this.shoppinginfo;
    // console.log(123333);
    // console.log(this.goods);
  }
};
</script>


<style lang="less">
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
#mou {
  img {
    width: 100px;
    height: 200px;
  }
}
html,
body {
  position: relative;
}
#ko {
  position: absolute;
  right: 0;
  bottom: 200px;
}
.van-submit-bar__text {
  width: 120px;
}
.van-checkbox__icon--checked .van-icon-success {
  color: #fff;
  border-color: #f44 !important;
  background-color: #f44 !important;
}
.nologin {
  text-align: center;
  line-height: 3rem;
  color: #aaa;
}
</style>