<template>
    <div>
        <h3>很明显，这是一个demo</h3>
        <h3>{{count}} --{{msg}}</h3>
       <h2 @click="change">count==== {{count}}</h2>

    </div>
</template>
<script>
export default {
    data(){
        return{
            count:1997,
            msg:"当时只道是平常"
        }
    },
    methods:{
        change(){
            this.count++
        }
    }
}
</script>
