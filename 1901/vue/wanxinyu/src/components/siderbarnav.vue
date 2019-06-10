<template>
    <ul class="siderbarnav">
        <li v-for="(goodtype,i) in goodtypes" :key="i" @click="changeins(i)" :class="{active:i==ins}">{{goodtype.text}}</li>
    </ul>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState(['goodtypes','ins'])
    },
    methods:{
        ...mapActions(['getGoodTypesAJAX','changeins'])
    },
    mounted(){
        this.getGoodTypesAJAX({
            url:"/vue/getGoodTypes",
            cb:()=>{

            }
        })
    }
     
}
</script>
<style>
.siderbarnav{
    height: 100%;
    width: 20%;
    float: left;
    border-right: 2px solid #B1B1B1;
}
.siderbarnav li{
    width: 100%;
    border-left: .1rem solid  #fff;
    box-sizing: border-box;
    height: 1rem;
    font-size: .32rem;
    line-height: 1rem;
     text-indent: .26rem;
     color: #222222 
}
.siderbarnav li.active{
    border-left: .1rem solid #EFB31F ;
    color: #EFB31F 
}
</style>
