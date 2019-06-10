<template>
    <div>
		<Header title="购物车" show="true"></Header>       
		<Cart style="margin-bottom: 1.5rem;"></Cart>		
    </div>
</template>
<script>
	import Cart from "../components/input.vue"
	import store from "@/store";
	export default {
		components:{
		    Cart
		},
		data(){
			return {
				
			}
		},
		methods: {
			
		},
	}
</script>