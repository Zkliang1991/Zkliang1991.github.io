<template>
    <div>
        <img :src="require('../assets/3000.jpg')">
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        setTimeout(()=>{
            this.$router.push({name:'home'})
        },2000)
    }
}
</script>

<style scoped>
img{
    width:100%;
    height:100%;
}
</style>

