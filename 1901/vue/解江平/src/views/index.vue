<template>
    <div class="out">
    <router-view></router-view>
    <Footer></Footer>
    </div>
</template>

<script>
import Footer from "../components/my-footer.vue";
export default {
    components:{
        Footer
    }
}
</script>

<style lang="scss">
.out{
    width: 100%;
    height: 100%;
}
</style>
