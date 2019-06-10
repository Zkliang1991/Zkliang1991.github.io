<template>   
    <div class='content'>
        <Header title="商品类型"></Header>
           
        <div >
          <sider></sider>
        </div>
        <shadowBox></shadowBox>

    </div>
</template>
<script>
import shadowBox from "../components/shadowBox"
import sider from "../components/side";
export default {
   data() {
    return {
      show2: false,
       columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
       color: ['蓝色', '黑色', '红色', '哈哈', '湖州']
    }
  },
  
  components: {
    sider,
    shadowBox
  }
};
</script>




