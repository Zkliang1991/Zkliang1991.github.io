<template>
  <div>
      <Head :tit="title"></Head>
      <router-view class="mt"></router-view>
      <Foot v-on:changTit='getTil'></Foot>
  </div>
</template>

<script>
import Head from '@/components/header.vue'
import Foot from "@/components/foot.vue"
export default {
  data() {
    return {
      title:'',
    }
  },
  name: "home",
  components: {
    Foot,
    Head
  },
  methods: {
    getTil(data){
      this.title = data;
    }
  },
};
</script>
<style scoped>
.mt{
  margin-top: 0.9rem;
  margin-bottom:1rem
}
</style>
