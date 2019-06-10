
<template>
    <div>
         <Head title="搜索" :show="true"></Head>
        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            :show-action ="true"
            shape="round"
            @search="onSearch"
            >
            <div slot="action" @click="onSearch">搜索</div>
            </van-search>
    </div>
</template>


<script>
export default {
     data(){
        return {
            value:"",
           
        }
    },
    methods:{
        onSearch(){
            console.log(this.value)
        }
    }

}   
</script>
