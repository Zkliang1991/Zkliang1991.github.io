<template>
    <div class="indexad">
        <img :src="indexAd.imgurl" @click="toRouter">
    </div>
</template>

<script>
export default {
    data(){
        return {
            indexAd:{
                imgurl:'https://s2.juancdn.com/jas/190529/6/c/5cee37bf33b08946e70a5715_1080x300.gif',
                name:'mine' //后面跳路由
            }
        }
    },
    methods:{
        toRouter(){
            this.$router.push({name:'class'})
        }
    }
}
</script>

<style scoped lang="scss">
    .indexad{
        width: 100%;
        height:2.08rem ;
        img{
            width: 100%;
            height:100% ;
        }
    }

</style>



