<template>
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <ul class="film">
        <li v-for="(good,i) in goods" :key="i" class="move">
          <Item :good="good"></Item>
        </li>
      </ul>
    </mt-loadmore>
</template>

<script>
import { Toast } from "mint-ui";
import Item from "./item.vue";
export default {
  name: "list",
  data() {
    return {
      allLoaded: false
    };
  },
  components:{
      Item
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
        this.goods = this.goods.reverse();
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
    }
  }
};
</script>

<style scoped>
.film li {
  width: 100%;
  /* border: 1px solid rgb(75, 73, 73); */
  border-bottom: 1px solid rgb(194, 191, 191);
  /* height: 100px; */
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  /* text-align: right; */
}


.film {
  margin-top: 50px;
  overflow: hidden;
  margin-bottom: 1rem;
}


#app {
}
.film li .iconfont {
  float: left;
  background: rgb(194, 191, 191);
  margin-top: -5px;
  margin-right: 5px;
}
</style>

