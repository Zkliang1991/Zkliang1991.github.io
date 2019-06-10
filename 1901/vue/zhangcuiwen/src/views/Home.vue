<template>
  <div class="home">
      <Head title="首页"  searchShow="false"></Head>
      <div  id="flow">
          <van-notice-bar
          text="船屋，帐篷，蘑菇屋和小木屋……住进童话里的房子，做个天马行空的梦。。"
          left-icon="volume-o"
          color="black"
          />
      </div>
      <h1 class="tit1">周边出游的新选择</h1>
      <div class="divf">
        <div class="box">
            <div class="divc" v-for="(trip,i) in trips" :key="i">
                    <img :src="trip.img" alt="">
                    <p class="divcc">{{trip.titlemore}}</p>
               <!-- <router-link> -->
                    <p class="divccc">
                      <span>{{trip.tips}}</span>
                      <span>{{trip.price}}</span>
                      <span>{{trip.says}}</span>
                    </p>
                  <!-- </router-link> -->
            </div>
            </div>
      </div>

      <h1 class="tit1">美好的生活值得期待</h1>
        <div class="divf1">
        <div class="box">
            <div class="divc1" v-for="(trip,i) in hotel" :key="i">
                    <img :src="trip.img" alt="">
                    <p class="divcc1">{{trip.title}}</p>
                    <p class="divccc">
                      <span>{{trip.service}}</span>
                      <span>{{trip.price}}</span>
                      <span>{{trip.type}}</span>
                    </p>
            </div>
            </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
 import { Button } from 'vant';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return{
        trips:[],
        hotel:[]
    }
  },
  mounted(){
      this.$axios.get("/vue/getCtrap").then(res=>{
            this.trips = res.data.result;
            console.log(this.trips)
        })
      
       this.$axios.get("/vue/getHotel").then(res=>{
            this.hotel = res.data.result;
            console.log(this.trips)
        })
  }
}

</script>
<style>
.home{
  width: 100%;
  overflow: hidden;
}
  #flow{
      /* margin-top: 40px; */
      padding:40px 0 0 0;
      color:white;
  }
  .tit1{
    /* float: left; */
    line-height:40px;
    height: 40px;
    margin:10px 0 5px 0;
    font-weight: 700;
    font-size: 22px;
    width: 80%;
    border-radius: 2%;
    background-color: #fff;
    border:1px solid white;
    /* box-shadow: 10px black;  */
    box-shadow: 5px 5px 5px #888888;
  }
  .divf{
    width: 100%;
    height: 6rem;
    overflow-x: scroll;
  }
  .divf1{
      width: 100%;
    height: 6rem;
    overflow-x: scroll;
  }
 .divf .box{
    height: 6rem;
    width: 1500%;
    /* overflow-x: scroll; */
 }
 .divf1 .box{
    height: 7rem;
    width: 2800%;
    /* overflow-x: scroll; */
 }
  .divf .box .divc{
    height: 4rem;
    width: 6%;
    float: left;
    background-color: #ddd;
    display:inline-block;
    margin:10px 10px;
    border:1px solid silver;
    border-radius:5px;
     box-shadow: 2px 2px 2px white;
  }
    .divf1 .box .divc1{
    height: 4rem;
    width: 3%;
    float: left;
    background-color: #ddd;
    display:inline-block;
    margin:10px 10px;
    border:1px solid silver;
    border-radius:5px;
     box-shadow: 2px 2px 2px white;
  }
  span{
    display:inline-block;
    margin:0.1rem;
  }
  .divcc{
    margin:0.1rem;
    height: .7rem;
  }
    .divcc1{
    margin:0.1rem;
    height: .4rem;
  }
  
  .divccc{
   color: #008489;
   border:1px solid  #008489;
   height: 0.5rem;
   font-size:0.24rem;
   font-weight: 700;
    border-radius:5px;

  }
</style>

