<template>
    <div>
        <Head title="购物车" :show="true" ></Head>   
        <h2> 购物车 - cart </h2>
        <h2> vuex - demo </h2>
        <h2> count=== {{count_1}} -  {{count_2}} -- {{count_3}}  -- {{count}} </h2>
        <h2> city == {{city_1}}  -- {{city}}</h2>
        <h2> msg == {{msg_1}}  -- {{msg}}</h2>
        <h2> {{nCity.city}}</h2>
        <hr>
        <mt-button type="danger" @click="count_add"> count add </mt-button>
        <mt-button type="primary" @click="count_desc(100)" > count desc 10 </mt-button>
        <mt-button type="danger" @click="carNumAdd(6)"> car + 6 </mt-button>
        <mt-button type="primary" @click="carNumDesc(3)" > car -  3 </mt-button>
        <mt-button type="primary" @click="carNumReduce(4)" > mutations car +  4*2  </mt-button>
        <mt-button type="danger" @click="changeCity('深圳~shenzheng')" > 写一下你最想去上班的城市  </mt-button>
        <mt-button type="danger" @click="changeNcity('马尼拉')" > module - city - 马尼拉  </mt-button>
        <p><input type="text" ref="one" placeholder="请输入" @input="getMsg"></p>
    </div>
</template>

<script>
import store from "@/store";
import {mapState,mapActions,mapMutations} from "vuex";

export default {
    data(){
        return {
            count_1:store.state.count,
            count_2:this.$store.state.count + 100
        }
    },
    computed:{
        myData(){
            return "xxxx"
        },
        ...mapState({   // 把 store.state 值当做 参数注入 
            count_3:state=>state.count ,  //  (state)=>{ return state.count }
            city_1:'city',  // 传字符串参数 'count' 等同于 `state => state.city`
            msg_1(state){
                return state.msg;
            }
        }),
        ...mapState([
            'count',  // 映射 this.count 为 store.state.count
            'city',  // this.city = store.state.city
            'msg',
            'nCity'
        ])
    },
    // computed:{
    //     count_3(){
    //         return this.$store.state.count
    //     },
    //     city_1(){
    //         return this.$store.state.city
    //     },
    //     msg_1(){
    //         return this.$store.state.msg;
    //     }
    // },
    methods:{
        ...mapActions({
            count_desc:'countDesc',   // this.$store.dispatch("countDesc",10);
            count_add:'countAdd'  // 将 `this.count_add()` 映射为 `this.$store.dispatch('countAdd')`
        }),
        ...mapActions([
            'carNumAdd',  // this.carNumAdd  映射     this.$store.dispatch("carNumAdd",4)
            'carNumDesc',
            'changeCity',
            'changeMsg',
            'changeNcity'
        ]),
        // ...mapMutations([
        //     'carNumReduce'
        // ]),
        carNumReduce(){
            console.log(this.$store);
            this.$store.commit("carNumReduce",4)
        },
        // count_add(){
        //     // 进入 store action 
        //     console.log(this.$store);
        //     // this.$store.dispatch("action-type")   dispatch  派发 action 
        //     this.$store.dispatch("countAdd");
        // },
        // count_desc(){
        //     this.$store.dispatch("countDesc",10);
        // },
        // carNumAdd(){
        //     this.$store.dispatch("carNumAdd",4)
        // },
        // carNumDesc(){
        //     this.$store.dispatch("carNumDesc",2)
        // },
        // changeCity(){
        //     this.$store.dispatch("changeCity","深圳~shenzheng");
        // },
        getMsg(){
            console.log(this.$refs.one.value);
            // this.$store.dispatch("changeMsg",this.$refs.one.value);
            this.changeMsg(this.$refs.one.value);
        }
    }
}
</script>
