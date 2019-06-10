<template>
  <div id="app">
     <!-- 5. 定义路由出口  -->
     <router-view class="box"></router-view>
     <Demo></Demo>
  </div>
</template>

<script>
import Demo from "./components/demo.vue" 
export default {
  name: 'app',
  components: {
    Demo
  }
}
</script>

<style>

</style>
