<template>
    <div>
        <!-- <mt-header :title="title" class="fixed">
            <mt-button icon="back" slot="left" v-if="show" @click="goback">返回</mt-button>
            <mt-button icon="search" slot="right" v-if="searchshow" @click="gosearch"></mt-button>
        </mt-header> -->

        <van-nav-bar :title="title" class="fixed">
            <van-icon name="back" slot="left" v-if="show" @click="goback">返回</van-icon>
            <van-icon name="search" slot="right" v-if="searchshow" @click="gosearch"></van-icon>
        </van-nav-bar>
    </div>
</template>

<script>
export default{
    props:{
        title:String,
        show:Boolean
    },
    data(){
        return {
            searchshow:true
        }
    },
    mounted(){
        this.searchshow=this.$route.name=='search'?false:true;
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        gosearch(){
            this.$router.push({name:"search"})
        }
    }
}
</script>

<style>
    .fixed{
        z-index:2;
    }
</style>