<template class="fixd">
        <van-tabbar v-model="tab" class="fixd">
            <van-tabbar-item v-for="(foot,i) in foots" :key="i" :id="foot.name" :info="i==2?abcd:''">
                <i class="iconfont" v-html="foot.icon" slot="icon" > </i>
                {{foot.txt}}
            </van-tabbar-item>
        </van-tabbar>
</template>

<script>
export default {
     inject:['reload'],
     data(){
        return {
            abcd:0,
             tab:0,
             foots:[
                {txt:"首页",path:"/app/home",name:"home",icon:"&#xe699;"},
                {txt:"分类",path:"/app/classify",name:"classify",icon:"&#xe689;"},
                {txt:"购物车",path:"/app/cart",name:"cart",icon:"&#xe622;"},
                {txt:"我的",path:"/app/mine",name:"mine",icon:"&#xe61a;"}
            ]
        }
    },
    watch:{
        tab(newVal){
            var result="";
            if(newVal==0){
                result="home"
            }
            if(newVal==1){
                result="classify"
            }
            if(newVal==2){
                result="cart"
            }
            if(newVal==3){
                result="mine"
            }
            this.$router.push({name:result});
        }
    },
    computed:{
        carNum(){
            return this.$store.state.carNum
        },
         num1(){  
            return this.$store.state.num;
        }
    },
   
    mounted(){
        console.log(this.$route);
        if(this.$route.name=="home"){
            this.tab=0
        }
        if(this.$route.name=="classify"){
            this.tab=1
        }
        if(this.$route.name=="cart"){
            this.tab=2
        }
        if(this.$route.name=="mine"){
            this.tab=3
        }  

         this.$axios.post("/vue/getcount",{
             goodsusername:localStorage.username,
        }).then(res=>{
            this.goodnum = res.data.result;
            var allcount=0;
            this.goodnum.forEach((item)=>{
                console.log(item)
                allcount+=item.count
            })
            // console.log(this.abcd);
            this.abcd=allcount;
        })
    }
}
</script>
<style>
    .fixd{
        position:fixed;
        left: 0;
        bottom:0;
        width:100%;
        z-index: 10000;
    }
</style>