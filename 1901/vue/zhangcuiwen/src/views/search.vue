<template>
    <div>
        <van-search v-model="value" placeholder="请输入搜索关键词"
  show-action shape="round">
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>
        <ul>
            <li>count--{{count}}</li>
            <li>count--{{count4}}</li>
            <li>count2--{{count2}}</li>
            <li>count+25--{{count1}}</li>
            <button @click="add1">add count</button>
            <button @click="serccount(6)">serc count</button>
            <button @click="serccount2(55)">serc count2</button>
        </ul>
    </div>

</template>
<script>
import store from "@/store"
import {mapState,mapActions,mapGetters}  from "vuex"
export default {
    data(){
        return{
            count:store.state.count,
            count1:this.$store.state.count+25,
            value:""
        }
    },
    computed:
        {
            ...mapState([
            'count',//映射this.count  为store.state.count
            'msg'
        ]),
         ...mapState(
             { count2:'count',count:"msg"}
         )
        }
        // mapState({
        //     count4:state=>state.msg,
        //     count2:'count'
        // })
        // count4(){
        //     return this.$store.state.msg
        // },
        // count2(){
        //      return store.state.count
        // }
    ,
    methods:{
        // onSearch(){
        //      alert(this.value)
        // },
    //     ...mapActions({add1:"addcount"}),
    //    ...mapActions(["serccount",'serccount2']),
        // add1(){
        //     this.$store.dispatch("addcount")
        // },
        // serc1(){
        //     this.$store.dispatch("serccount",1245454)
        // },
        //   serc2(){
        //     this.$store.dispatch("serccount2",666)
        // }
    }
}
</script>
