<template>
<div>
        <Head title="购物袋" :show="true" class="head"></Head>
    <div>
      <div class="end"></div>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-swipe-cell :right-width="65" >
        <van-checkbox
            class="card-goods__item"
            v-for="(item,i) in shops"
            :key="i"
            :name="item._id"
        >
            <van-card
            :title="item.good.title"
            :num="item.count"
            :price="item.good.price"
            :thumb="item.good.imgs"
            
            
            />
        </van-checkbox>
        </van-swipe-cell>
        </van-checkbox-group>
        <van-submit-bar
        :price="totalPrice"
        :disabled="!checkedGoods.length"
        :button-text="submitBarText"
        :delete="deleteGoods"
        @submit="onSubmit"
        />
    </div>
    <div class="end">

        </div>
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
      shops:[],
      checkedGoods:[]
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },
    totalPrice() {
        // return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
      return this.shops.reduce((total, item) => total + (this.checkedGoods.indexOf(item.good._id) !== -1 ? item.good.price : 0), 0);

    }
  },
  methods: {

    onSubmit() {
      Toast('点击结算');
    },
    deleteGoods(){
        alert("删除按钮")
    }
  },
  created(){
        var allCount = 0 ;
      this.$axios.get('/vue/shopcar').then(res=>{
              this.shops = res.data.result
              console.log(this.shops)
             this.shops.forEach((item) =>{
                allCount = allCount + item.count ;
                  console.log("我是总数"+allCount)
                  if(allCount){
                      this.$store.dispatch('setAccount',allCount );
                      console.log(allCount)
                  }
              });
      }) 
     
     
  },
  mounted(){
    
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
 .end{
         width: 100%;
         height: 3rem;
       }
    .head{
      position: fixed;
      top: 0; 
      left: 0;
      width: 100%;
      z-index: 2;
    }
        .end{
      width: 100%;
      height: 3rem;
    }
  
</style>