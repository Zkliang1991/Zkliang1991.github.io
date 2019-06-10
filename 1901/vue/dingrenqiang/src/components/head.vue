<template>
  <mt-header fixed  :title="title">
      <mt-button icon="back" slot="left" @click="goback" v-if="show">返回</mt-button>
      <mt-button icon="search" slot="right" v-if="searchShow" @click="goSearch" class="dong"></mt-button>
  </mt-header>
</template>

<script>
export default {
    props:{
        title:String,
        show:Boolean
    },
    data() {
        return {
            searchShow:true
        }
    },
    mounted() {
        this.searchShow= this.$route.name=='classify' ? true : false;
    },
    methods: {
        goback(){
            this.$router.go(-1);
        },
        goSearch(){
            this.$router.push({name:"search"})
        }
    },
}
</script>

<style scoped>
    .mint-header{
        background: #ff8e26;
    }
</style>
