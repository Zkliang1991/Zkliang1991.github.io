<template>
<div class="a">
    <router-view></router-view>
    <Foot></Foot>
    </div>
</template>
<script>
import Foot from "@/components/foot.vue";

export default {
    components:{
        Foot,
    }
}
</script>
<style>
.a{
    height: 100%;
}
</style>
