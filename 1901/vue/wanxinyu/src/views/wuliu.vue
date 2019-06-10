<template>
    <div>
        <Head title="物流信息" :show="!!1" ></Head>
        <div id="container"></div>
        <div class="gogo" @click="tiaoxiaofei">点击查看最近消费记录</div>
        <div class="yiwen" @click="kefu">
            <p>如有疑问，请点击联系商家</p>
        </div>
        <div class="yiwen">
            <p>本数据由菜鸟驿站提供</p>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
         Highcharts.chart('container', {
            chart: {
                type: 'timeline'
            },
            xAxis: {
                visible: false
            },
            yAxis: {
                visible: false
            },
            title: {
                text: '商品物流表'
            },
            subtitle: {
                text: ''
            },
            colors: [
                '#4185F3',
                '#427CDD',
                '#406AB2',
                '#3E5A8E',
                '#3B4A68',
                '#363C46'
            ],
            series: [{
                data: [{
                    name: '发送地址',
                    label: '广东省深圳',
                    description: '2019年5月30号商家收到付款'
                }, {
                    name: '开始派发',
                    label: '于2019年5月31号商家从仓库提货',
                    description: '提货中....'
                }, {
                    name: '派发中',
                    label: '商家从仓库提货成功',
                    description: '在路上...'
                }, {
                    name: '到达湖北武汉江夏区',
                    label: '正在前往江夏区仓库',
                    description: '于下午14:00到达附近菜鸟驿站'
                }, {
                    name: '到达金融港四路',
                    label: '将于2019.06.01送到B18栋',
                    description: '已和前台小姐姐进行交流，您的快递我们放到前台'
                }, {
                    name: '即将到达，请注意接收',
                    label: '将于六月一号送到',
                    description: '祝您愉快'
                }]
            }]
        });
    },
    methods:{
        tiaoxiaofei(){
            this.$router.push({name:"xiaofei"})
        },
        kefu(){
            this.$router.push({name:"liaotian"})
        }
    }
}
</script>

<style scoped lang="less">
#container{
    margin-top:0.83rem;
}
.yiwen{
    background-color: #eaeaea;
    line-height: 1.5rem;
    margin-bottom: 0.2rem;

    p{
        text-align: center;
        font-size: 0.3rem;
    }
}
</style>
