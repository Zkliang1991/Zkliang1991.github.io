<template>
  <div>
    <Head title="地址管理" :backShow="true" id="toubu"></Head>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
      id="dizhi"
    />
  </div>
</template>


<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      chosenAddressId: "0",
      list: [],
      //   list: [
      //     {
      //       id: "1",
      //       name: "张三",
      //       tel: "13000000000",
      //       address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
      //     },
      //   ],
      disabledList: [
        {
          id: "10000",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  },
  mounted() {
    var username = localStorage.username;
    this.$axios
      .get("/vue/getDizhi", {
        params: {
          username
        }
      })
      .then(res => {
        // console.log(res.data.result);
        // this.chosenAddressId = res.data.data.result.id;
        this.list = res.data.result;
        console.log(this.list);
        this.list.forEach((item, index) => {
          item.id = index;
        //   return item;
        });
        // this.list=item;
        
      });
  },
  methods: {
    onAdd() {
      Toast("新增地址");
      this.$router.push({ name: "xgdz" });
    },

    onEdit(item, index) {
        console.log(item)
        // this.$store.state.userInfo=item;
      this.$router.push({name:"xgdz",params:{data:item}})
    }
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
#dizhi {
  margin-top: 60px;
}
</style>

