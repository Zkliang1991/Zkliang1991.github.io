<template>
  <div>
    <mt-header title="结算" style="backgroundColor:red;height:.8rem">
      <mt-button icon="back" slot="left" @click="goback">返回</mt-button>
    </mt-header>

    <van-card
      v-for="(item,i) in buygoods"
      :key="i"
      :num="item.num"
      :price="item.price"
      :title="item.title"
      :thumb="item.img"
    ></van-card>
    <van-address-list
      style="marginBottom:1rem"
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
    <van-submit-bar :price="buytotal*1" button-text="付款" @submit="onSubmit"/>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import { Card, Toast } from "vant";
export default {
  data() {
    return {
      goods: [],
      totalPrice:0,
      total: 0,
      chosenAddressId: "1",
      list: []
    };
  },
  computed: {
    ...mapState(["buygoods"]),
    ...mapState(['buytotal'])
  },
  methods: {
    ...mapMutations(["changeBuyGoods"]),
    goback() {
      this.$router.go(-1);
    },
    onSubmit() {
      Toast("穷 算了吧");
    },
    onAdd() {
      // Toast("新增地址");
      this.$router.push({ name: "addedit" });
    },

    onEdit(item, index) {
      // Toast("编辑地址:");
      this.$router.push({ name: "addedit", params: { data: item } });
    }
  },
  mounted() {
    // console.log(this.$route.params);
    // if (this.$route.params.goods) {
    //   this.goods = this.$route.params.goods;
    //   this.total = this.$route.params.totalPrice;
    // } else {
    //   this.$router.push({ name: "car" });
    // }
    // this.total = buytotal*1
  },
  created() {
    if (window.sessionStorage.username) {
      var goods = this.$route.params.goods;
      var total = this.$route.params.totalPrice;
      console.log(total);
      if (goods) {
        this.$store.commit("changeBuyGoods", {goods, total});
      }
      // if(total){
      //   sessionStorage.total = total;
      //   this.totalPrice = (total*1);
      // }else{
      //   this.totalPrice = (sessionStorage.total*1)
      // }
      this.$axios
        .get("/vue/mydz", {
          params: {
            username: window.sessionStorage.username
          }
        })
        .then(res => {
          this.list = res.data.result;
          this.list.forEach((item, index) => {
            item.id = index;
          });
          console.log(this.list);
        });
    }
  }
};
</script>
