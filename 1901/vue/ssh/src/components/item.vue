<template>
    <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
        <!-- <img v-lazy="good.img" alt="" class="item-img"> -->
        <img :src="good.img" alt="" class="item-img">
        <h3>{{good.name}} --- RMB = {{good.price}}</h3>
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
    height:300px;
}
</style>
