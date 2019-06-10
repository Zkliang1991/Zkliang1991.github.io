<template>
    <div>
        <van-address-edit
          :address-info='addressDetail'
          :area-list="areaList"
          show-postal
          show-delete
          show-set-default
          show-search-result
          @save="onSave"
          @delete="onDelete"
          @change-detail="onChangeDetail"
        />
    </div>
</template>
<script>
import address from "../utils/area";
export default {
  props:['addressDetail'],
  data() {
    return {
      areaList: address,
      searchResult: [],
    };
  },
  mounted(){ 
  console.log(this.$route.query.item)
  },
  methods: {
    onSave(data) {
      var user = window.sessionStorage.userid;
      if (user) {
        data.userid = user;
        var str = data.province + data.city + data.county + data.addressDetail;
        data.address = str;
        this.$axios
          .post("/vue/updateAddress", {
            data
          })
          .then(res => {
          });
      }else{
        this.$router.push({name:'login'})
      }
    },
    onDelete() {
        this.$axios.get('/vue/removeAddress',{
            params:{
                 '_id':this.$route.query.item._id
            }
        }).then(res=>{
            if(res.data.type==1){
                // Toast(msg);
            }
        })
     // Toast("delete");
    },
    onChangeDetail(val) {
        console.log(val)
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
