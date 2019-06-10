<template>
 <!-- <mt-header :title="title">
    <mt-button icon="back" slot="left" @click="goback" v-if="show">返回</mt-button>
    <mt-button icon="search" slot="right" v-if="searchShow" @click="goSearch"></mt-button>
</mt-header> -->
<van-nav-bar :title="title" :left-text="back" :left-arrow="show"  @click-left="goback"
  @click-right="goSearch">
  <van-icon name="search" slot="right" v-if="searchShow"/>
</van-nav-bar>
</template>

<script>
export default {
    props:{
        title:String,
        show:Boolean,
        back:String
    },
    data(){
        return{
            searchShow:true
        }
    },
    mounted() {
        console.log(this.$route)
        this.searchShow = (this.$route.name !== "search")
    },
    methods:{
        goback(){
            this.$router.go(-1)
        },
        goSearch(){
            this.$router.push({name:"search"})
        }
    }
}
</script>

<style lang="scss" scoped>
    .van-icon{
        font-size: 0.4rem;
    }
    .van-nav-bar__title{
        font-weight: 600;
    }
    .van-nav-bar{
        border-bottom: 0.05rem solid #ececec;
    }
</style>
