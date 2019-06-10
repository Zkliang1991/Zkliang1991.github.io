<template>
  <div class="guide">
    <van-swipe class="vanswipe" :autoplay="3000">
      <van-swipe-item v-for="(img,i) in imgs" :key="i" class="swipe">
        <img :src="img" alt="" class="img" @click="onChange(i)">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "guide",
  data(){
    return{
      imgs:[
        require("@/assets/images/img1.jpg"),
        require("@/assets/images/img2.jpg"),
        require("@/assets/images/img3.jpg"),
        require("@/assets/images/img4.jpg")
      ],
      
    }
  },
  methods: {
    onChange(index) {
      if (index == this.imgs.length-1) {
        this.$router.push({name:"home"});
        // document.getElementsByClassName("vanbutton")[0].style.display="block";
      }
    }
  }
};
</script>
<style scoped>
.guide,.vanswipe{
  width:100%;
  height:100%
}
.swipe{
  width:100%;
}
.img{
  width:100%;
  height:41rem;
}
/* .vanbutton{
  position:fixed;
  bottom: 16%;
  left:38%;
  color:"#f00";
  display:none;
} */
</style>


