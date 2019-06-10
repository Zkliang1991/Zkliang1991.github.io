<template>
    <div class="indexnav">
        <p v-for="(value,index) in linkArr" :key="index" @click="changeLuyou(index)">
            <img :src="value.url">
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            linkArr:[
                {text:'最后疯抢',
                url:'https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png',
                name:'mine'},
                {text:'限时秒杀',
                url:'https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png?imageMogr2/quality/85!/format/png',
                name:'mine'},
                {text:'品牌特卖',
                url:'https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png',
                name:'mine'},
                {text:'生活超市',
                url:'https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png',
                name:'mine'}, 
            ]
        }
    },
    methods:{
        changeLuyou(index){
            this.$router.push({name:'class'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .indexnav{
        width: 100%;
        height: 1.67rem;
        background:black;
        p{
            float: left;
            width: 25%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>



