<template>
    <header @click="goback">
        <van-nav-bar :title="title" left-arrow  >
        </van-nav-bar>
    </header>
</template>
<script>
export default {
    // name:"myheader",
    props:[
        'title',
        'update'
    ],
      methods:{
        goback(){
            // alert("66666")
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
.van-nav-bar .van-icon{
    color:#666;
}
.van-icon{
   font-size: 20px;
}
header{
    width:100%;
    height:1rem;
    line-height: 1rem;
    position:fixed;
    top:0;
    z-index:100;
}
</style>

