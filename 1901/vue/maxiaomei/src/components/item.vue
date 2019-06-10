<template>
		<div >
			<img :src="good.img" alt="" @click="nextdetail(good._id,good.img,good.price,good.name)">
			<p style="color: #B8860B; font-size: 18px;">{{good.name}}</p>
			<p style="color: #C6E746;" class="price">单价:{{good.price}}元</p>
		</div>
	
</template>
<script>
	export default {
		props: {
			good:Object
		},
		methods:{
			nextdetail(id,img,price,name){
				alert("11");
				 this.$router.push({name:"goodsdetail"});
				  window.sessionStorage.goodsinformation = JSON.stringify({id:id,img:img,price:price,title:name});
			}
		}
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
