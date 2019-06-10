<template>
    <div>
        <van-nav-bar :title="nTitle.title" @click-left="onClickLeft" @click-right="onClickRight" class="head"> 
            <van-icon name="arrow-left" slot="left" v-if="nShow.show"/>
            <van-icon name="search" slot="right"/>
        </van-nav-bar>
    </div> 
</template>

<script>
// import store from "@/store";
import {mapState,mapActions,mapMutations} from "vuex"
export default {
    computed:{
        ...mapState([
            "nShow",
            "nTitle",
            "nActive",
            "ngoods"
        ])
    },
    mounted(){
        this.$store.state.nShow.show = this.$route.name == 'home' ? false : true; 
    },
    methods: {
        onClickLeft() {
        // Toast('返回');
            this.$router.go(-1);
            console.log(this.nTitle.title)
            console.log(this.nActive.active)
        },
        onClickRight() {
        // Toast('按钮');
            this.$router.push({name:"search"});
            this.ngoods.goods="";
        }
    }
}
</script>

<style scoped>
    .head{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }
</style>


