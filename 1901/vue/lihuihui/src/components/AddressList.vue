<template>
<div>
   <div class='content'>
      <div>
            <van-address-list
      v-model="chosenAddressId"
      :list="list"
      disabled-text="暂无地址哦"
      @add="onAdd"
      @edit="onEdit"
    />
        </div>
    </div>
</div>

</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      chosenAddressId: "2",
      list: [],
    };
  },

  methods: {
    //...mapActions(["getAddressList"]),
    onAdd() {
      this.$router.push({ name: "editAddress" });
      // Toast("新增地址");
    },

    onEdit(item,index) {
      this.$router.push({ name: "editAddress", query: {item:item} });
      // Toast("编辑地址:" + index);
    }
  },
  mounted() {
  
    this.$axios
      .get("/vue/getAddressList", {
        params: {
          userid: sessionStorage.userid
        }
      })
      .then(res => {
        if (res.data.result.length > 0) {
          var arr = [];
          res.data.result.map((item, i) => {
            item.id = i;
            arr.push(item);
          });
          this.list = arr;
         var  defaults=this.list.filter(
            (item, index) => {
              return item.isDefault == true;
            }
          );      
         this.chosenAddressId= defaults[defaults.length-1].id;
            window.localStorage.defaltAddress=JSON.stringify(defaults[defaults.length-1])
        }
       
      });
  }
};
</script>

