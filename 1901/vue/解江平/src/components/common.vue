<template>
    <div>
        <h1>demo==============demo</h1>
        <h2>父组件给子组件传递{{msg}}</h2>
        <button @click="change">自定义事件修改父组件</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            word:"qwer"
            
        }
    },
    props:["msg"],
    methods:{
        change(){
            this.$emit("changeMsg","发多少")
        }
    }
}
</script>
