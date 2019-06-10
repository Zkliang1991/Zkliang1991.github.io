<template>
    <div>
        <van-address-edit
          :area-list="areaList"
          show-postal
          show-set-default
          show-search-result
          :search-result="searchResult"
          @save="onSave"
      
          @change-detail="onChangeDetail"
        />
    </div>
</template>
<script>
import address from "../utils/area";
export default {
  data() {
    return {
      areaList: address,
      searchResult: []
    };
  },

  methods: {
    onSave(data) {
      var user = window.sessionStorage.userid;
      if (user) {
        data.userid = user;
        var str = data.province + data.city + data.county + data.addressDetail;
        data.address = str;
      
        this.$axios
          .post("/vue/addAddress", {
            data
          })
          .then(res => {
            console.log(res);
          });
      }else{
        this.$router.push({name:'login'})
      }
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>
