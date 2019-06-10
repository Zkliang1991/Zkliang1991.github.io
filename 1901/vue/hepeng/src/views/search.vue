<template>
    <div>
        <Head id="search" title="搜索" :show="true" ></Head>
        <mt-search v-model.lazy="value" >
            <List :goods="goods" @changegoods="getGood"></List>
        </mt-search>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            value:"",
            goods:[]
        }
    },
    methods:{
        getGood(data){
            this.goods = data;
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
                this.goods = res.data.result;
            })
        }
    }
}
</script>

<style>
    #search{
        z-index: 99;
    }
</style>


