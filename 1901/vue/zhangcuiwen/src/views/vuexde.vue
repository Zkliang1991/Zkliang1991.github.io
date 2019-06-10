<template>
    <div>
        <h3>{{this.$store.state.demo1}}</h3>
        <button @click="add">使劲加</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            demo1:this.$store.state.demo1
        }
    },
    add(){
        store.commit("add")
    }
}
</script>
