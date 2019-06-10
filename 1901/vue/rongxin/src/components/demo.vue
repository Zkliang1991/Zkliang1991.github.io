<template>
    <div>
        <h2>demo--demo--demo</h2>
        <p>他大舅他二舅</p>
        <p>都是他舅</P>
        <h3>{{msg}}</h3>
        <h2 @click="change">{{count}}</h2>
    </div>
</template>

<script>
export default{
    data(){
        return {
            msg:"are you ok",
            count:18
        }
    },
    methods:{
        change(){
            this.count+=2;
        }
    }
}
</script>

<style scoped lang="scss">
    p{
        color:#afc;
        background:#999;
    }
</style>
