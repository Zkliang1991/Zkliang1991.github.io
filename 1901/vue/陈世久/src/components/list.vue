<template>
		
	<div style="display: flex; flex-wrap:wrap;font-size:18px;margin-bottom: 0.5rem;justify-content:center;width: 100%;height: 100%;">
		<h2 style="width: 100%;height: 40px;font-size: 35px;">热卖商品</h2>
		<div class="homeDo" v-for="(n,i) in list" :key="i" style="width:35%;margin: 0.5rem;height:6rem;justify-content:center;align-items:center;">
			<router-link :to="{name:'xiangqing',params:{goodId:n._id},query:{title:n.title}}">
			<img  :src="n.img" alt="">
			<p style="text-align: center;">商品:{{n.title}}</p>
			<span style="color: #669900;">价格:{{n.price}}</span>
			</router-link>
		</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				allLoaded:false
			}
		},
		created(){
			this.$axios.get("/vue/goods",{
				params:{
					skip:5,
					limit:20
				}
			}).then(res=>{
				this.list=res.data.result
			})
		},
		methods: {
		
		},
	}
</script>

<style scoped>
	
</style>
