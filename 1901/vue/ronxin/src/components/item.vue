<template>
    <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
        <!-- <img v-lazy="good.img" alt="" class="item-img"> -->
        <div class="Recommend">
        <img :src="good.img" alt="" class="item-img">
        <h2>{{good.name}}</h2>
        <p><span id="price1">{{good.price}}</span>&nbsp;&nbsp;<span id="oldprice1">{{good.oldprice}}</span></p>
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
.item-img {
    width:100%;
    height:200px;
}
.Recommend{
    width:50%;
    float:left;
}
.Recommend img{
    width:100%;
    height:4rem;
    margin-top:0.2rem;
}
.Recommend h2{
    height:0.8rem;
    display: -webkit-box;    
    -webkit-box-orient: vertical;    
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-weight:normal;
    font-size:0.28rem;
    color:#333;
  }
  .Recommend #price1{
    color:red;
  }
  .Recommend #oldprice1{
    color:#999;
    text-decoration: line-through;
  }
</style>

