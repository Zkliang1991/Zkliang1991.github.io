<template>
    <div>
        <!-- <h2> app - view  vue 项目 主视图 </h2> -->
        
        <router-view></router-view>
        <Foot class="foot"></Foot>
    </div>
</template>
<script>
import Foot from "@/components/foot.vue";

export default {
    components:{
        Foot
    }
}

</script>

<style scoped>
    .foot{
        margin-top: 0.9rem;
    }
</style>

