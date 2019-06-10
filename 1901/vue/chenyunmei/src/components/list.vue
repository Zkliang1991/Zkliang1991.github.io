<template>
  <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
    <ul class="list">
      <li v-for="(good,i) in goods" :key="i" class="item move">
        <Item :good="good"></Item>
      </li>
    </ul>
  </mt-loadmore>
</template>

<script>
import Item from "./item.vue";
import { Toast } from "mint-ui";
export default {
  name: "list",
  data() {
    return {
      allLoaded: false
    };
  },
  computed: {
    // newGoods(){
    //     return this.goods;
    // }
    newGoods: {
      get() {
        return this.goods;
      },
      set(val) {
        console.log(val);
        // this.goods = val;
      }
    }
  },
  methods: {
    loadTop() {
      console.log("下拉刷新");
      setTimeout(() => {
        var goods = this.goods.reverse();
        this.$emit("changegoods", goods);
        this.$refs.loadmore.onTopLoaded();
        Toast({
          message: "下拉刷新-成功",
          duration: 500
        });
      }, 1500);
    }
  },
  props: {
    goods: {
      type: Array,
      required: true
    },
    type: Object,
    all_goods: Array
  },
  components: {
    Item
  },
  mounted() {
    // console.log(this.type)
    // var arr  = this.all_goods.filter(item=>item.type.value==this.type.value);
    // console.log(arr);
  }
};
</script>

<style >
/* .list {
  z-index: 9999999 !important;
} */
ul {
  padding-top: 10px;
}
.item {
  width: 50%;
  color: darkgoldenrod;
  font-size: 24px;
  padding-top: 0.8rem;
  float: left;
}
.item img {
  width: 100%;
  height: 300px;
}
</style>

