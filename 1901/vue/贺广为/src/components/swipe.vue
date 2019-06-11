<template>
  <div class="swiper-container" :id="id">
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
        var mySwiper = new Swiper("#"+this.id,this.options);
    },
    updated(){
        var mySwiper = new Swiper("#"+this.id,this.options);
    }
};
</script>
