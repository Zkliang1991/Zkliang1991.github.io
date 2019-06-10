<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Foot from "./components/foot.vue"
import Demo from "./components/demo.vue" 
export default {
  name: 'app',
  components: {
    HelloWorld,
    //  Foot:Foot
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
