<template>
    <div id="home">
        <HomeHeader></HomeHeader>
        <LunBo></LunBo>
        <IndexNav></IndexNav>
        <IndexAd></IndexAd>
        <IndexMarllAd></IndexMarllAd>
        <IndexClass></IndexClass>
    </div>
</template>

<script>
import HomeHeader from '@/components/header/homeHeader.vue' ;
import LunBo from '@/components/lunbo.vue';
import IndexNav from '@/components/global/indexnav.vue'
import IndexAd from '@/components/global/indexAd.vue'
import IndexMarllAd from '@/components/global/indexMarllAd.vue'
import IndexClass from '@/components/global/indexClass.vue'


export default {
    components:{
        HomeHeader,
        LunBo,
        IndexNav,
        IndexAd,
        IndexMarllAd,
        IndexClass
    }
}
</script>

<style scoped lang="scss">
    #home{
        padding-bottom: 1.5rem;
    }
</style>








