<template>
    <div class="Myswipe">
        <mt-swipe :auto="4000">
        <mt-swipe-item class="my1" v-for="(img,i) in imgs" :key="i"><img :src=img ></mt-swipe-item>
</mt-swipe>
    </div>
</template>


<script>
export default {
    data(){
        return{
           
        }
    },
    props:['imgs']

}
</script>

<style lang="scss" scoped>
.Myswipe{
    width: 100%;
    height: 5rem;
    .my1{
        width: 100%;
        height: 100%;
        img{
        width: 100%;
        height: 100%;
        }
    }
    
}
</style>
