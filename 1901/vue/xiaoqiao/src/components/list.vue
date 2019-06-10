<template>
    <div>
        <ul>
            <li v-for="(good,i) in ngoods.goods" :key="i" @click="getDetails(good._id)" class="move">
                <img :src="good.images" width="50%" class="img1">
                <div class="lidiv">
                    <span class="span1">{{good.title}}</span>
                    <span class="leftSpan">￥:{{good.price}}</span>
                    <span class="rightSpan">{{good.saleData}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState([
            "ngoods"
        ])
    },
    methods:{
        getDetails(val){
            // console.log(val);
            this.$store.commit("getKeygoodsID",val);
            this.$router.push({name:'details'});
        }
    }
}
</script>

<style scoped>
    .move{
        animation: bounce 1S;
    }
    ul{
        display: flex;
        flex-wrap:wrap;
        justify-content:space-around;
        margin-top:10px;
    }
    ul li{
        /* width: 48%; */
        float: left;
        overflow: hidden;
        border: 1px solid red;
        /* text-align: center; */
        margin: 2%;
    }
    .img1{
        float: left;
    }
    .lidiv{
        width: 46%;
        float: left;
        padding: 2%;
        height: 150px;
        /* overflow: hidden; */
        position: relative;
    }
    .leftSpan{
        position: absolute;
        left: 0;
        bottom: 0;
        color:red;
    }
    .rightSpan{
        position: absolute;
        right: 0;
        bottom: 0;
    }
</style>


