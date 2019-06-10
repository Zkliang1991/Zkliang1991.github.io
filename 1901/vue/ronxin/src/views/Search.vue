<template>
    <div>
        <Head title="搜索" :show="true"></Head>
        <mt-search v-model.lazy="value">
            <List :goods="goods"></List>
        </mt-search>
    
    </div>
</template>

<script>
export default{
    data(){
        return {
            value:"",
            goods:[]
        }
    },
    watch:{
        value(newVal){
            console.log(newVal);
            this.$axios.get("/vue/getGoodList",{
                params:{
                    keyword:newVal
                }
            }).then(res=>{
                this.goods=res.data.result;
            })
        }
    }
}
</script>

<style>
    
</style>
