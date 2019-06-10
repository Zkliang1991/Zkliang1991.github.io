<template>
    <div>
        <Head title="编辑地址" :show="true" class="top"></Head>
        <van-address-edit class="addressbox"
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
import { Toast } from "vant";

import address from "../utils/ads.js"
export default {
  data() {
    return {
      areaList:address,
      searchResult: []
    }
  },
 
  methods: {
    onSave(data) {
       data.address = data.province+data.city+data.county+data.addressDetail;

      this.$axios.post("/vue/addresslist",data).then(res=>{})
      this.show = !this.show;
      location.reload();
      Toast('保存成功');
    },
    onDelete() {
      Toast('删除成功');
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
    }
  },

}
</script>

<style lang="scss" scoped>
  .addressbox{
    margin-top: .8rem;
  }
</style> 