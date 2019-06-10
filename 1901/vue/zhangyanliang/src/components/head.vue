<template>
    <div>
        <van-nav-bar :title="title">
            <van-icon name="arrow-left"  slot="left" v-if="show" @click="goback">返回</van-icon>
            <van-icon name="search" slot="right" @click="goSearch" />
        </van-nav-bar>
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        show:Boolean
      
    },
    methods:{
        goSearch(){
            this.$router.push({name:'search'})
        },
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.van-ellipsis{
    color: #4aaff3;
}
.van-icon-search{
    font-size: 20px;
}
</style>


