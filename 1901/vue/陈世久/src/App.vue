<template>
  <div id="app">
     <!-- 5. 定义路由出口  -->
     <router-view class="box"></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Demo from "./components/demo.vue" 
export default {
  name: 'app',
  components: {
    HelloWorld,
    Demo:Demo
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
