<template>
		<router-link :to="{name:'xiangqing',params:{goodId:good._id},query:{title:good.title}}">
			<img :src="good.img" alt="">
			<p style="color: #B8860B; font-size: 18px;">{{good.title}}</p>
			<p style="color: #C6E746;" class="price">单价:{{good.price}}元</p>
		</router-link>
	
</template>
<script>
	export default {
		props: {
			good:Object
		},
	}
</script>
<style scoped>
	.item{
		width: 100%;
		margin-bottom: 20px;
	}
	.item img{
		width: 100%;
		height: 5rem;
	}
	.item .price{
		margin-left: 80px;
		font-size: 30px;
	}
</style>