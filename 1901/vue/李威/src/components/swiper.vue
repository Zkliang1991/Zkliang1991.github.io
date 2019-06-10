<template>
  <Carousel
    :arrow="arrowtype"
    :radius-dot="true"
    :autoplay-speed="speed"
    :autoplay="autoplayflag"
    v-model="value2"
    loop
  >
    <CarouselItem v-for="(img,i) in imgs" :key="i">
      <div class="demo-carousel">
        <img :src="img" alt :style="istyle">
      </div>
    </CarouselItem>
  </Carousel>
</template>


<script>
export default {
  data() {
    return {
      value2: 0
    };
  },
  props: ["imgs", "istyle", "speed", "autoplayflag", "arrowtype"]
};
</script>

<style scoped>
</style>
