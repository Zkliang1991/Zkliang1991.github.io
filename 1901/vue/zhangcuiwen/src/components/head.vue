<template>
    <div>
        <mt-header :title="title" class="head1">
            <mt-button icon="back" slot="left" v-if="show" @click="back1">返回</mt-button>
            <mt-button icon="search" slot="right"  @click="search" v-if="searchShow"></mt-button>
        </mt-header>
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        show:Boolean,
        searchShow:Boolean,
    },
    data(){
        return{
        }
    },
    // mounted(){
    //     this.searchShow = this.$router.name=='search'?false:true;
    // },
    methods:{
        back1(){
            this.$router.go(-1)
        },
        search(){
            this.$router.push({name:"search"})
        }
    }
}
</script>
<style>
    .head1{
       position:fixed;
       top:0;
       left:0;
       right:0;
       background-color: #fff;
       color:black;
       font-size: 18px;
       font-weight: 700;
       z-index:9;
    }

</style>

