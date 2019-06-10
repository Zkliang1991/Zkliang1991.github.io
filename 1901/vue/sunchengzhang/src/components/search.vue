<template>
	<div>
		<mt-search
  v-model="value"
  cancel-text="取消"
  placeholder="搜索">
</mt-search>
<router-link :to="{name:'detail',params:{id:m._id}}" v-for="(m,i) in shuig" style="width: 98%;display: block ;border: #0086B3 solid 1px; animation: bounceIn 1s;" v-lazy="m.pic" >
		<van-card
  
  :price="m.price"
  :desc="m.sold"  
  :title="m.title"
  :thumb="m.pic"
/>
	</router-link>
</div>	
</template>

<script>
	export default{
		data(){
			return {
				value:'',
				shuig:[],
			}
		},
		watch:{
			value(v){
				this.$axios.get("vue/fl",{params:{rex:v}}).then(res=>{
				
					this.shuig=res.data.result;
					console.log(this.shuig)
					
				})
			}
		},
	}
</script>

<style>
</style>
