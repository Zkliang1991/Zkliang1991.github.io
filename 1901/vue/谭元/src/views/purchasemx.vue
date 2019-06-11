<template>
  <div>

    <Head title="采购明细"></Head>
    <divider>采购明细</divider>
    <div class="divaaa" v-for="(mx,i) in salesDetail" :key="i">
      <div>
        <p class="cgmx">采购明细</p>
      </div>
      <div><span>采购申请人:</span><span>{{mx.sqname}}</span></div>
      <div><span>采购商品名:</span><span>{{mx.goodsname}}</span></div>
      <div><span>下单时间:</span><span>{{mx.insertTime}}</span></div>
      <div><span>下单数量:</span><span>{{mx.goodsnum}}</span></div>

      <x-input title='输入商品价格:' :max="5" v-model="mx.sjprice" placeholder="输入价格和商品后点击提交"></x-input>
      <x-input title='采购商品数量:' :max="5" v-model="mx.sjnum" placeholder="输入价格和商品后点击提交"></x-input>

      <flexbox class="flexboxa">
        <flexbox-item>
          <x-button @click.native="showPlugin(i)" plain type="warn">删除采购单</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button
           @click.native="showPlugin3(i)" 
           plain type="primary"
           :disabled="!mx.sjprice || !mx.sjnum">采购完成</x-button>
        </flexbox-item>
      </flexbox>



    </div>

    <div v-transfer-dom>
      <confirm v-model="show" title="确定操作" @on-confirm="onConfirm">
      </confirm>
    </div>



  </div>
</template>
<script>
  import {
    Flexbox,
    FlexboxItem,
    Divider,
    Confirm,
    Group,
    XSwitch,
    XButton,
    TransferDomDirective as TransferDom,
    XInput
  }
  from "vux";
  import {
    mapState,
    mapActions
  }
  from "vuex";

  export default {
    name: 'purchasemx',
    inject: ['reload'], //刷新页面方法
    directives: {
      TransferDom
    },
    data() {
      return {
        show: false,
        item: {} //设置一个item的标量接受点击事件的值
      }
    },
    computed: {
      ...mapState(['salesDetail'])
    },
    methods: {
      ...mapActions(['getSales']),

      onConfirm() { //点击确定操作之后将数据取值丢入数据库新增一个数据库
        console.log('on confirm')
        console.log(this.item._id);
        this.$axios.post("/vue/inventorycccc", this.item).then(res => {
          this.reload() //逻辑执行完毕之后刷新页面
        });
         this.$axios.post("/vue/inventoryshanchu", this.item).then(res => {
         // this.reload() //逻辑执行完毕之后刷新页面
        })

      },
      showPlugin(key) { //删除采购单按钮.点击直接删除该表格然后不显示
          console.log(key)
          console.log(this.item)
          this.item._id = this.salesDetail[key]._id;
          this.$axios.post("/vue/inventoryshanchu", this.item).then(res => {
            this.reload() //逻辑执行完毕之后刷新页面
        })

      },
      showPlugin3(key) { //点击入库采购单按钮
        this.show = true
        console.log(key)
          this.item._id = this.salesDetail[key]._id;
          this.item.goodsname = this.salesDetail[key].goodsname;
          this.item.sjprice = this.salesDetail[key].sjprice;
          this.item.sjnum = this.salesDetail[key].sjnum;
      }
    },
    components: {
      Divider,
      Confirm,
      Group,
      XSwitch,
      XButton,
      Flexbox,
      FlexboxItem,
      XInput
    },
    created() {
      this.getSales({
        url: "/vue/purchasebdccc",
        cb() {
          console.log("查询成功")
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
  .divaaa {
    width: 95%;
    border: 1.5px solid #bfc5cc;
    margin: 5px auto;


    .cgmx {
      height:38px;
      width: 100%;
      color: #111;
      font-size: 24px;
      text-align: left;
      line-height: 38px;
      border-bottom: 2px solid#D9D9D9;
    }

    div {
      width: 95%;
      margin: 0 auto;
      overflow: hidden;

      span {
        color: #111;
        width: 50%;
        display: block;
        float: left;
        height: 26px;
        line-height: 26px;
        text-align: left;
        border-bottom: 1px solid #D9D9D9;
      }

    }

    .flexboxa {
      width: 60%;

      button {
        font-size: 14px;
      }

      div {
        text-align: left;
      }
    }

  }
</style>