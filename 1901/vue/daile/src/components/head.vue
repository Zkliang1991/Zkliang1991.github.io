
<template >
    <div >
  <van-nav-bar :title="title" id="chulai" left-arrow  @click-left="onClickLeft">
     <van-icon  left-arrow />
     <van-icon name="search" slot="right"/>
     </van-nav-bar>

</div>
</template>


<script>
export default{
    props:{
        title:String,
        show:Boolean
    },
    data(){
        return {
            searchshow:true
        }
    },
    mounted(){
        this.searchshow=this.$route.name=='search'?false:true;
    },
    methods:{
        gosearch(){
            this.$router.push({name:"search"})
        },
        onClickLeft () {
      this.$router.history.go(-1)
    }


    }
}
</script>

<style>

   
</style>