<template>   
    <div>
        <Header title="首页"></Header>
        <!-- <Swipe></Swipe> -->
        <Tab></Tab>
       
    </div>
</template>
<script>
import Swipe from "../components/Swipe";
import Tab from "../components/Tab";
export default {
  components: {
    Swipe,
    Tab
  }
};
</script>
<style lang='scss'>
.van-tabs {
  position: absolute;
  width:100%;  top:1rem;

}

</style>



