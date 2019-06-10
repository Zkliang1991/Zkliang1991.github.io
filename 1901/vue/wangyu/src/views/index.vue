<template>
  <div>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>
<script>
import Foot from "@/components/foot.vue";
import Swipe from "@/components/swipe.vue";
export default {
  components:{
    Foot,
  }
}
</script>
