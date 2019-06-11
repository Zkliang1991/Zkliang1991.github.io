<template>
    <div>
        <Head title="社区"></Head>
        <div class="sq">
            <p style="font-size:20px;font-weight:900">精选贴</p>
            <img src="../assets/images/cat.jpg" alt="" class="cat"> 
            <ul>
                <li>
                    <img src="../assets/images/shaidan.png" alt="" class="sun">
                    <span>日常晒单</span>
                </li>
                <li>
                    <img src="../assets/images/in.png" alt="" class="sun">
                    <span>急速出货</span>
                </li>
                <li>
                    <img src="../assets/images/shouhuo.png" alt="" class="sun">
                    <span>等待收货</span>
                </li>
                <li>
                    <img src="../assets/images/coudan.png" alt="" class="sun">
                    <span>一起凑单</span>
                </li>
            </ul>
            <p style="margin:20px 0;font-size:15px;font-weight:900">海淘贝APP积分兑换规则、每周五统一给大家发货</p>
        </div>
    </div>
</template>

<style scoped>
    .sq{
        width: 100%;
        height: 20%;
    }
    .cat{
        width: 100%;
    }
        ul{
        width: 100%;
        overflow: hidden;
    }
    li{
        float: left;
        width: 25%;
        height: 70px;
        margin-top:20px;
        text-align: center;
    }
    .sun{
        margin:10px 30%;
        width: 30px;
        height: 30px;
    }
</style>
