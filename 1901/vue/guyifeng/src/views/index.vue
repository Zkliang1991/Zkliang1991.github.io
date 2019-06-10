<template>
    <div>
        <router-view></router-view>
        <Foot></Foot>
        <!-- <MFoot></MFoot> -->
    </div>
</template>

<script>
import Foot from "@/components/foot.vue";
// import MFoot from "@/components/mFoot.vue";


export default {
    components:{
        Foot,
    }
}
</script>
