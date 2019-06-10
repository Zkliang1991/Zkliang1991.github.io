<template>
    <div>
        <h2> demo  - demo - demo </h2>
        <p>完整语法高亮</p>
        <p>CommonJS 模块</p>
        <p>组件作用域的 CSS</p>
        <h3>{{msg}}</h3>
        <h2 @click="change">count==== {{count}}</h2>

        <button @click="changeByRef"> refs 去修改子组件 </button>
        <hr>
        <Word :num="count" like="wh1901"  ref="one"  v-on:changemsg="getMsg">
            <h2> 这是 轮播图 内容 </h2>
            <h2 slot="news"> 这是 news news  内容 </h2>
        </Word>
    </div>
</template>

<script>
import  Word from "./word.vue";
export default {
    data(){
        return {
            count:2019,
            msg:"Are you ok"
        }
    },
    methods:{
        change(){
            this.count += 10;
        },
        changeByRef(){
            this.$refs.one.flag = false;
            this.$refs.one.changeMsg();
        },
        getMsg(data){
            this.msg = data;
        }
    },
    components:{
        Word
    },
    mounted(){

    },
    watch:{
        
    }
}
</script>



<style lang="scss" scoped>
    p{
        color:darkgoldenrod;
    }
</style>
