<template>
  <mt-header fixed :title="title" class="top-head">
      <i class="iconfont" slot="left" v-html="icon.left" @click="goperson"></i>
      <i class="iconfont" slot="right" v-html="icon.right" @click="gosearch"></i>
  </mt-header>
</template>

<script>
import {mapState} from 'vuex'
export default {
    porps:["tit"],
    data() {
        return {
            
            icon:{
                left:'&#xe680;',
                right:'&#xe653;'
            }
        }
    },methods: {
        gosearch(){
            this.$router.push({name:'search'})
        },
        goperson(){
            this.$store.state.ismusicPlay = !this.$store.state.ismusicPlay
        }
    },
    computed: {
        ...mapState(["title"])
    },
    
};
</script>
