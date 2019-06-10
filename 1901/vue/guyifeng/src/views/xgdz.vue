<template>
  <div>
    <Head title="修改地址" :backShow="true" id="toubu" :searchShow="false"></Head>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :address-info="addressinfo"
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      id="xgdz"
    />
  </div>
</template>


<script>
import Dizhi from "@/assets/dizhi.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      username: localStorage.username,
      addressinfo: this.$route.params.data,
      areaList: Dizhi,
      searchResult: []
    };
  },

  methods: {
    onSave(val) {
      console.log(val.province + val.city + val.county + val.addressDetail);
      if (this.addressinfo) {
        this.$axios
          .get("/vue/changeDizhi", {
            params: {
              _id: this.addressinfo._id,
              id: new Date().getTime(),
              username: this.username,
              name: val.name,
              tel: val.tel,
              province: val.provinc,
              city: val.city,
              county: val.county,
              addressDetail: val.addressDetail,
              address: val.province + val.city + val.county + val.addressDetail,
              postalCode: val.postalCode
            }
          })
          .then(res => {
            console.log(res);
            this.$router.push({name:"dizhi"})
          });
      } else {
        this.$axios
          .get("/vue/changeDizhi", {
            params: {
              id: new Date().getTime(),
              username: this.username,
              name: val.name,
              tel: val.tel,
              province: val.provinc,
              city: val.city,
              county: val.county,
              addressDetail: val.addressDetail,
              address: val.province + val.city + val.county + val.addressDetail,
              postalCode: val.postalCode
            }
          })
          .then(res => {
            console.log(res);
            this.$router.push({name:"dizhi"})
          });
      }
    },
    onDelete() {
      this.$axios
        .get("/vue/delDizhi", {
          params: {
            _id: this.addressinfo._id,
          }
        })
        .then(res => {
          console.log(res);
        });
    }
    // onChangeDetail(val) {
    //   if (val) {
    //     this.searchResult = [
    //       {
    //         name: "黄龙万科中心",
    //         address: "杭州市西湖区"
    //       }
    //     ];
    //   } else {
    //     this.searchResult = [];
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
#toubu {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
}
#xgdz {
  margin-top: 60px;
}
</style>

