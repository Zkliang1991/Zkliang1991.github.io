<template id='content'>
    <router-link :to="{name:'goods',params:{goodId:good._id},query:{name:good.name}}" id="box">
        <!-- <img v-lazy="good.img" alt="" class="item-img"> -->
        <div id="item">
            <div id="itemGood">
                <img :src="good.img" alt="" class="item-img">
                <p id="goodname">{{good.name}} </p>
                <p id="price"><b class="goodsprice">价格:{{good.price}}元</b><b class="goodsdiscount"> 折扣:{{good.discount}}</b></p>
            </div>
        </div>
    </router-link>
</template>


<script>
export default {
    props:{
        good:Object
    }
}
</script>

<style scoped>
/* .item-img {
    width:100%;
    height:300px;
} */
#content{
    width: 100%;
}
#item{
    width: 50%;
    height: 5.4rem;
    float: left;
    margin: 0.08rem 0;
}
#itemGood{
    width: 96%;
    margin: 2%;
    height: 100%;
    border:2px solid rgb(110, 177, 194);
    box-sizing:border-box; 
}
#box .item-img{
    width: 100%;
    height: 3.5rem;
}
#box #goodname{
    width: 100%;
    margin-top: 0.1rem;
    font-size: 15px;
    color:#666;
    height: 0.78rem;
    display: -webkit-box;    
    -webkit-box-orient: vertical;    
    -webkit-line-clamp: 2;    
    overflow: hidden;
    padding:0.08rem;
    text-align: left;
}
#price{
    text-align: left;
      font-size: 14px;
    color:#555;
    line-height: 30px;
     padding:0  0.2rem;
}
.goodsprice{
    float: left;
}
.goodsdiscount{
    float: right;
}
</style>
