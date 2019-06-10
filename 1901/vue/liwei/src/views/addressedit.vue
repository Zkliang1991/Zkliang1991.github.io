<template>
    <div class="dizhiedit">
        <van-nav-bar
        title="地址编辑"
        right-text="首页"
        left-arrow
        @click-left="onClickLeft"
        @click-right="$router.push({name:'home'})"
        />
       
        <div class="edit">

            <van-address-edit
            :area-list="addressArr"
            :address-info="chushi"
            show-postal
            show-delete
            show-set-default
            @save="onSave"
            @delete="onDelete"
            />

        </div>

    </div>
</template>

<script>
import Vue from 'vue'

import { NavBar } from 'vant';
Vue.use(NavBar);
import { Toast } from 'vant';
Vue.use(Toast);
import { AddressEdit } from 'vant';
Vue.use(AddressEdit);
import addressArr from '@/utils/address.js' //获取省市区联动数据
import { Dialog } from 'vant';
Vue.use(Dialog);



export default {
    
    data() {
    return {
      addressArr,
      chushi:{}
    }
  },

  methods: {
    onSave(save) {
        //得到参数
      let obj = {
        addressname:save.name,
        addressphone:save.tel,
        province:save.province,
        city:save.city,
        county:save.county,
        areaCode:save.areaCode,
        addressjiedao:save.addressDetail,
        addressbianma:save.postalCode,
        moren:save.isDefault,
        xuanze:false
      }
      if(sessionStorage.xinzengflag=="true"){
          this.$axios.post("/vue/yz/address",obj).then(res=>{
          if(res.data.type==1||res.data.type==2){
              Dialog.confirm({
                title: '保存成功',
                message: '是否立即返回'
            }).then(() => {
                if(sessionStorage.order=='order'){
                    this.$router.push({name:'order'})
                }else{
                    this.$router.back()
                }
                
            }).catch(() => {
                
            });
          }else{
              Toast.fail('未知错误,请您刷新后重试')
          }
        })

      }else{
          let xiabiao = sessionStorage.addresstoeditid*1
          this.$axios.post("/vue/yz/addressupdate",{
              xiabiao,
              objnew:obj
          }).then(res=>{
              if(res.data.type==1){
                  Dialog.confirm({
                title: '更新成功',
                message: '是否立即返回地址列表'
                }).then(() => {
                    this.$router.push({name:'address'})
                }).catch(() => {
                    
                });
              }else{
                  Toast.fail('未知错误,请您刷新后重试')
              }
          })
      }
      

    },
    onDelete() {
        let xiabiao = sessionStorage.addresstoeditid*1
        this.$axios.post("/vue/yz/addressshanchu",{
            xiabiao
        }).then(res=>{
          if(res.data.type==1){
              Toast.success("删除成功")
              this.$router.push({name:'address'})
          }else{
              Toast.success("删除失败")
          }
      })
    },
    onClickLeft(){
           this.$router.push({name:'address'})
    }
  },
  created(){
      if(sessionStorage.addresstoeditid=='false'){

      }else{
      let xiabiao = sessionStorage.addresstoeditid*1
      this.$axios.post('/vue/yz/addressqu',{
          xiabiao:xiabiao
      }).then(res=>{
          if(res.data.type==1){
              let obj = {}
              let objRes = res.data.result
              obj.id=xiabiao
              obj.name=objRes.addressname
              obj.tel=objRes.addressphone
              obj.areaCode=objRes.areaCode
              obj.addressDetail=objRes.addressjiedao
              obj.postalCode=objRes.addressbianma
              obj.isDefault=objRes.moren
              this.chushi=obj
          }else{

          }
      })
      }
  }



}

</script>



<style scoped lang="scss">
   
</style>

