<template>
    <div class='content'>
        <Header title='编辑地址'></Header>
        <div v-if='flag'>
           <AddressEdit :addressDetail='addressDetail'></AddressEdit>
        </div>
        <div v-else>
        <AddressSave></AddressSave>
        </div>
       
      
        哈哈哈
    </div>
</template>
<script>
import AddressSave from '../components/AddressSave'
import AddressEdit from '../components/AddressEdit'
export default {
    data(){
         return{
             flag:false,
             addressDetail:this.$route.query.item
        }
   
    },
    components:{
        AddressEdit,
        AddressSave
    },
    mounted() {
        console.log(23)
        console.log(this.$route.query.item)
        if(this.$route.query.item){
            this.flag=true      
        }  
    }
  
}
</script>

