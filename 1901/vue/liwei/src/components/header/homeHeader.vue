<template>
    <div class="header">
            <router-link class="a" :to="{name:'search'}">
                <van-icon name="search" class="searchs" size="0.35rem"/>
                <span class="one">卷皮</span>
                <span class="two">搜索</span>
            </router-link>
            <router-link class="a" :to="{name:'class'}">
                <i class="iconfont icon-fenleisousuo myicon"></i>
            </router-link>
    </div>
</template>

<script>

export default {
    
}
</script>


<style scoped lang="scss">
    .header{
        width: 100%;
        height: .87rem;
        .a{height: .55rem;margin-top: .16rem;}
        .a:first-child{
            float: left;
            margin-left: 2%;
            width: 83%;
            background: #ece8e8;
            border-radius: 10px;
            line-height: .55rem;
            .searchs{
                margin-left: 3%;
                margin-top: .1rem;
                margin-right: .1rem;
                float: left;
                vertical-align: middle;
            }
            span{font-size: 14px;}
            .one{color:#ff464e;margin:0 .05rem;}
            .two{color:#999999;font-size: 12px;}
        }
        .a:last-child{
            float: right;
            margin-right: 2%;
            width: 10%;
            text-align: center;
            line-height: .55rem;
        }
    }
    .myicon{
        font-size: .35rem ;
    }
</style>

