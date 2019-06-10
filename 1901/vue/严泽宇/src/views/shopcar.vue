<template>
  <div>
    <Head headTitle="购物车" :flag="true"></Head>
    <car></car>
  </div>
</template>

<script>
import Car from "../components/shopCar";
export default {
  components: {
    Car
  }
};
</script>
