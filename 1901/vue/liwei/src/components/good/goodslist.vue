<template>
    <div class="goodslist">
        <ul>
            <li v-for="(value,index) in goodslist" :key="index">
                <GoodItem :goodinfo="value" :xuantwo="xuan"></GoodItem>
            </li>
        </ul>
    </div>
</template>

<script>

import GoodItem from "./gooditem" 

export default {
    props:{
        goodslist:Array,
        xuan:{
            type:null,
            default:1
        }
    },
    data(){
        return {

        }
    },
    components:{
        GoodItem
    },
    mounted(){
        
    }

}
</script>

<style scoped lang="scss">
    ul{
        width: 100%;
        overflow: hidden;
        li{
            width: 50%;
            height: 5rem;
            float: left;
        }
    }
</style>


