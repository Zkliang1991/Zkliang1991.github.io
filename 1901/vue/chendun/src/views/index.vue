<template>
    <div>
         <router-view>
             
         </router-view>
         <MFoot></MFoot>
    </div>
</template>
<script>
// import Foot from "@/components/foot.vue";
import MFoot from "@/components/mFoot.vue";


export default {
    components:{
        MFoot,
    }
}
</script>

