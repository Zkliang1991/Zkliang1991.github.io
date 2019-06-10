<template>
  <div>
   <commenheader dizhi="添加地址"></commenheader>
    <van-address-edit
      :area-list="areaList"
      
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
import commenheader from "../components/commonheader.vue";
import {Toast} from "vant";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },

  methods: {
    onSave(content) {
        // {
        //   id: "1",
        //   name: "张三",
        //   tel: "13000000000",
        //   address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        // },
      Toast("save");
       var obj ={};
       obj.id = this.list.length+1+"";
       obj.name = content.name;
       obj.tel = content.tel;
       obj.address = content.province+content.city+content.country+content.addressDetail;
      if(content.isDefault){
        this.chosenAddressId = obj.id;
      }
      console.log(obj);
      this.list.push(obj);
      this.$router.push({name:"address2"});
    },
    onDelete(content) {
      Toast("delete");
      content = {};
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
  },
  components:{
      commenheader
  },
  computed:{
      list(){
          return this.$store.state.list;
      },
      chosenAddressId:{
        get(){
        return this.$store.state.chosenAddressId;
        },
        set(val){
          this.$store.state.chosenAddressId = val;
        }
      }
  },
};
</script>


