<template>
    <div>
         <Head title="首页" ></Head>   
         <div class="main">
            <Swipe 
            id="banner"
            :options="{autoplay:true,speed:1500}"
        >
            <div class="swiper-slide slide" v-for="(img,i) in imgs" :key="i">
                <img :src="img" alt="" class="swiper-img" >
            </div>
        </Swipe> 

  <ul  id="ico">
            <li>                
                <img src="../assets/images/ico1.jpg" alt="">
                <p>限时秒杀</p>           
            </li>
            <li>
                <img src="../assets/images/ico2.jpg" alt="">
                <p>断码清仓</p>
            </li>
            <li>
                <img src="../assets/images/ico3.jpg" alt="">
                <p>品牌馆</p>
            </li>
            <li>
                <img src="../assets/images/ico4.jpg" alt="">
                <p>多多果园</p>
            </li>
            <li>
                <img src="../assets/images/ico5.jpg" alt="">
                <p>9块9特卖</p>
            </li>
             <li>
                <img src="../assets/images/ico6.jpg" alt="">
                <p>充值中心</p>
            </li>
            <li>
                <img src="../assets/images/ico7.jpg" alt="">
                <p>百亿补贴</p>
            </li>
            <li>
                <img src="../assets/images/ico8.jpg" alt="">
                <p>现金签到</p>
            </li>
            <li>
                <img src="../assets/images/ico9.jpg" alt="">
                <p>赚大钱</p>
            </li>
            <li>
                <img src="../assets/images/ico10.jpg" alt="">
                <p>电器城</p>
            </li>
         </ul> 

 <div id="ad1">
        <img src="../assets/images/ad1.jpg" alt="">
    </div>


    <div> 
        <div v-for="(good,i) in item" :key="i" class="item good"  style="display:flex;flex:wrap">
               <img :src="good.img" alt=""  @click="gonext(good._id,good.img,good.price,good.name)">
               <p>{{good.name}} <br>
               <i>RMB  {{good.price}}</i>
               </p>             
        </div>
    </div>

        </div>     
    </div>
</template>
<script>

export default {
    
     data(){
        return{
            imgs:[
                require("@/assets/images/banner1.jpg"),
                require("@/assets/images/banner2.jpg"),
                require("@/assets/images/banner3.jpg"),
                require("@/assets/images/banner4.jpg"),
                require("@/assets/images/banner5.jpg"),
                require("@/assets/images/banner6.jpg"),
            ],
            item:[

            ],
            // content:[
            //     good._id,
            //     good.img,
            //     good.price,
            //     good.name
            // ]
           
        }
    },
     methods:{
         gonext(id,img,price,name){
            //  :to="{name:'goodsdetail',query:{id:good._id,img:good.img,price:good.price,title:good.name}}" 
            //  alert("11")
              this.$router.push({name:"goodsdetail"});
            //  window.sessionStorage.userInfo = JSON.stringify({token:res.data.token});         
                 window.sessionStorage.goodsinformation = JSON.stringify({id:id,img:img,price:price,title:name});
         }
        // gotodetail(){
        //     this.$router.push({name:"goodsdetail",params:{id:good._id}});
        // },
        
    },
    created(){
        this.$axios.get("/vue/getGoodList",{
            params:{
                limit:10
            }
        }).then(res=>{
            //console.log(res)
         this.item=res.data.result
        })
    }
    
}
</script>


<style scoped lang='scss'>
.slide,.swiper-img{
    width:100%;
    height:4rem;
}
#ico{
    margin-top: 2%;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    flex-wrap:wrap; 
    li {
        width:20%;
        text-align: center;
        img{
            padding-left: 25%;
            text-align: center;
            width:50%;
            height:50%;
        }
        p{
            text-align: center;
        }
    }
}
#ad1 img{
    width: 100%;
    height: 3rem;
}
.good {
    margin: 2%;
    border:1px solid #666;
    img{
        width: 50%;
        height: 50%;
    }
    p{
        margin-top:5%;
        margin-left:2%;
       height: 2rem;
        i{
        color: red;
        margin-top: 2%;
        // margin-bottom: 2%;
    }
    }
    
}

</style>