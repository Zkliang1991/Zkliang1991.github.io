<template>
    <div>
         <Myheader :title="fengl.title"></Myheader>
         <van-tabs v-model="active" @click="check">
            <van-tab v-for="(lb,i) in fengl.list" :key="i" :title="lb.title">
                <goodsList :goodslist="goods" v-if="show" class="list"></goodsList>
                <p v-if="!show">暂时没有数据</p>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import {mapState} from "vuex";
import { Tab, Tabs } from 'vant';

export default {
    data(){
        return {
            goods:[],
            show:true,
            active:0
        }
    },
      computed:{
        ...mapState([
            'fengl'
        ])
    },
    mounted(){
        var index=0
        for(var i=0;i<this.fengl.list.length;i++){
            if(this.fengl.list[i].title==this.fengl.search){
                index=i;
            }
        }
        // console.log(this.fengl.list)
        console.log(index);
        this.active=index;
        // console.log(this.fengl.title)
        this.$axios.get("/vue/goodslist",{params:{hash:{category:this.fengl.search}}}).then(res=>{//
            // console.log(res);
            if(res.data.resultcount>0){
                this.goods=res.data.result;
               this.show=true;
            }else{
                 this.show=false;
            }
    })
   },methods:{
       check(index,title){
        //    alert(index+"  "+title)
         this.$axios.get("/vue/goodslist",{params:{hash:{category:title}}}).then(res=>{//
            // console.log(res);
            if(res.data.resultcount>0){
                this.goods=res.data.result;
                this.show=true;
            }else{
                this.show=false;
            }
         })
       }
   }
}
</script>
<style lang="scss" scoped>
.van-tabs{
    margin-top:1rem;
}
.list{
    margin-top:-.8rem !important;
}
</style>

