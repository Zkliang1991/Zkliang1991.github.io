

<template>
  <mt-header :title="title" class="head" >
    <mt-button icon="back" slot="left" @click="goback" v-if="show">返回</mt-button>
    <!-- <mt-button icon="search" slot="right" v-if="searchShow" @click="goSearch"></mt-button> -->
  </mt-header>
</template>

<script>
export default {
    props:{
        title:String,
        show:Boolean,
       
    },
    data(){
        return{
             searchShow:true,
        }
    },mounted(){
        this.searchShow = this.$route.name == 'search'? false:true;
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        goSearch(){
            this.$router.push({name:'search'});
        }
    }
};
</script>

<style>
.head{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background-color:red;
    z-index: 10000;
}
</style>
