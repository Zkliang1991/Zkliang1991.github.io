<template>
    <div>
        <Header title="首页" style="padding: 0;"></Header>
		<router-link :to="{name:'search'}"><van-search placeholder="请输入搜索关键词" v-model="value" /></router-link>
		<Swipe style="height: 4rem;width: 100%;"></Swipe>
		<List style="width: 100%;"></List>
    </div>
</template>

<script>
import Search from "../components/search.vue"
import Swipe from "../components/swipe.vue"
import List from "../components/list.vue"
export default {
    components:{
        Search,
		Swipe,
		List,
		
    },
	data(){
		return {
			value:"",
		}
	}
}
</script>

