<template>
    <div>
        <van-nav-bar :title="title" :left-arrow="show"  @click-left="goback">
        <van-icon name="search" slot="right"  @click="gosearch"/>
        </van-nav-bar>
    </div>
</template>

<script>
    export default {
        props:{
        title:String,
        show:Boolean
        },
        methods:{
            goback(){
                this.$router.go(-1)
            },
            gosearch(){
                this.$router.push({name:"search"})
            }
        }
    }
</script>


