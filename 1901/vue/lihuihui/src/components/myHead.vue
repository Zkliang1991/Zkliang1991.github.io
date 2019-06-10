<template>
    <div>
        <div>实际内容</div>    
    </div>
</template>
<script>
import { Skeleton } from 'vant';
export default {

  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.loading = false;
  }
};
</script>

