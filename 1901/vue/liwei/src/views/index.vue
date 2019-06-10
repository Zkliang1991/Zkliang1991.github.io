<template>
    <div id="index">
       <router-view></router-view>
       <Footer id="footer"></Footer>
    </div>
</template>

<script>
import Footer from '@/components/footer.vue'

export default {
    computed:{

    },
    components:{
        Footer
    }
}
</script>

<style scoped lang="scss">
   
</style>


