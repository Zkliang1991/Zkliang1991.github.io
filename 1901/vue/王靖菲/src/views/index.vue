<template>
    <div class="index">
        <router-view></router-view>
        
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from "@/components/footer.vue"

export default {
     components:{
         Footer
     }
}
</script>

<style lang="scss" scoped>

</style>

