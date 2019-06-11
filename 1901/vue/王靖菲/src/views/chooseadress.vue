<template>
    <div>
        <div class="confirm">
            <van-icon  name="arrow-left" size="0.4rem"/>
            <p class="confirm2">选择地址</p>
        </div>
        <div class="adress" @click="changead">
            <p class="adre1">哈哈
                <span class="adtel">15927192125</span>
            </p>
            <div class="adre2">
                <span>[默认]</span>
                武汉市江夏区x小区x号
            </div>
            <van-icon name="setting" size="0.5rem" />
        </div>
        <div class="add" @click="addnew">添加新地址</div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        changead(){

        },
        addnew(){
            this.$router.push({name:"changeadress"})
        }
    }
    
}
</script>


<style lang="scss" scoped>
.confirm{
    overflow: hidden; height: 0.88rem;
    .van-icon{
        line-height: 0.96rem; width: 10%;
        margin-left:8%; float:left;
    }
    .confirm2{
        float:left; text-align: center;
        text-align: center; width: 70%;
        font-size: 18px; line-height: 0.88rem;
        color: #222121; margin-right: 10%;
        font-weight: 700; 
        
    }
}
.adress{
    padding:0.4rem 0.2rem; position: relative;
   border-bottom: 1px solid #efefef;
    background-color: #fff;
    background-position: bottom;
    background-repeat: repeat-x;
    background-size: 110%;    
    .van-icon{
        position: absolute;  right: 0.8rem;
        top:0.8rem;
    }
    .adre1{
            color: #222121;
        font-size: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        .adtel{
            margin-left:0.2rem;
            font-family: HelveticaNeue-Medium;
        }
    }
    .adre2{
            margin-top:0.16rem;
            color: #4f5156;
            font-size: 14px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            line-height: 0.34rem;
        span{
            color:#be4c4b;
            font-size: 14px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            line-height: 0.34rem;
        }
    }
    
}
.add{
    text-align: center;
    font-size: 14px;
    line-height: 44px;
    color: #fff;
    position: fixed; bottom: 0; left: 0;
    width: 100%; background-color: #be4c4b;
}
</style>

