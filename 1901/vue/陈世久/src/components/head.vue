
<template>
    <mt-header :title="title"id="temr">
        <mt-button icon="back" slot="left" @click="goback" v-if="show">返回</mt-button>
        <mt-button icon="search" slot="right" v-if="searchShow"   @click="goSearch" ></mt-button>
    </mt-header>
</template>

<script>
export default {
    props:{
        title:String,
        show:Boolean
    },
    data(){
        return {
            searchShow:true
        }
    },
    mounted(){
        this.searchShow = this.$route.name == 'search' ? false : true; 
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        goSearch(){
            this.$router.push({name:'search'})
        }
    }
}
</script>
<style scoped>
	#temr{
		width: 100%;
		font-size:18px;
		background-color: rosybrown;
	}
</style>