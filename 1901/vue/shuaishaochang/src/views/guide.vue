<template>
    <div id="box">
        <nut-swiper
            direction="horizontal"
            :canDragging="false"
            :paginationVisible="true"
        >
            <div  v-for="(item,index) in dataImgItem" :key="index"  class="nut-swiper-slide" v-on:click="gotoHome(index)">
                <img :src="item" alt="" class="img">
                <!-- <span ></span> -->
            </div>

        </nut-swiper>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                dataImgItem:[
                    require("@/assets/images/logo1.jpg"),
                    require("@/assets/images/logo2.jpg"),
                    require("@/assets/images/logo3.gif"),
                    require("@/assets/images/logo4.jpg"),
                    require("@/assets/images/logo5.jpg")
                ],
            }
        },
        methods:{
            gotoHome(id){
                if(id==this.dataImgItem.length-1){
                    this.$router.push({name:"home"})
                }
            }
        },
        mounted(){
 
        }
    }
</script>

<style scoped>
    #box,.nut-swiper-slide,.horizontal,.img{
        width:100%;
        height:100%;
    }
</style>

