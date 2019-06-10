<template>
    <div v-if="show">
        <Head title="商品分类" ></Head>   
        <mt-navbar v-model="selected" >
            <mt-tab-item :id="item.value" v-for="(item,i) in newTypes" :key="i"> {{item.text}} </mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="t.value" v-for="(t,i) in newTypes" :key="i">
                <List 
                :goods="goodInfo.all_goods.filter((it)=>it.type.value==t.value)" 
                :type="t"
                :all_goods="all_goods"
                @changegoods="getGood"
                ></List>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState(['goodInfo']),
        ...mapGetters(['newTypes'])
    },
    methods:{
        getGood(){
            console.log("翻转 all_goods");
            this.all_goods  = this.all_goods.reverse();
        },
        ...mapActions([
            'getGoodTypes',
            'getAllGoods'
        ])
    },
    data(){
        return {
            good_types:[],
            all_goods:[],
            selected:"shirt",
            show:false
        }
    },
    created(){
        // this.$axios.get("/vue/getGoodTypes")
        //     .then(res=>{
        //         this.good_types  = res.data.result;
        // })

        this.getGoodTypes({url:'/vue/getGoodTypes'});

        // this.$axios.get("/vue/getGoodList")
        // .then(res=>{
        //     this.all_goods = res.data.result;
        //     this.show = true;
        // })

        // 箭头函数  改变 this  指向 

        this.getAllGoods({url:"/vue/getGoodList",cb:()=>{
            this.show = true;
        }})
    }
}
</script>
