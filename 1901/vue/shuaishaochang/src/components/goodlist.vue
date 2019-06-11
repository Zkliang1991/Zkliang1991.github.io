<template>
    <div id="nav">
        <ul v-for="(good,i) in list" :key='i' @click="gotoDetail(good._id)">
            <nut-swiper class="tp" :lazyLoad="false" >
                <img :src="good.img" alt="" class="nut-img-lazyload"/>
                <div class="jg">
                    <p class="p1">{{good.title}}</p>
                    <p class='p2'>6.18惊爆价:￥{{good.price}}</p>
                    <p style="color:#aaa">原价：￥<strike>{{good.priceOld}}</strike></p>
                    <span>优惠生活每一天,天猫同款臻品,尽在海淘</span>
                </div>
            </nut-swiper> 
        </ul>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    data(){
        return {
            list:[],
        }
    },
    created(){
        this.$axios.get("/vue/goodlist",{
            params:{
                // limit:6
            }
        }).then(res=>{
            this.list=res.data.result;
        })
    },
    methods:{
        // submitFun(value) {
        //    console.log(value);
        //     console.log('默认提交操作！');
        // }
        gotoDetail(del){
            this.$store.commit("getKeygoodsID",del);
            this.$router.push({name:"detail"});
        }
    },
}
</script>

<style scoped>
    #nav{
        /* width: 100%; */
        margin-top: 10px;
        margin-bottom: 70px;
    }
    ul{
        margin:10px 0;
        overflow: hidden;
    }
    .tp{
        background-color:mintcream;
        width: 100%;
        height: 100%;
    }
    img{
        width: 40%;
        height: 150px;
        margin-bottom:20px;
    }
    .jg{
        /* float:left; */
        margin-left:20px;
    }
    .p1{
        font-size: 18px;
        padding-top:40px;
        color:darkorange;
        font-weight: 900;
    }
    .p2{
        font-size: 20px;
        margin-top:20px;
        color:crimson;
        font-weight: 900;
    }
</style>




