<template>
	<mt-loadmore :top-method="loadTop"  :bottom-all-loaded="allLoaded" ref="loadmore">
		<ul style="width: 100%;">
			<li v-for="(good,i) in goods" :key="i" class="item move"style="width: 100%;">
				<Item :good="good"></Item>
			</li>
		</ul>
		</mt-loadmore >
</template>

<script>
import {Toast} from "mint-ui";
import { Loadmore } from 'mint-ui';
import Item from "./item.vue";
	export default {
		name:"seet",
		data(){
        return {
            allLoaded:false ,  
        }
    },
		props: {
			goods: {
				type:Array,
				required:true,
			},
		},
		components: {
			Item
		},
		methods: {
			loadTop() {
				setTimeout(()=>{
					var goods=this.goods.reverse();
					 this.$emit("changegoods",goods);
					 this.$refs.loadmore.onTopLoaded();
                Toast({
                    message:"下拉刷新-成功",
                    duration:500
                })
				},1000)
			}
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

