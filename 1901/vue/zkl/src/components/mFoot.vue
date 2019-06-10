<template>
    <div>
        <!-- <mt-tab-container v-model="tab">
            <mt-tab-container-item v-for="(f,i) in foots" :key="i" :id="f.name">
                content === {{f.txt}} -- {{i}}
            </mt-tab-container-item>
        </mt-tab-container> -->
        <mt-tabbar v-model="tab" >
            <mt-tab-item v-for="(foot,i) in foots" :key="i" :id="foot.name">
                <i class="iconfont" v-html="foot.icon" slot="icon"> </i>
                {{foot.txt}}
            </mt-tab-item>
        </mt-tabbar>
    </div>

</template>

<script>

export default {
    watch:{
        tab(newVal){
            this.$router.push({name:newVal});
        }
    },
    computed:{
        tab:{
            get(){
                return this.$store.state.tab;
            },
            set(v){
                this.$store.commit("getTab",v);
            }
        }
    },
    data(){
        return {
            //  tab:"home",
             foots:[
                {txt:"首页",path:"/app/home",name:"home",icon:"&#xe619;"},
                {txt:"分类",path:"/app/classify",name:"classify",icon:"&#xe778;"},
                {txt:"购物车",path:"/app/cart",name:"cart",icon:"&#xe614;"},
                {txt:"我",path:"/app/my",name:"my",icon:"&#xe60c;"}
            ]
        }
    },
    mounted(){
        console.log(this.$route);
        // this.tab = this.$route.name;
        this.$store.commit("getTab",this.$route.name);
    }
}
</script>

<style scoped>
footer{
    position: fixed;
    bottom:0;
    left:0;
}
</style>

