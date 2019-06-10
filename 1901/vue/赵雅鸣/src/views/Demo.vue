<template>
  <div>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from '@/components/foot.vue'

export default {
  name: "demo",
  components: {
    Foot
  }
};
</script>

