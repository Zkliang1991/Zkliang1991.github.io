<template>
  <div>
    <Banner></Banner>
  </div>
</template>
<script>
import newsDemo from "@/components/newsDemo.vue";
import Banner from "@/components/banner.vue";
export default {
  name: "news",
  components: {
    newsDemo,
    Banner
  }
};
</script>