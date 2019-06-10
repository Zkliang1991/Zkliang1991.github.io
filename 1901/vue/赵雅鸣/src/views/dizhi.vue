<template>
    <div>
       <mt-header title="新增地址" style="height:.8rem">
      <mt-button icon="back" slot="left" @click="goback">返回</mt-button>
    </mt-header>
        <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from "vuex"
import Area from '@/assets/area.js'
export default {
     data() {
    return {
      areaList:Area,
      searchResult: [],
      addressInfo:[]
    }
  },

  methods: {
    ...mapActions([
            'adddizhi'
        ]),
    onSave(e) {
     let data = {};
  data.name = e.name;
  data.tel = e.tel;
  data.address = e.province + e.city + e.county + e.addressDetail + "";
  data.addressDetail = e.addressDetail;
  data.areaCodeL = e.areaCode;
  data.postalCode = e.postalCode;
  data.isDefault = e.isDefault;
  console.log(data)
  this.adddizhi({url:"/vue/adddizhi",data})
  this.$router.push({name:'dizhilist'})
    },
    onDelete() {
      Toast('delete');
      
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    },
    goback() {
      this.$router.go(-1);
    },
  },
 
}
</script>
<style scoped>
.mint-header{
  background-color: rgba(58, 140, 247, 0.979);
}
</style>

