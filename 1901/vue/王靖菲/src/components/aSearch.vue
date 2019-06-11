<template>
    <div class="srh">
       <form action="/" @click="appear">
            <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @search="onSearch"
            
            :background="color"
            disabled="true"
            >
            <div slot="action" @click="onSearch">
                <van-icon name="comment-o" @click="talk" size="0.5rem" color="white" />
            </div>
            </van-search>
        </form>
        <div class="shadow" :class="status">
            <router-view></router-view>
            <Search></Search>
        </div>
    </div>
</template>

<script>
import Search from "@/components/search.vue"
export default {
    computed:{
        status(){
            return this.$store.state.name
        },
        color(){
            return this.$store.state.color
        }
    },
    methods:{
        appear(){
            this.$store.dispatch("appear","show")
        },
        onSearch(){

        },
        talk(){
            alert("p")
        }
    },
    // mounted(){
    //     this.$store.dispatch("changColor","")
    // },
    data(){
        return {
            value:""
        }
    },
    components:{
        Search
    }
}
</script>

<style lang="scss" scoped>
.show{
    display:block;
}
.unshow{
    display:none;
}
.shadow{
    position: fixed;
    top: 0; left: 0; width: 100%; height: 13.34rem;;
    background-color:white; z-index: 100000000000
}
.van-icon{
    margin-top:0.2rem;
}
</style>
