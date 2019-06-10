<template>
    <div>
        <router-link :to="{name:'goodDetail',params:{goodId:good.id},query:{name:good.title,img:good.product_img}}">
            <!-- <img :src="good.img" alt="">
            <div class='goodDetail'>
                <span>{{ good.title }}</span>
            </div>              -->
            <van-card
                :num="good.dealCnt"
                :price="good.price"
                :desc="good.location"  
                :title="good.title"
                :thumb="good.product_img"
                />
        </router-link>

    </div>
</template>
<script>
    export default {
        props:['good'],
       
    }
</script>

