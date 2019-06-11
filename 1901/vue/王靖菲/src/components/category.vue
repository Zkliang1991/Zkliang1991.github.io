<template>
<div>
    <van-row class="content" >
        <van-col span="8" v-for="(item,index) in category" :key="index">
            <router-link to="/goodslist">
            <img :src="item.image" alt="" class="catimg">
            <p>{{item.name}}</p>
            </router-link>
        </van-col>
    </van-row>
</div>
   
</template>

<style lang="scss" scoped>
.content{
    text-align: center; position: relative; 
         .catimg{
                background-color: pink;
                margin-top:0.6rem; width:1.58rem;
                height: 1.58rem; margin-left:0.46rem;
                border-radius:50%;
            }
            p{
                font-size: 13px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: #4f5156;
                width: 100%;
                text-align: center;
                margin-top: 0.1rem;
            }
  
   
}
</style>

<script>
export default {
    data(){
        return {
            category:[]
        }
    },
    mounted(){
        this.$axios.get("/vue/goodsClassify",).then(res=>{
            var item=res.data.result
            this.category=item;
         
        })
    }
}
</script>

