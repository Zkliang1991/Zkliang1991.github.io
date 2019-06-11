<template>
    <div>
        <van-row type="flex" justify="center">
            <van-col span="14">
                <img src="@/assets/images/login_btn.webp" alt="">
                <router-link to="/loginindex">
                <van-button round >现在登录</van-button>
                </router-link> 
            </van-col> 
        </van-row>
            <span class="span">联系客服</span>
    </div>         
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
div{
    text-align: center;
    .van-row{
        height: 10rem;
        background-color: rgb(242, 235, 230);
        .van-col{
            position: relative;
            img{
                width: 100%;
                position: absolute;
                top: 2.5rem;
            }
            .van-button{
                background-color: #be4c4b;
                color:white;
                width:3.4rem; border: radius 0.8rem;
                position: absolute; bottom: 1rem;
                left: 0; right: 0; margin:auto;
            }
        }
    }
    .span{
        height: 1.6rem;
        line-height: 1.6rem;
        font-size:14px;
    }
}


</style>
