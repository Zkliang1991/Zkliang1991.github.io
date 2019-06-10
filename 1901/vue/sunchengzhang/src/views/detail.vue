<template>
	<div class="yo">
		<Header :title="title" show="true"></Header>
		<mt-swipe style="height: 4rem;">		
		<mt-swipe-item style="height: 4rem;"><img :src="shuig.pic" alt="" style="width: 100%;height: 100%;"></mt-swipe-item>
		</mt-swipe>
		<p><span style="font-size: 0.6rem;font-style: initial;color: red;">商品：</span>{{shuig.title}}</p>
		<p style="font-size: larger; color: red;">￥{{shuig.price}}元</p>
		<p><span style="fon: larger; color: brown;">销售情况：</span>{{shuig.sold}}</p>
		<div style="float: left;height: 1rem;line-height: 1rem;color: red;font-size: larger;">数量：</div>
		<van-stepper v-model="value" style="float: left;height: 1rem;line-height: 1rem;"/>
		<spdh style="bottom: 1rem;" :value='value' :shuig="shuig"></spdh>
		<Foot></Foot>
	</div>
</template>

<script>
	import Input from "../components/input.vue"
	import Foot from "../components/demo.vue"
	import Spdh from "../components/spdh.vue"
	export default {
		components: {
			Input,
			Foot,
			Spdh
		},
		name:"detail",
		data(){
			return {
				title:'',
				shuig:[],
				value:1
			}
		},
		created(){
			this.$axios.get("vue/xq",{params:{id:this.$router.app._route.params.id?this.$router.app._route.params.id:localStorage._id}}).then(res=>{
				console.log(res)
				this.shuig=res.data.result;
				console.log(this.shuig.title)
			})
		},
		
	}
</script>

<style>
</style>
