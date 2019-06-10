<template>
    <div>
        <Head></Head>
        <div class="context">
            <!-- <h2>我的 -- 我的 -- 我的</h2> -->
            <img src="@/images/15.gif" width="100%" class="img1"><br>
            <p class="p1">{{nLogin.username}}</p><br>
            <van-button type="danger" class="btn1" @click="aa()">退出登录</van-button><br>
            <img src="@/images/21.gif" width="100%" class="img2">
        </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
import { userInfo } from 'os';
export default {
    computed:{
        ...mapState([
            "nLogin",
            "nHui"
        ])
    },
    mounted(){
        if(this.nLogin.username!=""){
            this.$store.state.nTitle.title = "我的"; 
            this.$store.state.nActive.active=3;
        }else{
            this.$router.push({name:"login"});
        }
    },
    methods:{
        aa(){
            // console.log("已经退出")
            window.sessionStorage.removeItem("userInfo");
            this.$router.push({name:"home"})
        }
    }
}
</script>

<style scoped>
    .context{
        margin-top:12%;
        position: relative;
    }
    .p1{
        text-align: center;
        margin-top: 5%;
    }
    /* .img1{
        position: absolute;
        left: 0;
        top: 6%;
    } */
    .img2{
        position: absolute;
        left: 0;
        top: 400px;
    }
    .btn1{
        width: 24%;
        margin-left: 38%;
    }
</style>
