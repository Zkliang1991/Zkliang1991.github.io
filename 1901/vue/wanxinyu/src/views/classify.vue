<template>
    <div>
        <Head title="分类" :show="!!1" ></Head>
        <div class="classtify">
            <siderbarnav></siderbarnav>
            <classtifycontent></classtifycontent>
        </div>     
    </div>
</template>

<script>
import { http } from "../utils";
import siderbarnav from '../components/siderbarnav'
import classtifycontent from '../components/classtifycontent'
export default {
    data(){
        return{

        }
    },
    components:{
        siderbarnav,
        classtifycontent
    }
}
</script>

<style scoped>
.classtify{
    margin-top:0.82rem;
    width: 100%;
    height: 100%;
    border-top: 2px solid #B1B1B1;
}
</style>

