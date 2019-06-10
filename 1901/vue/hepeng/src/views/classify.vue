<template>
    <div>
        <Head title="商品分类" :show="!!1" id="classify"></Head>
        <mt-navbar v-model="selected" id="tabbar">
            <mt-tab-item :id="item.value" v-for="(item,i) in good_types" :key="i"> {{item.text}} </mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="t.value" v-for="(t,i) in good_types" :key="i">
                <List id="move"
                :goods="all_goods.filter((it)=>it.type.value==t.value)" 
                :type="t"
                :all_goods="all_goods"
                ></List>
            </mt-tab-container-item>
        </mt-tab-container>
                <!-- @changegoods="getGood" -->
    </div>
</template>
<script>
export default {
    methods:{
        // getGood(){
        //     console.log("翻转 all_goods");
        //     this.all_goods  = this.all_goods.reverse();
        // }
    },
    data(){
        return {
            good_types:[],
            all_goods:[],
            selected:"suit",
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
            this.show = true;
        })
    }
}
</script>
<style scoped>
    #classify{
        animation: bounce 1s;
        z-index: 99;
        position: fixed;
        left: 0;
        top:0;
        width: 100%;
    }
    #move{
        animation: bounceInDown 1s;
    }
    #tab{
        margin: 0.2rem 0;
        width: 100%;
    }
    #tabbar{
        margin-top: 1rem;
    }
</style>


