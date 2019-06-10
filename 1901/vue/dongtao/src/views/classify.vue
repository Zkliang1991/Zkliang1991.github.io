<template>
    <div v-if="show">
        <Head title="商品分类"></Head>
        <mt-navbar v-model="selected">
            <mt-tab-item :id="item.text" v-for="(item,i) in good_types" :key="i">{{item.text}}</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="t.text" v-for="(t,i) in good_types" :key="i">
                <List 
                :goods="all_goods.filter((it)=>it.type.text==t.text)" 
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
   data(){
        return {
            good_types:[],
            all_goods:[],
            selected:"跑鞋",
            show:true
        }
    },
    methods:{
        getGood(){
            console.log("翻转 all_goods");
            this.all_goods = this.all_goods.reverse();
        }
    },
    created(){
        this.$axios.get("/vue/getGoodTypes")
        .then(res=>{
            console.log(res);
            this.good_types  = res.data.result;
        })

        this.$axios.get("/vue/goodsinfo")
        .then(res=>{
            console.log(res);
            this.all_goods = res.data.result;
            this.show = true;
        })
    }
}
</script>




