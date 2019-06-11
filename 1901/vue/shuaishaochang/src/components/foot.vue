<template>
<nut-tabbar 
  id="foot"
  @tab-switch="tabSwitch3" 
  :tabbarList="tabList3" 
  :bottom="true"
>
</nut-tabbar>
</template>

<script>
export default {
  components: {
    // [tabbar.name]: tabbar,
  },
  data() {
    return {
        // curr:true,
      tabList3:[
        {
          'tabTitle':'精选',
          'curr':false,
          'icon':'http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg',
          // 'href':'###',
          path:"/index/home",
          name:"home"
        },
        {
          'tabTitle':'助手',
          'curr':false,
          'icon':'http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg',
          // 'href':'###',
          path:"/index/goods",
          name:"goods"
          
        },
        {
          'tabTitle':'社区',
          'curr':false,
          'icon':'http://img13.360buyimg.com/uba/jfs/t1/10361/35/4713/4643/5c0f3d62E437a3c94/273fd0fb90798f03.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t1/26604/35/1073/7896/5c0f3d61Eb9f5f184/5f01c938abe4216d.jpg',
          // 'href':'###'
          path:"/index/classify",
          name:"classify"
        },
        {
          'tabTitle':'购物车',
          'curr':false,
          'num':8,
          'icon':'http://img11.360buyimg.com/uba/jfs/t1/14848/18/1066/3723/5c0f41bdE9f2a38fe/e6ed6768717297fb.jpg',
          'activeIcon':'http://img30.360buyimg.com/uba/jfs/t1/17538/16/1070/6214/5c0f41bdE4bc9a1db/74cf978e5015454b.jpg',
          // 'href':'###'
          path:"/index/shoppingcar",
          name:"shoppingcar"
        },
        {
          'tabTitle':'我的',
          'curr':false,
          'icon':'http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg',
          // 'href':'###'
          path:"/index/mine",
          name:"mine"
        }
      ]
    };
  },
  methods: {
      tabSwitch3:function(value,index){
        // console.log(index);
        // console.log(value);

        this.$router.push({name:value.name})
      }
  },
  // watch:{
  //   curr(newVal){
  //       this.$router.push({name:newVal});
  //   }
  // },
  //   computed:{
  //       curr:{
  //           get(){
  //               return this.$store.state.name;
  //           },
  //           set(v){
  //               this.$store.commit("setCurr",v);
  //           }
  //       }
  //   },
  //       mounted(){
  //       console.log(this.$route);
  //       // this.tab = this.$route.name;
  //       this.$store.commit("setCurr",this.$route.curr);
  //   }
};
</script>



