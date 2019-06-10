<template>
    <div class="swiper-container" :id="id" >
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        id:String,
        options:Object,
    },
    mounted(){
        // 实例化 
        var mySwiper = new Swiper("#"+this.id,this.options);
    },
    updated(){
        // 数据更新之后再实例化
        var mySwiper = new Swiper("#"+this.id,this.options);
    }
}
</script>
