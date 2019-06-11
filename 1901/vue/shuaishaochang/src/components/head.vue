<template>
   
   <nut-navbar id="login"
        @on-click-more="more" 
        @on-click-back="back"
    >{{title}}</nut-navbar>
</template>

<script>
    export default {
        data(){
            return {
                username:localStorage.username,
            }
        },
    methods: {
        back(){
            this.$router.go(-1);
        },
        more(){
            var c = confirm("是否退出?");
            if(c){
                alert("退出");
                localStorage.clear();
                sessionStorage.clear();
                this.$router.push({name:'home'});
                
            }else{
                alert("取消")
            }
        }
    },
    props:{
        title:String,
        rightShow:Boolean,
        leftShow:Boolean
    }
};
</script>

<style>
    #login{
        background-color:crimson;
        font-size: 20px;
    }
</style>


