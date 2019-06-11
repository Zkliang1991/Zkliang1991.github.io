<template>
<div>
    <mt-header :title="title">
        <mt-button icon="back" slot="left" @click="goback" v-if="show"></mt-button>
        <mt-button icon="search" slot="right" v-if="searchShow"   @click="goSearch" ></mt-button>
    </mt-header>
</div>
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
<style lang="scss" scoped>
    .mint-header{
        background-color: #2bd3c2;
        font-size: 20px;
    }
    
</style>
