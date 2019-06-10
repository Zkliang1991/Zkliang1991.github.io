<template>
  <div class="user">
    <div>
      <input type="checkbox" v-model="checkAll" @click="check(checkAll)">全选
    </div>
    <ul v-for="item in list" v-bind:key="item.name">
      <li>
        <input type="checkbox" v-model="item.isCheck">
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store";
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["cartinfo"])
  },
  data() {
    return {
      checkAll: "",
      list: [
        { name: "jack", isCheck: false },
        { name: "rose", isCheck: false },
        { name: "mike", isCheck: false }
      ]
    };
  },
  methods: {
    check(data) {
      let _this = this;
      if (!data) {
        _this.list.forEach(function(item) {
          item.isCheck = true;
        });
      } else if (data) {
        _this.list.forEach(function(item) {
          item.isCheck = false;
        });
      }
    }
  },
  watch: {
    list: {
      handler(value) {
        let _this = this;
        let count = 0;
        for (let i = 0; i < value.length; i++) {
          if (value[i].isCheck === true) {
            count++;
          }
        }
        if (count === value.length) {
          _this.checkAll = true;
        } else {
          _this.checkAll = false;
        }
      },
      deep: true
    }
  },
  created() {
    this.cartgoods({ url: "/vue/cartgoods" });
  },
  methods: {
    ...mapActions(["cartgoods"]),
  },
  
};
</script>
<style>
.el-main {
  line-height: 60px;
}
li {
  list-style: none;
}
</style>