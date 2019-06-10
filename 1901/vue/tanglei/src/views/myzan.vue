<template>
    <div>
        <Myheader title="我的收藏"></Myheader>
        <ul class="myzan">
            <li v-for="(zan,i) in zanlist" :key="i" @click="ckeckinfo(zan.goodsid)">
                <div>
                    <img :src="zan.goodsimg" alt="">
                </div>    
                {{zan.goodsname}}
            </li>
        </ul>
    </div>
</template>
<script>
import {Toast} from "vant";
import {mapState} from "vuex";
export default {
     computed:{
        ...mapState([
            'userinfo'
        ])
    },
    data(){
        return {
            zanlist:[]
        }
    },
    mounted(){
        if(this.userinfo.dlstate){
             this.$axios.get("/vue/myzan").then(res=>{
            // console.log(res)
            if(res.data.type==1){
                // console.log(res.data)
                this.zanlist=res.data.result;
            }else{
                Toast(res.data.msg);
                this.$router.push({name:"login"});          
            }
         })
        }else{
            Toast("请登录");
            this.$router.push({name:"login"})     
        }      
      
    },
    methods:{
        ckeckinfo(goodsid){
            this.$router.push(`/goodsinfo?id=${goodsid}`)
        }
    }
}
</script>
<style lang="scss" scoped>
    .myzan{
       margin-top: .8rem;
        li{
        margin-bottom:.3rem;
        background: #fff;
        padding:.4rem ;
        // height:.8rem;
        overflow: hidden;
        text-align: left;
        div{
            float:left;           
            img{
            height: 1rem;
            width:1rem;
            }
            margin-right: .2rem;
        }
       
        }
    }
</style>


