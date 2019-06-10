<template>
  <div class="footer">
    <nut-tabbar @tab-switch="tabSwitch3" :tabbarList="tabList3" :bottom="true" v-model="tab"></nut-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: "home",
      tabList3: [
        {
          tabTitle: "首页",
          curr: false,
          icon:
            "http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg",
          activeIcon:
            "http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg",
          // path: "/home",
          // name: "home",
          href:"#/index/home"
        },
        {
          tabTitle: "品牌",
          curr: false,
          icon:
            "http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg",
          activeIcon:
            "http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg",
          // path: "/list",
          // name: "list",
          href:"#/index/list"
        },
        {
          tabTitle: "购物车",
          curr: false,
          // num: 2,
          icon:
            "http://img11.360buyimg.com/uba/jfs/t1/14848/18/1066/3723/5c0f41bdE9f2a38fe/e6ed6768717297fb.jpg",
          activeIcon:
            "http://img30.360buyimg.com/uba/jfs/t1/17538/16/1070/6214/5c0f41bdE4bc9a1db/74cf978e5015454b.jpg",
          // path: "/cart",
          // name: "cart",
          href:"#/index/cart"
        },
        {
          tabTitle: "我的",
          curr: false,
          icon:
            "http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg",
          activeIcon:
            "http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg",
          // path: "/mine",
          // name: "mine",
          href:"#/index/mine"
        }
      ]
    };
  },
   mounted() {
    console.log("路由"+this.$route.name);
    this.tab = this.$route.name;
  },
  watch: {
    tab(newVal) {
      console.log("新内容"+newVal)
      this.$router.push({ name: newVal });
    }
  },
  methods:{
      tabSwitch3(value) {
      this.$router.push({ name: value.name });
    }
  }
  
};
</script>

<style lang="scss" scoped>

</style>


