<template>
    <div>
        <Head title="分类" :show="!!1" ></Head>
        <div class="good-box" v-if="show">
            <mt-navbar v-model="selected">
                <mt-tab-item :id="type.value" v-for="(type,i) in goodtypes" :key="i">{{type.text}}</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item :id="type.value" v-for="(type,i) in goodtypes" :key="i">
                    <Goodlist :type="type" :goodLists="goodLists"></Goodlist>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <img :src="require('../assets/shoucang.png')" class="shoucang" @click="goshopcar"> 
        <mt-badge size="small" type="error" class="shuzi">{{carnum}}</mt-badge>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import Goodlist from "../components/goodlist.vue"
export default {
    data(){
        return{
            selected:"shirt",
            show:false,
        } 
    },
    computed:{
         ...mapState(['goodtypes','goodLists','carnum']),
    },
    methods:{
        ...mapActions(['getGoodTypesAJAX','getGoodlistsAJAX']),
        goshopcar(){
            this.$router.push({name:"car"})
        }
    },
    mounted(){
        this.getGoodTypesAJAX({
            url:"/vue/getGoodTypes",
            cb:()=>{

            }
        })
        this.getGoodlistsAJAX({
            url:"/vue/getGoodlists",
            cb:()=>{
                this.show=true;
            }
        })
    },
    components:{
        Goodlist
    }
}
</script>

<style scoped>
.good-box{
    margin-top:0.83rem;
}

.shoucang{
    position: fixed;
    top: 10.8rem;
    left: -0.4rem;
}

.shuzi{
    position: fixed;
    top: 10.8rem;
    left: 0.25rem;
}
</style>
