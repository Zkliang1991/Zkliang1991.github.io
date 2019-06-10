<template>
    <div class="fixed">
        <!-- <mt-tabbar v-model="tab" >
            <mt-tab-item v-for="(foot,i) in foots" :key="i" :id="foot.name">
                <mt-badge v-if="i==2" size="small" type="error" class="hot">{{carNum}}</mt-badge>
                <i class="iconfont" v-html="foot.icon" slot="icon"> </i>
                {{foot.txt}}
            </mt-tab-item>
        </mt-tabbar> -->

        <van-tabbar v-model="tab" active-color="#d6b274">
            <van-tabbar-item v-for="(foot,i) in foots" :key="i" :id="foot.name">
                <mt-badge v-if="i==2" size="small" type="error" class="hot">{{allcount}}</mt-badge>
                <i class="iconfont" v-html="foot.icon" slot="icon"> </i>
                {{foot.txt}}
            </van-tabbar-item>
        </van-tabbar>
    </div>

</template>

<script>
export default {
    watch:{
        tab(newVal){
            var list=["home","classify","cart","mine"];
            var result="";
            switch(newVal){
                case 0:result=list[0];break;
                case 1:result=list[1];break;
                case 2:result=list[2];break;
                case 3:result=list[3];break;
            };
            this.$router.push({name:result});
        }
    },
    computed:{
        carNum(){
            return this.$store.state.carNum
        }
    },
    data(){
        return {
             tab:0,
             foots:[
                {txt:"首页",path:"/app/home",name:"home",icon:"&#xe61b;"},
                {txt:"分类",path:"/app/classify",name:"classify",icon:"&#xe622;"},
                {txt:"购物车",path:"/app/cart",name:"cart",icon:"&#xe618;"},
                {txt:"我的",path:"/app/mine",name:"mine",icon:"&#xe636;"}
            ],
            allcount:0,
            goods:[],
            aa:12
        }
    },
    mounted(){
        // console.log(this.$route);
        // this.tab = this.$route.name;
        if(this.$route.name=="home"){
            this.tab=0;
        }
        if(this.$route.name=="classify"){
            this.tab=1;
        }
        if(this.$route.name=="cart"){
            this.tab=2;
        }
        if(this.$route.name=="mine"){
            this.tab=3;
        }
        //调用购物车数据,展示数量
        var goodsusername=localStorage.username;
        this.$axios.post("/vue/getcount",{
            goodsusername
        }).then(res=>{
            this.goods=res.data.result;
            this.goods.forEach(element => {
                this.allcount+=element.count
            });
        });
    }
}
</script>

<style scoped>
    .hot{
        position: absolute;
        top:4%;
        left:65%;
        display: inline;
        width:.25rem;
    }
    .fixed{
        position:fixed;
        left: 0;
        bottom:0;
        width:100%;
        border-top:1px solid #eee;
    }
    i.iconfont{
        font-size:0.48rem;
    }
</style>