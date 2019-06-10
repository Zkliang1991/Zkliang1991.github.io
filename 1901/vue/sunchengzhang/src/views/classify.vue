<template>
    <div> 
		<Header title="分类列表" show="true"></Header>
        <fl ></fl>
		
    </div>
</template>
<script type="text/javascript">
	import Fl from "@/components/fl.vue"
	export default {
    components:{
        Fl,
		
    },
	data(){
		return {
			flag:true,
			name:this.$route.name
		}
	},
	watch:{
		name(v){
			
		}
	},
	computed:{
		
	},
	beforeMount(){
		
	}
}

</script>