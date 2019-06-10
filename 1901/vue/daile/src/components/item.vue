<template id="loadlist">
    <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}" id="loadbox">
        <!-- <img v-lazy="good.img" alt="" class="item-img"> -->
        <img :src="good.img" alt=""  class="move2">
        <h3>{{good.name}} ---</h3>
        <p> RMB : <span>{{good.price}}</span> </p>
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
#loadlist{
    width: 100px;
    height:5.5rem;
    
}
#loadbox{
    width: 47.4%;
    height: 5.3rem;
    margin-left: 1.4%;
    float: left;
    border:1px solid rgb(110, 177, 194);
    margin-top: 0.2rem;
}
#loadbox .move2 {
    width:100%;
    height:3.8rem;
}
#loadbox h3{
    width: 100%;
    margin-top: 0.1rem;
    font-size: .16rem;
    color:#666;
    display: -webkit-box;    
    -webkit-box-orient: vertical;    
    -webkit-line-clamp: 2;    
    overflow: hidden;
    padding-left:0.15rem;
    padding-right:0.2rem;
}
#loadbox p{
    font-size: .24rem;
    color:#555;
    line-height: 30px;
     padding:0  0.2rem;
   
}
#loadbox p span{
    font-size: .26rem;
    color:red;
}


</style>

