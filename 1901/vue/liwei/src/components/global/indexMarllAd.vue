<template>
<div>
    <div class="indexmarll">
        <div><img :src="imgArr[0].imgUrl" @click="toRouterOne(imgArr[0].name)"></div>
        <div>
            <p><img :src="imgArr[1].imgUrl" @click="toRouterTwo(imgArr[1].name)"></p>
            <p><img :src="imgArr[2].imgUrl" @click="toRouterThree(imgArr[2].name)"></p>
        </div>
    </div>
    <div class="bottom">
        <img :src="bottomImg.imgUrl">
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            imgArr:[
                {imgUrl:'https://s2.juancdn.com/jas/190531/f/8/5cf0805eb6f8ea61a569192c_540x656.gif',
                name:'mine'},
                {imgUrl:'https://goods8.juancdn.com/jas/190531/f/3/5cf080a7b6f8ea626c3a2b81_540x328.png?imageMogr2/quality/85!/format/png',
                name:'mine'},
                {imgUrl:'https://goods2.juancdn.com/jas/190531/2/4/5cf080c6b6f8ea61c87e99d8_540x328.png?imageMogr2/quality/85!/format/png',
                name:'mine'}
            ],
            bottomImg:{
                imgUrl:'https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png',
                name:'mine'
            }
        }
    },
    methods:{
        toRouterOne(name){
            this.$router.push({name:'class'})
        },
        toRouterTwo(name){
             this.$router.push({name:'class'})
        },
        toRouterThree(name){
            this.$router.push({name:'class'})
        }
    }
}
</script>

<style scoped lang="scss">
    .indexmarll{
        width: 96%;
        margin: 0 2%;
        overflow: hidden;
        background: white;
        img{
            width: 100%;
            height: 100%;
        }
        div{
            width: 50%;
            height:4.55rem;
            float: left;
        }
        div:last-child{
            p{
                width: 100%;
                height: 50%;
            }
        }
    }
    .bottom{
        width: 100%;
        height: .96rem;
        padding: 8px 0;
        background-color: #ececead4;
        img{
            width: 100%; 
            height: 100%;   
        }
    }
</style>


