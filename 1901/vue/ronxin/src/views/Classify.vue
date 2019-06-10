<template>
    <div>
        <div class="fixedbox" @click="gosearch">
            <div class="fixed">
                <p>搜索商品名或款号<img src="../assets/imgs/search.png" alt=""></p>    
            </div>  
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
                v-if="all_goods"
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
        },
        gosearch(){
            this.$router.push({name:"search"})
        },
        show1(){
            console.log("111111122")
        }
    },
    data(){
        return {
            good_types:[],
            all_goods:[],
            selected:"weiyi",
            show:false
        }
    },
    mounted(){
        this.$axios.get("/vue/getGoodTypes")
            .then(res=>{
                this.good_types  = res.data.result;
                console.log("11111111111");
                console.log(this.good_types);
                this.$axios.get("/vue/getGoodList")
                .then(res=>{
                    this.all_goods = res.data.result;
                    console.log("22222222222222");
                    console.log(this.all_goods);
                    this.show = true;
                })
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
        height:0.78rem;
        z-index:2;
        background-color: #fff;
        border-bottom:1px solid #ccc;
    }
    .fixed p{
        line-height:0.78rem;
        font-size:0.28rem;
        color:#aaa;
        margin-left:0.8rem;
        white-space: 0.1rem;
    }
    .fixed img{
        position: absolute;
        left: 0.2rem;
        top:0.2rem;
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