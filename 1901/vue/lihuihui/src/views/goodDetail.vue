<template>
    <div v-show='true'>
        <Header :title="$route.query.name"></Header>
         <Detail></Detail>
    </div>
</template>
<script>
import Detail from '../components/Detail'
export default {
  components:{
    Detail
  }
  
}
</script>
