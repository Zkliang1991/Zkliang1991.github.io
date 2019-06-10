<template>  
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" >
            <!-- <p>刷新次数: {{ count }}</p> -->
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <div v-for="(goods,i) in list" :key="i" class="goods" @click="checkinfo(goods._id)">
                <!-- {{goods.category}} -->
                <div class="imgbox">
                    <img :src="goods.front_cover_image_list[0]" alt="">
                    <i class="iconfont icon-zan1"></i>
                </div>
                <p>{{goods.title}}</p>
                <p class="shopinfo">{{goods.poi}} · {{goods.category}}</p>
                <p class="dayprice">
                    <span class="day">截止至{{goods.time.end}}</span>
                    <span class="price">￥{{goods.price.toFixed(2)}}</span>
                </p>
            </div>

            </van-list>
        </van-pull-refresh>
        <!-- <p v-if="!show">暂时没有查询到数据，去看看其他的吧</p> -->
    </div>
</template>
<script>
// import { PullRefresh  } from 'vant';
export default {
    props:{
        goodslist:Array
    },
     data() {
    return {
      count: 0,
    counts:0,
      isLoading: false,
       list: [],
      loading: false,
      finished: false,
      show:true
    }
  },
    // mounted(){
    //     // console.log(this.goodslist.length)
    //     if(this.goodslist.length==0){
    //         this.show=false;
    //     }else{
    //         this.show=true;
    //     }
    // },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
        this.list=this.list.reverse()

    },
     onLoad() {
      // 异步更新数据

      setTimeout(() => {
       let num=10
        for (let i = 0; i < num; i++) {  
            // var length=this.list.length     
            var index=i+this.counts; 
          this.list.push(this.goodslist[index]);     
        //   console.log(this.list.length)   
            if(i==9){               
                    this.counts=this.counts+10;                      
            }
            if(this.counts/10==Math.floor(this.goodslist.length/10)){                
                num=this.goodslist.length%10
            }
              
        }
        
        // 加载状态结束
        this.loading = false;
    // console.log(this.list.lenth)
        // 数据全部加载完成
        if (this.list.length >= this.goodslist.length ) {
          this.finished = true;
        }
      }, 500);
    },


//查看详细信息
    checkinfo(id){
        // alert(id)
        this.$router.push(`/goodsinfo?id=${id}`)

    }


  }
}
</script>
<style lang="scss" scoped>
div{
    width:100%;
    margin-top:.4rem;
    // height: 5rem;
    .van-pull-refresh{
        margin-bottom: .8rem;
    }
    .van-list{
         .goods{
        width:100%;
        background: #fff;
        .imgbox{
            width:80%;
            margin:auto;
            padding: .3rem 0 ;
            position: relative;
            img{
                width: 100%;
            }
            .iconfont{
                // color:#fff;
                color:rgba(0,0,0,.5);
                font-size:30px;
                // font-size: .3rem;
                position: absolute;
                top:.4rem;
                right:.2rem;
            }
        }
        p{
            width:80%;
            margin:auto; 
            text-align: left;
            line-height: .6rem;
          
        }
        .shopinfo{
            color:#999;
        }
        .dayprice{
            overflow: hidden;
              .day{
                float:left;
                font-size:14px;
                color:#999;
             }
             .price{
                float: right;
                font-size:14px;
                color:rgb(197, 53, 53);
             }
        }
    }
    }
   
   
}
</style>
