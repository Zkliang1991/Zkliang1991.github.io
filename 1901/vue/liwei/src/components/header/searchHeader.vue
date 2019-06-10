<template>
    <div class="searchHeader">
        <form action="/">
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch"
                @cancel="onCancel"
            />
        </form>
    </div>
</template>

<script>
import Vue from 'vue'
import { Search } from 'vant';
Vue.use(Search);
import {mapState} from 'vuex'

export default {
    data(){
        return {
            value:""
        }
    },
    computed:{
        ...mapState([
            'idnexhccm'
        ])
            
    },
    methods:{
        onSearch(){
            let str = this.value
            let obj = {
                searchstr:str,
                routerAcitive:this.idnexhccm.selected
            }
            this.$store.dispatch('searchGo',obj)
        },
        onCancel(){
            this.$router.back()
        }
    }
}
</script>

<style>

</style>


