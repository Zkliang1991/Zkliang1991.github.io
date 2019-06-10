<template>
  <div>
    <h2>demo--demo--demo</h2>
    <h2>props -- {{msg}} -- {{title}}</h2>
    <slot></slot>
    <div class="demo">
    </div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>  
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props:{
    msg:String,
    title:String
  }
}
</script>

<style scoped>
  .demo{
    width: 2rem;
    height: 2rem;
    background-color: darkblue;
  }
</style>


