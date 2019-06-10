<template>
	
    <div style="display: flex; flex-wrap:wrap;font-size:smaller;margin-bottom: 1rem;" >
			<router-link :to="{name:'detail',params:{id:m._id}}" v-for="(m,i) in music" style="width: 48%;margin: 1%;" class="lb">
				<div @click="goods(m._id)">
				<img :src="m.pic" alt="" style="width: 100%;height: 2rem;">
				<p style="color:black">水果<span style="font-size: smaller;"> {{m.title}}</span></p>
				<p>价格:￥<span style="color: red;font-size: large;">{{m.price}}</span></p>
				</div>
			</router-link>
		</div>
</template>

<script>
export default {
    data(){
        return {
             music:[],
			
        }
    },
		created() {
			this.$axios.get("vue/shuiguo",{params:{limit:40}}).then(res=>{
				console.log(res)
				this.music=res.data.result;
				console.log(this.music)
			})
		},
		computed:{
			
		},
		methods: {
			goods(id){
				localStorage._id=id
			}
		},
}
</script>



