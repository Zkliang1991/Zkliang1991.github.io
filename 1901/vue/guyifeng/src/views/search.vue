<template>
    <div>
        <Head title="搜索商品" :backShow="true" :searchShow="false"></Head>
        <mt-search v-model="value" class="sousuo">
            <goodList :goods="goods" @changegoods="getGood"></goodList>
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
            this.$axios.get("/vue/getKouHong",{
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

<style lang="scss" scoped>
.sousuo{
    position: fixed;
    top: 0.9rem;
    left: 0;
    width: 100%;
}
</style>

