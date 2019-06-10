<template>
  <div>
    <Head :show="true" title="新增地址"></Head>
    <van-address-edit
        class="addressEdit"
      :area-list="areaList"
      :address-info="data"
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
import city from '../utils/city' 
export default {
  data() {
    return {
      areaList:city,
      searchResult: [],
      data:this.$route.query.list
    };
  },

  methods: {
    onSave(data) {
        data.address = data.province+data.city+data.county+data.addressDetail;
        console.log("111111111111")
        console.log(data)
        this.$axios.post("/vue/updateAddress",{data}).then(res=>{
            console.log(res.data);
        })
        this.$router.push({name:'payfor',params:{active:1}})
    },
    onDelete(data) {
        console.log("222222")
        console.log(data)
        this.$axios.post("/vue/deleteAddress",{id:data._id}).then(res=>{
            this.$router.push({name:'payfor',params:{active:1}})
        })
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  },
};
</script>
<style lang="scss">
    .addressEdit{
        padding-top: 0.8rem;
    }
</style>