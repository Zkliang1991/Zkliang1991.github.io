<template>
    <div>
        <Head title="商品结算" :show="true"></Head>
        <div class="dizhi" @click="di">
            <van-icon name="location-o"  color="red"/>
            添加收货地址</div>
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
            :show="flag"
        />
    </div>
</template>
<script>
import { AddressEdit } from 'vant';
import areaList from "@/styles/area"
export default {
     data() {
    return {
      areaList,
      searchResult: [],
      flag:false,
    }
  },

  methods: {
    onSave() {
      Toast('save');
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
    di(){
        this.flag = !this.flag;
    }
  }
}
</script>
<style scoped>
    .dizhi{
        text-align: center;
        margin: .3rem auto;
        width: 4rem;
        height: 0.8rem;
        line-height: .8rem;
        border: 1px solid rgb(112, 111, 111);
    }
</style>


