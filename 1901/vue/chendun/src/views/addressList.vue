<template>
  <div>
    <Head title="收货地址" :show="true"></Head>
    <div>
      <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit"/>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      chosenAddressId: "",
      list: []
    };
  },

  methods: {
    onAdd() {
      this.$router.push({ name: "insertAdd" });
    },

    onEdit(item, index) {
      this.$router.push({ name: "addressEditer", query: { item: item } });
    },
    ...mapMutations(["test","adderss"])
  },
  mounted() {
    this.$axios.get("/vue/addressList", {}).then(res => {
      this.list = res.data.result;
      this.$store.commit("test", this.list);

      var arr = [];
      res.data.result.map((item, i) => {
        item.id = i;
        arr.push(item);
      });
      this.list = arr;
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].isDefault == true) {
          var id = this.list[i].id;
          var arrert = id;
          var morenAdders=this.list[i];
        }
      }
      this.$store.commit("adderss",morenAdders);
      this.chosenAddressId = arrert;
    });
  },
  // updated() {
  //   // console.log(this.chosenAddressId);
  //   // console.log(this.list);
  //   var uplist = {};
  //   for (var i = 0; i < this.list.length; i++) {
  //     if (this.list[i].id == this.chosenAddressId) {
  //       uplist._id = this.list[i]._id;
  //       var id = uplist._id;
  //     }
  //   }
  //   if (res.data.code == 200) {
  //     this.$axios.post("/vue/updateforid", { id }).then(res => {
  //       console.log(res);
  //     });
  //   }
  //   // console.log("safsdfsdd")
  //   // console.log(id);
  //   // this.$axios.post("")
  // }
};
</script>

