<template>
    <div>
        <!-- <h2>  首页 - 首页</h2> -->
        <router-view></router-view>
        <Foot></Foot>
    </div>
</template>

<script>
import Foot from "@/components/foot.vue"
export default {
        components:{
            Foot,
        }
}
</script>

