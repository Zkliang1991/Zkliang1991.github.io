<template>
    <div class="hotsale">
        <h1>猜你喜欢</h1>
        <van-list
        v-model="loading"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
        >
             <ul @click="goodsdetail">
                <li v-for="(item,index) in list" :key="index">
                    <router-link :to="{name:'goodsDetail',query:{goodsId:item._id}}">
                    <div class="img">
                        <img :src="item.goodsimg" alt="">
                        <span>多颜色</span>
                    </div>
                    <div class="content">
                        <p>{{item.goodsname}}</p>
                        <h5>{{item.goodstexture}}</h5>
                        <div class="tag">
                            <span>{{item.tag}}</span>
                        </div>
                        <div class="price">
                            <span>¥{{item.goodsprice}}</span>
                            <del>¥738</del>
                            <p>相似</p>
                        </div>
                    </div>  
                    </router-link>
                </li>
            </ul> 
        </van-list>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list: [],
            error: false,
            loading: false
        }
    },
    mounted(){
        this.$axios.get("/vue/allgoods",).then(res=>{
            this.list=res.data.result
        })

 
    },
    methods:{
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                var length=this.list.length;
                var num=Math.floor(Math.random()*10)
                console.log(num)


                for (let i = 0; i < 10; i++) {
                this.list.push(this.list.length + 1);
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                this.finished = true;
                }
            }, 500);
        },
        goodsdetail(){
            this.$router.push({name:'goodsDetail'})

        }
    },
    computed:{

    }

}
</script>


<style lang="scss" scoped>
.hotsale{
    padding:0.26rem 0;
    background-color: white;
    margin-bottom: 0.2rem;
    h1{
        padding-top: 0.15rem;
        padding-left: 0.3rem;
        font-size: 18px;
        color: #1a1a1a;
    }
    ul{
        margin-top:0.1rem; overflow: hidden;
        width:100%;
        
        li{
           
            height: 5.7rem;
            width:48%; float:left; margin-left: 1%;
            border-radius: 8px;
            border: 1px solid #e6e6e6;
            .img{
                width:100%; height: 60%; position: relative;
                img{
                    width:100%; height: 100%; border-radius: 8px;
                }
                span{
                    position: absolute; bottom: 4%; left: 2%;
                        padding: 0.02rem 0.1rem;
                        font-family: PingFangSC-Regular;
                        font-size: 10px;
                        color: #4f5156;
                        background: #fff;
                        border-radius: 0.04rem;
                        line-height: 0.24rem;
                        display: inline-block;
                }
            }
            .content{
                    padding: 0.14rem 0.2rem;
                    border-top: 0;
                    p{
                        color:rgb(34, 33, 33);
                        font-family:Helvetica, SimHei;
                        font-size:14px;
                        font-weight:400;
                        margin-bottom: 0.12rem;
                        margin-top: 0.04rem;
                    }
                    h5{
                        font-size: 12px;
                        color: #a28a7d;
                        height:0.24rem;
                        line-height: 0.24rem;
                    }
                    .tag{
                        margin:0.15rem 0; height: 0.34rem;
                        span{
                            display:inline-block;
                            text-align: center; box-sizing: border-box;
                            color: #be4c4b; height: 0.34rem;
                            border: 1px solid #be4c4b;
                            line-height:0.34rem;
                            padding: 0 0.08rem;
                            border-radius: 0.04rem;
                            font-size: 11px;
                            margin-right:0.04rem;
                        }
                    }
                     .price{
                        color: #be4c4b;
                        margin: 0.2rem 0 0.1rem;
                        display: -webkit-box;
                        display: flex;
                        -webkit-box-pack: start;
                        justify-content: flex-start;
                        -webkit-box-align: center;
                        align-items: center;
                        height: 0.32rem;
                        font-family: PingFangSC-Medium;
                        font-weight: 500;  position: relative;
                        del{
                            margin-left: 0.1rem;
                            font-size: 11px;
                            font-family: PingFangSC-Regular;
                            font-weight: 400;
                            color: #7d7d7d; 
                        }
                        p{
                            position: absolute;
                            line-height: 0.32rem;
                            padding: 0 0.06rem;
                            right: 0;
                            bottom: 0;
                            font-size: 10px;
                            font-family: PingFangSC-Regular;
                            font-weight: 400;
                            text-align: center;
                            color: #4f5156;
                            border: 1px solid #e6e6e6;
                            border-radius: 0.32rem; margin:0;
                        }
                    }
            }
           
        }
    }
}
</style>



