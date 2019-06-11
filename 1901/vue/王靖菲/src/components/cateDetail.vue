<template>
    <div>
        <van-row type="flex" justify="space-around">
            <van-col span="4" class="col1">
                <van-icon name="arrow-left" size="0.5rem" color="rgb(34, 33, 33)"/>
            </van-col>
            <van-col span="16" class="col2">沙发</van-col>
            <van-col span="4" class="col3">
                <van-icon name="search" class="icon2" size="0.5rem" />
            </van-col>
        </van-row>
    </div>
</template>

<style lang="scss" scoped>
.van-row{
    text-align: center; height:0.88rem; line-height:0.88rem;
    .col1{
        position: relative;
        .van-icon{
            position: absolute;
            top: 0.2rem; left: 0.25rem;
        }
    }
    .col2{
        font-size: 18px;
        color: #222121;
        font-weight: 700;
    }
    .col3{
        position: relative;
        .van-icon{
            position: absolute;
            top: 0.2rem; left: 0.25rem;
        }
    }
}
</style>

