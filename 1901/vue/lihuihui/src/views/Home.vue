<template>
    <div>
        <!-- <h2> app - view  vue 项目 主视图 </h2> -->
        
        <router-view></router-view>
        <!-- <Foot></Foot> -->
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue";


export default {
    components:{
       Footer
   
    }
}
</script>
