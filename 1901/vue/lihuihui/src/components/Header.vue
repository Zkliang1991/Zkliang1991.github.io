<template>
    <div class='headerBottom'>
        <mt-header :title="title">
            <router-link to="/" slot="left" v-if='backShow'>
                <mt-button icon="back" @click='goback'>返回</mt-button>
            </router-link>
            <mt-button v-if='searchShow' icon="search" slot="right" @click="goSearch"></mt-button>
        </mt-header>
    </div>
</template>
<script>
export default {
    props:{
        title:String
    },
    data(){
        return{
            backShow:true,
            searchShow:true,
        }

    },
    mounted() {
        this.searchShow=this.$route.name=='login'||this.$route.name=='register'||this.$route.name=='editAddress'||this.$route.name=='address'||this.$route.name=='mine'?false:true;
        this.backShow=this.$route.name=='type'||this.$route.name=='index'||this.$route.name=='cart'||this.$route.name=='mine'?false:true;
    },
    
    methods:{
        goSearch(){
            this.$router.push({name:'search'})
        },
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang='scss' scoped>
.headerBottom{
   margin-bottom: .2rem;
   position: fixed;
   top:0;
   left:0;
   width:100%;
   height:1.04rem;
   background: red;
   z-index: 1000;
    .mint-header{
        height:1.04rem;
        background-color:#fff ;
        color: #000
    }
    .mint-header-title{
        height:1.04rem;
        line-height: 1.04rem;
    }
}

    

</style>

