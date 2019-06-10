<template>
    <div v-if="flag" id="size">
        <Head title="商品分类" :show="true"></Head>   
        <mt-navbar v-model="selected" >
		<mt-tab-item :id="type.value" v-for="(type,i) in fenlie_type" :key="i">{{type.text}}</mt-tab-item>
	</mt-navbar>
	<mt-tab-container v-model="selected">
		<mt-tab-container-item  :id="item.value" v-for="(item,i) in fenlie_type" :key="i">
			<Seet :goods="big_goods.filter((it)=>it.type.value==item.value)"></Seet>
		</mt-tab-container-item>
		</mt-tab-container>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				fenlie_type:[],
				big_goods:[],
				selected:"acc",
				flag:false
			}
		},
		created(){
			this.$axios.get("/vue/fenlie")
			.then(res=>{
				this.fenlie_type=res.data.result;
			})
			this.$axios.get("/vue/goods")
			.then(res=>{
				this.big_goods=res.data.result;
				this.flag=true
			})
		}
	}
</script>
<style scoped>

</style>