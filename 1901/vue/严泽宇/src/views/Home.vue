<template>
  <div>
    <Head headTitle="首页" :flag="false" :searchShow="true"></Head>
    <homeContent></homeContent>
    <Foot></Foot>
  </div>
</template>

<script>

import homeContent  from "../components/home"
export default {
  
  components: {
    homeContent
  }
};
</script>


