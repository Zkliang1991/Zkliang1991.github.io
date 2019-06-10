<template>
    <div>
        <h2>word =  word  --  {{msg}}  == {{flag}} </h2>
        <h2> url == {{config.url}}</h2>
        <h2>props == {{num}} --- {{like}}</h2>
        <button @click="sendToParent">自定义事件实现 子修改 父组件  </button>
        <slot>如果没有内容这里即将显示 </slot>
        <slot name="news"></slot>
    </div>
</template>


<script>
import {msg,flag} from "../utils";
import config from "../utils/config"
export default {
    data(){
        return {
            msg,
            flag,
            config 
        }   
    },
    methods:{
        changeMsg(){
            this.msg = "vue 准备是否充分... refs"
        },
        sendToParent(){
            this.$emit("changemsg","我被子组件 通过 自定义事件修改...")
        }
    },
    props:[
        "num",
        "like"
    ]
}
</script>

<style scoped>

</style>

