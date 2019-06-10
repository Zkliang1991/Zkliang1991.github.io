<template>
    <div>
        <Head title="我的消费" :show="!!1" ></Head>
        <div>
            <div id="xiaofeibiao"></div>
        </div>
        <!-- <div class="bg" v-else>
            <img :src="require('../assets/images/777.png')" class="img777">
            <h2 class="kong777">您最近没有进行消费</h2>
            <div class="quqianggou" @click="quxiaofei">去消费</div>
        </div> -->
        <div class="gogo" @click="tiaozhanbi">点击查看我的消费构成表</div>
        <div class="yiwen" @click="kefu">
            <p>如有疑问，请点击联系客服</p>
        </div>
        <div class="yiwen">
            <p>本数据由京东客服提供</p>
        </div>
    </div>
</template>

<script>
import { http } from "../utils";
import {mapState,mapMutations,mapActions} from 'vuex';
export default {
    data(){
        return{
            text:"最近消费情况",
            time:[],
            money:[],

        }
    },
    mounted(){
        //获取数据
        http.get("/vue/getgoodcar2",{
            params:{
                username:this.username
            }
        }).then(res=>{
            var List=res.data.result;
            for(var i=0;i<List.length;i++){
                var item=List[i];
                this.time.push(item.goumaitime);
                this.money.push(item.goodnum*item.goodprice);
            }
            var chartone = Highcharts.chart('xiaofeibiao', {
                chart: {
                    type: 'column'
                },
                title: {
                    text:this.text
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories:this.time
                },
                yAxis: {
                    labels: {
                        x: -15
                    },
                    title: {
                        text: '金额(元)'
                    }
                },
                series: [{
                    name: '消费时间/消费金额',
                    data: this.money
                }],
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 350
                        },
                        // Make the labels less space demanding on mobile
                        chartOptions: {
                            xAxis: {
                                labels: {
                                    formatter: function () {
                                        // return this.item.goodprice
                                    }
                                }
                            },
                            yAxis: {
                                labels: {
                                    align: 'left',
                                    x: 0,
                                    y: -2,
                                },
                                title: {
                                    text: ''
                                }
                            }
                        }
                    }]
                }
            });
        })
    },
    computed:{
        ...mapState(['username']),
    },
    methods:{
        // quxiaofei(){
        //     this.$router.push({name:"home"});
        // }
        tiaozhanbi(){
            this.$router.push({name:"xiaofeizhanbi"});
        },
        kefu(){
            this.$router.push({name:"liaotian"});
        }
    }

}
</script>

<style lang="less">
.yiwen{
    background-color: #eaeaea;
    line-height: 1.5rem;
    margin-bottom: 0.2rem;

    p{
        text-align: center;
        font-size: 0.3rem;
    }
}
.gogo{
    margin-left: 10%;
    background: rgba(22, 206, 226, 0.52);
    width: 80%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    margin-bottom: 0.2rem;
    border-radius: 10px;
    color: #463311;
}
</style>
