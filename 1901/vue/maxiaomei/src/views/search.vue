<template>
    <div>
        <Head title="搜索" :show="true" ></Head>
        <mt-search v-model.lazy="value" id="res">
        </mt-search>
         <seet :goods="goods" @changegoods="getGood"></seet>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				value:"",
				goods:[]
			}
		},
		methods: {
			getGood(data) {
				this.goods=data
			}
		},
		watch: {
			value(newValue) {
				this.$axios.get("/vue/goods",{
					params:{
						keyWord:newValue
					}
				}).then(res=>{
					this.goods=res.data.result
				})
			}
		},
	}
</script>
<style scoped>
	#res{
		width: 100%;
		height: 70px;
	}
</style>
