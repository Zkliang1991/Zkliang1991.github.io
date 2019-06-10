<template>
  <div v-if="show">
    <mt-header title="新增/修改地址" style="backgroundColor:red;height:.8rem">
      <mt-button icon="back" slot="left" @click="goback">返回</mt-button>
    </mt-header>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :addressInfo="addressInfo"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
import Area from "@/assets/area.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      areaList: Area,
      searchResult: [],
      addressInfo: {},
      show: true
    };
  },

  methods: {
    onSave(data) {
      if (this.$route.params.data) {
        var _id = this.$route.params.data._id;
        data.address =
          data.province +
          " " +
          data.city +
          " " +
          data.county +
          " " +
          data.addressDetail;
        console.log(data);
         this.$axios
          .post("/vue/updatedz", {
            _id:_id,
            data:data
          })
          .then(res => {
            Toast(res.data.msg);
            this.$router.go(-1);
          });
      } else {
        this.$axios
          .post("/vue/addedit", {
            username: window.sessionStorage.username,
            tel: data.tel,
            name: data.name,
            address:
              data.province +
              " " +
              data.city +
              " " +
              data.county +
              " " +
              data.addressDetail,
            province: data.province,
            county: data.county,
            addressDetail: data.addressDetail,
            areaCode: data.areaCode,
            city: data.city,
            postalCode: data.postalCode,
            isDefault: data.isDefault
          })
          .then(res => {
            Toast(res.data.msg);
            this.$router.go(-1);
          });
      }
    },
    onDelete() {
      var data = this.$route.params.data;
      if (data) {
        this.$axios
          .get("/vue/deletedz", {
            params: {
              _id: data._id
            }
          })
          .then(res => {
            Toast(res.data.msg);
            this.$router.go(-1);
          });
      } else {
        this.$router.go(-1);
      }
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "金融港",
            address: "b18"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    goback() {
      this.$router.go(-1);
    }
  },
  created() {
    console.log(this.$route.params.data);
    var data = this.$route.params.data;
    if (data) {
      this.addressInfo = data;
      // console.log(this.addressInfo)
      this.show = true;
    } else {
      this.show = true;
    }
  }
};
</script>
