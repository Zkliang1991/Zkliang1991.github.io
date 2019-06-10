<template>
    <div>
         <Myheader title="搜索"></Myheader>
        <goodsList :goodslist="goods" v-if="show" class="list"></goodsList>
        <p v-if="!show">暂时没有数据</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            goods:[],
            show:true,
        }
    },
    mounted(){
        console.log(this.$route.query)
        this.$axios.get("/vue/search",{params:this.$route.query}).then(res=>{
            // console.log(res)
            if(res.data.type==1){
                this.show=true;
                this.goods=res.data.result;
            }else{
                  this.show=false;
            }
        })
    }
}
</script>
