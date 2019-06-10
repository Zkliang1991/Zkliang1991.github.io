<template>
    <div>
        <Header title='确认订单'></Header>
        <div class='content'> 
            <div class='defaltAddres'>
                <p><span class='user'>{{defaltAddress.name}}</span><span class='pnone-number'>{{defaltAddress.tel}}</span></p>
                <p class='address'> {{defaltAddress.address}}   <b @click='toAdress'>></b></p>

            </div>
            <div>
                <Settlement></Settlement>
                
            </div>
        </div>
      
    </div>
</template> 
<script>
import Settlement from "./../components/Settlement";
export default {
 data(){
     return{
         defaltAddress:{}
     }
 },
  components: {
    Settlement
  },
  methods: {
      toAdress(){
          this.$router.push({name:'address'})
      }
      
  },
  created(){
      console.log(window.localStorage.defaltAddress);
      
      this.defaltAddress=JSON.parse(window.localStorage.defaltAddress);
     // console.log(typeof this.defaltAddress)
  }
};
</script>
<style lang='scss' scoped>
.defaltAddres {
  //width: 100%;
  color: #323233;
  font-size: 14px;
  height: 1.5rem;
  background-color: #fff;
  //padding: 10px 15px;;
  margin: 0.1rem 0.2rem 0.1rem 0.2rem;
  box-sizing: border-box;
  border-radius: 0.1rem;
  text-align: left;
  padding: 0.2rem;
  .user {
    color: #323233;
    font-size: 14px;
  }
  .pnone-number {
    color: #969799;
    font-size: 14px;
  }
  .address {
    color: #323233;
    font-size: 12px;
    margin: 0.2rem 0;
    b {
      //font-size: 18px;
      float: right;
      color: #323233;
      padding:0 .3rem;
    }
  }
}
</style>

