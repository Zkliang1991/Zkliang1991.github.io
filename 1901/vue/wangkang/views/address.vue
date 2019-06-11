<template>
  <div class="address">
    <Head title="收货地址"></Head>
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
      class="addressinput"
    />
  </div>
</template>
<script>
import areaList from "@/utils/adress.js";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      active: 2
    };
  },

  methods: {
    onSave(data) {
      this.$axios.post("/vue/addressAdd", { address: data }).then(res=>{
        this.$router.push({name:"addresspage"});
      })
    },
    onDelete() {
      this.$toast("删除成功");
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
<style lang="scss" scoped>
.addressinput {
  padding-top: 1rem;
  padding-bottom: 0.2rem;
}
</style>