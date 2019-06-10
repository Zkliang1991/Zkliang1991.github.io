<template>
  <div>
    <!-- <h2>index - index - index</h2> -->
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>
<script>
import Foot from "@/components/foot.vue";

export default {
    components:{
        Foot,
    }
}
</script>
