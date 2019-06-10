<template>
    <div class="indexpage">
        <!-- <h2>首页</h2> -->
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

