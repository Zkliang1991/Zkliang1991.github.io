<template>
    <div>
        <Head title="首页" ></Head>       
        <h2> home - home - home </h2>
        <h2> vue -  武汉1901 </h2>
        <mt-button type="default">default</mt-button>
        <mt-button type="primary" @click="getDemo">获取 demo </mt-button>
        <mt-button type="danger">danger</mt-button>
        <mt-button size="small" type="danger">small</mt-button>
        <mt-button size="large" type="danger">large</mt-button>
        <mt-button size="normal" type="danger">normal</mt-button>
        <Demo></Demo>
    </div>
</template>

<script>
import Demo from "../components/demo.vue"
export default {
    components:{
        Demo
    },
    methods:{
        getDemo(){
            this.$axios.get("/vue/demo")
            .then(res=>{
                console.log(res.data);
            })
        }
    }
}
</script>

