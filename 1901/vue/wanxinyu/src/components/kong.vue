<template>
    <div>
        <slot>
            <div class="zuijin">
                <p class="p1">最近搜索</p>
                <p class="p2">清空</p>
            </div>
            <div class="zuijin1">
                <p>短袖衬衫</p>
                <p>潮牌</p>
            </div>
            <div class="remen">
                <div>热门搜索</div>
            </div>
            <div class="remen1">
                <p>欧时力</p>
                <p>嘻哈潮牌</p>
                <p>加厚T恤</p>
                <p>自制</p>
                <p>海澜之家</p>
                <p>经典基础款</p>
                <p>长袖T恤</p>
                <p>明星同款</p>
                <p>婚纱</p>
                <p>花仙子</p>
                <p>迪枚阁</p>
                <p>梦幻花朵</p>
                <p>经典韩版</p>
                <p>铅笔西装裤</p>
                <p>GXG</p>
                <p>藏青色羊毛</p>
                <p>酒店前台</p>
            </div>
        </slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.zuijin1{
    width: 96%;
    position: fixed;
    border-bottom: 1px solid #887e7e;
    top: 2.85rem;
    height: 1.3rem;
    margin-left: 2%;
    
    p{
        color: #858992;
        padding: 0.05rem 0.25rem;
        font-size: .32rem;
        float: left;
        margin-left:0.3rem;
        border:solid 1px #5d78ab;
        border-radius: .10667rem;
    }
}

.remen{
    width: 95%;
    position: fixed;
    top: 4.5rem;
    margin-left: 5%;
    color:black;
}

.remen1{
    width: 96%;
    position: fixed;
    top: 5.05rem;
    margin-left: 2%;

    p{
        color: #858992;
        padding: 0.05rem 0.15rem;
        font-size: .32rem;
        float: left;
        margin-left:0.3rem;
        border:solid 1px #5d78ab;
        border-radius: .10667rem;
        margin-top:0.1rem;
    }
}
</style>
