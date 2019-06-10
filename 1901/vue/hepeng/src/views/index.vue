<template>
    <div>
        <!-- <Head></Head> -->
        <router-view></router-view>
        <Foot></Foot>
    </div>
</template>
<script>
// import Head from "../components/head.vue"
// footer部分只会存在于主页index组件下的子组件内  故要在index组件中引入
import Foot from "../components/foot.vue"
export default {
    components: {
        Foot,
    }
}
</script>
