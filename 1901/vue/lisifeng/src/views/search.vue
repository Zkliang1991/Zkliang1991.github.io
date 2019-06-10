<template>
    <div>
        <Head title="搜索" :show="true" back="返回"></Head>
        <van-search placeholder="请输入搜索关键词" v-model.Lazy="value" shape="round" show-action></van-search>
        <List :goods="goods"></List>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value:"",
            goods:[]
        }
    },
    watch:{
        value(newVal){
            console.log(newVal)
            this.$axios.get("/vue/getGoodList",{
                params:{
                    keyword:newVal
                }
            }).then(res=>{
                this.goods = res.data.result
            })
        }
    }
}
</script>