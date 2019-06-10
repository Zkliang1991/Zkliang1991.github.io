<template>
  <div id="mou" class="go">
	  <Head title="购物车" :show="true"></Head>
	  <van-popup v-model="flag" position="top"><Adress></Adress></van-popup>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.good._id"
        :name="item.good._id"
      >
        <van-card
          :title="item.good.title"
          :num="item.count"
          :price="item.good.price"
          :thumb="item.good.img"
        />
      </van-checkbox>
    </van-checkbox-group>
	
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    style="bottom:65px;"/>
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
      goods: [],
	  checked:true,
	isLoading: false,
	flag:false

    };
  },
  created(){
			this.$axios.get("/vue/mycart",{
				params:{
					username:window.sessionStorage.userInfo.value
				}
			}).then(res=>{
				this.goods=res.data.result
				
			})
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
    onSubmit() {
      Toast('点击结算');
	 this.flag=true
    }
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
#mou{
	img{
		width: 100px;
		height: 200px;
	}
	
}
html,body{
	position: relative;
}
#ko{
	position: absolute;
	right: 0;
	bottom: 200px;
}
.van-submit-bar__text{
	width: 120px;
}
.van-button van-button--danger van-button--large van-button--square{
	
}
span{
	width:80px;
}
</style>