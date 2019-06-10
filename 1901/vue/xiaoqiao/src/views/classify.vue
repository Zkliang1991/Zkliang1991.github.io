<template>
    <div>
        <Head></Head>
        <div class="context">
            <van-tabs @click="type1" class="tabs123">
                <van-tab title="手机">
                    <List></List>
                </van-tab>
                <van-tab title="笔记本">
                    <List></List>
                </van-tab>
                <van-tab title="平板" >
                    <List></List>
                </van-tab>
                <van-tab title="配件" >
                    <List></List>
                </van-tab>
            </van-tabs> 
        </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState([
            "ntype",
            "ngoods"
        ])
    },
    methods:{
        ...mapActions([
            "updateType"
        ]),
        type1(index,title){
            if(index==0){
                this.ntype.type="手机";
                this.$axios.get("/vue/getGoodsList",{
                    params:{
                        keyword:this.ntype.type
                    }
                }).then(res=>{
                    this.ngoods.goods=res.data.result;
                    console.log(this.ngoods.goods)
                })
            }
            else if(index==1){
                this.ntype.type="笔记本";
                this.$axios.get("/vue/getGoodsList",{
                    params:{
                        keyword:this.ntype.type
                    }
                }).then(res=>{
                    this.ngoods.goods=res.data.result;
                    console.log(this.ngoods.goods)
                })
            }
            else if(index==2){
                this.ntype.type="平板";
                this.$axios.get("/vue/getGoodsList",{
                    params:{
                        keyword:this.ntype.type
                    }
                }).then(res=>{
                    this.ngoods.goods=res.data.result;
                    console.log(this.ngoods.goods)
                })
            }
            else{
                this.ntype.type="配件";
                this.$axios.get("/vue/getGoodsList",{
                    params:{
                        keyword:this.ntype.type
                    }
                }).then(res=>{
                    this.ngoods.goods=res.data.result;
                    console.log(this.ngoods.goods)
                })
            }
        }
    },
    mounted(){
        this.$store.state.nTitle.title = "分类"; 
        this.$store.state.nActive.active=1;
    },
    created(){
        this.$axios.get("/vue/getGoodsList",{
            params:{
                keyword:this.ntype.type
            }
        }).then(res=>{
            this.ngoods.goods=res.data.result;
            console.log(this.ngoods.goods)
        })
    }
}
</script>

<style scoped>
    .context{
        position: absolute;
        top:6%;
    }
    .tabs123{
        width: 100%;
    }
</style>


