<template>
    <div>
        <Head title="搜索" :show="true" ></Head>
        <mt-search v-model.lazy="keyword" >
            <List :goods="goods" @changegoods="getGood"></List>
        </mt-search>
        
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    data(){
        return {
            value:"",
            goods:[]
        }
    },
    computed:{
        keyword:{
            get(){
                return this.$store.state.keyword;
            },
            set(val){
                console.log(val);
                this.$store.commit("getKeyword",val);  // 修改值 返回 到 vuex 
            }
        }
    },
    methods:{
        getGood(data){
            this.goods = data;
        }
    },
    watch:{
        keyword(newVal){
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

