<template>
    <div>
         <mt-search v-model.lazy="value" >
            <List :goods="goods"></List>
        </mt-search>
        <Head title="搜索" :show="true" ></Head>
       
        
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
    watch:{
        value(newVal){
            // console.log(newVal);

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
<style scoped>
    .mint-searchbar{
        /* position: absolute !important;
        width: 100%;
        left: 0;
        top: 40px;
        margin-top: 40px !important; */
        margin-bottom:20px; 

    }
    .mint-searchbar-inner{
        border-radius: 23px !important;
    }
    .mintui-search{
        font-size: 16px !important;
    }
    .mint-header{
        margin-bottom: 50px !important;
    }
    .film{
        margin-top:20px !important; 
    }
</style>




