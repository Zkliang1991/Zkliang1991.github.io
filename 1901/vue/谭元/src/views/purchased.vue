<template>
  <div>

    <Head title="采购单"></Head>
    <divider>采购单</divider>

    <x-button plain type="warn" v-model="show" class="cjtuh" @click.native="cjtuh">下采购单</x-button>

    <flexbox class="flexboxa">
      <flexbox-item><div class="flex-demo">下单人</div></flexbox-item>
      <flexbox-item><div class="flex-demo">下单时间</div></flexbox-item>
      <flexbox-item><div class="flex-demo">跟踪状态</div></flexbox-item>
    </flexbox>
      <flexbox v-for="(cg,i) in salesDetail" :key="i">
      <flexbox-item><div class="flex-demo">{{cg.sqname}}</div></flexbox-item>
      <flexbox-item><div class="flex-demo">{{cg.insertTime.split(" ")[0]}}</div></flexbox-item>
      <flexbox-item><div class="flex-demo" style="background:red;color:#fff">正在采购</div></flexbox-item>
    </flexbox>
    

    <div v-transfer-dom>
      <x-dialog v-model="show" class="dialog-demo">
        <div class="img-box">
          <x-input class="inputa" title="申请人:" required v-model="thGoods.sqname" :min="2" :max="8"></x-input>
          <x-input class="inputa" title="商品名称:" required v-model="thGoods.goodsname" :min="2" :max="8"></x-input>
          <x-input class="inputa" title="商品数量:"  required v-model="thGoods.goodsnum" :min="2" :max="8"></x-input>
          <x-button plain @click.native="goScthd"
            :disabled="!thGoods.sqname ||!thGoods.goodsname ||!thGoods.goodsnum" class="button_a"
            type="warn">确认创建
          </x-button>
        </div>
        <div @click="show=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>

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
    TransferDomDirective as TransferDom,
      Flexbox, FlexboxItem
  } from 'vux'
  import {mapState,mapActions} from "vuex"
  export default { 
    name: 'purchased',
    inject: ['reload'],
    components: {
      Cell,
      Divider,
      XDialog,
      XButton,
      Group,
      XSwitch,
      XInput,
        Flexbox,
         FlexboxItem
    },
    directives: {
      TransferDom
    },
    computed:{
      ...mapState(['salesDetail'])
    },
    methods: {
      ...mapActions(['getSales']),
      cjtuh() { //点击弹出框弹出遮罩层
        this.show = true
      },
      goScthd() {
       // console.log(this.thGoods)
        this.show = false
        this.$axios.post("/vue/purchasebdaaa", this.thGoods).then(res => {
          this.reload() //逻辑执行完毕之后刷新页面  
        })
      },
    },
    data() {
      return {
        show: false,
        thGoods: {},
      }
    },
    created(){
      this.getSales({
          url:"/vue/purchasebdccc",
          cb(){
             console.log("查询成功")
          }
      })
    }
  }
</script>
<style lang="less" scoped>
  @import '~vux/src/styles/close';
  @import '~vux/src/styles/1px.less';

  .flexboxa {
     margin-top:20px;
     text-align: center;
     color: rgb(253, 251, 251);
     background-color: #043fad;
     border-radius: 3px;
     background-clip: padding-box;
      height: 24px;
   }
   .flex-demo{
     text-align: center;
     background-clip: padding-box;
    height: 24px;
    margin-top: 2px; 
   }


  .dialog-demo {
   
    .weui-dialog {
      border-radius: 8px;
      padding-bottom: 8px;
    }

    .dialog-title {
      line-height: 30px;
      color: #666;
    }

    .img-box {
      height: 350px;
      overflow: hidden;

      .inputa {
        border: 1px solid black;

        border-radius: 3px;
        width: 85%;
        margin: 10px auto;

      }
    }

    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
    }

    .button_a {
      margin-top: 70px;
      width: 50%;
    }
  }


  .cjtuh {
    margin-top: 20px;
    width: 40%;
  }


</style>