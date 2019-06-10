<template>
    <div>
         <mt-cell v-for="n in 11" :title="'内容 ' + n" />
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"内容"
        }
    }
}
</script>
