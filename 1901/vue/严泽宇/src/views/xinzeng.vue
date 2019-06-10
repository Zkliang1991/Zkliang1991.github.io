<template>
    <div>
      <Head headTitle="地址簿" :flag="true"></Head>
        <van-address-list
  v-model="chosenAddressId"
  :list="list"
  @add="onAdd"
  @edit="onEdit"
/>
<van-popup v-model="show" position="top" class="overlay80vh" :overlay="true">
      <Ads></Ads>
    </van-popup>
    </div>
</template>
<script>
import Ads from "@/components/ads.vue";
import { Toast } from "vant";

export default {
  data() {
    return {
        show:false,
      chosenAddressId: '1',
      list: [
       
      ]
    }
  },
components:{
    Ads
},
  methods: {
    onAdd() {
      this.show = true
      Toast('新增地址');
      

    },

    onEdit(item, index) {
      Toast('编辑地址:' + index);
    }
  },
  mounted() {
    this.$axios.get("/vue/getaddress").then(res=>{
      this.list = res.data.result
    })
  },
}
</script>