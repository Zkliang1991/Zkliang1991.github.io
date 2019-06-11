<template>
  <div>

    <Head :left-options="{showBack:true}" title="哈凡进销管理系统"></Head>
    <h2>销售</h2>
    <grid>
      <grid-item label="销售明细" @click.native="goXsmx" >
        <img slot="icon" src="../assets/1.png">
      </grid-item>
         <grid-item label="挂销售单" @click.native="goXsd">
        <img slot="icon" src="../assets/2.png">
      </grid-item>
         <grid-item label="销售退货单" @click.native="goThd">
        <img slot="icon" src="../assets/3.png">
      </grid-item>
    </grid>
     <h2>采购</h2>
    <grid>
      <grid-item label="采购明细"  @click.native="goCgmx">
        <img slot="icon" src="../assets/4.png">
      </grid-item>
         <grid-item label="采购单" @click.native="goCgd">
        <img slot="icon" src="../assets/5.png">
      </grid-item>
         <grid-item label="采购退货单" @click.native="goCgth">
        <img slot="icon" src="../assets/6.png">
      </grid-item>
    </grid>
      <h2>其他</h2>
    <grid>
      <grid-item label="商品"  @click.native="goGoods" >
        <img slot="icon" src="../assets/7.png">
      </grid-item >
      <grid-item label="客户"  @click.native="goClient" >
        <img slot="icon" src="../assets/8.png">
      </grid-item>
         <grid-item label="供应商"  @click.native="goSupplier">
        <img slot="icon" src="../assets/9.png">
      </grid-item>
    </grid>
        <h2>统计</h2>
    <grid>
      <grid-item label="财务"   @click.native="goMonnery">
        <img slot="icon" src="../assets/10.png">
      </grid-item >
      <grid-item label="库存"   @click.native="goInventory">
        <img slot="icon" src="../assets/12.png">
      </grid-item >
      <grid-item label="统计"   @click.native="goStatis">
        <img slot="icon" src="../assets/11.png">
      </grid-item>
    
    </grid>
     <Foot></Foot>
  </div>
    
</template>

<script>

  import {
    Grid,
    GridItem,
  } from 'vux'
  export default {
    name: 'home',
    components: {
      Grid,
      GridItem,

    },
    methods:{
      goXsmx(){ //去销售明细界面
        this.$router.push({name:'salesDetail'})
      },
      goXsd(){//去销售单页面
        this.$router.push({name:'salesDetail1'})
      },
      goThd(){ //去退货单页面
         this.$router.push({name:'salesReturn'})
      },
      goCgmx(){ // 点击去采购详情页面
         this.$router.push({name:'purchasemx'})
      },
      goCgd(){ //点击进入采购单页面
        this.$router.push({name:'purchased'})
      },
      goCgth(){ //点击进入采购退货
        this.$router.push({name:'purchaseth'})
      },
      goGoods(){ //点击进入商品页面
         this.$router.push({name:'goods'})
      },
      goClient(){  //点击进入客户页面
          this.$router.push({name:'client'})
      },
      goSupplier(){  //点击进入供应商界面
          this.$router.push({name:'supplier'})
      },
      goMonnery(){//点击进入财务页面
          this.$router.push({name:'stock'})
      },
      goStatis(){//点击进入统计页面
          this.$router.push({name:'statis'})
      },
      goInventory(){
          this.$router.push({name:'inventory'})
      }
    }
  }
</script>

<style scoped>

  h2{
    height:33px;
    line-height: 35px;
    font-size:17px;
    color:black;
  }
</style>