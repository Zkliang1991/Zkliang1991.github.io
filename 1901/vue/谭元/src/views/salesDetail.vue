<template>
    <div>

        <Head title="销售挂单明细"></Head>
        <divider>销售明细</divider>
        <search v-model.lazy="svalue" top="46px" @on-focus="hqFous" @on-cancel="djCancel" >
        </search>

        <div class="xsmx" v-for="(xs,i) in salesDetail" :key="i">
            <h2>客户姓名:{{xs.khname}}</h2>
            <p class="times">{{xs.insertTime.split(".")[0]}}</p>
            <p>商品名称:<span>{{xs.goodsname}}</span></p>
            <p>销售单价¥:<span>{{xs.goodsprice}}</span></p>
            <p>销售数量:<span>{{xs.goodsnum}}</span></p>
            <p>总价格¥:<span>{{(xs.goodsprice*xs.goodsnum).toFixed(2)}}</span></p>
            <p>销售员:<span style="color:rgb(161, 49, 226)">{{xs.xsname}}</span></p>
            <h3>销售单</h3>
        </div>
        <divider>我是有底线的</divider>
    </div>
</template>


<script>
    import {
        Divider,
        Search,
        Group,
        Cell,
    } from 'vux'
    import {
        mapState,
        mapActions
    } from "vuex"
    export default {
        data() {
            return {
                svalue: '搜索销售或者商品',
                // salesDetail:[]
            }
        },
        computed: { //计算属性
            ...mapState(['salesDetail']) //计算属性只能放mapState
        },
        methods: { //事件属性
            ...mapActions(['getSales']), //vuex辅助函数
            hqFous() { //当获取焦点的时候内容清空
                this.svalue = ''
            },
            djCancel() { //点击取消按钮出发事件
                this.svalue = ''
            },
            // onChang() { //点击了取消按钮之后打印了666
            //     console.log(this.svalue)
            // },


        },
        created() { //钩子函数页面加载就进来
            this.getSales({ //通过vuex将数据库的东西进行获取
                url: "/vue/grPerformance",
                cb() {
                    console.log("get xs")
                }
            })
        },
        watch:{
            svalue(newVal){
                 console.log(newVal);
            this.getSales({ //通过vuex将数据库的东西进行获取
                url: "/vue/grPerformance",
                params:{
                    keyword:newVal
                },
                cb() {
                    console.log("get xs")
                }
            })
              }
        },
        components: {
            Divider,
            Search,
            Group,
            Cell
        },

    }
</script>


<style lang="scss" scoped>
    .xsmx {
        margin: 10px auto;
        width: 90%;
        background-color: #ffffff;
        height:130px;
        border: 1px solid #111;
        border-radius: 3px;

        h2 {
            font-weight: 800;
            float: left;
            width: 50%;
            height: 36px;
            font-size: 18px;
            line-height:36px;
            text-align: left;
        }

        .times {
            float: right;
            width: 50%;
            height: 36px;
            line-height:36px;
            text-align: right;
        }

        p {
            width: 50%;
            float: left;
            height: 30px;
            text-align: left;

            span {
                color: #e60012;
            }
        }

        h3 {
            float: right;
            margin-right:2px;
            height: 32px;
            line-height:32px;
            font-size: 18px;
            background: #555555;
            border-radius: 3px;
            color: #ffffff;

        }
    }
</style>