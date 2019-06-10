 <template>
  <div>
    <Head title="购物车" :show="true"></Head>
    <div v-if="checkLogin">
      <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox class="card-goods__item" v-for="(item,i) in goods" :key="i" :name="item">
          <van-card
            :title="item.title"
            :desc="item.name"
            :num="item.num"
            :price="formatPrice(item.price)"
            :thumb="item.img"
          >
            <div slot="footer">
              <van-button size="mini" @click="deleteOne(item.movieId,item.username,goods,i)">删除</van-button>
            </div>
          </van-card>
        </van-checkbox>
      </van-checkbox-group>
      <van-submit-bar
        class="buy"
        :price="totalPrice"
        :disabled="!checkedGoods.length"
        :button-text="submitBarText"
        @submit="onSubmit"
      />
    </div>
    <div v-else>
      <p class="nologin"> 购物车空空如也，先去逛逛</p>
    </div>
  </div>
</template> 
<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast , Dialog} from "vant";
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
      address: false,
      chosenAddressId: "1"
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      console.log(this.goods);
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
      Toast("结算");
      this.$router.push({name:"account"})
    },
    deleteOne(movieId, username, goods, index) {
      // var mymessage = confirm("你真的要删除吗");
      Dialog.confirm({
        message: "你确定要删除吗"
      })
        .then(() => {
         
            this.$axios.get("vue/deleteOne",{
              params:{
                movieId,
                username
              }
            }).then(res=>{
              if(res.data.type == 1){
                this.goods.splice(index,1);
              }
            })
          
        })
        .catch(() => {
          
        });
    //   if (mymessage == true) {
    //     this.$axios
    //       .get("/vue/deleteOne", {
    //         params: {
    //           movieId,
    //           username
    //         }
    //       })
    //       .then(res => {
    //         console.log(res.data.type);
    //         if (res.data.type == 1) {
    //           this.goods.splice(index, 1);
    //         }
    //       });
    //   } else {
    //   }
    // }
  },
  },
  created() {
    if (window.sessionStorage.username) {
      this.$axios
        .get("/vue/cartList", {
          params: {
            username: window.sessionStorage.username
          }
        })
        .then(res => {
          this.goods = res.data.result;
        });
      this.checkLogin = true;
    } else {
      this.checkLogin = false;
    }
  },
  mounted() {}
};
</script>


<style lang="less">
.card-goods {
  padding: 10px 0;
  &__item {
    position: relative;
    background-color: #fafafa;
    margin-top: 10px;
    .van-checkbox__label {
      width: 100%;
      height: auto;
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
      font-size: 24px;
      margin-top: 8px;
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
  font-size: 0.34rem;
  line-height: 5rem;
  color:red;
}
.buy {
  margin-bottom: 45px !important;
}
</style>