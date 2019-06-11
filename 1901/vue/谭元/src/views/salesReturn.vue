<template>

    <div>
        <Head title="退货单"></Head>
        <search v-model.lazy="svalue" top="46px" @on-focus="hqFous" @on-cancel="djCancel" >
        </search>

        <x-button plain type="warn" v-model="show" class="cjtuh" @click.native="cjtuh">创建退货单</x-button>
        <div v-transfer-dom>
            <x-dialog v-model="show" class="dialog-demo">
                <div class="img-box">
                    <x-input :min="2" :max="8" class="inputa" title="退货人:" required v-model="thGoods.khname"></x-input>
                    <x-input :min="2" :max="8" class="inputa" title="退货商品:" required v-model="thGoods.goodsname"></x-input>
                    <x-input :min="2" :max="8" class="inputa" title="商品单价:" required v-model="thGoods.goodsprice"></x-input>
                    <x-input :min="2" :max="8" class="inputa" title="商品数量:" type="number" required v-model="thGoods.goodsnum"></x-input>
                    <x-button plain @click.native="goScthd"
                        :disabled="!thGoods.khname ||!thGoods.goodsname ||!thGoods.goodsprice ||!thGoods.goodsnum"
                        class="button_a"     type="warn" >确认创建
                    </x-button>
                </div>
                <div @click="show=false">
                    <span class="vux-close"></span>
                </div>
            </x-dialog>
        </div>

        <div class="xsmx" v-for="(xs,i) in salesDetail"  :key = "i">
            <h2>退货人:{{xs.khname}}</h2>
            <p class="times">申请时间{{xs.insertTime.split(".")[0]}}</p>
            <p >商品名称:<span>{{xs.goodsname}}</span></p>
            <p>销售单价¥:<span>{{xs.goodsprice}}</span></p>
            <p>销售数量:<span>{{xs.goodsnum}}</span></p>
            <p>总退货价¥:<span>{{xs.goodsprice*xs.goodsnum}}</span></p>
            <h3>退货单</h3>
        </div>
         <divider>我是有底线的</divider>
    </div>

    
</template>

<script>
    import {
        Search,
        Cell,
        Divider,
        XInput,
        XDialog,
        XButton,
        Group,
        XSwitch,
        TransferDomDirective as TransferDom
    } from 'vux'
    import {
        mapState,
        mapActions
    } from "vuex" //引入vueX做异步处理
    export default {
        inject:['reload'],  //vue页面刷新方法
        name:'salesReturn',
           data() {
            return {
                show: false,
                thGoods: {},
                svalue:'搜索退货人或者退货商品'
            }
        },
        computed:{
            ...mapState(['salesDetail'])
        },

        directives: {
            TransferDom
        },
        components: {
            Cell,
            Divider,
            XDialog,
            XButton,
            Group,
            XSwitch,
            XInput,
            Search
        },
        methods: {
            ...mapActions(['getSales']),
            cjtuh() { //点击弹出框弹出遮罩层
                this.show = true
            },
            goScthd() {
                console.log(this.thGoods)
                this.show = false
                this.$axios.post("/vue/salesReturn", this.thGoods).then(res => {
                    this.reload()   //逻辑执行完毕之后刷新页面  
                })
            },
            hqFous() { //当获取焦点的时候内容清空
                this.svalue = ''
            },
            djCancel() { //点击取消按钮出发事件
                this.svalue = ''
            },

        },
        created(){  //页面一加载就获取后台数据
            this.getSales({
                url:"/vue/getsalesReturn",
                cb(){
                    console.log("获取数据成功")
                }
            })
        },
        watch:{
            svalue(newVal){
                 console.log(newVal);
            this.getSales({ //通过vuex将数据库的东西进行获取
                url: "/vue/getsalesReturn",
                params:{
                    keyword:newVal
                },
                cb() {
                    console.log("get xs")
                }
            })
              }
        },
    }

</script>


<style lang="less" scoped>
    @import '~vux/src/styles/close';

    .dialog-demo {
        .weui-dialog {
            border-radius: 8px;
            padding-bottom: 8px;
        }

        .dialog-title {
            line-height:30px;
            color: #666;
        }

        .img-box {
            height: 340px;
            overflow: hidden;
           .inputa{
               border: 1px solid black;
           
               border-radius:3px;
               width: 85%;
               margin: 10px auto;

           }
        }

        .vux-close {
            margin-top: 8px;
            margin-bottom: 8px;
        }
        .button_a{
            margin-top:70px;
            width:50%;
        }
    }


    .cjtuh {
        margin-top: 20px;
        width: 40%;
    }

    .xsmx {
        margin:10px auto;
        width: 90%;
        background-color: #ffffff;
        height:130px;
        border: 1px solid #111;
        border-radius: 3px;

        h2 {
            float: left;
            width: 30%;
            height:36px;
            font-size: 16px;
            line-height:36px;
            text-align: left;
        }

        .times {
            float: right;
            width: 70%;
            height:36px;
            line-height: 36px;
             text-align: right;
        }

        p {
            width: 50%;
            float: left;
            height:30px;
            text-align: left;

            span {
                color: #e60012;
            }
        }

        h3 {
            float: right;
            margin-right: 20px;
            height: 32px;
            line-height:32px;
            font-size: 18px;
            background: #e60012;
            border-radius: 3px;
            color: #ffffff;

        }
    }
</style>