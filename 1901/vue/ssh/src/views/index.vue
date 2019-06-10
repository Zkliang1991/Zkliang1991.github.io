<template>
    <div>
        <router-view></router-view>
        <Foot></Foot>
    </div>
</template>
<script>
// import Head from "@/components/head.vue";
import Foot from "@/components/foot.vue";
export default {
    // components:{
    //     Head,
    // }
    components:{
        Foot,
    }
}
</script>

