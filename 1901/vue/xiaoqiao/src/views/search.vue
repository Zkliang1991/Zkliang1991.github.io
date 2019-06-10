<template>
    <div>
        <Head></Head>
        <div class="context">
            <van-search placeholder="请输入搜索关键词" shape="round" v-model="keytext"/>
        </div>
        <List class="app"></List>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState([
            "nkeyword",
            "ngoods"
        ]),
        keytext:{
            get(){
                return this.nkeyword.keyword;
            },
            set(val){
                // console.log(val);
                // this.$store.commit("getKeyword",val);  // 修改值 返回 到 vuex 
                this.nkeyword.keyword=val;
            }
        }     
    },
    mounted(){
        this.$store.state.nTitle.title="搜索";
    },
    watch:{
        keytext(newval){
            this.$axios.get("/vue/getGoodsList",{
                params:{
                    keyword:newval
                }
            }).then(res=>{
                this.ngoods.goods=res.data.result;
                console.log(this.ngoods.goods)
            })
        }
    }
}
</script>

<style scoped>
    .context{
        width: 100%;
        margin-top:12%;
        position: fixed;
        top:0;
        z-index: 10;
    }
    .app{
        margin-top: 100px;
    }
</style>

