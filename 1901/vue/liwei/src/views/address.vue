<template>
    <div class="dizhi">
        <van-nav-bar
        title="地址管理"
        right-text="首页"
        left-arrow
        @click-left="onClickLeft"
        @click-right="$router.push({name:'home'})"
        />
        <div class="dizhihave" v-if="list.length>0">
        <van-address-list 
        v-model="chosenAddressId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        />
        <h1 v-if="chosenAddressId==-1" class="morentishi">
            您还没有选择地址哟,您也可以点击编辑设置默认地址,下次无须再次选择
        </h1>
        </div>
        <div class="dizhino" v-else>
            <img :src="dizhinoimg" alt="" class="imgno">
            <h1 class="dizhitextno">还没有收货地址哟</h1>
            <van-button plain type="danger" class="dizhibutton" @click="tianjia">添加地址</van-button>
        </div>


    </div>
</template>

<script>
import Vue from 'vue'
import { AddressList } from 'vant';
Vue.use(AddressList);
import { NavBar } from 'vant';
Vue.use(NavBar);
import { Toast } from 'vant';
Vue.use(Toast);


export default {
    
    data() {
    return {
      dizhinoimg:"https://jp.juancdn.com/jpwebapp_v1/images_v1/empty_icons/user_address.png?a98391eb-1&sv=449ce9ee",
      chosenAddressId: 0,
      list: '',
    }
  },
  watch:{
      chosenAddressId(newnum){
          this.$axios.post('/vue/yz/addressxuanze',{
            xiabiao:newnum
            }).then(res=>{
            
            })
      }
  },
  methods: {
    onAdd() {
      this.$router.push({name:'addressedit'})
      sessionStorage.xinzengflag="true"
      sessionStorage.addresstoeditid="false"
    },

    onEdit(item, index) {
      sessionStorage.addresstoeditid=index
      sessionStorage.xinzengflag="false"
      this.$router.push({name:'addressedit'})
    },

    onClickLeft(){
        if(sessionStorage.order=='order'){
            this.$router.push({name:'order'})
        }else{
            this.$router.back()
        }
    },
    tianjia(){
         sessionStorage.xinzengflag="true"
         sessionStorage.addresstoeditid="false"
         this.$router.push({name:'addressedit'})
    }
  },
  created(){
      this.$axios.post('/vue/yz/addresslist').then(res=>{
        if(res.data.type==1){
        let arr = res.data.result
        let arrtwo = []
        arr.forEach((value,index)=>{

                if(value.moren){
                    this.chosenAddressId=index
                }

            let obj = {}
            obj.id=index
            obj.name=value.addressname
            obj.tel=value.addressphone
            if(value.province=='北京市'||value.province=='上海市'||value.province=='天津市'||value.province=='重庆市'){
                   obj.address=value.city+value.county+value.addressjiedao
            }else{
                obj.address=value.province+value.city+value.county+value.addressjiedao
               
            }
            arrtwo.push(obj)
        })
        this.list=arrtwo
        

        this.$axios.post('/vue/yz/addressxuanze',{
            xiabiao:this.chosenAddressId
        }).then(res=>{
            if(res.data.type==1){
                //切换成功
            }else{
                Toast.fail('切换失败,请刷新后重新切换')
            }
        })
        }else{
            //当用户没有地址时
        }
      })
  }

}
</script>



<style scoped lang="scss">
    .imgno{
        width: 5rem;
        height: 5rem;
        margin: auto;
    }
    .dizhitextno{
        text-align: center;
        margin-top: .5rem;
    }
    .dizhibutton{
        width: 80%;
        margin-left: 10%;
        margin-top: .5rem;
    }
    .morentishi{
        text-align: center;
        padding: 0 1rem;
        color: #a4a9a9
    }
</style>

