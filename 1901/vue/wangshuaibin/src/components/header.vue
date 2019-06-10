<template>
     <mt-header :title="title" style="backgroundColor:red;height:.8rem" :fixed="true">
    <mt-button icon="back" slot="left" @click="goback" v-if="show">返回</mt-button>
    <mt-button slot="left" @click="goback" v-if="shows"> <i class="iconfont icon-saoyisao1"></i> </mt-button>
    <mt-button  slot="right" v-if="searchShow" @click="goSearch"> <i class="iconfont icon-iconfonticonfontsousuo1" style="fontSize:.4rem"></i> </mt-button>
  </mt-header>
</template>
<script>
export default {
    props: {
    title: String,
    show: Boolean,
    shows:Boolean,
    searchShow:Boolean,
    
  },
  data() {
    return {
    };
  },
   mounted() {
    this.searchShow = this.$route.name == "search" ? false : true;
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    goSearch() {
      this.$router.push({ name: "search" });
    }
  }
}
</script>
