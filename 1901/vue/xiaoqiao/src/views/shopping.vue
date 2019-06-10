<template>
  <div>
    <Head></Head>
    <div class="context">
      <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox class="card-goods__item" v-for="(item,i) in ngoods.goods" :key="i" :name="item">
          <van-card
            :title="item.goodtitle"
            :desc="item.desc"
            :num="item.goodNum"
            :price="item.goodPrice"
            :thumb="item.goodImg"
          >
            <div slot="footer">
              <van-button size="mini" @click="deleteOne(item._id,i)">删除</van-button>
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
  </div>
</template> 

<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
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
    };
  },
  computed: {
    ...mapState([
        "nLogin",
        "ngoods",
        "nHui"
    ]),
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      console.log(this.goods);
      return this.ngoods.goods.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item) !== -1
            ? item.goodPrice * item.goodNum * 100
            : 0),0
      );
    }
  },
  methods: {
    ...mapActions([
        "getUserSite"
    ]),
    formatPrice(price) {
      return ((price / 100) * 100).toFixed(2);
    },
    onSubmit() {
      // Toast("点击结算");
      this.getUserSite({url:"/vue/SelUserSite",params:this.nLogin.username});
      this.$router.push({name:"site"});
    },
    deleteOne(val,index) {
      // console.log(val,);
      // var mymessage = confirm("你真的要删除吗");
      // if (mymessage == true) {
        this.$axios
          .get("/vue/deleteOne", {
            params: {
               gid:val
            }
          })
          .then(res => {
            // console.log(res.data.type);
              // if (res.data.type == 1) {
                  this.ngoods.goods.splice(index, 1);
              // }
          });
      // } else {
      //   document.write("取消");
      // }
    }
  },
  created() {

  },
  mounted() {
      if(this.nLogin.username!=""){
          this.$store.state.nTitle.title = "购物车"; 
          this.$store.state.nActive.active=2;
          this.$axios.get("/vue/setGood",{
              params:{
                  gname:this.nLogin.username
              }
          }).then(res=>{
              this.ngoods.goods=res.data.result;
              // console.log(this.ngoods.goods.length);
          })
      }else{
          this.$router.push({name:"login"});
      }
  }
};
</script>


<style lang="less">
.context{
      margin-top:9%;
    }
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
.nologin{
  text-align: center;
  font-size: .34rem;
  line-height: 5rem;
  color: #aaa;
}
.van-submit-bar__bar{
  width: 100%;
  position: absolute;
  bottom: 50px;
}
</style>