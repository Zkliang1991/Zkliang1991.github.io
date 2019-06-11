<template>
  <div id="app">
      <div>
        <router-view></router-view>
        <Foot></Foot>
      </div>
  </div>
</template>
<script>
import Foot from "./components/foot.vue";
import Swipe from "./components/swipe.vue";
export default {
    components:{
        Foot,
        Swipe
    }
}
</script>

<style lang="scss">
//全局样式  根组件
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
