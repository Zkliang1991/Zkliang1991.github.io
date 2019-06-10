<template>
    <div>
        <Head title="我的消费" :show="!!1" ></Head>
        <div id="container2" style="min-width:360px;height:400px"></div>
        <div class="yiwen">
            <p>经过该计算，推测您是一位--{{leixing}}</p>
        </div>
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
        return {
          zhanbiList:[],
          leixing:"",

        }
    },
    mounted(){
        http.get("/vue/getgoodcar2",{
            params:{
                username:this.username
            }
        }).then(res=>{
            var biglist=res.data.result;
            for(var i=0;i<biglist.length;i++){
                var item=biglist[i];
                if(this.zhanbiList.length==0){
                    this.zhanbiList.push([item.goodvalue,item.goodnum*item.goodprice])
                }else{
                    for(var j=0;j<this.zhanbiList.length;j++){
                        if(this.zhanbiList[j][0]==item.goodvalue){
                            this.zhanbiList[j][1]=item.goodnum*item.goodprice+this.zhanbiList[j][1];
                            break;
                        }
                        if(j==this.zhanbiList.length-1){
                            this.zhanbiList.push([item.goodvalue,item.goodnum*item.goodprice])
                        }
                    }
                }
            }
                var charttwo = Highcharts.chart('container2', {
                    chart: {
                        spacing : [40, 0 , 40, 0]
                    },
                    title: {
                        floating:true,
                        text: '消费占比'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                }
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        innerSize: '50%',
                        name: '消费占比',
                        data: this.zhanbiList,
                    }]
                }, function(c) { // 图表初始化完毕后的会掉函数
                    // 环形图圆心
                    var centerY = c.series[0].center[1],
                        titleHeight = parseInt(c.title.styles.fontSize);
                    // 动态设置标题位置
                    c.setTitle({
                        y:centerY + titleHeight/2
                    });
                });
        })

        if(this.zhanbiList.length<=1){
            this.leixing="没有女朋友的单身狗"
        }else if(this.zhanbiList.length>2&&this.zhanbiList.length<=4){
            this.leixing="有钱人"
        }else{
            this.leixing="王思聪？"
        }

    },
    computed:{
        ...mapState(['username']),
    },
    methods:{
        kefu(){
            this.$router.push({name:"liaotian"})
        }
    }
}
</script>


