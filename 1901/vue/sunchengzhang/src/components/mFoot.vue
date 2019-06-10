<template>
    <footer>
        <mt-tabbar v-model="tab" >
            <mt-tab-item v-for="(foot,i) in foots" :key="i" :id="foot.name">
                {{foot.txt}}
            </mt-tab-item>
        </mt-tabbar>
    </footer>
</template>

<script>
export default {
    data(){
        return {
             tab:"",
             foots:[
                {txt:"首页",path:"/app/home",name:"home",icon:"&#xe619;"},
                {txt:"分类",path:"/app/classify",name:"classify",icon:"&#xe778;"},
                {txt:"购物车",path:"/app/cart",name:"cart",icon:"&#xe614;"},
                {txt:"我",path:"/app/my",name:"my",icon:"&#xe60c;"}
            ]
        }
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

