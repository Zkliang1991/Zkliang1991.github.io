<template>
    <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
        <!-- <img v-lazy="require('@/assets/images/'+img)" alt="" class="item-img"> -->
        <img :src="require('@/assets/images/'+good.img)" alt="" class="item-img">
        <h3>{{good.name}}</h3>
        <b>￥ {{good.price}}</b>
    </router-link>
    
</template>


<script>
export default {
    props:{
        good:Object
    },

    // data(){
    //     return {
    //         img:"s44.jpg"
    //     }
    // }
}
</script>

<style scoped>
.item-img {
    width:100%;
    /* height:340px; */
}
h3{
    color: #333;
}
b{
    color: red;
}
</style>
