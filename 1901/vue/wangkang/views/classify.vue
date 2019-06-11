<template>
  <div class="classify">
    <Head title="分类" :backshow="true" :moreshow="true"></Head>
    <van-tabs v-model="active" class="classify-tabs">
      <van-tab v-for="(type,i) in goodsinfo.types" :key="i" :title="type" class="classify-tab">
        <van-pull-refresh v-model.lazy="isLoading" @refresh="onRefresh">
          <Goodslist
            :goods="goodsinfo.allgoods.filter((it)=>it.typetext==type)"
            :type="type"
            :allgoods="goodsinfo.allgoods"
            v-if="goodsinfo.allgoods"
          ></Goodslist>
        </van-pull-refresh>
      </van-tab>
      <Foot></Foot>
    </van-tabs>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Foot from "@/components/Foot.vue";
import Goodslist from "@/components/goodslist.vue";
export default {
  components: {
    Foot,
    Goodslist
  },
  data() {
    return {
      active: 0,
      type: "",
      isLoading: false
    };
  },
  methods: {
    ...mapActions(["getGoodTypes", "getAllGoods"]),
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  },
  created() {
    this.getGoodTypes();
    this.getAllGoods();
  },
  computed: {
    ...mapState(["goodsinfo"])
  }
};
</script>

<style scoped>
head {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9999;
}
.classify-tabs {
  margin-top: 1rem;
}
.classify-tab {
  width: 100%;
  height: 100%;
}
Goodslist {
  width: 100%;
}
Foot {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
}
</style>
