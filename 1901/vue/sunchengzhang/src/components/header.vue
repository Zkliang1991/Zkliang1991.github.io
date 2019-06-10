<template>
	<div>
 <mt-header :title="title">

   <mt-button icon="back" slot="left"  @click="goback" v-if="show">返回</mt-button>

  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
</div>
</template>


<script>
export default {
    name:"foot",
	props:['title','show'],
    data(){
        return {
          
        }
    },
	methods:{
		goback(){
			this.$router.go(-1)
		}
	}
}
</script>


