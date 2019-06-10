<template>
    <div v-if="show">
        <div class="fixedbox">
        <Head title="商品分类" class="fixed"></Head>   
        </div>
        <div class="sortbox">
        <mt-navbar v-model="selected" class="sort">
            <mt-tab-item :id="item.value" v-for="(item,i) in good_types" :key="i"> {{item.text}} </mt-tab-item>
        </mt-navbar>
        </div>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="t.value" v-for="(t,i) in good_types" :key="i">
                <List 
                :goods="all_goods.filter((it)=>it.type.value==t.value)" 
                :type="t"
                :all_goods="all_goods"
                @changegoods="getGood"
                ></List>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
    methods:{
        getGood(){
            console.log("翻转 all_goods");
            this.all_goods  = this.all_goods.reverse();
        }
    },
    data(){
        return {
            good_types:[],
            all_goods:[],
            selected:"qunzi",
            show:false
        }
    },
    created(){
        this.$axios.get("/vue/getGoodTypes")
            .then(res=>{
                this.good_types  = res.data.result;
        })

        this.$axios.get("/vue/getGoodList")
        .then(res=>{
            this.all_goods = res.data.result;
            console.log(this.all_goods);
            this.show = true;
        })
    }
}
</script>

<style lang="scss" scoped>
    .fixedbox{
        margin-bottom:0.8rem;
    }
    .fixed{
        position:fixed;
        left: 0;
        top: 0;
        width:100%;
        z-index:2;
    }
    .sortbox{
        height:0.8rem;
    }
    .sort{
        position:fixed;
        left: 0;
        top: 0.8rem;
        width:100%;
        z-index:2;
    }
</style>