
<template>
	<div>
	<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
	<van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
	</van-dropdown-menu>
	<router-link :to="{name:'detail',params:{id:m._id}}" v-for="(m,i) in shuig" style="width: 98%;display: block ;border: #0086B3 solid 1px; animation: bounceIn 1s;" v-lazy="m.pic" >
		<van-card
  
  :price="m.price"
  :desc="m.sold"  
  :title="m.title"
  :thumb="m.pic"
/>
	</router-link>
	</van-pull-refresh>
</div>
</template>

<script>

	export default {
  data() {
    return {
	isLoading: false,
	shuig:[],
	value1: 0,
	value2: 'a',
	option1: [
        { text: '全部商品', value: 0 },
        { text: '榴莲', value: 1 },
        { text: '火龙果', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '价格升序', value: 'b' },
        { text: '价格降序', value: 'c' },
      ]
    }
  },
  methods: {
  	onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
	goods(id){
		localStorage._id=id
	},
  },
	watch:{
		value1(v){
			if(v==0){this.$axios.get("vue/shuiguo",{params:{limit:40}}).then(res=>{
		
			this.shuig=res.data.result;
			
		})}else{
			this.$axios.get("vue/fl",{params:{rex:this.option1[v].text,price:this.value2=="c"?-1:1}}).then(res=>{
			
				this.shuig=res.data.result;
				console.log(this.shuig);
				
				
			})};
			this.value2="a";
			console.log(this.value2);
		},
		value2(v){
			if(v=='b'){this.$axios.get("vue/fl",{params:{rex:this.option1[this.value1].text,price:1}}).then(res=>{
		
			this.shuig=res.data.result;
			
		})};
			if(v=='c'){this.$axios.get("vue/fl",{params:{rex:this.option1[this.value1].text,price:-1}}).then(res=>{
			
				this.shuig=res.data.result;
				
			})};
		},
		
	},
	created() {
		this.$axios.get("vue/shuiguo",{params:{limit:40}}).then(res=>{
		
			this.shuig=res.data.result;
			
		})
		console.log(this.value1)
	},
	destroyed() {
		
		
	}
};
</script>

<style>
</style>
