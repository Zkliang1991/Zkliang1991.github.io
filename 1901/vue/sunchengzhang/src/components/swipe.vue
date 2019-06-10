<template>
	
		<mt-swipe :auto="4000" :show-indicators="false" style="animation: bounceInRight 1s;">
	<mt-swipe-item v-for="(m,i) in movie" :key="i"><img :src="m.pic" alt="" style="width: 100%;height:100%"></mt-swipe-item>
	
		</mt-swipe>
	
</template>

<script>
	export default{
		data() {
			return {
				movie: []
			}
		},
		created() {
			this.$axios.get("vue/shuiguo",{params:{limit:5}}).then(res=>{
				
				this.movie=res.data.result;
				console.log(this.movie)
			})
		}
	}
</script>

<style>
</style>
