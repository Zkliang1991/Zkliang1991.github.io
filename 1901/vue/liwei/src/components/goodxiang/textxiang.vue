<template>
    
    <div class="textxiang">

        <div class="xiangone">
            <p>
                
                <span>￥</span>
                <span>{{GoodIdStore.goodInfo.goodprice}}</span>
                <span>￥{{GoodIdStore.goodInfo.goodpriceold}}</span>
                <span>包邮</span>
                <span>
                    <van-icon name="like" 
                    size=".5rem" 
                    class="iconthree"  
                    @click="likeFn" 
                    :color="likeColorTwo"
                    v-if="likeFlag" />

                    <van-icon name="like" 
                    size=".5rem" 
                    class="iconthree"  
                    @click="likeFn" 
                    :color="likeColorOne"
                    v-else/>
                </span>
            </p>
            <p>{{GoodIdStore.goodInfo.goodtitleartical}}</p>
        </div>

        <div class="xiangtwo">

            <p>
                <van-tag color="#85dc85">活动</van-tag>
                {{GoodIdStore.goodInfo.active}}
                
            </p>
            <p>
                <span>24小时发货</span>
                <span>7天包邮</span>
                <span>售后补贴</span>
                <em></em>
            </p>

        </div>
    </div>

</template>

<script>
import {mapState} from 'vuex'

import Vue from 'vue'
import { Toast } from 'vant';
Vue.use(Toast);


export default {
    data(){
        return {
            likeColorOne:'rgba(0,0,0,.2)',
            likeColorTwo:'#ff464e',
            likeFlag:false,
            daojishi:''
        }
    },
    computed:{
        ...mapState([
            'GoodIdStore'
        ])
    },
    methods:{
        likeFn(){
            this.likeFlag=!this.likeFlag
            if(this.likeFlag){
                this.$toast.success('已添加至收藏');
            }else{
                this.$toast.success('已取消收藏');
            }
        }
    },
    mounted(){

    }

}
</script>


<style lang="scss" scoped>
    .xiangone{
        width: 100%;
        overflow: hidden;
        padding-bottom: .2rem;
        background: #ebe6e6;
        p{
            background: white;
        }
        p:first-child{
            position: relative;
            height: .7rem;
            padding-top: .1rem;
            span{
                float: left;
                height: 100%;
            }
            span:first-child{
                color:#ff464e;
                margin-left: .1rem;
                line-height: .7rem;
            }
            span:nth-child(2){
                font-size:.4rem;
                color:#ff464e;
                line-height: .7rem;
            }
            span:nth-child(3){
                line-height: .8rem;
                font-size:.20rem;
                color:#988f90;
                margin-left: .1rem;
                text-decoration: line-through;
            }
            span:nth-child(4){
                width: .7rem;
                height: .27rem;
                font-size: .2rem;
                margin-top: .16rem;
                margin-left: .2rem;
                background: #ff464e;
                text-align:center;
                color:white;
                line-height: .27rem;
                padding: .05rem;
                border-radius: .05rem;
            }
            span:nth-child(5){
                float: right;
                .iconthree{
                    margin-top: .1rem;
                    margin-right: .2rem;
                }
            }
            
        }

        p:last-child{
            padding: 0 .3rem;
            padding-top: .1rem;
            padding-bottom: .1rem;
            line-height: .4rem;
            font-size: .3rem;
        }
    }

        .xiangtwo{
            padding-bottom: .2rem;
            background: #ebe6e6;
            p{
                padding: .2rem 0;
                line-height: .4rem;
                font-size: .2rem;
                background: white;
                padding-left: .2rem;
            }
            p:first-child{
                border-bottom: 1px solid rgb(250, 236, 236);
            }
            p:last-child{
                span{
                    margin: 0 .1rem;
                }
            }
        }


</style>


