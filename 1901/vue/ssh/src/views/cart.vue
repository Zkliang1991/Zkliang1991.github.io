<template>
  <div>
      <Head title="购物车" back="返回" show="true"></Head>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="(item,i) in goods" 
        :key="item.good._id"
        :name="item.good._id"
      >
       <van-swipe-cell :right-width="60">
        <van-card
          :title="item.good.title"
          :desc="item.good.type"
          :num="item.count"
          :price="item.good.price"
          :thumb="item.good.thumBnail"
        >
        </van-card>
        
        <van-button
            square
            slot="right"
            type="danger"
            text="删除"
            @click="deleteOne(item.good._id,item.username,goods,i)"
            class="del"
          />
           </van-swipe-cell>
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
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';
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
      goods:[],
      checked: true,
      isLoading: false,
      
    };
  },
   mounted() {
    var userInfo = window.sessionStorage.userInfo;
    console.log(userInfo);
    if (userInfo) {
      
    }else{
      Toast.fail({message:'还没有登录请登录',duration:1000});
      this.$router.push({name:'login'})
    }
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },
    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.good._id) !== -1 ? item.good.price*100*item.count : 0), 0);
    }
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      Toast('点击结算');
    },deleteOne(goodId, username, goods, index) {
      var mymessage = confirm("你真的要删除吗");
      if (mymessage == true) {
        this.$axios
          .get("/vue/deleteOne", {
            params: {
             goodId,
              username
            }
          })
          .then(res => {
            console.log(res.data.type);
            if (res.data.type == 1) {
              this.goods.splice(index, 1);
              this.checkedGoods.splice(index,1)
            }
            console.log(res.data.type);
          });
      } else {

      }
    }
  },created(){
        this.$axios.get("/vue/mycart",{
        }).then(res=>{
                console.log(res);
                    this.goods = res.data.result;
                    
            })
            
            
    },
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
.del {
  height: 100% !important;
}
</style>