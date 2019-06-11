<template>
    <div>
        <Head title="搜索" :show="!!1"></Head>
        <mt-search v-model="keyword">
            <mt-cell
                v-for="(item,i) in result"
                :title="item.title"
                :value="item.value"
                :key="i"
            >
            </mt-cell>
        </mt-search>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value:"",
            result:[1,2,3,4]
        }
    }
}
</script>
