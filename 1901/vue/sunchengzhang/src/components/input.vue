<template>
  <div>
		<van-popup v-model="show" position="bottom" :overlay="true">
		<Adress></Adress>
		</van-popup>
		<van-popup v-model="show1" position="bottom" :overlay="true">
		<Addadress></Addadress>
		</van-popup>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.good._id"
        :name="item.good._id"
				style="animation: bounceIn 1s;"			
      >
        <van-card
          :title="item.good.title"
         
          :num="item.count"
          :price="formatPrice(item.good.price)"
          :thumb="item.good.pic"
        />
      </van-checkbox>
    </van-checkbox-group>		
    <van-submit-bar style="bottom: 0.92rem;"
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    ><van-checkbox v-model="checked">全选</van-checkbox></van-submit-bar>
		</van-pull-refresh>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';
import Adress from "./adress.vue";
import Addadress from "./addadress.vue"
export default {
	created(){
		if(localStorage.username){
			this.$axios.get("vue/mycart",{params:{username:localStorage.username}}).then(res=>{
				console.log(res)
				this.goods=res.data.result;				
				console.log(this.goods)
			});}
			// this.$axios.get("mycart1",{params:{username:'uu1'}}).then(res=>{
			// 	console.log(res)
			// 	this.checkedGoods=res.data.result;				
			// 	console.log(this.checkedGoods)
			// });
	},
  components: {
		Adress,
		Addadress,
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
			show:false,
			show1:false,
      checkedGoods: [],
      goods: [],
			checked:true,
			isLoading: false,
    };
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
      return (price / 100*100).toFixed(2);
    },
    onSubmit() {
      Toast('点击结算');
			this.show=true;
    },
		onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
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
</style>
