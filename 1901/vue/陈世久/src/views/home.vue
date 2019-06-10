<template>
    <div>
        <Head title="首页"></Head> 
		<van-notice-bar
		text="全新鲸鲨品牌男装西服 配饰  西服套装 领带进行销售欢迎广大客户进行选购,买一件西服送您老公,他会买钻石送给你"
		
		left-icon="bullhorn-o"
		/>
		  <Swipe
        id="goods"
        :options="{loop:true,autoplay:true}"
        >
	
            <div class="swiper-slide slide" v-for="(lun,i) in lunbo" :key="i" style="width: 100%;overflow: hidden">
                <img :src="lun.img" alt="" class="swiper-img" >
            </div>
        </Swipe>
		<List style="overflow: hidden"></List>
    </div>
	
</template>  

<script>
import List from "../components/list.vue" ;
import Foot from "@/components/foot.vue";
export default {
  data() {
  	return {
  		lunbo:[],
  	}
  },
  components: {
  	List
  },
  created(){
	  this.$axios.get("/vue/goods",{
		  params:{
			  limit:5
		  }
	  }).then(res=>{
		  this.lunbo=res.data.result;
	  })
  } 
}
</script>

<style scoped>
	.slide,  .swiper-img{
    width:100%;
    height:4rem;
}
#goods{
	margin-bottom:40px;
	
}
</style>