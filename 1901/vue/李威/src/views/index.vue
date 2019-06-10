<template>
  <div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
export default {
    components:{
      Footer
    }
}
</script>

