<template>
    <div class="myHeader">
        <ul>
            <li class="li1"> <a class="logo"><img src="http://static.wbiao.co/p/m/images/1/head-logo.png" alt=""></a>  </li>
            <li class="li2" @click="search"> <a class="a2" href="javascript:;">购表享12期分期免息优惠 <span></span></a></li>
            <li class="li3"><a href="#javascript:;" class="rig"></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        search(){
            this.$router.push({name:"search"})
        }
    }
}
</script>
<style lang="scss" scoped>
.myHeader{
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 1rem;
line-height: 1rem;
background: #fff;
z-index: 10;
margin-bottom: 1rem;
ul{
    width: 100%;
    height: 100%;
    overflow: hidden;
    li{
        list-style: none;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.3rem;
        color: #444;
        float: left;
        .logo{
            display: inline-block;
            width: 1rem;
            height: 0.5rem;
            margin: 0.2rem auto 0;
            img{
                width: 100%;
            }
        }
        .a2{
            display: block;
            text-align: left;
            width: 4.3rem;
            height: 0.5rem;
            line-height: 0.5rem;
            background: #f1f1f1;
            border-radius: 0.25rem;
            font-size: 0.25rem;
            color: #999;
            padding-left: 0.6rem;
}
.esp1 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
        }
        .rig{
            display: inline-block;
            background-image: url(http://101.132.73.191/images/d.png);
            background-position: -4.7rem -1.75rem;
            background-size: 8.2rem;
            width: 0.9rem;
            height: 100%;
        }
    }
    .li1{
        width: 1.35rem;
    }
    .li2{
    height: 0.5rem;
    margin-top: 0.2rem;
    }
    .li3{
        float:right;
    }
}
}
</style>

