<template>
    <div>
        <Head title="付款" :show="!!1"></Head>
        <img :src="require('../assets/1000.png')">
    </div>
</template>

<script>
export default {
    mounted(){
        setTimeout(()=>{
            this.$router.push({name:"car",params:{daifukuan:'daifukuan'}})
        },1000)
    }
}
</script>

<style scoped>
img{
    width: 100%;
    height: 100%;
}
</style>
