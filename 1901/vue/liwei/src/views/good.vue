<template>
    <div class="good">
        <SwiperXing></SwiperXing>
        <TextXiang></TextXiang>
        <ShangPin></ShangPin>
        <TuPianXiang></TuPianXiang>
    </div>
</template>

<script>
import SwiperXing from '@/components/goodxiang/swiperxing.vue'
import TextXiang from '@/components/goodxiang/textxiang.vue'
import ShangPin from '@/components/goodxiang/shangpin.vue'
import TuPianXiang from '@/components/goodxiang/tupianxiang.vue'

export default {
    components:{
        SwiperXing,
        TextXiang,
        ShangPin,
        TuPianXiang
        
    }
}
</script>


<style scoped lang="scss">
    .good{
        padding-bottom: 2rem;
    }
</style>


